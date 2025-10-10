import { useTrailerVideo } from "../hooks/useTrailerVideo";
import { useSelector } from "react-redux";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  // fetch movie Trailer
  useTrailerVideo(movieId);

  // A guard clause to prevent rendering a broken iframe before the key is fetched
  if (!trailerVideo) return;

  // Construct the YouTube URL with the necessary parameters
  const videoSrc = `https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo.key}&controls=0&rel=0&disablekb=1&vq=hd720`;

  return (
    <div className="w-screen h-screen overflow-hidden pt-[40%] sm:pt-[20%] md:pt-0  sm:p-0">
      <iframe
        className="w-screen aspect-video -mt-10"
        src={videoSrc}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
