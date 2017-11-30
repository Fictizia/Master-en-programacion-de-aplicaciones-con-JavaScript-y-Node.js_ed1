//Ejercicio 1

function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = JSON.parse(xmlHttp.responseText);
                sacarDatos(datos);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }
    
function sacarDatos(datos){
    var dondePinto = document.querySelector("body");
    datos.forEach(function(e){
        dondePinto.innerHTML += "<h1>Zona: "+e.name+"</h1>"
        dondePinto.innerHTML += "<h2>ID: "+e.id+"</h2>"
        dondePinto.innerHTML += "<h2>Longitud: "+e.UTM_longitud+"</h2>"
        dondePinto.innerHTML += "<h2>Latitud: "+e.UTM_latitud+"</h2>"
        dondePinto.innerHTML += "<h2>Altura: "+e.altura+"</h2>"
        retornarParametros(e.parametros,dondePinto);
        retornarMediciones(e.mediciones,dondePinto);
    });
}
function retornarParametros(parametros,dondePinto){
    dondePinto.innerHTML += "<h2>Parametros:</h2>"
    for(var objeto in parametros){
        dondePinto.innerHTML += "<h4>"+objeto+"</h4>"
        dondePinto.innerHTML += "<p>Medio: "+parametros[objeto].medio+"</p>"
        dondePinto.innerHTML += "<p>Alto: "+parametros[objeto].alto+"</p>"
        dondePinto.innerHTML += "<p>Muy Alto: "+parametros[objeto].muy_alto+"</p>"
    }
}

function retornarMediciones(parametros,dondePinto){
    dondePinto.innerHTML += "<h2>Mediciones:</h2>"
    for(var objeto in parametros){
        dondePinto.innerHTML += "<h4>"+objeto+"</h4>"
        dondePinto.innerHTML += "<p>Fecha: "+parametros[objeto].fecha+"</p>"
        dondePinto.innerHTML += "<p>Valor: "+parametros[objeto].valor+"</p>"
        dondePinto.innerHTML += "<p>Resumen: "+parametros[objeto].resumen+"</p>"
    }
}


peticionAjax("http://airemad.com/api/v1/pollen");


//Ejercicio 2
var caja = document.getElementsByTagName("body")[0];
function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = (JSON.parse(xmlHttp.responseText));
                mostrar(datos);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }else if (xmlHttp.readyState === 4 && xmlHttp.status === 401){
                console.error("ERROR! 401");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
}

peticionAjax("http://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=3ab0d139c5a70e4b922516b82001f560")
peticionAjax("http://api.openweathermap.org/data/2.5/weather?q=Barcelona&appid=3ab0d139c5a70e4b922516b82001f560")
peticionAjax("http://api.openweathermap.org/data/2.5/weather?q=Valencia&appid=3ab0d139c5a70e4b922516b82001f560")

function mostrar(data){
    var html = "";
    
    html += "<h1>"+data.name+"</h1>";
    html += "<h2>"+data.weather[0].description+"</h2>";

    caja.innerHTML += html;
}
//Ejercicio 3
function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = JSON.parse(xmlHttp.responseText);
                sacarDatos(datos);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
}

peticionAjax("http://opendata.gijon.es/descargar.php?id=163&tipo=JSON")
    
function sacarDatos(datos){
    var cuadroMando = datos.cuadromandos;
    cuadroMando = cuadroMando.cuadromando;
    console.table(cuadroMando[5]);
}