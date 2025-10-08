import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const fetchTrailerVideo = async () => {
    const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

    const data = await fetch(videoUrl, TMDB_API_OPTIONS);
    const json = await data.json();

    const filterDate = json.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = filterDate.length ? filterDate[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    fetchTrailerVideo();
  }, []);
};
