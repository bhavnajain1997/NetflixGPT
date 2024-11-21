import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className='pt-[10%] flex justify-center shadow '>
        <form className='px-6 w-1/2  bg-black  grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9 border border-black rounded' size={50} placeholder={lang[langKey].gptSearchPlaceholder}/>
            <button className='py-4 px-8 m-4 col-span-3 font-bold bg-red-700 rounded text-white'>{lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GPTSearchBar