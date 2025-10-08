import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="text-white bg-gradient-to-r from-black
     absolute inset-0 h-screen "
    >
      <div className="w-1/4 min-w-[25rem] absolute left-[5%] top-[40%]">
        <div className="text-contents">
          <h1 className="text-3xl font-bold mb-3">{title}</h1>
          <p className="">{overview}</p>
        </div>
        <div className="buttons flex gap-5 mt-7 text-lg">
          <button className="cursor-pointer hover:bg-white/90 px-5 py-3 bg-white text-black  w-full rounded-sm font-semibold">
            Play
          </button>
          <button className="cursor-pointer hover:bg-white/20 px-5 py-3 bg-white/30   w-full rounded-sm font-semibold">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
