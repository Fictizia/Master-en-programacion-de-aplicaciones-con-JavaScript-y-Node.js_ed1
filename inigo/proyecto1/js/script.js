//Documentacion: --> https://github.com/datos-precio-carburante/json2016h1
//api key maps -->  "AIzaSyCJ2M-CACUQ52ksG8h4jcV0vj16utyqGDA"
//https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/

// Initialize Firebase
var config = {
    apiKey: "AIzaSyD79Ygv4lm8nXzGvk5n1Ifm85bZ1DsrW0w",
    authDomain: "gasolinera-1512844125964.firebaseapp.com",
    databaseURL: "https://gasolinera-1512844125964.firebaseio.com",
    projectId: "gasolinera-1512844125964",
    storageBucket: "gasolinera-1512844125964.appspot.com",
    messagingSenderId: "531378974867"
};
firebase.initializeApp(config);

var fire = firebase.database().ref();
console.log(fire);



var gasolineras = [];
var selectProvincias = document.getElementById("buscarProvincia");
var map;
var markers= [];
var fecha = new Date();
var mes = fecha.getMonth() + 1;
var dia = fecha.getDate();
var posActual;

if(mes < 10 ){
    mes = "0" + mes;
}
if(dia < 10 ){
    dia = "0" + dia;
}

fecha = fecha.getFullYear() + "" + mes + "" + dia;

selectProvincias.options[selectProvincias.selectedIndex].value="defecto";
peticionAjax("js/json.json", procesar);
//peticionAjax("http://datos-precio-carburante.github.io/json2016h1/" + fecha + ".json", procesar);
//peticionAjax("https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/", procesar);

selectProvincias.addEventListener("change", function(){
    var valorSelect = selectProvincias.options[ selectProvincias.selectedIndex ].value;
    deleteMarkers();
    mostrar(filtrarProvincia(valorSelect));
});

function peticionAjax(url,funcionMostrar) {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            //console.info(JSON.parse(xmlHttp.responseText));
            funcionMostrar(JSON.parse(xmlHttp.responseText));
            
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            fecha--;
            //peticionAjax("http://datos-precio-carburante.github.io/json2016h1/" + fecha + ".json", procesar);
            //console.error("ERROR! 404");
            //console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    //xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //xmlHttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlHttp.send();
    
}
function procesar(data){
    var datos = data.ListaEESSPrecio;
    if (datos === undefined || datos.length == 0) {
        fecha--;
        //peticionAjax("http://datos-precio-carburante.github.io/json2016h1/" + fecha + ".json", procesar);
    }else{
        datos.forEach(function(elemento, i){
            gasolineras.push(elemento);
        });
    }
    fire.push(gasolineras, function(error) {
    if (error) {
      console.warn("No se han podido guardar los datos." + error);
    } else {
      console.info("Datos guardados con exito. : " + gasolineras);
    }
});
}
function filtrarProvincia(provincia){
    if(provincia === "todas"){
        return gasolineras;
    }else{
        var array = gasolineras.filter(function (el) {
            return quitarAcentos(el.Provincia.toLowerCase().trim()) === provincia.toLowerCase().trim();
        });
        return array;
    }
}
function quitarAcentos(str){
    for (var i=0;i<str.length;i++){
        if (str.charAt(i)=="á") str = str.replace(/á/,"a");
        if (str.charAt(i)=="é") str = str.replace(/é/,"e");
        if (str.charAt(i)=="í") str = str.replace(/í/,"i");
        if (str.charAt(i)=="ó") str = str.replace(/ó/,"o");
        if (str.charAt(i)=="ú") str = str.replace(/ú/,"u");
    }
    return str;
}
function mostrar(data){
    var caja = document.getElementById("cajaMostrar");
    var contador = document.getElementById("contador");
    var html = "";
    var disponibilidad = "No disponible";
    
    caja.innerHTML = "";
    
    if (data === undefined || data.length == 0) {
        alert("No hay datos que mostrar, asegúrate que la página está cargando sobre el protocolo http");
    }else{
        document.getElementById("backLoader").style.display="block";
        data.forEach(function(elemento, i){
            setTimeout(function() {
                console.time("tiempoEnMostrar");
                
                var latitud = parseFloat(elemento["Latitud"].replace(/,/g, '.'));
                var longitud = parseFloat(elemento["Longitud (WGS84)"].replace(/,/g, '.'));
                var posicion = {lat: latitud, lng: longitud};
                
                html = '<div class="contenedorGasolinera">';
                html += '<span class="direccion">' + elemento["Dirección"] + ' | ' + elemento["C.P."] + ' ' + elemento["Municipio"] + ', ' + elemento["Provincia"] + '</span><br/>';
                html += '<span class="horario">Horario: <span>' + elemento["Horario"] + '</span></span><br/>';
                html += '<span class="marca">Marca: <span>' + elemento["Rótulo"] + '</span></span><br/>';
                html += '<span class="diesel">Diesel: <span>' + ((elemento["Precio Gasoleo A"] == null) ? disponibilidad : elemento["Precio Gasoleo A"]) + '</span></span><br/>';
                html += '<span class="dieselPlus">Diesel Plus: <span>' + ((elemento["Precio Nuevo Gasoleo A"] == null) ? disponibilidad : elemento["Precio Nuevo Gasoleo A"]) + '</span></span><br/>';
                html += '<span class="gasolina95">Gasolina 95: <span>' + ((elemento["Precio Gasolina 95"] == null) ? disponibilidad : elemento["Precio Gasolina 95"]) + '</span></span><br/>';
                html += '<span class="gasolina98">Gasolina 98: <span>' + ((elemento["Precio Gasolina  98"] == null) ? disponibilidad : elemento["Precio Gasolina  98"]) + '</span></span><br/>';
                html += '<span class="dieselB">Diesel B: <span>' + ((elemento["Precio Gasoleo B"] == null) ? disponibilidad : elemento["Precio Gasoleo B"]) + '</span></span><br/>';
                html += '<span class="latitud">Latitud: <span>' + latitud + '</span></span><br/>';
                html += '<span class="longitud">Longitud: <span>' + longitud + '</span></span><br/>';
                html += '<button class="botonMostrar" lat="' + latitud + '" long="' + longitud + '">Mostrar en el mapa</button><br/>';
                html += '<button class="botonIr" lat="' + latitud + '" long="' + longitud + '">Cómo llegar</button><br/>';
                html += '</div>';
                
                caja.innerHTML += html;
                contador.innerHTML = i + 1 + " / " + data.length + " gasolineras";
                barra(i + 1, data.length);
                
                addMarker(posicion, html);
                
                var markerCluster = new MarkerClusterer(map, markers,{
                    imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                });
                
                if(i >= data.length - 1){
                    document.getElementById("backLoader").style.display="none";
                    console.timeEnd("tiempoEnMostrar");
                }
            }, i * 100);
        });
    }
}
function barra(actual, total) {
    var elem = document.getElementById("progreso");   
    var width = 1;
    width = (width * actual * 100) / total;
    width++; 
    elem.style.width = width + '%'; 
}
function clickLocation(directionsService, directionsDisplay){
    var botones = document.querySelector("#cajaMostrar");
    botones.addEventListener("click",function(e){
        if(e.target.nodeName === 'BUTTON'){
            var lat = parseFloat(e.target.getAttribute('lat'));
            var long = parseFloat(e.target.getAttribute('long'));
            if(e.target.getAttribute('class') === "botonMostrar"){
                newLocation(lat,long);
            }
            if(e.target.getAttribute('class') === "botonIr"){
                var origen = posActual;
                var destino = {lat: lat, lng: long};
                calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino);
            }
        }
        
    });     
};
function initMap() {
    var madrid = {lat: 40.4167, lng: -3.70325};
    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: madrid
    });
    directionsDisplay.setMap(map);
    clickLocation(directionsService, directionsDisplay);
    var infoWindow = new google.maps.InfoWindow({map: map});
    getPosicion(map, infoWindow);
}
function getPosicion(map, infoWindow){
     // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        posActual = pos;
        infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
}
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your browser doesn\'t support geolocation.');
}
function newLocation(newLat,newLng)
{
    map.setZoom(20);
	map.setCenter({
		lat : newLat,
		lng : newLng
	});
}
function calculateAndDisplayRoute(directionsService, directionsDisplay, origen, destino) {
    directionsService.route({
      origin: origen,
      destination: destino,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
}
function addMarker(location, descripcion) {
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        animation: google.maps.Animation.DROP
    });
    var infowindow = new google.maps.InfoWindow({
        content: descripcion
    });
    marker.addListener('click', function() {
        infowindow.open(map, marker);
    });
    markers.push(marker);
}
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}
function deleteMarkers() {
    setMapOnAll(null);
    markers = [];
    initMap();
}