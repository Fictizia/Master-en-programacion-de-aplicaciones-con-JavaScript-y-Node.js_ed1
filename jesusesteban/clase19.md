### Ejercicios

**1 -** Sacar en el html los [datos de polen](http://airemad.com/api/v1/pollen).

```javascript
var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {

  if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var datos = (JSON.parse(xmlHttp.responseText));

      var contenido = "";
      datos.forEach(function(estacion) {
          contenido += "<h1>" + estacion.name + " (" + estacion.id + ")</h1>"
          contenido += "<ul>"

          for (var medicion in estacion.mediciones) {
              contenido += "<li>" + medicion + ": <i>" + estacion.mediciones[medicion]["resumen"] + "</i></li>"
          }

          contenido += "</ul>"
      })
      document.body.innerHTML = contenido;
  } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
      console.error("ERROR! 404");
      console.info(JSON.parse(xmlHttp.responseText));
  }
};

xmlHttp.open("GET", "http://airemad.com/api/v1/pollen", true);
xmlHttp.send();
```

**2 -** Sacar en el html el tiempo meteorológico de Madrid, Barcelona y Valencia. 
Nota: http://openweathermap.org te será de gran ayuda, busca la solución al error 401


```javascript
	var contenido = "";
  	function temperaturaCiudad (ciudad) {
        var xmlHttp = new XMLHttpRequest(),
        APIKey = '', // Puedes usar una cuenta gratuita -> http://openweathermap.org/price
        cURL = 'http://api.openweathermap.org/data/2.5/weather?q='+ciudad+'&APPID='+APIKey;
    
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = (JSON.parse(xmlHttp.responseText));
	              contenido += "<h1>"+datos.name+"</h1>"
	              contenido += "<p>"+datos.weather[0].description+"</p>"
	              document.body.innerHTML = contenido;
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                datos = JSON.parse(xmlHttp.responseText);
                console.error("ERROR! 404");
                console.info(datos);
            }
        };
    
        xmlHttp.open( "GET", cURL, true );
        xmlHttp.send();
    }
    
    temperaturaCiudad("Madrid");
    temperaturaCiudad("Barcelona");
    temperaturaCiudad("Valencia");
 ```

**3 -** Jugando con [datos abiertos](http://datos.gob.es/), saquemos los detalles de todos los cuadros eléctricos de Gijón por consola.


```javascript
    function peticionAjax (url) {
	  var xmlHttp = new XMLHttpRequest();
	
	            xmlHttp.onreadystatechange = function () {
	
	                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
	                    var datos = (JSON.parse(xmlHttp.responseText));
                        console.log(datos)
	                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
	                    console.error("ERROR! 404");
	                    console.info(JSON.parse(xmlHttp.responseText));
	                }
	            };
	
	            xmlHttp.open( "GET", url, true );
	            xmlHttp.send();
	}
    
	peticionAjax("http://opendata.gijon.es/descargar.php?id=163&tipo=JSON");
```

```
// Podemos encontrar errores en las respuestas.
// cuadromando[5] ...

    calle: "Faustina &#193;lvarez Garc&#237;a"
    latitud: 43.526376045
    longitud: -5.685764873
    numero: ""
    potencia_w_: 17321

// ...
```