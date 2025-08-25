// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const apiKey = import.meta.env.VITE_API_KEY_FIREBASE;

const firebaseConfig = {
    apiKey: apiKey,
    authDomain: "red-cross-project-685bb.firebaseapp.com",
    projectId: "red-cross-project-685bb",
    storageBucket: "red-cross-project-685bb.firebasestorage.app",
    messagingSenderId: "1080276730831",
    appId: "1:1080276730831:web:d93c2a8ec6e039670e08ba",
    measurementId: "G-PWF8L4KG23",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
