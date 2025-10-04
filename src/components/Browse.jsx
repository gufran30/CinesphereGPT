import Header from "./Header";

import { useNowPlayingMovies } from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  // fetch now Playing Movies data
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <div className="bg-green-400 ">
        {/* <h1>Browse</h1> */}
        <MainContainer />
        {/* <SecondaryContainer /> */}
      </div>
    </div>
  );
};

export default Browse;
