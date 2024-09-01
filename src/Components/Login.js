import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true);
 const handleButtonClick = () => {
 }
 const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
 }
  return (
    <div >
        <Header />
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg' alt='Background Image'/>
        </div>
        <form className='w-3/12 absolute p-12 bg-black  bg-blend-soft-light bg-opacity-80 rounded my-36 mx-auto right-0 left-0'>
            <h1 className='text-3xl font-bold py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input type='text' placeholder='Full Name' className='w-full px-4 py-3 my-4 bg-zinc-900 border border-white rounded text-white'/>}
            <input type='email' placeholder='Email' className='w-full px-4 py-3 my-4 bg-zinc-900 border border-white rounded text-white'/>
            
            <input type='password' placeholder='Password' className='w-full px-4 py-3 my-4 bg-zinc-900 border border-white rounded text-white'/>
            <button onSubmit={(e) => e.preventDefault()} className='w-full px-4 py-3 my-6 bg-red-600 text-white rounded' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>
            <h3 className='text-white'>Forgot Password?</h3>
            <p className='text-white py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login