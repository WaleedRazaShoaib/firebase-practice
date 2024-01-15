import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from
    'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'



import {
    getFirestore,
    collection,
    addDoc,
    onSnapshot,
    getDocs,
    deleteDoc,

} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';




// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyDdaZwiKad6jgeksVXiBo-KSFxnkIFKfpk",
    authDomain: "postapp-f222e.firebaseapp.com",
    projectId: "postapp-f222e",
    storageBucket: "postapp-f222e.appspot.com",
    messagingSenderId: "623738442618",
    appId: "1:623738442618:web:d16e4890d74ee9928fbcc3",
    measurementId: "G-NPZFTMY6YC"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);




export {
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    getFirestore,
    collection,
    addDoc,
    db,
    onSnapshot,
    getDocs,
    deleteDoc
}
