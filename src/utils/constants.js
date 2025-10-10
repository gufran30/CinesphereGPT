export const TMDB_API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: import.meta.env.VITE_TMDB_BEARER_API_KEY
  },
};

export const TMDB_IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const TMDB_SEARCH_MOVIE_API = "https://api.themoviedb.org/3/search/movie";

export const supportedlanguages = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

