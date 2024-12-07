import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from "../utils/firebase";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG, USER_AVATAR } from '../utils/constants';

const Login = () => {
const [isSignInForm, setIsSignInForm] = useState(true);
const [errorMessage,setErrorMessage] = useState(true);
const name = useRef(null);
const email = useRef(null);
const password = useRef(null);
const dispatch = useDispatch();
 const handleButtonClick = () => {
  // validate the form data
  if(name == null){
    var message = checkValidData(email.current.value, password.current.value,name.current.value);

    setErrorMessage(message);
  }
  else{
    var  message = checkValidData(email.current.value,password.current.value);
    setErrorMessage(message)
  }
  
  if(message) return;

    // sign in / sign up

  if(!isSignInForm){
      // SignUp Logic
      createUserWithEmailAndPassword(auth, 
        email.current.value, 
        password.current.value
      )
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(auth.currentUser, {
      displayName: name.current.value , 
      photoURL:  USER_AVATAR 
    }).then(() => {
      const {uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL }))
    }).catch((error) => {
      setErrorMessage(error.message)
    });
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
    // ..
  });
   }
   else{
     // Sign In Logic
     signInWithEmailAndPassword(auth, 
      email.current.value,
       password.current.value)
     .then((userCredential) => {
       // Signed in 
       const user = userCredential.user;
       // ...
     })
     .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       setErrorMessage(errorCode + "-" + errorMessage)
     });

    
   }
  
  
 }
 const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm)
 }
  return (
    <div >
        <Header />
        <div className='fixed'>
            <img className=' h-screen object-cover md:h-[100%]' src= {BG_IMG}  alt='background'/>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className='w-[97%] md:w-3/12 absolute px-7 py-8 md:p-12 bg-black  bg-blend-soft-light bg-opacity-80 rounded my-28 md:my-36 mx-auto right-0 left-0'>
            <h1 className='text-2xl md:text-3xl font-bold py-2 md:py-4 text-white'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && <input ref={name} type='text' placeholder='Full Name' className='w-full px-4 py-3 my-4 bg-zinc-900 border border-white rounded text-white'/>}
            <input ref={email} type='email' placeholder='Email' className='w-full px-4 py-3 my-4 bg-zinc-900 border border-white rounded text-white'/>
            {/* <p className='text-red-600 '>{errorMessage}</p> */}
            <input ref={password} type='password' placeholder='Password' className='w-full px-4 py-3 my-4 bg-zinc-900 border border-white rounded text-white'/>
            <p className='text-red-600 font-bold py-2'>{errorMessage}</p>
            <button   className='w-full px-4 py-3 my-6 bg-red-600 text-white rounded' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"} </button>
            <h3 className='text-white text-xs md:text-lg'>Forgot Password?</h3>
            <p className='text-white py-4 cursor-pointer text-xs md:text-lg' onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login