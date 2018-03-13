/* Firebase */
/* Initialize Firebase */
var config = {
  apiKey: "AIzaSyC2SW60Fe3C2kwNfeLHDyKnqD8O8zHJOWM",
  authDomain: "login-f1.firebaseapp.com",
  databaseURL: "https://login-f1.firebaseio.com",
  projectId: "login-f1",
  storageBucket: "",
  messagingSenderId: "392281345926"
};
firebase.initializeApp(config);

/* Provider GITHUB */
var provider = new firebase.auth.GithubAuthProvider();

/* LOGIN Button */
document.getElementById("login").addEventListener("click", login);

function login() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a GitHub Access Token. You can use it to access the GitHub API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
    
}


/* REGISTER Button */
document.getElementById("register").addEventListener("click", register);
function register() {
    console.log("REGISTER");
}


