// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDBjcpGEV1s-R9QxDlf9vyP57wTWtivuoI",
  authDomain: "sign-in-8a5a3.firebaseapp.com",
  projectId: "sign-in-8a5a3",
  storageBucket: "sign-in-8a5a3.firebasestorage.app",
  messagingSenderId: "779585028630",
  appId: "1:779585028630:web:c0baf9bf2553590ce66b37",
  measurementId: "G-SEVN3R1E90"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
