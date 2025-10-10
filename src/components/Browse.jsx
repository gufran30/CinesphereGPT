import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  // fetch now Playing Movies data
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <div>
        {showGPTSearch ? (
          <GPTSearch />
        ) : (
          <div className="bg-black">
            <MainContainer />
            <SecondaryContainer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Browse;
