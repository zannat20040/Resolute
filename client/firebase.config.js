// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU8mBae5csTqsH-xjgCWCDPUeDZ0LUK-E",
  authDomain: "fhdhdh.firebaseapp.com",
  projectId: "fhdhdh",
  storageBucket: "fhdhdh.appspot.com",
  messagingSenderId: "893996134309",
  appId: "1:893996134309:web:35b3be9c140d9ef275c24c",
  measurementId: "G-KPSXJL99W7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app