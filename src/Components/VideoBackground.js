import React from 'react';
import { useSelector } from 'react-redux';
import { useMovieTrailer } from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe 
      className='w-full h-[100%] absolute top-0 pointer-events-none'
       src={"https://www.youtube.com/embed/"+trailerVideo.key +"?&autoplay=1&mute=1"} 
       title="YouTube video player" 
       allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       referrerPolicy="strict-origin-when-cross-origin" 
       >
       </iframe>
    </div>
  )
}

export default VideoBackground