// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvJWm7Me5jqqztV_aVt73OgvWg6Tp8MrI",
  authDomain: "podcast-84a25.firebaseapp.com",
  databaseURL: "https://podcast-84a25-default-rtdb.firebaseio.com",
  projectId: "podcast-84a25",
  storageBucket: "podcast-84a25.appspot.com",
  messagingSenderId: "929393858016",
  appId: "1:929393858016:web:15900c6ea73c1ed9cf0785",
  measurementId: "G-W1N9P0EBRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);