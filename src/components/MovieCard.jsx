import { TMDB_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="shrink-0 ">
      <img src={TMDB_IMG_CDN_URL + posterPath} alt="movie poster" />
    </div>
  );
};

export default MovieCard;
