const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className="text-white bg-gradient-to-r from-black
     absolute inset-0 h-screen "
    >
      <div className="w-1/3 md:w-1/3 md:max-w-xl absolute left-[5%] top-[35%] md:top-[30%]">
        <div className="text-contents">
          <h1 className="text-lg md:text-3xl font-bold mb-3">{title}</h1>
          <p className="hidden md:block">{overview}</p>
        </div>
        <div className="buttons flex whitespace-nowrap gap-5 sm:mt-7 text-sm sm:text-lg">
          <button className="cursor-pointer hover:bg-white/90 px-5 py-2 bg-white/80 text-black min-w-[50%] md:w-full rounded-sm font-semibold">
            Play
          </button>
          <button className="hidden md:block cursor-pointer hover:bg-white/20 px-5 py-3 bg-white/30 w-full rounded-sm font-semibold">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
