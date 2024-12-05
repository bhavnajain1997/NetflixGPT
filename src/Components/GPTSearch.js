import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestion from './GPTMovieSuggestion'
import { BG_IMG } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
       <div className='fixed -z-10 bg-gradient-to-r from-black'>
            <img className='h-screen object-cover md:h-[100%] ' src={BG_IMG} alt='background'/>
        </div>
        <div className='pt-[40%] md:pt-0'>
      {/* 
      - GPT Search Bar
      - GPT Movies Suggestion
      */}
     
      <GPTSearchBar/>
      <GPTMovieSuggestion/>
    </div>
    </div>
    
  )
}

export default GPTSearch