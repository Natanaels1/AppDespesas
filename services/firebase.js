import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAQBH6l95gIkUjxSbNxFpHuth8DmohSDVQ",
  authDomain: "app-despesas-da2b8.firebaseapp.com",
  projectId: "app-despesas-da2b8",
  storageBucket: "app-despesas-da2b8.appspot.com",
  messagingSenderId: "1040423143551",
  appId: "1:1040423143551:web:ba33c05b066f4377f8d74a"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
