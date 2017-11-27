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