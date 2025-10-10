import { useDispatch, useSelector } from "react-redux";
import { TMDB_API_OPTIONS, TMDB_TOP_RATED_MOVIES_API_URL } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(
      TMDB_TOP_RATED_MOVIES_API_URL,
      TMDB_API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRatedMovies && getTopRatedMovies();
  }, []);
};
