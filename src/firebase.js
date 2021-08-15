import firebase from 'firebase/app';
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyBJJBVLCWglmNEimxarcVq83GpzUkla-cc",
    authDomain: "chatty-7248b.firebaseapp.com",
    projectId: "chatty-7248b",
    storageBucket: "chatty-7248b.appspot.com",
    messagingSenderId: "819514252199",
    appId: "1:819514252199:web:293fa16ceac863cd4d3482"
}).auth();