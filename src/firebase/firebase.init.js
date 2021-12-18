// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from "./fireabase.config";

const initilizeFirebase = () => {
    initializeApp(firebaseConfig);
}

export default initilizeFirebase;