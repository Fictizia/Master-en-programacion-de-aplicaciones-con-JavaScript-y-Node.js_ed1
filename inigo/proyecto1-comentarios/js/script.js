//Documentacion: --> https://github.com/datos-precio-carburante/json2016h1
//api key maps -->  "AIzaSyCJ2M-CACUQ52ksG8h4jcV0vj16utyqGDA"

var gasolineras = [];
var selectProvincias = document.getElementById("buscarProvincia");
var map;
var markers= [];
var fecha = new Date();

fecha = fecha.getFullYear() + "" + (fecha.getMonth() + 1) + "" + fecha.getDate();

selectProvincias.options[selectProvincias.selectedIndex].value="defecto";
peticionAjax("http://datos-precio-carburante.github.io/json2016h1/" + fecha + ".json", procesar);

selectProvincias.addEventListener("change", function(){
    var valorSelect = selectProvincias.options[ selectProvincias.selectedIndex ].value;
    deleteMarkers();
    mostrar(filtrarProvincia(valorSelect));
});

//@Ulises: Cambiar nombre del callback
function peticionAjax(url,funcionMostrar) {
    var xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            //console.info(JSON.parse(xmlHttp.responseText));
            
            //@Ulises: Hacer con función recursiva de fecha vs. contenido
            funcionMostrar(JSON.parse(xmlHttp.responseText));
            
            //@Ulises: Hacer un callback real
            
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
function procesar(data){
    var datos = data.ListaEESSPrecio;
    
    if (datos === undefined || datos.length == 0) {
        fecha--;
        peticionAjax("http://datos-precio-carburante.github.io/json2016h1/" + fecha + ".json", procesar);
    }else{
        // @Ulises: Sustituir por callback en AJAX
        datos.forEach(function(elemento, i){
            gasolineras.push(elemento);
        });
    }
}
function filtrarProvincia(provincia){
    if(provincia === "todas"){
        return gasolineras;
    }else{
        // @Ulises: Limpiar
        return gasolineras.filter(function (el) {
            return quitarAcentos(el.Provincia.toLowerCase().trim()) === provincia.toLowerCase().trim();
        });
        //return array;
    }
}
function quitarAcentos(str){
    // @Ulises: Refactor usando REGEX basado en https://stackoverflow.com/q/990904
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
        //@Ulises: Pintar esto en el lugar de los detalles de la gasolinera
        alert("No hay datos que mostrar, asegúrate que la página está cargando sobre el protocolo http");
    }else{
        document.getElementById("backLoader").style.display="block";
        data.forEach(function(elemento, i){
            setTimeout(function() {
                
                //@Ulises: Refactorizar con templeate string `... ${} ...`
                console.time("tiempoEnMostrar");
                html = '<div class="contenedorGasolinera">';
                html += '<span class="direccion">' + elemento["Dirección"] + ' | ' + elemento["C.P."] + ' ' + elemento["Municipio"] + ', ' + elemento["Provincia"] + '</span><br/>';
                html += '<span class="horario">Horario: <span>' + elemento["Horario"] + '</span></span><br/>';
                html += '<span class="marca">Marca: <span>' + elemento["Rótulo"] + '</span></span><br/>';
                html += '<span class="diesel">Diesel: <span>' + ((elemento["Precio Gasoleo A"] == null) ? disponibilidad : elemento["Precio Gasoleo A"]) + '</span></span><br/>';
                html += '<span class="dieselPlus">Diesel Plus: <span>' + ((elemento["Precio Nuevo Gasoleo A"] == null) ? disponibilidad : elemento["Precio Nuevo Gasoleo A"]) + '</span></span><br/>';
                html += '<span class="gasolina95">Gasolina 95: <span>' + ((elemento["Precio Gasolina 95"] == null) ? disponibilidad : elemento["Precio Gasolina 95"]) + '</span></span><br/>';
                html += '<span class="gasolina98">Gasolina 98: <span>' + ((elemento["Precio Gasolina  98"] == null) ? disponibilidad : elemento["Precio Gasolina  98"]) + '</span></span><br/>';
                html += '<span class="dieselB">Diesel B: <span>' + ((elemento["Precio Gasoleo B"] == null) ? disponibilidad : elemento["Precio Gasoleo B"]) + '</span></span><br/>';
                html += '<span class="latitud">Latitud: <span>' + elemento["Latitud"] + '</span></span><br/>';
                html += '<span class="longitud">Longitud: <span>' + elemento["Longitud (WGS84)"] + '</span></span><br/>';
                html += '</div>';
                
                caja.innerHTML += html;
                contador.innerHTML = i + 1 + " / " + data.length + " gasolineras";
                barra(i + 1, data.length);
                
                var latitud = parseFloat(elemento["Latitud"].replace(/,/g, '.'));
                var longitud = parseFloat(elemento["Longitud (WGS84)"].replace(/,/g, '.'));
                var posicion = {lat: latitud, lng: longitud};
                
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
function initMap() {
    var madrid = {lat: 40.4167, lng: -3.70325};
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        center: madrid
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