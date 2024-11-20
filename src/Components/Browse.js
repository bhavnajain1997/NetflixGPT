import React from 'react'
import Header from './Header'
import  { useNowPlayingMovies }  from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { usePopularMovies } from '../hooks/usePopularMovies.js';
import { useTopRatedMovies } from '../hooks/useTopRatedMovies.js';
import { useUpcomingMovies } from '../hooks/useUpcomingMovies.js';
import GPTSearch from './GPTSearch.js';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store.GPT.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  
  return (
    <div>
      <Header/>
      {
        showGptSearch ? (
          <GPTSearch/>
        ) : (
          <>
          <MainContainer/>
          <SecondaryContainer/>
          </> 
        )
      }
      
      
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