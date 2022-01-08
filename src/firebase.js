import { initializeApp } from "firebase/app"
import { getAuth ,signInWithEmailAndPassword  } from "firebase/auth";
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

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

// const signInWithEmailAndPassword = async (auth,email, password) => {
//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };

//   const registerWithEmailAndPassword = async ( email, password) => {
//     try {
//       const res = await auth.createUserWithEmailAndPassword(email, password);
//       const user = res.user;
//       await db.collection("users").add({
//         uid: user.uid,
//         authProvider: "local",
//         email,
//       });
//     } catch (err) {
//       console.error(err);
//       alert(err.message);
//     }
//   };


  const logout = () => {
    auth.signOut();
  };


  export {
    auth,
    db,
    signInWithEmailAndPassword
  };
// import * as firebase from 'firebase/app';

// const firebaseApp = firebase.initializeApp({
//     apiKey: "AIzaSyAwWbzjQemLaFzQOjsiJo6D3g1mCg-MhEA",
//     authDomain: "clone-26c07.firebaseapp.com",
//     projectId: "clone-26c07",
//     storageBucket: "clone-26c07.appspot.com",
//     messagingSenderId: "1089332704831",
//     appId: "1:1089332704831:web:26d0d17a6cfef327b76a8a",
//     measurementId: "G-B97QLXPM47"
// })

// const db = firebaseApp.firestore()
// const auth = firebase.auth()

// export {db, auth}