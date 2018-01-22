/**
*Declaración de variables
*/

// var nombre = document.getElementById('getName').value;
// var mail = document.getElementById('getMail').value;
var btnGuardar = document.getElementById('buttonSave');
var buscar = document.getElementById('buttonLookFor');
/**
* Metodos de Local Storage:
* Guardan los datos del usuario a buscar y
* al pulsar en el boton de buscar busca en los datos almacenados
* devolviendo los datos del usuario
*/

function guardar(){
  var nombre = document.getElementById('getName').value;
  var mail = document.getElementById('getMail').value;


  nombre = normalize(nombre);
  mail = normalize(mail);
  console.log(nombre + ' '+ mail);
  takeData('userName', nombre);
  takeData('userMail', mail);
}


/**
* @function normalize : Quitamos los espacios en blanco delante de
* los datos que entran por los input
*/

function normalize(data) {
  data.trim();
  return data;
}

/**
* @function takeData : Inserta datos en localStorage:
*/

function takeData(clave, valor) {
  var userData =localStorage.setItem( clave, JSON.stringify(valor));
}

/**
* @function insertData : Añade datos al array de localStorage:
*/

function insertData(valor) {
  
}

btnGuardar.addEventListener("click", guardar);
