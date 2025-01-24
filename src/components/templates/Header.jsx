import React from "react";
import { Link } from "react-router-dom";

function Header({ walpaper }) {
  console.log(walpaper);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original//${
          walpaper.backdrop_path || walpaper.poster_path
        })`,
        backgroundPosition: "top 20%",
        backgroundSize: "cover",
        backgroundRepeat:"no-repeat"
      }}
      className="w-full  h-[50vh] flex flex-col justify-end p-[3%]"
    >
      <h1 className="w-[70%] text-2xl font-bold text-white my-1">
        {walpaper.name ||
          walpaper.title ||
          walpaper.original_name ||
          walpaper.original_title}
      </h1>
      <h1 className="w-[70%] text-white text-sm">
        {walpaper.overview.slice(0, 200)}....{" "}
        <Link className="text-blue-500">More</Link>
      </h1>
      <p className="text-white mt-2 flex text-sm gap-2 ">
        <i class="text-yellow-500  ri-megaphone-fill"></i>
        <span>{walpaper.release_date || "No Info"}</span>
        <i class="text-yellow-500  ml-10 ri-album-fill"></i>
        <span>{walpaper.media_type.toUpperCase() || "No Info"}</span>
      </p >
      <Link className="text-white bg-[#6556CF] p-2 px-1 text-sm  rounded mt-2 w-[12%] text-center">
      {""}
      Watch Trailer
      </Link>
    </div>
  );
}

export default Header;
