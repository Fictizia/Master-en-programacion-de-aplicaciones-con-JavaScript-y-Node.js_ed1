var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var wind = document.getElementById('wind');


/*  PETICION ajax*/
var url = 'http://airemad.com/api/v1/weather/S024';
var resultadoTotal = [];
var request = new XMLHttpRequest();
var datos = [];

request.open('GET', url);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    resultadoTotal = JSON.parse(this.responseText);
    datos = resultadoTotal.list;
    pintaTiempo(datos);
  } else {
    console.log('loading');
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
    //wind.innerHTML = 'Viento: ' + datos[i].wind.speed + ' m/s'; //COMENTADO PQ DA ERROR!! oO
    // console.log(datos[i].wind.speed);
    }
  };

  /*  FUNCION PARA CAMBIAR ICONO DEL TIEMPO */

  function iconRender(datos){
    //  Diferéntes parámetros: Clear, Clouds, Rain,
    // ruta: datos[i].weather[0].main
}
