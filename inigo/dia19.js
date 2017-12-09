//1 - Sacar en el html los datos de polen.
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            //console.info(JSON.parse(xmlHttp.responseText));
            mostrar(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

peticionAjax("http://airemad.com/api/v1/pollen");
var caja = document.getElementsByTagName("body")[0];
 
function mostrar(data){
    caja.innerHTML = "";
    var html = "";
    
    data.forEach(function(elemento){
        html += "<div style='margin: 20px; display: inline-block; width: calc(33% - 40px); border: 1px solid #FF00FF;'><h2 style='background: #FF00FF; margin: 0;padding: 15px;'>" + elemento.name + " (id:" + elemento.id + ")</h2>";
        html += "<div style='background: #FFFF; margin: 0;padding: 15px;'><div><h3>Latitud: " + elemento.UTM_latitud + "    Longitud: " + elemento.UTM_longitud + "      Altura: " + elemento.altura + "</div>";
        html += "<h4 style='margin: 0;'>Mediciones: </h4>";
        html += "<ul>" + listar(elemento.mediciones) + "</ul>";
        html += "<h4>Parametros: </h4>";
        html += "<ul>" + listar(elemento.parametros) + "</ul></div></div>";
    });
    
    caja.innerHTML = html
}

function listar(objeto){
    var html = "";
    if(!objeto) {
        return;
    }else{
        for (var i in objeto) {
            var hola= objeto[i];
            html += "<div style='display: inline-block; margin-right: 20px;'><h4>" + i + "</h4><ul>";
            console.log(i);
            for (var j in hola) {
                html += "<li>" + j + " -> " + hola[j] + "</li>";
                //console.log("nombre: " + j + " valor: " + hola[j]);
            }
            html += "</ul></div>";
        }
    }
    return html;
}

//2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401
var caja = document.getElementsByTagName("body")[0];

function temperaturaCiudad (ciudad) {
    var xmlHttp = new XMLHttpRequest(),
    APIKey = '7ea0ea9ea2bf2fbffa3e3c4ebff5b456', // Puedes usar una cuenta gratuita -> http://openweathermap.org/price
    cURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&APPID='+APIKey;

    xmlHttp.onreadystatechange = function () {
        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
              mostrar(JSON.parse(xmlHttp.responseText))
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };

    xmlHttp.open( "GET", cURL, true );
    xmlHttp.send();
}

function mostrar(data){
    var html = "";
    
    html += "<h1>"+data.name+"</h1>";
	html += "<h2>"+data.weather[0].description+"</h2>";

    caja.innerHTML += html;
}

temperaturaCiudad("Madrid");
temperaturaCiudad("Barcelona");
temperaturaCiudad("Valencia");
 
   
//3 - Jugando con datos abiertos, saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.
function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            //console.info(JSON.parse(xmlHttp.responseText));
            mostrar(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}
peticionAjax("http://opendata.gijon.es/descargar.php?id=163&tipo=JSON")
    
function mostrar(data){
    var cuadroMando = data.cuadromandos;
    cuadroMando = cuadroMando.cuadromando;
    console.log(cuadroMando[5]);
}