import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDSJbUTp3H57ORHTgLRxydO_UrecJLvx9Q",
    authDomain: "singleprojectdota.firebaseapp.com",
    projectId: "singleprojectdota",
    storageBucket: "singleprojectdota.appspot.com",
    messagingSenderId: "166333241037",
    appId: "1:166333241037:web:5a96ca142a10eea1bebb84"
  };
const fire = firebase.initializeApp(firebaseConfig);

const db = getFirestore(initializeApp(firebaseConfig))
export const googleAcc = getAuth(fire);
export {db}
export default fire;