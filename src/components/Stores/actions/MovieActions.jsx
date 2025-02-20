export { removemovie } from "../reducers/MovieSlice";
import { loadmovie } from "../reducers/MovieSlice";
import axios from "../../utils/axios";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const translations = await axios.get(`/movie/${id}/translations`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
 
    let theUltimateDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      translations: translations.data.translations.map((t)=> t.english_name ),
      videos: videos.data,
      watchProviders: watchProviders.data.results.IN,
    };
 
    // console.log(theUltimateDetails);
    dispatch(loadmovie(theUltimateDetails));
  
  } catch (error) { 
    console.log("Error: ", error);
  }
};
