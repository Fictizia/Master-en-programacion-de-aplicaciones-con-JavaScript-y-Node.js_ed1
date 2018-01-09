/**
*Declaración de variables
*/

var nombre = document.getElementById('getName').value;
var mail = document.getElementById('getMail').value;
var guardar = document.getElementById('buttonSave');
var buscar = document.getElementById('buttonLookFor');
/**
* Metodos de Local Storage:
* Guardan los datos del usuario a buscar y
* al pulsr en el boton de buscar buscna en los datos almacenados
* devolviendo los datos del usuario
*/
function guardar (nombre, mail){
localStorage.setItem('userName', nombre);
localStorage.setItem('userMail', mail);
}

guardar.addEventListener('click', guardar);
