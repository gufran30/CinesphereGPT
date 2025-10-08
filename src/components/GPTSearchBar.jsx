import React from "react";
import lang from "../utils/languagesConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const currentLang = useSelector((store) => store.config.lang);
  // console.log(currentLang)

  return (
    <div className="pt-[13%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg p-1 shadow-2xl shadow-gray-800">
        <input
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
