import axios from "./utils/axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./templates/Loader";
import Cards from "./templates/Cards";
import DropDown from "./templates/DropDown";
import InfiniteScroll from "react-infinite-scroll-component";
import TopNav from "./templates/TopNav";

function Movie() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("top_rated");
  const [Movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovie = async () => {
    try {
      const response = await axios.get(`movie/${category}?page=${page}`);
      const data = response.data;

      if (data?.results?.length > 0) {
        setMovie((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching Movie data:", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setMovie([]);
    setHasMore(true);
    getMovie();
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
          <i className="ri-arrow-left-line"></i> Movies {category}
        </h1>
        <TopNav />
        <div className="flex items-center gap-10">
          <DropDown
            title={"Category"}
            option={["popular", "top_rated" , "now_playing", "upcoming"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>

      {/* Infinite Scroll Section */}
      <div id="scrollableDiv" className="mt-4 h-[80vh] overflow-auto">
        <InfiniteScroll
          dataLength={Movie.length}
          next={getMovie}
          hasMore={hasMore}
          loader={<Loader />}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p className="text-center text-gray-500">
              <b>No more results!</b>
            </p>
          }
        >
          {Movie.length > 0 ? (
            <Cards data={Movie} title={"movie"} />
          ) : (
            <p className="text-center text-gray-500">No results found</p>
          )}
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Movie;
