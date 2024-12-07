import React from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import { useRef } from 'react';
import geminiai from '../utils/geminiai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/GPTSlice';

const GPTSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);

  // Search Movie in TMDB
  const searchMovieTMDB =  async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results)
    return json.results;
  };
   

  const handleGPTSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an API Call to GPT Api and get movies results
    const getQuery =  "Act as a Movie Recommendation system and suggest some movies for the query : " + 
    searchText.current.value + 
    ". only give me names of 5 movies, comma separated like the example result given ahead. Example results : Gadar, Sholay, Don, Om Shanti Om, Golmaal" ;
    const model = geminiai.getGenerativeModel({ model: "gemini-1.5-flash" });
    
    const prompt = getQuery;

    const result = await model.generateContent(prompt);
    if (!result) {
      // ToDo : Write Error Handling
    }
    // console.log(result.response.text().split(","));
    const gptMovies = result.response.text().split(",")
    console.log(gptMovies)
    // For Each Movie I will search TMDB API
    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie))
    const tmdbResults = await Promise.all(promiseArray)

    // console.log(tmdbResults);
    dispatch(addGptMovieResult({movieNames:gptMovies, movieResults: tmdbResults}));
  }

  return (
    <div className='md:pt-[10%] flex justify-center shadow '>
        <form className='md:px-6 px-1 md:w-1/2 w-[100%]  bg-black  grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type='text' className='md:p-4 p-2 md:m-4 m-2 col-span-9 text-[75%] md:text-[100%] border border-black rounded' size={50} placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='md:py-4 md:px-8 md:m-4 m-2 col-span-3 font-bold bg-red-700  text-[75%] md:text-[100%] rounded text-white' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar