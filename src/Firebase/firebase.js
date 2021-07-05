import firebase from 'firebase/app'
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyB8Sz3Cq08SQ_pvaeRg5Vy9obUE3ia443U",
    authDomain: "reactjs-e-commerce.firebaseapp.com",
    projectId: "reactjs-e-commerce",
    storageBucket: "reactjs-e-commerce.appspot.com",
    messagingSenderId: "774581114907",
    appId: "1:774581114907:web:e8447172c25d1986e2c0be"

};

const fb = firebase.initializeApp(firebaseConfig);

export const database = fb.firestore();

