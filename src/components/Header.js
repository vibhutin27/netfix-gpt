import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {  getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';



const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      
     
    }).catch((error) => {
      // An error happened will redirec on the error page.
      navigate('/error');
    });
  };

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user.uid;
        // ...in above code we can fetch multiple data from the user whenever auth state change.
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
        navigate('/browse');
        
      } else {
        // wenever User is signed out we can dispatch another action, that is removeUser
        // ...
        dispatch(removeUser())
        navigate('/');

      }
    });

    //this will be called when component unmounts
    return () => unsubscribe();
  },[]);

  return (
    <div className='absolute w-screen px-24 py-6 bg-gradient-to-b from-black z-10 flex justfy-between'>
      <img 
      className='w-36'
      src="https://images.ctfassets.net/y2ske730sjqp/821Wg4N9hJD8vs5FBcCGg/9eaf66123397cc61be14e40174123c40/Vector__3_.svg?w=460" alt="logo" />

      <div className='flex'>
      <FontAwesomeIcon className="w-8" icon={icon({name: 'user-secret'})} /> 
      
      <button onClick={handleSignOut} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>  Sign Out</button>
      </div>
    </div>
    

  )
}

export default Header