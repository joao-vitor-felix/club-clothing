import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBumn98PKZwAvpeRHossFb-eotIeqyh9ps",
  authDomain: "club-e-commerce.firebaseapp.com",
  projectId: "club-e-commerce",
  storageBucket: "club-e-commerce.appspot.com",
  messagingSenderId: "603360256717",
  appId: "1:603360256717:web:54c5c387af0e221040ff84"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
