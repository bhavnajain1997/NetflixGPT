import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='pt-36 px-12 relative z-10 pointer-events-none'>
      <h1 className='font-bold text-6xl text-white'>{title}</h1>
      <p className='py-6 text-lg w-1/4 text-white'>{overview}</p>
      <div className=''>
        <button className='bg-gray-400 text-black text-bold p-4 px-12 text-xl rounded bg-opacity-50 mr-3' type='button'>⏯️ Play</button> 
        <button className='text-white text-bold bg-zinc-500 p-4 px-12 text-xl rounded bg-opacity-50 ml-3' type='button'>ℹ️ More Info</button>       
      </div>
    </div>
  )
}

export default VideoTitle