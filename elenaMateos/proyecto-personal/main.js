'use strict';

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
}

mostrarHora();


function peticionAjax(url){

    var request = new XMLHttpRequest();
    request.open('GET','http://airemad.org/api/v1/pollution/' + optionDistrict.value)

}


/*
function peticionAjax(url) {
    var request = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

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
