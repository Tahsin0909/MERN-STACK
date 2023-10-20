// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {  getAuth} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCi9bjMbA3ionn0Vh08nKDIXQvxxOvHh-Y",
    authDomain: "mern-project-8fe6a.firebaseapp.com",
    projectId: "mern-project-8fe6a",
    storageBucket: "mern-project-8fe6a.appspot.com",
    messagingSenderId: "921549579620",
    appId: "1:921549579620:web:acbe28419c8c6c0b1f0671"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;