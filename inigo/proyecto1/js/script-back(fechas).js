//Documentacion: --> https://github.com/datos-precio-carburante/json2016h1
//api key maps -->  "AIzaSyBahlltE7rTe1d1DG3W_ruD2CfF7X1Ma9o"
//https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/

(function(){
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDZshwNV4jEFbmQm9jETYEOaFZbKcEIkdE",
        authDomain: "gasolineras-5b253.firebaseapp.com",
        databaseURL: "https://gasolineras-5b253.firebaseio.com",
        projectId: "gasolineras-5b253",
        storageBucket: "",
        messagingSenderId: "255754618548"
    };
    firebase.initializeApp(config);
    
    var fire = firebase.database().ref();
    
    var app = app || {};
    
    //fire.remove();
    
    var gasolineras = [];
    var arrayProvincias = ["alava", "albacete", "alicante", "almeria", "asturias", "avila", "badajoz", "barcelona", "burgos", "caceres", "cadiz", "cantabria", "castellon/castello", "ceuta", "ciudadreal", "cordoba", "cuenca", "girona", "palmas(las)", "granada", "guadalajara", "guipuzcoa", "huelva", "huesca", "balears(illes)", "jaen", "coruña(a)", "rioja(la)", "leon", "lleida", "lugo", "madrid", "malaga", "melilla", "murcia", "navarra", "ourense", "palencia", "pontevedra", "salamanca", "segovia", "sevilla", "soria", "tarragona", "santacruzdetenerife", "teruel", "toledo", "valencia/valencia", "valladolid", "vizcaya", "zamora", "zaragoza"];
    var selectProvincias = document.getElementById("buscarProvincia");
    var botonLogin = document.getElementById("loginGoogle");
    var cajaLogin = document.getElementById("contentLogin");
    var spanNombre = document.getElementById("campoNombre");
    var botonLogout = document.getElementById("cerrarSesion");
    var imgUser = document.getElementById("imgUser");
    var map;
    var markers = [];
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
    
    //fecha = fecha.getFullYear() + "" + mes + "" + dia;
    
    
    app.gasolineras = (function(){
        
        function rellenarSelect(select,options){
            for (var i = 0; i <= options.length; i++){
                var opt = document.createElement('option');
                opt.value = options[i];
                opt.innerHTML = options[i];
                select.appendChild(opt);
            }
        }
    
        function peticionAjax(url,funcion) {
            var xmlHttp = new XMLHttpRequest();
            
            xmlHttp.onreadystatechange = function() {
        
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    //console.info(JSON.parse(xmlHttp.responseText));
                    funcion(JSON.parse(xmlHttp.responseText));
                    
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
                    //console.log(i)
                });
                console.log("he acabado de traerme el json");
            }
            for (var i = 0; i < arrayProvincias.length; i++) {
                filtrarProvincia(arrayProvincias[i]);
            }
                
                
            
            //filtrarProvincia("santacruzdetenerife");
        }
    
        function filtrarProvincia(provincia){
            /*if(provincia === "todas"){
                return gasolineras;
            }else{ */
                var array = gasolineras.filter(function (el) {
                    return quitarAcentos(el.Provincia.toLowerCase().trim().replace(/\s/g,"").replace("/ ","")) === provincia.toLowerCase().trim().replace(/\s/g,"").replace("/ ","");
                });
                insertar(fire,array,provincia);
                    //return array;
            /*}*/
        }
        
        function comprobar(referencia,callback){
            referencia.once("value", function(snapshot) {
              var datosFire = snapshot.val();
              callback(datosFire);
            });
            
        }
        
        function leer(referencia,key,callback){
            console.log(key);
            var gasolineras2 = [];
            referencia.child("/"+key+"/").on("value", function(snapshot) {
                for(var gasoli in snapshot.val()){
                    gasolineras2.push(snapshot.val()[gasoli]);
                }
                callback(gasolineras2);
            }, function (errorObject) {
                //console.log("Fallo en lectura de datos: " + errorObject.code);
            });
        }
        
        function insertar(referencia,datos,key){
            referencia.child("/"+key).push(datos, function(error) {
                if (error) {
                  console.warn("No se han podido guardar los datos." + error);
                } else {
                  console.info(key + " insertado: " + datos.length );
                }
            });
        }
        
        function quitarAcentos(str){
            for (var i=0;i<str.length;i++){
                if (str.charAt(i)=="è") str = str.replace(/è/,"e");
                if (str.charAt(i)=="á") str = str.replace(/á/,"a");
                if (str.charAt(i)=="é") str = str.replace(/é/,"e");
                if (str.charAt(i)=="í") str = str.replace(/í/,"i");
                if (str.charAt(i)=="ó") str = str.replace(/ó/,"o");
                if (str.charAt(i)=="ú") str = str.replace(/ú/,"u");
            }
            return str;
        }
        
        function mostrar(data){
            
            leer(fire,data,function(data){
                
                var caja = document.getElementById("cajaMostrar");
                var contador = document.getElementById("contador");
                var html = "";
                var disponibilidad = "No disponible";
                
                caja.innerHTML = "";
                
                if (data[0] === undefined || data[0].length == 0) {
                    alert("No hay datos que mostrar, asegúrate que la página está cargando sobre el protocolo http");
                }else{
                    document.getElementById("backLoader").style.display="block";
                    data[0].forEach(function(elemento, i){
                        setTimeout(function() {
                            console.time("tiempoEnMostrar");
                            
                            var latitud = parseFloat(elemento["Latitud"].replace(/,/g, '.'));
                            var longitud = parseFloat(elemento["Longitud (WGS84)"].replace(/,/g, '.'));
                            var posicion = {lat: latitud, lng: longitud};
                            
                            html = '<div class="contenedorGasolinera">';
                            html += '<span class="direccion">' + elemento["Dirección"] + ' | ' + elemento["Código Postal"] + ' ' + elemento["Municipio"] + ', ' + elemento["Provincia"] + '</span><br/>';
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
                            contador.innerHTML = i + 1 + " / " + data[0].length + " gasolineras";
                            barra(i + 1, data[0].length);
                            
                            app.google.addMarker(posicion, html);
                            
                            var marker1er = new MarkerClusterer(map, markers,{
                                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
                            });
                            
                            if(i >= data[0].length - 1){
                                document.getElementById("backLoader").style.display="none";
                                console.timeEnd("tiempoEnMostrar");
                            }
                        }, i * 100);
                    });
                }
            });
        }
        
        function barra(actual, total) {
            var elem = document.getElementById("progreso");   
            var width = 1;
            width = (width * actual * 100) / total;
            width++; 
            elem.style.width = width + '%'; 
        }
        
        
    
    return { comprobar : comprobar, procesar : procesar, peticionAjax : peticionAjax, rellenarSelect : rellenarSelect, mostrar : mostrar };
    
    })();
    
    app.google = (function(){
        
    function login(){
        var provider = new firebase.auth.GoogleAuthProvider();
        
            
        firebase.auth().signInWithPopup(provider).then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          app.google.getUser()
          console.log(user.displayName);
          
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
        
    }
    
    function logout(){
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          alert("has cerrado sesion");
        }).catch(function(error) {
          // An error happened.
          alert("algo ha ido mal al cerrar sesion");
        });
    }
    
    function getUser(){
        if(firebase.auth().currentUser != null){
            spanNombre.innerHTML = firebase.auth().currentUser.displayName;
            imgUser.src = firebase.auth().currentUser.photoURL;
        }
        return firebase.auth().currentUser;
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
                setMapOnAll(null);
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
        console.log("hola1");
        for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
    }
    function clearMarkers() {
        setMapOnAll(null);
        console.log("hola2");
    }
    function deleteMarkers() {
        clearMarkers();
        markers = [];
        //initMap();
    }
    
    
    return { addMarker : addMarker, deleteMarkers:deleteMarkers, initMap:initMap, login:login, logout:logout, getUser:getUser };
    
    })();
    
    selectProvincias.options[selectProvincias.selectedIndex].value="defecto";
    app.gasolineras.comprobar(fire,function(dat){
        if(dat){
            console.log("Esta lleno");
        }else{
            app.gasolineras.peticionAjax("js/json.json", app.gasolineras.procesar);
            console.log("Esta vacio");
        }
    });
    app.gasolineras.rellenarSelect(selectProvincias,arrayProvincias);
    //peticionAjax("http://datos-precio-carburante.github.io/json2016h1/" + fecha + ".json", procesar);
    //peticionAjax("https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/", procesar);
    selectProvincias.addEventListener("change", function(){
        var valorSelect = selectProvincias.options[ selectProvincias.selectedIndex ].value;
        app.google.deleteMarkers();
        //filtrarProvincia(valorSelect);
        app.gasolineras.mostrar(valorSelect);
    });
    
    botonLogin.addEventListener("click",function(e){
        if(app.google.getUser()){
            if(cajaLogin.style.display == "block"){
                cajaLogin.style.display = "none";
            }else{
                cajaLogin.style.display = "block";
            }
        }else{
           app.google.login();
        }
    });
    
    botonLogout.addEventListener("click",function(e){
        app.google.logout();
        cajaLogin.style.display = "none";
        spanNombre.innerHTML = "anonimous";
        imgUser.src = "./img/google.svg";
    });
    
    
    document.addEventListener("DOMContentLoaded", function(){
        app.google.initMap();
        setTimeout(function(){
            app.google.getUser();  
        },500);
    })
    
    

})();