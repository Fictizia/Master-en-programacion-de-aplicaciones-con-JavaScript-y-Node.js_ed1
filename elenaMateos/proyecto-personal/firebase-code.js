var provider = new firebase.auth.GithubAuthProvider();
var githubBtn = document.getElementById('githubLogin');

var userRef = firebase.database().ref("users");

var auth = firebase.auth();
var provider = new firebase.auth.GithubAuthProvider();


// Evento de OAUTH
function logMe (){
firebase.auth().signInWithPopup(provider).then(function(result) {
  console.log("User signed in! UID:", result.user.uid)

  // Datos q obtenemos del usuario --
  var userData = JSON.stringify(result.user)
      userData = JSON.parse(userData)
      console.log('Los datos del usuario son: ' + userData);

  // Alamacenando el usuario en /user/{{uid}}/datos...
  userRef.child(userData.uid).set(userData)
}).catch(function(error) {
  console.log( error + " Error con el login");
})
}

function logOut (){
  
  firebase.auth().signOut().then(function() {
  console.log("User OUT!");
}).catch(function(error) {
  console.log("Ha falllado el User OUT");
});
}




githubBtn.addEventListener('click', logMe);
githubLogOut.addEventListener('click', logOut);