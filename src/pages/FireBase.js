// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZuOlAQYQGRWbCWEAYPpp0tYvfRknJSxY",
  authDomain: "react-auth-with-firebase-55104.firebaseapp.com",
  projectId: "react-auth-with-firebase-55104",
  storageBucket: "react-auth-with-firebase-55104.firebasestorage.app",
  messagingSenderId: "424360639310",
  appId: "1:424360639310:web:41226468658d6522f73c1f",
  measurementId: "G-QPE1G3JXMZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth