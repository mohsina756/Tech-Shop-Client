// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXetZ-SMKR7oqhTaeSaAOiUkYeypqhHAQ",
  authDomain: "promotion-dept.firebaseapp.com",
  projectId: "promotion-dept",
  storageBucket: "promotion-dept.appspot.com",
  messagingSenderId: "166409592761",
  appId: "1:166409592761:web:a6f2eb242720eabcc0a068"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
