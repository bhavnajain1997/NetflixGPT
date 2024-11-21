import React from 'react'

const GPTSearchBar = () => {
  return (
    <div className='pt-[10%] flex justify-center shadow '>
        <form className='px-6 w-1/2  bg-black  grid grid-cols-12'>
            <input type='text' className='p-4 m-4 col-span-9 border border-black rounded' size={50} placeholder='What would you like to watch today?'/>
            <button className='py-4 px-8 m-4 col-span-3 font-bold bg-red-700 rounded text-white'>Search</button>
        </form>
    </div>
  )
}

export default GPTSearchBar