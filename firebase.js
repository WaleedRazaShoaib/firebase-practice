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
    onSnapshot

}from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMSdxBjOMIDIrfszdCq0RIZvWwnGjYcXE",
    authDomain: "practice-batch-10.firebaseapp.com",
    projectId: "practice-batch-10",
    storageBucket: "practice-batch-10.appspot.com",
    messagingSenderId: "219938660505",
    appId: "1:219938660505:web:7b3dbbe4bb433e89431808",
    measurementId: "G-99CV4C9N41"
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
    onSnapshot
}
