// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmAlJEkUSvwFVapFIp2Rl2Ab88cOcvwrg",
  authDomain: "patak-parlat-gallery.firebaseapp.com",
  projectId: "patak-parlat-gallery",
  storageBucket: "patak-parlat-gallery.appspot.com",
  messagingSenderId: "537508907067",
  appId: "1:537508907067:web:6f49d4c5f69edc38f3b41e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);