import React from "react";
import { Link } from "react-router-dom";

function Cards({ data, title }) {
  console.log(data);
  
  return (
    <div className="flex flex-wrap gap-10 "> 
      {data.map((item, index) => {
       return <Link to={`/${data.media_type || title}/details/${item.id}`} key={index} className="w-[25vh]">
          <img
            className="w-[full] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[40vh]"
            src={`https://image.tmdb.org/t/p/original//${
              item.backdrop_path || item.poster_path
            }`}
            alt=""
          />
          <h1 className="text-zinc-400 mt-1 font-semibold">
          {item.original_name || item.name || item.title || item.original_title}
          </h1>
        </Link>;
      })}
    </div>
  );
}

export default Cards;
