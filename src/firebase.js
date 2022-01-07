import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAwWbzjQemLaFzQOjsiJo6D3g1mCg-MhEA",
    authDomain: "clone-26c07.firebaseapp.com",
    projectId: "clone-26c07",
    storageBucket: "clone-26c07.appspot.com",
    messagingSenderId: "1089332704831",
    appId: "1:1089332704831:web:26d0d17a6cfef327b76a8a",
    measurementId: "G-B97QLXPM47"
})

const db=firebaseApp.firestore()
const auth = firebase.auth()

export {db, auth}