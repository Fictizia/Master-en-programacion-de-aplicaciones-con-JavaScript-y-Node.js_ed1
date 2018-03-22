//Firebase 
const firebase = require("firebase");

var config = {
  apiKey: "AIzaSyCuyhD-WepVZyPb5OwmEAnarSn5MvD3Xvc",
  authDomain: "myfilms-6b0bc.firebaseapp.com",
  databaseURL: "https://myfilms-6b0bc.firebaseio.com",
  projectId: "myfilms-6b0bc",
  storageBucket: "myfilms-6b0bc.appspot.com",
  messagingSenderId: "645761269047"
};
firebase.initializeApp(config);

const database = firebase.database();



exports.save = (film) => {
  database.ref('/films/' + film.imdbID).set(film);
};
