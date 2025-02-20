import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loader from "./components/templates/Loader";
import Trending from "./components/Trending";
import Popular from "./components/Popular";
import Movie from "./components/Movie";
import Tv from "./components/Tv";
import People from "./components/People";
import MovieDetails from "./components/Details/MovieDetails";
import TvDetails from "./components/Details/TvDetails";
import PersonDetails from "./components/Details/PersonDetails";
import Trailer from "./components/templates/Trailer";

function App() {
  return (
    <div className="w-screen bg-[#1F1E24] font-[cursive] h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/Popular" element={<Popular />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/movie/details/:id" element={<MovieDetails />} />
        <Route path="/movie/details/:id/trailer" element={<Trailer />} />
        <Route path="/tv" element={<Tv />} />
        <Route path="/tv/details/:id" element={<TvDetails />} />
        <Route path="/tv/details/:id/trailer" element={<TvDetails />} />
        <Route path="/person" element={<People />} />
        <Route path="/person/details/:id" element={<PersonDetails />} />
        {/* <Route path="/trailer/details/:id" element={<PersonDetails />} /> */}
      </Routes>
    </div>
  );
}

export default App;
