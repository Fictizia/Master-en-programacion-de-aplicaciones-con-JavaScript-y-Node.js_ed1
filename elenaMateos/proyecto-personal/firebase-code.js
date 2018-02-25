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
  userRef.child(userData.uid).set(userData);
  // Hace visible el botón de logOut y oculta el de login:
  githubBtn.classList.toggle('hidden');
  githubLogOut.classList.toggle('hidden');
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

/**
 * Guardar favoitos: El usuario puede guardar datos de sus sitios favoritos
 *
 * 1. Crear formulrio de guardar favorito
 * 2. Crear modal para guardar favorito:
 *  2.1. Input de tipo de favorito (casa, trabajo, colegio, casa2, trabajo2...)
 *  2.2. Menú para seleccionar estación.
 *  2.3. Botón de guardar (toma los datos de esa escaión y los guarda en datos de favorito en firebase).
 */
