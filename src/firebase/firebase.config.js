// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZSlZs-_ff0rUeExlhHde3Kf1zS8wQjEM",
  authDomain: "assignment-09-6c228.firebaseapp.com",
  projectId: "assignment-09-6c228",
  storageBucket: "assignment-09-6c228.appspot.com",
  messagingSenderId: "739648182774",
  appId: "1:739648182774:web:fa9f212c896c9a9f180fd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;