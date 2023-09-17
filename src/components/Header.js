import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import {  getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Header = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate('/');
    }).catch((error) => {
      // An error happened will redirec on the error page.
      navigate('/');
    });


  };
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