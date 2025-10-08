import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

export const useNowPlayingMovies = () => {
  // Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  // will call nowPlayingMovies only onse when browse component mount
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
