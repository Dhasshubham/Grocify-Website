// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8fYrkJY7jDJuG-wVwjigNOUU7AdzXXWU",
  authDomain: "grocify-web.firebaseapp.com",
  projectId: "grocify-web",
  storageBucket: "grocify-web.firebasestorage.app",
  messagingSenderId: "108393319577",
  appId: "1:108393319577:web:2c85de1498576c9cb6bc08",
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export{app, auth};
