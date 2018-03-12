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


// LOGIN Button
document.getElementById("login").addEventListener("click", login);
function login() {
    console.log("LOGIN");
}


// REGISTER Button
document.getElementById("register").addEventListener("click", register);
function register() {
    console.log("REGISTER");
}
