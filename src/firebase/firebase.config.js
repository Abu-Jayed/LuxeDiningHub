// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_rzLLT7XEcjuKSpFasgbGJKqLvkvSe1g",
  authDomain: "hero-chef-a10.firebaseapp.com",
  projectId: "hero-chef-a10",
  storageBucket: "hero-chef-a10.appspot.com",
  messagingSenderId: "869534918415",
  appId: "1:869534918415:web:2fce6bb768f1b8e665807a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;