import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser ,removeUser} from '../utils/userSlice';
import { useEffect } from 'react';
import { LOGO } from '../utils/constants';
// import GPTSearch from './GPTSearch';
import { toggleGptSearchView } from '../utils/GPTSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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

  return (
  
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && <div className='flex gap-6'>
       {/* <img className='w-10 h-10' src='' alt='usericon'/> */}
       <button onClick={handleGPTSearchClick} className='font-bold text-white bg-purple-800 py-2 px-4 rounded-lg mx-4 mb-10'>GPT Search</button>
       <img className='w-10 h-10' src = {user.photoURL} alt='usericon'/>

       <button onClick={handleSignOut} className="font-bold text-white bg-red-600 py-2 px-4 mx-4 mb-10 rounded-lg"> Sign Out</button>
    </div>}
    </div>
    
    
  )
}

export default Header