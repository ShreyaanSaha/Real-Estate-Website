// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-website-e90dc.firebaseapp.com",
  projectId: "real-estate-website-e90dc",
  storageBucket: "real-estate-website-e90dc.appspot.com",
  messagingSenderId: "1075360036570",
  appId: "1:1075360036570:web:9f024f1633bbb02b3e97e3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);