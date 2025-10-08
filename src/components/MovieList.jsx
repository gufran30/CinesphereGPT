import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="">
        <h1 className="text-2xl pt-10 pb-5 font-semibold">{title}</h1>
        <div className="flex gap-8 overflow-x-auto no-scrollbar">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
