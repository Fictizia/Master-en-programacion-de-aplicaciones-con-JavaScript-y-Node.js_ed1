//Firebase
// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2SW60Fe3C2kwNfeLHDyKnqD8O8zHJOWM",
  authDomain: "login-f1.firebaseapp.com",
  databaseURL: "https://login-f1.firebaseio.com",
  projectId: "login-f1",
  storageBucket: "",
  messagingSenderId: "392281345926"
};
firebase.initializeApp(config);


var database = firebase.database();
var auth = firebase.auth();
var provider = new firebase.auth.GithubAuthProvider();


