import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'; 
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDnfumt83G5oWd8svvnVpBrP5hw7uQvozk",
  authDomain: "makerly-e1dbb.firebaseapp.com",
  projectId: "makerly-e1dbb",
  storageBucket: "makerly-e1dbb.appspot.com",
  messagingSenderId: "702317962698",
  appId: "1:702317962698:web:cf0389f3c22c3ebc869b33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
