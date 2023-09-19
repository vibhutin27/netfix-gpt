import React, { useEffect } from 'react'
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Browse from './Browse'
import Login from './Login'
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../utils/userSlice'

const Body = () => {
  const dispatch = useDispatch();
  

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ]);
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid, email, displayName, photoURL} = user.uid;
          // ...in above code we can fetch multiple data from the user whenever auth state change.
          dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL,}));
          


        } else {
          // wenever User is signed out we can dispatch another action, that is removeUser
          // ...
          dispatch(removeUser)

        }
      });
    },[]);
 

  return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body