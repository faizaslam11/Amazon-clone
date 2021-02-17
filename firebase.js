// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAnqYs4-5YsNKlJfSw2PhyuwABaJhTQ5hg",
    authDomain: "project-96284.firebaseapp.com",
    projectId: "project-96284",
    storageBucket: "project-96284.appspot.com",
    messagingSenderId: "458872317696",
    appId: "1:458872317696:web:7bd9ab40d782e54cb5b5e5",
    measurementId: "G-EN656918TS"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth();

export { db, auth };