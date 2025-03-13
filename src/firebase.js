// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9Qxl2IcmpbCQe8cZO4lkmwoU8g_4_ahE",
  authDomain: "mit-reactjs-course.firebaseapp.com",
  projectId: "mit-reactjs-course",
  storageBucket: "mit-reactjs-course.firebasestorage.app",
  messagingSenderId: "220791140980",
  appId: "1:220791140980:web:0eb022c5ce64154dc81721",
  measurementId: "G-WCZQ7VB8B4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);