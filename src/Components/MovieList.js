import React from 'react'
import MovieCard from './MovieCard';

const MovieList = ({title,movies}) => {
  return (
    <div className='md:px-6'>
               <h1 className='md:text-3xl text-lg py-4 text-white'>{title}</h1>

       <div className=' flex overflow-x-scroll [&::-webkit-scrollbar]:hidden'>
         <div className='flex gap-3  '>
          {movies?.map(movie =><MovieCard key={movie.id} posterPath={movie?.poster_path}/>
 )}

         </div>
       </div>
    </div>
  )
}

export default MovieList