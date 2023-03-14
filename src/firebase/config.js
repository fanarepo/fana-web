// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_Wk9Y2m4Qo-8YFXDEGGHA2Cuk0Q9jtl4",
  authDomain: "auth-test-4c0bd.firebaseapp.com",
  projectId: "auth-test-4c0bd",
  storageBucket: "auth-test-4c0bd.appspot.com",
  messagingSenderId: "581664885779",
  appId: "1:581664885779:web:cf54bebb28db0df02c43e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)
const provider= new GoogleAuthProvider(app)


export { db, auth, provider }