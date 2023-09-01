import React, { useState } from 'react'
import Header from './Header'


const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="backgroundimage"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black mt-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
        <h1 className='ml-2 font-bold text-2xl text-white'>{isSignInForm ? "Sign IN" : "Sign UP" }</h1>
        <input type="text" placeholder='Email Address' className='p-2 m-2 w-full bg-gray-700 rounded-lg'/>
        {!isSignInForm && <input type="text" placeholder='Full Name' className='p-2 m-2 w-full bg-gray-700 rounded-lg'/>}
        <input type="password" placeholder='Password' className='p-2 m-2 w-full bg-gray-700 rounded-lg'/>
        <button className='ml-2 py-2 my-4 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign IN" : "Sign UP" }</button>
        <p className='flex ml-2 py-6 cursor-pointer w-full' onClick={ toggleSignInForm }>{isSignInForm && <div>New to Netflix?&nbsp; </div>} {isSignInForm ? <div className='hover: text-red-700 hover:underline'>  Sign Up Now </div> : "Already Ragisterd? SignIN Now" } </p>
      </form>
    </div>
  )
}

export default Login