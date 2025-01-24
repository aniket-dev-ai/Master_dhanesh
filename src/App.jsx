import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loader from "./components/templates/Loader";
import Trending from "./components/Trending";

function App() {
  return (
    <div className="w-screen bg-[#1F1E24] font-[cursive] h-screen flex ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
      </Routes>
    </div>
  );
}

export default App;
