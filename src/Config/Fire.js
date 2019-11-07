
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAfInTX2jGqgIwmbfX2c_gnywolRWscxkI",
    authDomain: "themoviecollection-dfb88.firebaseapp.com",
    databaseURL: "https://themoviecollection-dfb88.firebaseio.com",
    projectId: "themoviecollection-dfb88",
    storageBucket: "themoviecollection-dfb88.appspot.com",
    messagingSenderId: "150862821005",
    appId: "1:150862821005:web:fd6be164cbce55628454c4",
    measurementId: "G-H6CS6R95Y3"
  };
  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;