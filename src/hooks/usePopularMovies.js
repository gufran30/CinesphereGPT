import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_POPULAR_MOVIES_API_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector((store) => store.movie?.popularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(
      TMDB_POPULAR_MOVIES_API_URL,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovies && getPopularMovies();
  }, []);
};
