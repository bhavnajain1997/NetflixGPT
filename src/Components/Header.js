import React from 'react';
import { auth } from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser ,removeUser} from '../utils/userSlice';
import { useEffect } from 'react';

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
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const {uid, email, displayName, photoURL } = user;
          dispatch(addUser({uid : uid, email : email, displayName : displayName, photoURL : photoURL }))
          navigate("/browse")

        } else {
          dispatch(removeUser());
          navigate("/")

        }
      });
},[])
  return (
  
    <div className = 'absolute w-screen z-10 px-8 py-2 bg-gradient-to-b from-black flex justify-between '>
        <img className='w-44' src='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='logo'/>
        {user && <div className='flex gap-6'>
       {/* <img className='w-10 h-10' src='https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e' alt='usericon'/> */}
       <img className='w-10 h-10' src = {user.photoURL} alt='usericon'/>

       <button onClick={handleSignOut} className="font-bold text-white bg-red-600 py-2 px-4 mx-4 mb-10 rounded-lg"> Sign Out</button>
    </div>}
    </div>
    
    
  )
}

export default Header