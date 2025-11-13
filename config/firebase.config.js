// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "fastcash-3742f.firebaseapp.com",
  projectId: "fastcash-3742f",
  storageBucket: "fastcash-3742f.firebasestorage.app",
  messagingSenderId: "588251834057",
  appId: "1:588251834057:web:56206eff99ba3e9acc0f18"
};

// Initialize Firebase
const app = getApps().length == 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app);

export{db, storage};