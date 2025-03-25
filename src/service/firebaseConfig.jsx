// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCo7-StaeUkgL_0l4V2CS5LmaylmrjOfX0",
  authDomain: "voyageai-429a3.firebaseapp.com",
  projectId: "voyageai-429a3",
  storageBucket: "voyageai-429a3.firebasestorage.app",
  messagingSenderId: "575925919605",
  appId: "1:575925919605:web:122a80fa22c9a2c1ebfd3c",
  measurementId: "G-E551D9386M"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);