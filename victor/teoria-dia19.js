/* Ejercicios día 19 */
//Ejercicio 1
function peticionAjax(url, myFunction) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            myFunction(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function generateHTML(data) {
    data.forEach(function(e) {
        document.querySelector("body").innerHTML += "<h1>Zona: " + e.name + "</h1>" +
                                                    "<h2>Datos recogidos:</h2>"+
                                                    "<div>" +
                                                        "<p>Id: " + e.id + "</p>" +
                                                        "<p>Latitud: " + e.UTM_latitud + " / Longitud: " + e.UTM_longitud +" / Altura: " + e.altura + "</p>" +
                                                        "<div class='list'>" +
                                                            "<p>Parámetros: </p>" +
                                                            iterator(e.parametros) +
                                                        "</div><div class='list'>" +
                                                            "<p>Mediciones: </p>" +
                                                            iterator(e.mediciones) +
                                                        "</div>" +
                                                    "</div>";
    });
}

function iterator(json) {
    var html = "";
    
    if(typeof json === "object") {
        for(var obj in json) {
            html += "<ul>";
           
            if(typeof json[obj] === "object") {
                html += "<li>" + obj.replace("_", " ") + "</li>" + iterator(json[obj]);
            } else {
                html += "<li>" + obj.replace("_", " ") + ": " + json[obj] + "</li>";
            }
            
            html += "</ul>";
        }
    }
    return html;
}

peticionAjax("http://airemad.com/api/v1/pollen", generateHTML);

//Ejercicio 3
function getData(data) {
    console.table(data.cuadromandos.cuadromando);
}
peticionAjax("http://opendata.gijon.es/descargar.php?id=163&tipo=JSON", getData);