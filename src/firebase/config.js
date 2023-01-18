// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6LTYtHsq-EjgInAcyWEspkQGGf8wcGtA",
  authDomain: "my-react-app-coderhouse.firebaseapp.com",
  projectId: "my-react-app-coderhouse",
  storageBucket: "my-react-app-coderhouse.appspot.com",
  messagingSenderId: "818829136730",
  appId: "1:818829136730:web:44772f28372fceb4241963"
};

// Initialize Firebase
const fb = initializeApp(firebaseConfig);

const db = getFirestore(fb)

export { db };