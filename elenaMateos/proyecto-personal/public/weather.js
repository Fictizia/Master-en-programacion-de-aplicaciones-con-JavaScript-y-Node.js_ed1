var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');
var pic = document.getElementById('emoji');

var tiempoHoy = '';


/*  PETICION ajax*/
var url = '/proxy?url=http://airemad.com/api/v1/weather/S056';
//var url = 'http://api.openweathermap.org/data/2.5/weather?id=3117732&APPID=2b5e87bc1a5c3866d322d24dba0f4045'  id pirámides; "id": 3117732,;

var resultadoTotal = [];
var request = new XMLHttpRequest();
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
  
  tiempoHoy = datos[0].weather[0].main
  temperature.innerHTML = datos[0].main.temp + ' ºC';
  humidity.innerHTML = 'Humedad: ' + datos[0].main.humidity + ' %';
  wind.innerHTML = 'Viento: ' + datos[0].wind.speed + ' m/s';
  
  return tiempoHoy
  
  };

  /*  FUNCION PARA CAMBIAR ICONO DEL TIEMPO */
  function iconRender(tiempoHoy){
    //  Diferéntes parámetros: Clear, Clouds, Rain, Snow, Storm
    //tiempoHoy = 'Snow'

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
