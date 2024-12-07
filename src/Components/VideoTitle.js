const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] md:px-24 px-3 absolute text-white bg-gradient-to-r from-black">
      <h1 className=" text-xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block md:py-6 py-2 text-xs md:text-lg md:w-1/4">{overview}</p>
      <div className="md:my-4 my-2 md:m-0">
        <button className=" bg-white text-black font-bold  py-1 md:py-4 px-3 md:px-12 md:text-xl text-lg  rounded hover:bg-opacity-80">
           Play
        </button>
        <button className="hidden md:inline-block mx-2 font-bold bg-gray-500 text-white py-1 md:p-4 px-3 md:px-12 md:text-xl text-xs bg-opacity-50 rounded">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;