// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdiSBfdXNIUFxgibFUr7j2x7tpC4xs0iE",
  authDomain: "custom-gemini-b81c0.firebaseapp.com",
  projectId: "custom-gemini-b81c0",
  storageBucket: "custom-gemini-b81c0.appspot.com",
  messagingSenderId: "313613966445",
  appId: "1:313613966445:web:78bc060c15f2cdc9873364"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app)
export {auth}