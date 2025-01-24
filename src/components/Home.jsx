import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import DropDown from "./templates/DropDown";
import Loader from "./templates/Loader";

function Home() {
  document.title = "MABAS | Home";
  const [walpaper, setwalpaper] = useState("");
  const [trending, settrending] = useState(null);
  const [category, setcategory] = useState("all");
  const getWalpaper = async () => {
    try {
      const d = await axios.get("/trending/all/day");
      let randata =
        d.data.results[Math.floor(Math.random() * d.data.results.length)];
      setwalpaper(randata);
    } catch (error) {
      console.log(error);
    }
  };
  const getTrending = async () => {
    try {
      const d = await axios.get("/trending/" + category + "/day");
      settrending(d.data.results);
      console.log(d.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(walpaper);

  useEffect(() => {
    !walpaper && getWalpaper();
    getTrending();
  }, [category]);
  return walpaper && trending ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto ">
        <TopNav />
        <Header walpaper={walpaper} />
        <div className="flex justify-between mt-2 px-10 py-6">
          <div>
            <h1 className="text-xl font-semibold   text-zinc-400 ">Trending</h1>
          </div>
          <DropDown
            title={"filter"}
            func={(e) => {
              setcategory(e.target.value);
            }}
            option={["tv", "movie", "all"]}
          />
        </div>
        <HorizontalCards data={trending} />
      </div>
    </>
  ) : (
    <Loader />
  );
}

export default Home;
