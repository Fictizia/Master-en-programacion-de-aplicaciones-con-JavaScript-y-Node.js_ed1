'use strict';

/* API */

var url = 'http://airemad.org/api/v1/pollution/';

/* DATE */

var hour = document.getElementById('hour');
var date = document.getElementById('date');
var aemetButton = document.getElementById('aemet');



function mostrarHora(){
  var giveHour = new Date();

  hour.innerHTML = giveHour.getHours() + ':' + giveHour.getMinutes() + ':' + giveHour.getSeconds();
  date.innerHTML = giveHour.getDate() + '/' + giveHour.getMonth() + '/' + giveHour.getFullYear();
  // console.log(giveHour.getHours()+ ':' +giveHour.getMinutes());
  // timer para refrescar hora
  setTimeout("mostrarHora()", 1000);
}
mostrarHora();
