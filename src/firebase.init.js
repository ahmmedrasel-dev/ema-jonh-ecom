import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaT17YQKouGuoxxYj3vSgJ-JVnkmp06Wc",
  authDomain: "ema-john-364d6.firebaseapp.com",
  projectId: "ema-john-364d6",
  storageBucket: "ema-john-364d6.appspot.com",
  messagingSenderId: "1083640103198",
  appId: "1:1083640103198:web:2d5f5985c3b56d0873490f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;