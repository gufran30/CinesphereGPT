import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) {
    // TODO: Error handle here
    return;
  }

  return (
    <div className="px-15 py-10 m-10 bg-black/70 text-white">
      {movieNames.map((movie, index) => (
        <MovieList
          key={movie}
          title={movieNames[index]}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GPTMovieSuggestions;
