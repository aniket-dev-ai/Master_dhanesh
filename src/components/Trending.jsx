import React, { useEffect, useState } from "react";
import axios from "./utils/axios";
import TopNav from "./templates/TopNav";
import DropDown from "./templates/DropDown";
import { useNavigate } from "react-router-dom";
import Cards from "./templates/Cards";
import Loader from "./templates/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [trending, settrending] = useState([]);
  const [duration, setduration] = useState("day");
  const getTrending = async () => {
    try {
      const d = await axios.get("/trending/" + category + "/" + duration);
      settrending(d.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(trending);

  useEffect(() => {
    getTrending();
  }, [category, duration]);
  return (
    <div className="h-screen  w-full p-3 px-6 ">
      <div className="w-full h-[10vh] justify-between flex items-center">
        <h1
          className="text-zinc-400 hover:text-[#6556CF] cursor-pointer font-semibold"
          onClick={() => {
            navigate(-1);
          }}
        >
          <i className="ri-arrow-left-line "></i> Trending
        </h1>
        <TopNav />
        <div className="flex items-center gap-10 ">
          <DropDown
            title={"Category"}
            option={["tv", "movie", "all"]}
            func={(e) => setcategory(e.target.value)}
          />
          <DropDown
            title={"duration"}
            option={["day", "week"]}
            func={(e) => setduration(e.target.value)}
          />
        </div>
      </div>
      {trending.length > 0 ? (
        <div className="mt-4 flex justify-center h-[80vh] overflow-auto">
          <Cards data={trending} title={category} />
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Trending;
