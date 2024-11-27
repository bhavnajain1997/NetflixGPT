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
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
      movie
      +"&include_adult=false&language=en-US&page=1", API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  }
   

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
    <div className='pt-[10%] flex justify-center shadow '>
        <form className='px-6 w-1/2  bg-black  grid grid-cols-12' onSubmit={(e)=> e.preventDefault()}>
            <input ref={searchText} type='text' className='p-4 m-4 col-span-9 border border-black rounded' size={50} placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-4 px-8 m-4 col-span-3 font-bold bg-red-700 rounded text-white' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar