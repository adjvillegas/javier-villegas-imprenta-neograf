import firebase from 'firebase/app'

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
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore()