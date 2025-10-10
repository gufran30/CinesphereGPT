import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies && (
      <div className="px-10 -mt-70 md:-mt-40 text-white relative z-50 ">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular Movies"} movies={movies.popularMovies} />
        <MovieList title={"Top Rated Movies"} movies={movies.nowPlayingMovies} />
        {/* <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} /> */}
      </div>
    )
  );
};

export default SecondaryContainer;
