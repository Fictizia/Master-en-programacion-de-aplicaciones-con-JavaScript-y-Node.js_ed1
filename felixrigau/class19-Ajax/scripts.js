// 1 - Sacar en el html los datos de polen.

// Tu solución
function showPollenDatas() {
    var json = makeRequest('http://airemad.com/api/v1/pollen');
    if (json) {
        console.table(json);
    } else {

    }
}

// 2 - Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401

// Tu solución


// 3 - Jugando con datos abiertos, saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.

// Tu solución



// // Podemos encontrar errores en las respuestas.
// // cuadromando[5] ...

//     calle: "Faustina &#193;lvarez Garc&#237;a"
//     latitud: 43.526376045
//     longitud: -5.685764873
//     numero: ""
//     potencia_w_: 17321

// // ...

function makeRequest(url, httpMethod, asynchronous) {

    var request = new XMLHttpRequest();
    request.open(httpMethod,url, asynchronous);
    request.send(null);

    if (request.readyState == 4 && request.status >= 200 && request.status < 300 && request.responseText ) {
        var json = JSON.parse(request.response);
        return json;
    }else{
        return false;
    }

}
