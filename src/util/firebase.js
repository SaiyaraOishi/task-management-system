import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyBRJ0Priq8u2ODfIj6Ef37MUtEHUfYSUsY",
    authDomain: "task-manager-1c0bf.firebaseapp.com",
    projectId: "task-manager-1c0bf",
    storageBucket: "task-manager-1c0bf.appspot.com",
    messagingSenderId: "662315278638",
    appId: "1:662315278638:web:fed388c4ebf4f6649edabf",
    measurementId: "G-NLH1DFV26D"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;