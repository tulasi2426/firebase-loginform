// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiB8lyY6zPGJIipCXhjYrm-OxXRW_hdMg",
  authDomain: "gentle-post-324310.firebaseapp.com",
  projectId: "gentle-post-324310",
  storageBucket: "gentle-post-324310.appspot.com",
  messagingSenderId: "375864881357",
  appId: "1:375864881357:web:57827d2fd291f6c04c7984",
  measurementId: "G-7X0BNKSYDP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app,auth}