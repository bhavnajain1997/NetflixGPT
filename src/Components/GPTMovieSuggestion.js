import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from "./MovieList"

const GPTMovieSuggestion = () => {
  const {movieNames, movieResults} = useSelector((store) => store.GPT);
  if(!movieNames) return null;
  return (
    <div className="p-4 md:m-4 m-2 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
}

export default GPTMovieSuggestion