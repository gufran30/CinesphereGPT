import React, { useRef } from "react";
import lang from "../utils/languagesConstants";
import { useDispatch, useSelector } from "react-redux";
import geminiApiCall from "../services/geminiAI";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const gptSearchInput = useRef(null);

  const currentLang = useSelector((store) => store.config.lang);

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`,
      TMDB_API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(gptSearchInput.current.value);

    // Make an API call to gemini API and get movie results

    const gptQuery = `Act as a movie recommendation system, you job is to provide 5 movies according to query  - ${gptSearchInput.current.value}. movies name should be separated with commas and don't provide any type of descriptions just give the movie name directly, like this example - Raone, Good will hunting, Pride and prejudice, etc`;

    const gptResponse = await geminiApiCall(gptQuery);

    if (!gptResponse) {
      //  TODO: Handle Error here
      return;
    }

    const gptSuggestedMovies = gptResponse?.split(", ");
    // ['Sense and Sensibility', 'Emma', 'North and South', 'Becoming Jane', 'Little Women', 'Bright Star', 'Atonement']

    console.log(gptSuggestedMovies);

    // for each movie, search via TMDB API

    const promiseArrayOfMoviesName = gptSuggestedMovies.map((movie) =>
      searchMovieTMDB(movie)
    );
    // will return promise,
    // like this: [Promise, Promise, Promise, Promise, Promise, Promise, Promise, Promise]

    const tmdbMovieResults = await Promise.all(promiseArrayOfMoviesName);

    console.log(tmdbMovieResults);

    dispatch(
      addGptMovieResults({
        movieNames: gptSuggestedMovies,
        movieResults: tmdbMovieResults,
      })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[13%] flex justify-center">
      <form
        onSubmit={handleFormSubmit}
        className="w-[90%] md:w-1/2 bg-black grid grid-cols-12 rounded-lg p-1 shadow-2xl shadow-gray-800"
      >
        <input
          ref={gptSearchInput}
          className="px-4 py-2 m-2 col-span-9 bg-white rounded-lg"
          type="text"
          placeholder={lang[currentLang].gptSearchPlaceholder}
        />
        <button className="px-4 py-2 m-2 bg-red-600 rounded-lg col-span-3 cursor-pointer text-white">
          {lang[currentLang].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
