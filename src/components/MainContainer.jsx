import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  console.log(movies);
  if (!movies) return; // this is known as Early Return

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { id, title, overview } = mainMovie;

  return (
    <div>
      <div className="w-full min-h-dvh bg-red-900">
        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id} />
      </div>
    </div>
  );
};

export default MainContainer;
