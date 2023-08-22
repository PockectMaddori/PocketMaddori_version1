// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoi1Xwv0IWckxImQUTygK_Y8r4THhzAAM",
    authDomain: "pocketmaddori.firebaseapp.com",
    projectId: "pocketmaddori",
    storageBucket: "pocketmaddori.appspot.com",
    messagingSenderId: "784792625231",
    appId: "1:784792625231:web:bf306bc52138cb3bd14a3a",
    measurementId: "G-MF3DLTYGKT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getAnalytics(app);
