import firebase from 'firebase/app'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyAU9QAGVJeZtQdzJubbJg2dXYlXMAm9YOg",
    authDomain: "vuetify-todo-511a9.firebaseapp.com",
    databaseURL: "https://vuetify-todo-511a9.firebaseio.com",
    projectId: "vuetify-todo-511a9",
    storageBucket: "vuetify-todo-511a9.appspot.com",
    messagingSenderId: "203356576913",
    appId: "1:203356576913:web:7475d5f281e85b27c9f330",
    measurementId: "G-9M9PN4RJWM"
  };
  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots: true}); // To address a warning from a timestamp update from firebase

  export default db;