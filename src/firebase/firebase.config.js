// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  // apiKey: "AIzaSyAikLFyu4V6Z3a3Z_KSKqmbB3-jUuE6eAM",
  // authDomain: "react-dragon-news-auth-bc366.firebaseapp.com",
  // projectId: "react-dragon-news-auth-bc366",
  // storageBucket: "react-dragon-news-auth-bc366.appspot.com",
  // messagingSenderId: "81359806022",
  // appId: "1:81359806022:web:8398b4f3e5c5df46f23447"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;