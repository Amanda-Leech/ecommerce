import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB2S2nj6ssPH2bVJ_0eHUwTWCtmGvrH_CA",
  authDomain: "ecommerce-b3104.firebaseapp.com",
  projectId: "ecommerce-b3104",
  storageBucket: "ecommerce-b3104.appspot.com",
  messagingSenderId: "626806239386",
  appId: "1:626806239386:web:16f0d2a4e559f26064ef23",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
