// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjAdyRPbdOBAZ216lYggba6m-ClO9dnGo",
  authDomain: "pathfinder-1-7694f.firebaseapp.com",
  projectId: "pathfinder-1-7694f",
  storageBucket: "pathfinder-1-7694f.firebasestorage.app",
  messagingSenderId: "36426177778",
  appId: "1:36426177778:web:5a29b74bee5d336ad0046b",
  measurementId: "G-HJHWQZ7NZ4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);