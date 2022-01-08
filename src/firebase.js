import { initializeApp } from "firebase/app"
import { getAuth ,signInWithEmailAndPassword,createUserWithEmailAndPassword  } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAwWbzjQemLaFzQOjsiJo6D3g1mCg-MhEA",
    authDomain: "clone-26c07.firebaseapp.com",
    projectId: "clone-26c07",
    storageBucket: "clone-26c07.appspot.com",
    messagingSenderId: "1089332704831",
    appId: "1:1089332704831:web:26d0d17a6cfef327b76a8a",
    measurementId: "G-B97QLXPM47"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



  export {
    auth,
    db,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
  };
