import firebase from 'firebase/app'
import "firebase/auth";
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAyZYadTGHtdwAaa7yLt_PTDluOt6dPfJI",
    authDomain: "imprentaneografreact.firebaseapp.com",
    projectId: "imprentaneografreact",
    storageBucket: "imprentaneografreact.appspot.com",
    messagingSenderId: "828987191633",
    appId: "1:828987191633:web:a2eb5f6032aaebe591e370"
  };
  // Initialize Firebase
  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
 
  export const productCollections = firebase.firestore(app).collection('catalogo')
  export const categoryCollections = firebase.firestore(app).collection('categoria')
  export const OrderCollections = firebase.firestore(app).collection('ordenes')
  export const fauth = firebase.auth()