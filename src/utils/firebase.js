// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzecStoucNyX82div3sqeKVv5QO2RKytI",
  authDomain: "netflixgpt-65ce0.firebaseapp.com",
  projectId: "netflixgpt-65ce0",
  storageBucket: "netflixgpt-65ce0.appspot.com",
  messagingSenderId: "253418281268",
  appId: "1:253418281268:web:004895589a5de1bebeed61",
  measurementId: "G-M67291E9K8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);