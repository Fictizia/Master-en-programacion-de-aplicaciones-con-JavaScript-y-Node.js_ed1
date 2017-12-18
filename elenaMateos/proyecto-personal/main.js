/* DATE */

var hour = document.getElementById('hour');
var date = document.getElementById('date');



function mostrarHora(){
  var giveHour = new Date();
  var minutes = giveHour.getMinutes();
  var seconds = giveHour.getSeconds();

  if (minutes <= 9) {
    minutes = '0' + minutes;
  }
  if (seconds <= 9) {
    seconds = '0' + seconds;
  }
  hour.innerHTML = giveHour.getHours() + ':' + minutes + ':' + seconds;
  date.innerHTML = giveHour.getDate() + '/' + giveHour.getMonth() + '/' + giveHour.getFullYear();
  // timer para refrescar hora
  setTimeout("mostrarHora()", 1000);
}
mostrarHora();
