import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyAb6g8AHbOD9ZKnT25V8x6_bSyKtnm-_1U",
    authDomain: "fire-75114.firebaseapp.com",
    projectId: "fire-75114",
    storageBucket: "fire-75114.appspot.com",
    messagingSenderId: "20535700829",
    appId: "1:20535700829:web:e0ca3f13e10a95d4870cb4",
    measurementId: "G-27BR8PDCX0"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  const storage = firebase.storage()

  export  {storage,fire as default}
