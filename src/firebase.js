import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCX5onQ4MRWXhtlDh6HqmC7zwQhMvkzsJA",
  authDomain: "challenge-41cda.firebaseapp.com",
  databaseURL: "https://challenge-41cda.firebaseio.com",
  projectId: "challenge-41cda",
  storageBucket: "challenge-41cda.appspot.com",
  messagingSenderId: "571103198185",
  appId: "1:571103198185:web:e5e1ce25277f558c57a978",
  measurementId: "G-HHRBPXVJEQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
