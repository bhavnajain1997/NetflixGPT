import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      {/* 
      - GPT Search Bar
      - GPT Movies Suggestion
      */}
      <div className='fixed -z-10 bg-gradient-to-r from-black'>
            <img src={BG_IMG} alt='background'/>
        </div>
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
  )
}

export default GPTSearch