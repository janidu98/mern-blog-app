// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-a40b1.firebaseapp.com",
  projectId: "mern-blog-a40b1",
  storageBucket: "mern-blog-a40b1.appspot.com",
  messagingSenderId: "930960412568",
  appId: "1:930960412568:web:3705bb3daa2ecee0aea5ed"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);