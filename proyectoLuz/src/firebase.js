// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv8dLtfPSZLN8reupOqHYw-oD_BNI3vv4",
  authDomain: "proyectol-53068.firebaseapp.com",
  projectId: "proyectol-53068",
  storageBucket: "proyectol-53068.appspot.com",
  messagingSenderId: "1096288776123",
  appId: "1:1096288776123:web:4ffd647034a35cb0dc5e9e",
  measurementId: "G-29P7QH4LX4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);