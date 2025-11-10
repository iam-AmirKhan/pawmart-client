// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAA3iSvPTh4SIe-z87GG-Rd8z0hgs9cUms",
  authDomain: "pawmart--pets.firebaseapp.com",
  projectId: "pawmart--pets",
  storageBucket: "pawmart--pets.firebasestorage.app",
  messagingSenderId: "31645071331",
  appId: "1:31645071331:web:e6d6e06bc220129ea412d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);