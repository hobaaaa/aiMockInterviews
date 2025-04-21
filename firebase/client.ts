import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBI1PegEizKvFV-ocLeG3-hJtzuUU1Qf3k",
  authDomain: "interviewprep-91949.firebaseapp.com",
  projectId: "interviewprep-91949",
  storageBucket: "interviewprep-91949.firebasestorage.app",
  messagingSenderId: "761069724445",
  appId: "1:761069724445:web:eee69d49e12c0b478fb7f4",
  measurementId: "G-D8HN1HBJBF",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
