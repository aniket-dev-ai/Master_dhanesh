import React from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function HorizontalCards({ data , func }) {
  return (
    <div className="w-full h-[40vh] text-white p-3 pt-0">
      
      <div className="w-full  overflow-x-auto flex pb-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[18%]  min-h-full mr-2 bg-zinc-900  rounded-md"
          >
            <img
              className="w-full h-[55%] object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/original//${
                item.backdrop_path || item.poster_path
              }`}
              alt=""
            />
            <div className="p-1 pb-3">
              <h1 className="text-sm my-3">
                {item.original_name ||
                  item.name ||
                  item.title ||
                  item.original_title}
              </h1>
              <h1 className="w-full text-white text-xs">
                {item.overview.slice(0, 50)}....{" "}
                <Link className="text-zinc-700">More</Link>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HorizontalCards;
