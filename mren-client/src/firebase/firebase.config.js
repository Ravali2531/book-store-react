// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDz6Emg_VJr-iLU7yh8a4yScLcCShYt_N0",
  authDomain: "mern-book-inventory-6af9a.firebaseapp.com",
  projectId: "mern-book-inventory-6af9a",
  storageBucket: "mern-book-inventory-6af9a.appspot.com",
  messagingSenderId: "286425148554",
  appId: "1:286425148554:web:e8ac8a673067087fce5173"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;