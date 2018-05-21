/* DATE */

var hour = document.getElementById('hour');
var date = document.getElementById('date');

function timeFormat(string){
  if (string <= 9) {
    string = '0' + string;
  } else {
    string;
  }
// O bien:  string <=9 ? '0' + string : string;
  return string;
}

function mostrarHora(){
  var now = new Date();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  hour.innerHTML = now.getHours() + ':' + timeFormat(minutes) + ':' + timeFormat(seconds);
  date.innerHTML = now.getDate() + '/' + now.getMonth() + '/' + now.getFullYear();
}
mostrarHora();

// Timer para refrescar hora:
setInterval(mostrarHora, 1000)
