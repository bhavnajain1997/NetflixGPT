import React from 'react'
import Header from './Header'
import  { useNowPlayingMovies }  from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../hooks/usePopularMovies.js';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies.js';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies.js';

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
            MainContainer
            - VideoBackground
            - VideoTitle

            SecondaryContainer

            - Movielist * n
             - MovieCard * n
             
      */}
    </div>
  )
}

export default Browse