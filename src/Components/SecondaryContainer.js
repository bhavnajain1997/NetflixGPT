import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector(store => store.movies)
  return movies.nowPlayingMovies && (
   <div className='bg-black md:pl-12 pl-5 md:pt-0 pt-[10%]'>
   <div className='md:-mt-44 relative'>
       <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies || []} />
   </div>
    <div className=''>
      {/* 
       MovieList - Popular Movies
          - Movie Card * N
       MovieList - NowPlaying Movies
          - Movie Card * N
       MovieList - Trending Movies
          - Movie Card * N
       MovieList - Upcoming Movies
          - Movie Card * N

      */}
      
      <MovieList title = {"Popular Movies"} movies = {movies.popularMovies}/>
      <MovieList title = {"Top Rated Movies"} movies = {movies.topRatedMovies}/>
      <MovieList title = {"Upcoming Movies"} movies = {movies.upComingMovies}/>
      <MovieList title = {"Horror Movies"} movies = {movies.nowPlayingMovies}/>


    </div>
    </div>
  )
}

export default SecondaryContainer