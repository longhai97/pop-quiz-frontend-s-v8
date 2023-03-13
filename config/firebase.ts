// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "authentication-app-2f3bf.firebaseapp.com",
  projectId: "authentication-app-2f3bf",
  storageBucket: "authentication-app-2f3bf.appspot.com",
  messagingSenderId: "475662108086",
  appId: "1:475662108086:web:7edc47b5797115f3a2ed17"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
