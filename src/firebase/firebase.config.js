// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrqvPqtF2BzFGMBjPGGV5ySIwAwZooMAU",
    authDomain: "the-dragon-news-4ab62.firebaseapp.com",
    projectId: "the-dragon-news-4ab62",
    storageBucket: "the-dragon-news-4ab62.appspot.com",
    messagingSenderId: "74770175030",
    appId: "1:74770175030:web:705cd775d73669fe057497"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;