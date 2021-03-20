import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD6OL-AsPdTi498ZckBwdxcePbAi_BnKLE",
    authDomain: "portafolio-web-b48e5.firebaseapp.com",
    projectId: "portafolio-web-b48e5",
    storageBucket: "portafolio-web-b48e5.appspot.com",
    messagingSenderId: "938587895940",
    appId: "1:938587895940:web:f9320d3d10e7a8bccaead1"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db= fb.firestore();
