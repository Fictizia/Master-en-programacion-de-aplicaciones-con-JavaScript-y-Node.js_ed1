(function(){
 
 var opciones = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(posicion) {
  var coordenadas = posicion.coords;

  console.log("Tu posición actual es:");
  console.log("Latitud: " + coordenadas.latitude);
  console.log("Longitud: " + coordenadas.longitude);
  console.log("Aproximadamente:" + coordenadas.accuracy +" metros.");
  
  // Guardado en localStorage:
  
  localStorage.setItem("Latitud", coordenadas.latitude);
  localStorage.setItem("Longitud", coordenadas.longitude);
  
  // Recoger datos de localStorage:
  //var userLatitud = localStorage.getItem("Latitud")); 
  //var userLongitud = localStorage.getItem("Longitud")); 



};

function error(err) {
  console.log("UY! Parece que ha habido un ERROR:  " + err.code + " : " + err.message);
};

     navigator.geolocation.getCurrentPosition(success, error, opciones);

})();