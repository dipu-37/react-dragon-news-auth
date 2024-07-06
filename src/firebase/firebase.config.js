// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2MH2AJ0WOnO0aG5bAahmKUL0D8KFcDXw",
  authDomain: "react-dragon-news-auth-f9d45.firebaseapp.com",
  projectId: "react-dragon-news-auth-f9d45",
  storageBucket: "react-dragon-news-auth-f9d45.appspot.com",
  messagingSenderId: "594762174789",
  appId: "1:594762174789:web:94899c8ee7d5327794ae2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;