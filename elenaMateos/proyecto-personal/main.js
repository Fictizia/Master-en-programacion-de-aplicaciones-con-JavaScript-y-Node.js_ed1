'use strict';

/* API */

var url = 'http://airemad.org/api/v1/pollution/';

/* DATE */

var hour = document.getElementById('hour');
var date = document.getElementById('date');

/* DISTRICT */
var city = document.getElementById('city');
var temperature = document.getElementById('temperature');
var rainProbability = document.getElementById('rainProbability');
var win = document.getElementById('win');
var district = document.getElementById('district');
var optionDistrict = document.getElementById('optionDistrict');
var values = document.getElementById('values');

function mostrarHora() {
  var giveHour = new Date();

  hour.innerHTML = giveHour.getHours()+ ':' +giveHour.getMinutes();
  date.innerHTML = giveHour.getDate() + '/' + giveHour.getMonth() + '/' + giveHour.getFullYear();
  // console.log(giveHour.getHours()+ ':' +giveHour.getMinutes());
  // timer para refrescar hora

}

mostrarHora();

// url api pedir estaciones e id :'http://airemad.org/api/v1/station';

/*
[
  {
    "id": "P001",
    "altitud": 637,
    "direccion": "C/ General Pardiñas, 166",
    "latitud": "40º 26' 13.254\" N",
    "latitud_decimal": 40.437015,
    "longitud": "3º 40' 47.32\" W",
    "longitud_decimal": -3.6798112,
    "nombre_estacion": "Barrio Salamanca",
    "numero_estacion": 1,
    "tipo_estacion": 1,
    "datos_disponibles": {
      "acustic": false,
      "pollution": false,
      "pollen": [
        "Aliso",
        "Cupresáceas/Taxáceas",
        "Fresno",
        "Olivo",
        "Plantago",
        "Plátano de paseo",
        "Gramíneas"
      ]
    }
  }, */

var url = 'http://airemad.org/api/v1/pollution/';
function peticionAjax(url){

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (request.readyState === 4 && request.status === 200) {
            console.info(JSON.parse(request.responseText));

        } else if (request.readyState === 4 && request.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(request.responseText));
            console.log('redirige a pag de error'); // to do!!!!!!!!!!!!!!!!!!!
        }
    };
    request.open("GET", 'http://airemad.org/api/v1/station', true);
    request.send();

}


/*
function peticionAjax(url) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

peticionAjax("http://airemadrid.herokuapp.com/api/estacion/99");

*/
/*function askForUser() {

  var request = new XMLHttpRequest(); // XML tipo de request, http protocolo

  request.open('GET', 'https://api.github.com/users/' + getUserName.value, true); // insertar variable usuario

  request.onload = function(){

    if (request.status >= 200 && request.status < 400) {
      var objetJsFromJason = JSON.parse(request.responseText);

      picture.style.display = "inline";

      userName.innerHTML = objetJsFromJason.name;
      picture.src = objetJsFromJason.avatar_url;
      repositories.innerHTML = objetJsFromJason.public_repos;
    }else {
      console.log('Eror 404, el archivo no se encuentra');
    }

  };
  request.onerror = function() {
    alert('Error al tratar de conectarse con el servidor');
  };

  request.send();

}
searchButton.addEventListener('click', askForUser);*/
