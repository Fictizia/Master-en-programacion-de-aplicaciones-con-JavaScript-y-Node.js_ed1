var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');
var pic = document.getElementById('emoji');

var tiempoHoy = '';


/*  PETICION ajax*/

/* @Ulises: Usar un solo méodo para llamar AJAX. Eliminar request
peticionAjax('http://airemad.com/api/v1/weather/S024', function(datos){
  pintaTiempo(datos);
  iconRender(tiempoHoy);
})
*/

var url = 'http://airemad.com/api/v1/weather/S024';
var resultadoTotal = [];
//var request = new XMLHttpRequest();
var datos = [];

request.open('GET', url);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    resultadoTotal = JSON.parse(this.responseText);
    datos = resultadoTotal.list;
    pintaTiempo(datos);
    iconRender(tiempoHoy);
  } else {
    setTimeout("fillData()", 4000);
  }
  return datos;
};
request.send();

/*  Funcion para rellenar datos si no han llegado */
function fillData(){
  datos = resultadoTotal;
  return datos;
}

/*  FUNCION PINTAR DATOS  */
function pintaTiempo(datos){
  for (var i = 0; i < datos.length; i++) {
    temperature.innerHTML = datos[i].main.temp + ' ºC';
    humidity.innerHTML = 'Humedad: ' + datos[i].main.humidity + ' %';
    wind.innerHTML = 'Viento: ' + datos[i].wind.speed + ' m/s';

    tiempoHoy = datos[i].weather[0].main
    }
    return tiempoHoy
  };

  /*  FUNCION PARA CAMBIAR ICONO DEL TIEMPO */
  function iconRender(tiempoHoy){
    //  Diferéntes parámetros: Clear, Clouds, Rain, Snow, Storm
    //  tiempoHoy = 'Snow'

    switch (tiempoHoy) {

      case 'Rain':
        pic.src = 'images/rain.gif';
        pic.alt = 'Lloviendo!'
        break;
      case 'Clouds':
        pic.src = 'images/cloudy2.gif';
        pic.alt = 'Nublado!'
        break;
      case 'Snow':

        pic.src = 'images/snow.gif';
        pic.alt = 'Nevando!'
        break;

      default:
        pic.src = 'images/sunny.gif';
    }
}
