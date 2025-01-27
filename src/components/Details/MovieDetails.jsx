import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { asyncLoadMovie } from "../Stores/actions/MovieActions";
import { useNavigate, useParams } from "react-router-dom";

const MovieDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
  }, []);
  return (
    <div className="w-full h-screen px-[6%]">
      <nav className="w-full">
        <i onClick={() => navigate(-1)} className="hover:text-[#6556CF] ri-arrow-left-line"></i>
      </nav>
    </div>
  );
};

export default MovieDetails;
