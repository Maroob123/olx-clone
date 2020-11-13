import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

  var firebaseConfig = {
    apiKey: "AIzaSyA58m-YXKEm-xpIWRSmRqvJ-2aSSYUU35A",
    authDomain: "olx-clone-with-reactjs.firebaseapp.com",
    databaseURL: "https://olx-clone-with-reactjs.firebaseio.com",
    projectId: "olx-clone-with-reactjs",
    storageBucket: "olx-clone-with-reactjs.appspot.com",
    messagingSenderId: "332487387082",
    appId: "1:332487387082:web:0d79c0e568917e11569133",
    measurementId: "G-C0W88HJQ54"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;