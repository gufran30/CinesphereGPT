export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_BEARER_API_KEY,
  },
};

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const TMDB_SEARCH_MOVIE_API =
  "https://api.themoviedb.org/3/search/movie";

export const TMDB_NOW_PLAYING_API_URL =
  "https://api.themoviedb.org/3/movie/now_playing?page=1";

export const TMDB_POPULAR_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/popular";

export const TMDB_TOP_RATED_MOVIES_API_URL =
  "https://api.themoviedb.org/3/movie/top_rated";

export const trailerAPI = (movieId) => {
  const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos`;

  return videoUrl;
}

export const supportedlanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];
