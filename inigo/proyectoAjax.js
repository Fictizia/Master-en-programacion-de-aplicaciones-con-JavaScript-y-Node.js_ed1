//FUllContact
//crossorigin.me
function peticionAjax(valor) {
    var xmlHttp = new XMLHttpRequest();
    var apikey2= "R42Ktjga2dCxb9lN4dZuO0GJyu2z0Jwt";
    
    var apikey = "3bb940e8f739e0ec";
    var parametro = "email";
    var url = "https://api.fullcontact.com/v2/person.json?" + parametro + "=" + valor + "&apiKey=" + apikey2;

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}


peticionAjax("https://api.fullcontact.com/v2/person.json?email=inigojorcano@gmail.com&apiKey=3bb940e8f739e0ec");
peticionAjax("https://api.fullcontact.com/v2/person.json?phone=+34699523001&apiKey=3bb940e8f739e0ec");


peticionAjax("https://api.fullcontact.com/v2/person.json?phone=+13037170414&apiKey=3bb940e8f739e0ec");



peticionAjax("https://api.fullcontact.com/v3/person.enrich?email=inigojorcano@gmail.com&apiKey=3bb940e8f739e0ec");




function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.info(JSON.parse(xmlHttp.responseText));
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.setRequestHeader("Accept", "application/json");
    //xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send();
}

peticionAjax("http://crossorigin.me/https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/")

//http://datos.gob.es/es/catalogo/e04990201-precio-de-carburantes-en-las-gasolineras-espanolas
//https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/

//http://datos-precio-carburante.github.io/json2016h1/20160327.json             -->    Funciona pero no es la oficial