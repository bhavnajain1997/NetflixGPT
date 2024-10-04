// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzJ3QqH-2PZ4EPSmnM-_EzsyoarAofxwI",
  authDomain: "netflixgpt-e3a40.firebaseapp.com",
  projectId: "netflixgpt-e3a40",
  storageBucket: "netflixgpt-e3a40.appspot.com",
  messagingSenderId: "377242303346",
  appId: "1:377242303346:web:942939e821da4d52827beb",
  measurementId: "G-89QVPD7KJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

