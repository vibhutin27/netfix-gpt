import React, { useRef, useState } from 'react'
import Header from './Header'
import {checkValidateData, } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';



const Login = () => {

  
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidateData(email.current.value, password.current.value) 
    setErrorMessage(message);
    if (message ) return; 
    if (!isSignInForm){
      //sign up logic
      createUserWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
        )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...Use looged in and navigate to browse page 
        navigate("/browse");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-" + errorMessage);
        // ..
      });

    }else {
      //sign in logic
      signInWithEmailAndPassword(
        auth, 
        email.current.value, 
        password.current.value
        )
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // 
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        setErrorMessage(errorCode+ "-"+ errorMessage);
      });
    }
  }

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backgroundimage"/>
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80' >
        <h1 className='ml-2 font-bold text-2xl text-white'>
          {isSignInForm ? "Sign IN" : "Sign UP" }
          </h1>

        <input 
          type="text" 
          placeholder='Email Address' 
          ref={email} 
          className='p-2 m-2 w-full bg-gray-700 rounded-lg'
        />
        {!isSignInForm && 
          <input type="text" 
          placeholder='Full Name' 
          className='p-2 m-2 w-full bg-gray-700 rounded-lg'
          />
        }
        <input 
          ref={password}
          type="password"  
          placeholder='Password' 
          className='p-2 m-2 w-full bg-gray-700 rounded-lg'
        />
        <p className='text-red-500'>{ errorMessage }</p>
        <button className='ml-2 py-2 my-4 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>
          {isSignInForm ? "Sign IN" : "Sign UP" }
          </button>
        <p className='flex ml-2 py-6 cursor-pointer w-full' onClick={ toggleSignInForm }>{isSignInForm && <div>New to Netflix?&nbsp; </div>} {isSignInForm ? <div className='hover: text-red-700 hover:underline'>  Sign Up Now </div> : "Already Ragisterd? SignIN Now" } </p>
      </form>
    </div>
  )
}

export default Login