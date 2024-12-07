import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser ,removeUser} from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
// import GPTSearch from './GPTSearch';
import { toggleGptSearchView } from '../utils/GPTSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.GPT.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error");
    });
  };
  

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName, photoURL } = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL }))
          navigate("/browse")

        } else {
          dispatch(removeUser());
          navigate("/")

        }
      });
      // unsubscribe when component unmounts
      return () => unsubscribe();
},[])

const handleGPTSearchClick = () => {
  // Toggle my GPT Search Button
  dispatch(toggleGptSearchView())

}

const handleLanguageChange = (e) => {
  dispatch(changeLanguage(e.target.value));
}

  return (
  
    <div className="absolute w-screen md:px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col   md:flex-row  md:justify-between top-0 ">
      <img className="md:w-44 w-36  mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && <div className='flex justify-center gap-3 '>
       {/* <img className='w-10 h-10' src='' alt='usericon'/> */}
       { showGPTSearch && 
           <select className='mx-1 md:mx-4 md:mb-10 bg-black text-white text-sm px-3 md:text-lg' onChange={handleLanguageChange}>
           {SUPPORTED_LANGUAGES.map(lang=> <option className='bg-zinc-900 text-white text-sm px-3 md:text-lg' key = {lang.identifier}  value={lang.identifier}>{lang.name}</option> )}
           </select>
       }
       
       <button onClick={handleGPTSearchClick} className='font-bold text-white bg-purple-800 py-2 px-4 mx-1 md:mx-4  md:mb-10 text-sm px-3 md:text-lg'>{showGPTSearch ? "Homepage" : "GPT Search"}</button>
       <img className='hidden md:block w-10 h-9' src = {user.photoURL} alt='usericon'/>

       <button onClick={handleSignOut} className="font-bold text-white bg-red-600 py-2 md:px-4 mx-1 md:mx-4  md:mb-10 text-sm px-3 md:text-lg"> Sign Out</button>
    </div>}
    </div>
    
    
  )
}

export default Header