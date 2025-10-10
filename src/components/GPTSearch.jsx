import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import bgBanner from "/images/bg-img.png";

const GPTSearch = () => {
  return (
    <div>
      <div className="bg-container -z-10 fixed inset-0 w-full h-full before:content-[''] before:bg-black/50 before:absolute before:inset-0">
        <img
          className="w-full h-full object-cover"
          src={bgBanner}
          alt="Background Image"
        />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
