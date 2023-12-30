// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBOrkYzjAXbfFHG1yv0_TcTXayuQD7NCpQ",
  authDomain: "parlat-91919.firebaseapp.com",
  projectId: "parlat-91919",
  storageBucket: "parlat-91919.appspot.com",
  messagingSenderId: "1077668769686",
  appId: "1:1077668769686:web:79bef8f59f6a667411f7b7"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);