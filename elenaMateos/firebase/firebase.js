/**
* Inicializamos Firebase: Previamente en el HTML se ha metido una etiqueta <scrip> con la URL que nos provee
* Firebase, en este caso "https://www.gstatic.com/firebasejs/4.9.0/firebase.js".
* Dentro de nuestro local, tenemos que inicializar Firebase para nuestro proyecto, por lo que en la carpeta del proyecto
* debemos poner:
* ``` npm install firebase -save```
* A continuacón y ya en el archivo JS o bien en el scrip del HTML ponemos lo que firebase nos da. La variable
* config, que se compone de información para el acceso a la bbdd: la apiKey, el dominio del autor, la dirección https
* de la base de datos, el nombre del proyecto, el 'cubo de almacenamiento', y el id del 'enviador de mensajes'.
* Por otro lado el método de firebase initializeApp, al que se le pasa como parámetro la variable config declarada.
*/

// Initialize Firebase
var config = {
  apiKey: "XXXXXXXXXXXX",
  authDomain: "xxxxxxxx.firebaseapp.com",
  databaseURL: "https://xxxxxx.firebaseio.com",
  projectId: "xxxxxxxxxx",
  storageBucket: "xxxxxxxxxxx.appspot.com",
  messagingSenderId: "xxxxxxxxxxxxxx"
};
firebase.initializeApp(config);

/* *Declaración de la varialbe
* userRef: que hará referencia a los usuarios
*/
//var rootRef = firebase.database().ref();
var userRef = firebase.database().ref("users");
/**
* Para crear una autentificación mediante una red social como github o twitter, dentro de la página de firebase hay q ir a
* la segunda pestaña para 'Configurar método de inicio de sesión'. Una vez ahí seleccionar el método en cuestión y este nos dará una
* clave de usuario y un token para meter dentro de la red social en cuestión y que de esta forma pueda comunicarse con firebase
* nos pedirá los dominios autorizados, en este caso poner un localhost (para poder trabajar), y uno externo para poder
* tener la app que vamos a crear y a la que se accede a través del loggin social.
* Obiamente hay que crear un html para que el usuario ponga su nombre y pueda loguearse (botón...)
*/
// OAUTH
var auth = firebase.auth();
var provider = new firebase.auth.GithubAuthProvider();

// Evento de OAUTH
function logearme (){
firebase.auth().signInWithPopup(provider).then(function(result) {
  console.log("User signed in! UID:", result.user.uid)

  // -- HACK --
  var userData = JSON.stringify(result.user)
      userData = JSON.parse(userData)

  // Alamacenando el usuario en /user/{{uid}}/datos...
  userRef.child(userData.uid).set(userData)
}).catch(function(error) {
  console.log("User OUT!")
})
}

function sacame_de_aqui (){
firebase.auth().signOut().then(function() {
  console.log("User OUT!. Es lo que esperaba...")
}).catch(function(error) {
  console.log("ERRRRRRRRROR! CON: User OUT!")
});
}

//Evento para sacar a los usuarios
userRef.on("value", function(snapshot) {
var usersList = snapshot.val();
console.log("Nuevos cambios. Lista actualizada: ", usersList);
for (var userData in usersList) {
  var user = usersList[userData];
  document.getElementById("gente-confiada").innerHTML += `<li>${user.displayName} (${user.uid})</li>`
}
});
