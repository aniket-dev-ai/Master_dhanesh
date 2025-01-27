import axios from "./utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./templates/Loader";
import Cards from "./templates/Cards";
import DropDown from "./templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./templates/TopNav";

function Tv() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [Tv, setTv] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTv = async () => {
    try {
      const response = await axios.get(`tv/${category}?page=${page}`);
      const data = response.data;

      if (data?.results?.length > 0) {
        setTv((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching Tv data:", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setTv([]);
    setHasMore(true);
    getTv();
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);

  return (
    <div className="h-screen w-full p-3 px-6">
      {/* Header */}
      <div className="w-full h-[10vh] flex justify-between items-center">
        <h1
          className="text-zinc-400 hover:text-[#6556CF] cursor-pointer font-semibold"
          onClick={() => navigate(-1)}
        >
          <i className="ri-arrow-left-line"></i> Tv
        </h1>
        <TopNav />
        <div className="flex items-center gap-10">
          <DropDown
            title={"Category"}
            option={["on_the_air", "airing_today" , "popular", "top_rated"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div id="scrollableDiv" className="mt-4 h-[80vh] overflow-auto">
        <InfiniteScroll
          dataLength={Tv.length}
          next={getTv}
          hasMore={hasMore}
          loader={<Loader />}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p className="text-center text-gray-500">
              <b>No more results!</b>
            </p>
          }
        >
          {Tv.length > 0 ? (
            <Cards data={Tv} title={"tv"} />
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Tv;
