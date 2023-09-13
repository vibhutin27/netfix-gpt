// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVWnM5-Pr-MH8gq4PeXLg4OHKQvBu6TcY",
  authDomain: "netflixgpt-d140e.firebaseapp.com",
  projectId: "netflixgpt-d140e",
  storageBucket: "netflixgpt-d140e.appspot.com",
  messagingSenderId: "345544287743",
  appId: "1:345544287743:web:e2111555adff80f90473ca",
  measurementId: "G-N8QKPB58ZX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);