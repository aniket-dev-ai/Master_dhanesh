import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie } from "../Stores/actions/MovieActions";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../templates/Loader";
import HorizontalCards from "../templates/HorizontalCards";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { info } = useSelector((state) => state.movie);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(asyncLoadMovie(id));
    }
  }, [id, dispatch]);

  return info ? (
    <div
      style={{
        background: info.detail?.backdrop_path
          ? `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`
          : "black",
        backgroundPosition: "top 20%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-screen px-[6%]"
    >
      <nav className="w-full text-zinc-300 flex justify-between items-center py-4">
        <i
          onClick={() => navigate(-1)}
          className="hover:text-[#6556CF] ri-arrow-left-line cursor-pointer text-xl"
        ></i>

        <div className="flex space-x-4">
          {info.externalId?.wikidata_id && (
            <a
              href={`https://en.wikipedia.org/wiki/${info.externalId.wikidata_id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-earth-fill text-xl hover:text-[#6556CF]"></i>
            </a>
          )}
          {info.detail?.homepage && (
            <a
              href={info.detail.homepage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-external-link-fill text-xl hover:text-[#6556CF]"></i>
            </a>
          )}
          {info.externalId?.imdb_id && (
            <a
              href={`https://www.imdb.com/title/${info.externalId.imdb_id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6556CF]"
            >
              IMDb
            </a>
          )}
        </div>
      </nav>
      <div className="flex">
        <div className="w-full flex flex-col">
          <div className="w-full flex">
            <img
              className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[55vh] w-auto max-w-[250px] object-cover"
              src={`https://image.tmdb.org/t/p/original/${
                info.detail?.poster_path || info.detail?.backdrop_path
              }`}
              alt="Movie Poster"
            />
            <div className="w-[70%] ml-10">
              <h1 className="text-5xl text-zinc-300 font-bold text-left ml-3">
                {info.detail?.name ||
                  info.detail?.title ||
                  info.detail?.original_name ||
                  info.detail?.original_title}
                <small className="text-xl text-zinc-400 ml-3">
                  {info.detail?.release_date &&
                    `(${info.detail.release_date.split("-")[0]})`}
                </small>
              </h1>
              <div className="flex text-zinc-100 mt-5 ml-3 items-center gap-5 p-1">
                {info.detail?.vote_average && (
                  <div className="bg-yellow-600 text-white w-[6vh] h-[6vh] rounded-full flex items-center justify-center text-xl font-semibold">
                    {(info.detail.vote_average * 10).toFixed()}
                    <sup>%</sup>
                  </div>
                )}
                <h1>Rating:</h1>
                <h1>
                  {info.detail?.genres &&
                    info.detail.genres.map((c) => c.name).join(", ")}
                </h1>
                <h1>
                  {Math.floor(info.detail?.runtime / 60)}hr{" "}
                  {info.detail?.runtime % 60}min
                </h1>
              </div>
              <h1 className="text-lg font-semibold  italic text-zinc-200 ml-5">
                {info.detail?.tagline}
              </h1>
              <h1 className="text-2xl font-sans font-semibold text-zinc-200 mt-3 ml-4">
                Overview:
              </h1>
              <p className="text-xs text-zinc-200 ml-4 w-full p-1">
                {info.detail?.overview}
              </p>
              {info.translations && (
                <>
                  <h1 className="text-2xl font-sans font-semibold text-zinc-200 mt-3 ml-2">
                    Translations:
                  </h1>
                  <p className="text-xs text-zinc-200 ml-2 p-1">
                    {info.translations.join(", ")}
                  </p>
                </>
              )}
              <Link
                to={`${navigate.location?.pathname}/trailer`}
                className="text-white bg-[#6556CD] hover:bg-[#5246A3] transition-colors duration-200 px-2 py-1 rounded-sm text-lg font-semibold ml-2 inline-block mt-5"
              >
                <i className="ri-play-fill"></i> Play Trailer
              </Link>
            </div>
          </div>
          {["flatrate", "rent", "buy"].map((key) => (
            <div className="mt-4 flex text-white gap-10" key={key}>
              <h1 className="w-[13vw] capitalize">
                Available to {key === "flatrate" ? "Stream" : key} on:
              </h1>
              {info.watchProviders?.[key]?.map((provider) => (
                <img
                  key={provider.logo_path}
                  className="w-10 h-10 rounded-md"
                  src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                  alt={`${key} logo`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <HorizontalCards data={info.recommendation?info.recommendation:info.similiar} />
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default MovieDetails;
