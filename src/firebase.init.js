// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBnDopFLlDCnFGKB8TT1otOn7aMdKesdDo",
  authDomain: "ema-john-simple-2d8cd.firebaseapp.com",
  projectId: "ema-john-simple-2d8cd",
  storageBucket: "ema-john-simple-2d8cd.appspot.com",
  messagingSenderId: "73520845445",
  appId: "1:73520845445:web:c5731f6ecfc8a27e7b0fec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;