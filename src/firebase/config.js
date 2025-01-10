import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCufA21o-zbpq2NbcHY5P716Hzlc6hCbTg",
  authDomain: "chat-d3c9c.firebaseapp.com",
  projectId: "chat-d3c9c",
  storageBucket: "chat-d3c9c.firebasestorage.app",
  messagingSenderId: "697721229962",
  appId: "1:697721229962:web:4d5858bc99708d63d45373",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
