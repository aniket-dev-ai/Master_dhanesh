import React from "react";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-200 p-5">
      <h1 className="text-lg text-white font-bold">
        <i class="text-[#6556CF] text-lg ri-tv-fill mr-2"></i>
        <span className="text-lg">MABAS</span>
      </h1>
      <nav className="flex flex-col  text-zinc-400 text-base">
        <h1 className="text-white font-semibold text-base mt-6 mb-3 ml-2">
          New Feeds
        </h1>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2    ri-fire-fill"></i> Trending
        </Link>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2  ri-bard-fill"></i> Popular
        </Link>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2  ri-movie-2-ai-fill"></i> Movies
        </Link>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2  ri-tv-2-fill"></i> Tv Shows
        </Link>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2  ri-team-fill"></i> People
        </Link>
        <hr className="border-none bg-zinc-400 h-[1px]" />
        <h1 className="text-white font-semibold text-base mt-6 mb-3">
          Website Information
        </h1>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2 ri-information-2-fill"></i> About MABAS
        </Link>
        <Link className="hover:bg-[#6556CF] hover:text-white rounded p-3 duration-300">
          <i class="mr-2 ri-phone-fill"></i> Contact
        </Link>
      </nav>
    </div>
  );
}

export default SideNav;
