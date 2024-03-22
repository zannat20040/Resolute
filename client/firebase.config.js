// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRVOd_S8-zf05n-gluAznXak097iCBy9g",
  authDomain: "resolute-job-hema.firebaseapp.com",
  projectId: "resolute-job-hema",
  storageBucket: "resolute-job-hema.appspot.com",
  messagingSenderId: "466331898907",
  appId: "1:466331898907:web:4c4011d78ed36b74bb14be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app