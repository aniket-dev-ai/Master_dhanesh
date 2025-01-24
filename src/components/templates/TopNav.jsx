import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../utils/axios";

function TopNav() {
  const [query, setquery] = useState("");
  const [searches, setsearches] = useState([]);
  const getSeachers = async () => {
    try {
      const d = await axios.get("/search/multi?query=" + query);
      // console.log(d);
      setsearches(d.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSeachers();
  }, [query]);

  return (
    <div className=" h-[10vh] relative flex justify-start ml-[12%] items-center ">
      <i className="text-zinc-400 text-lg  ri-search-2-line"></i>
      <input
        type="text"
        onChange={(e) => setquery(e.target.value)}
        value={query}
        placeholder="Search Anything"
        className="w-[50%] mx-6 p-2 text-zinc-200 outline-none border-none bg-transparent"
      />
      {query.length > 0 && (
        <i
          onClick={() => {
            setquery("");
          }}
          className="text-zinc-400  text-lg ri-close-fill"
        ></i>
      )}

      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[100%] left-[6%] overflow-auto text-sm ">
        {searches.length > 0 &&
          searches.map((item) => {
            return (
              <div key={item.id}>
                <Link className="p-6 flex justify-start  items-center w-[100%] border-b-2 border-zinc-50  text-zinc-500 duration-300  font-semibold hover:text-black hover:bg-zinc-300">
                  <img
                    className="h-[10vh] object-cover rounded mr-3 w-[10vh]"
                    src={ item.poster_path ||
                      item.profile_path ||
                      item.backdrop_path?`https://image.tmdb.org/t/p/original/${
                      item.poster_path ||
                      item.profile_path ||
                      item.backdrop_path
                    }`: "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"}
                    alt=""
                  />
                  <span>
                    {item.original_name ||
                      item.name ||
                      item.title ||
                      item.original_title}
                  </span>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TopNav;
