![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 16

### BOM (Browser Object Model)

![DOM, BOM y JS](http://kottans.org/js-slides/js_dom/img/windowObjects.png)

**window.history**
- propiedades:
```javascript
	history.length
```
- Métodos:
```javascript
	// Ir atras
	history.go(-1);
	history.back();
	
	// Ir adelante
	history.go(1);
	history.forward();
```

**window.navigator**
- Propiedades:
```javascript
	function conversorTiempo(segundos){
		var fecha = new Date(segundos * 1000);
		var hh = fecha.getUTCHours();
		var mm = fecha.getUTCMinutes();
		var ss = fecha.getSeconds();

		if (hh < 10) {hh = "0"+hh;}
		if (mm < 10) {mm = "0"+mm;}
		if (ss < 10) {ss = "0"+ss;}

		return hh+":"+mm+":"+ss;
	}

	function informacionSistema(){
		console.log("appCodeName:", window.navigator.appCodeName);
		console.log("appName:", window.navigator.appName);
		console.log("appVersion:", window.navigator.appVersion);
		console.log("platform:", window.navigator.platform);
		console.log("product:", window.navigator.product);
		console.log("userAgent:", window.navigator.userAgent);
		console.log("javaEnabled:", window.navigator.javaEnabled());
		console.log("language (used):", window.navigator.language);
		console.log("language (support):", window.navigator.languages);
		console.log("conectado a internet?", window.navigator.onLine);
		console.log("mimeTypes:",window.navigator.mimeTypes);
		console.log("Plugins:", navigator.plugins);

		navigator.getBattery().then(function(bateria){
			console.log("Batería cargando?", bateria.charging)
			
			if(bateria.charging){
				console.log("Tiempo de carga:", bateria.chargingTime)
			}
			console.log("Batería %:", bateria.level*100)
			console.log("Tiempo restante:", conversorTiempo(bateria.dischargingTime))

		});

	}
```

**window.screen**
- Propiedades:
```javascript
	function informacionPantalla(){
		console.log("availTop:", window.screen.availTop);
		console.log("availLeft:", window.screen.availLeft);
		console.log("availHeight:", window.screen.availHeight);
		console.log("availWidth:", window.screen.availWidth);
		console.log("colorDepth:", window.screen.colorDepth);
		console.log("height:", window.screen.height);
		console.log("left:", window.screen.left);
		console.log("orientation:", window.screen.orientation);
		console.log("pixelDepth:", window.screen.pixelDepth);
		console.log("top:", window.screen.top);
		console.log("width:", window.screen.width);
	}
```



**Window.location y Document.location**

- Propiedades:
```javascript
	function informacionEnlace(url){
	
		var enlace = document.createElement('a');
		enlace.href = url || 'https://fictizia.com:3000/formacion/curso_javascript?q=JS#contenido-curso';
		
		console.log("href:" ,enlace.href);
		console.log("protocol:", enlace.protocol);
		console.log("host:", enlace.host);
		console.log("hostname:", enlace.hostname);
		console.log("port:", enlace.port);
		console.log("pathname:", enlace.pathname);
		console.log("search:", enlace.search);
		console.log("hash:", enlace.hash);
		console.log("origin:", enlace.origin);
	}
```

- Métodos:
	- .assign() *Carga una página nueva*
	```javascript
		document.location.assign('http://fictizia.com/formacion/curso_javascript');
	```
	- .reload() *Recarga*
	```javascript
		document.location.reload(); // Recarga
		document.location.reload(true); // Recarga sin usar el cache
		document.location.reload(forcedReload); // Recarga SIEMPRE sin usar el cache
	```
	- .replace() *Carga una página nueva, sustituyendo la actual en el historial*
	```javascript
		document.location.replace('http://fictizia.com/formacion/curso_javascript');
	```
	- .toString() *Devuelve el href como cadena*
	```javascript
		var enlace = document.createElement('a');
		enlace.href = 'http://fictizia.com/formacion/curso_javascrip';
		
		console.log("toString:" ,enlace.toString());
	```


### DOM

- **[DOM - Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)**
- **[Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)**
- **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node)**
- **[NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)**


IMPORTANTE:  Los retornos de *Node.childNodes* y *document.querySelectorAll* - NO son arrays. 

```javascript

var listaDivs = document.querySelectorAll('div');

// Iteración
for (var i = 0; i < listaDivs.length; ++i) {
  var elemento = listaDivs[i];
  console.log("Elemento: ", elemento);
}

// Conversión
var listaDivsArray = Array.prototype.slice.call(listaDivs);
```

### Estilos con Javascript
```javascript
// getter
window.getComputedStyle(document.getElementById("id"));
window.getComputedStyle(document.body).getPropertyValue('display');
// setter
document.body.style.display="none";
document.getElementById("id").style.display="none";
```


### Selectors

- [Soporte](http://caniuse.com/#search=querySelector)

- Convencional:
    - getElementById():
    ```javascript
        // <tag id = "x" >
        document.getElementById("id");
    ```
    
    - getElementsByName():
    ```javascript
        // <tag name = "x" >
        document.getElementsByName("fname");
    ```
    
    - getElementsByTagName():
    ```javascript
        // <tag >
        document.getElementsByTagName("input");
    ```

- Selectores CSS3:

    - URL que empieza con "javascript:"
    ```javascript
        a[href^="javascript:"] {color:blue;}
    ```
    
    - URL que contiene "google.es"
    ```javascript
        a[href*="google.es"] {color:orange;}
    ```
    
    - URL que termina con ".pdf"
    ```javascript
        a[href$=".pdf"] {color:red;}
    ```


- Comprobando disponibilidad del API:
```javascript
// op.1 - Positivo

    if( document.querySelector && document.querySelectorAll ){
        console.info("querySelector() y querySelectorAll() estan soportados!!")
    } else {
        console.warn("querySelector() y querySelectorAll() no estan soportados!!")
    }
// op.2 - Negativo

    if( typeof document.querySelector !== "function" && typeof document.querySelectorAll !== "function" ){
        console.warn("querySelector() y querySelectorAll() no estan soportados!!")
    } else {
        console.info("querySelector() y querySelectorAll() estan soportados!!")
    }

```

- querySelector():
Devuelve el primer elemento que coincida con el selector 

```html
    <div id="miDiv">
        <span id="miId5" class="miClase" title="cinco"></span>
        <span id="miId4" class="miClase" title="cuatro"></span>
        <span id="miId3" class="miClase" title="tres"></span>
        <span id="miId2" class="miClase" title="dos"></span>
        <span id="miId1" class="miClase" title="uno"></span>
    </div> 
```

```javascript
    document.getElementById('miId1').title // uno
    document.querySelector('#miDiv .miClase').title // cinco
    document.querySelector('#miDiv #miId1.miClase').title // uno
    document.querySelector('#miDiv .inventado').title // ERROR -> undefined
    document.querySelector('#miDiv .miClase[title^=u]').title // uno
```

- querySelectorAll():
Devuelve todos los elementos que coincida con el selector en un pseudo-array
```javascript
    document.querySelectorAll('#miDiv .miClase') // [<span id="miId5" ... ]
    document.querySelectorAll('p') // todos los parrafos
    document.querySelectorAll('div, img') // todos los divs e imágenes
    document.querySelectorAll('a > img') // todos las imágenes contenidas en enlaces
```

### Conversión a Arrays

- Mas info en [Convert NodeList to Array de David Walsh](https://davidwalsh.name/nodelist-array)
```javascript

//Opción 1
var nodesArray = Array.prototype.slice.call(document.querySelectorAll("div"));

//Opción 2
var nodesArray = [].slice.call(document.querySelectorAll("div"));
```


### Ejercicios

**1 -** Saca una lista de los [cursos disponibles en Fictizia](http://www.fictizia.com/) en las 4 areas de formación y conviertelo en Markdown. 
Características:
- Cada Bloque de cursos debe estar identificado por el título correspondiente.
- Cada curso debe contener el enlace al mismo y especificar el número de horas entre parentesis.

```javascript
	// Simular el Click (Opcional)
	document.getElementById('web_Tab').click();
	
	var areas = document.querySelectorAll('#areas > section');
	var markdown = "# Cursos de Fictizia\n\n";
	
	for (var i = 0; areas.length > i; i++) {
	
	    var area = areas[i].querySelectorAll('li > a');
	    markdown += "## " + areas[i].querySelector('h2').innerText.trim() + "\n\n";
	    markdown += "**Total de cursos: " + area.length + "**\n";
	  
	    for (var j = 0; area.length > j; j++) {
	            var link = area[j].getAttribute("href");
	            var horas = area[j].querySelector(".contextualInfo").innerText.trim();
	                horas = horas.replace("Curso de ", "").replace("Workshop de ").replace("Master de ", "").replace("undefined", "");
	            var titulo = area[j].querySelector("strong").innerText.trim();
	            var curso = "- [" + titulo + " (" + horas + ")](" + link + ")\n";
	            markdown += curso;
	    }
	    markdown += "\n\n"
	}
	
	console.log(markdown);
```

- Respuesta esperada (consola):

```
	# Cursos de Fictizia
	
	## Cursos de Diseño interactivo & Desarrollo Web
	
	**Total de cursos: 13**
	- [Master en Diseño de interfaz y Front-end con HTML5, CSS3 y jQuery (150 horas)](http://www.fictizia.com/formacion/master_interfaz_frontend_html5_css3_jquery)
	- [Curso de Diseño de interfaz en proyectos Web, Apps y Smart TV (45 horas)](http://www.fictizia.com/formacion/curso_diseno_interfaz_web_apps_smart_tv)
	- [Curso de JavaScript para desarrolladores web (45 horas)](http://www.fictizia.com/formacion/curso_javascript)
	- [Curso de JavaScript Avanzado para desarrolladores Front-end (72 horas)](http://www.fictizia.com/formacion/curso_javascript_avanzado)
	- [Curso de Node.js para desarrolladores Front-end (24 horas)](http://www.fictizia.com/formacion/curso_nodejs)
	- [Curso de AngularJS (30 horas)](http://www.fictizia.com/formacion/curso_angularjs)
	- [Curso de Maquetación web con HTML5 y CSS3 (60 horas)](http://www.fictizia.com/formacion/curso_frontend_html5_css3)
	- [Curso de JQuery para maquetadores web (36 horas)](http://www.fictizia.com/formacion/curso_programacion_jquery)
	- [Curso de Wordpress esencial (24 horas)](http://www.fictizia.com/formacion/wordpress_esencial)
	- [Curso de WordPress (45 horas)](http://www.fictizia.com/formacion/curso_wordpress_profesionales)
	- [Curso de Programación PHP (45 horas)](http://www.fictizia.com/formacion/curso_php_mysql)
	- [Curso de PHP Avanzado con Laravel (36 horas)](http://www.fictizia.com/formacion/curso-laravel-php-avanzado)
	- [Curso de React + Redux (30 horas)](http://www.fictizia.com/formacion/curso-react-js-redux)
	
	## Cursos de Producción 3D & Efectos visuales
	...
```

**2 -** Hagamos la [web del Metro](https://www.metromadrid.es/es/index.html) más divertida.
- Saca el estado actual de todas las líneas del metro de Madrid por consola.

```javascript
	var lineas = document.querySelectorAll('.bloquet');
	
	for (var i = 0; i < lineas.length; i++) {
	  var estado = lineas[i].querySelector('.circulacion > .txt > a');
	  
	  if(!estado) estado = lineas[i].querySelector('.circulacion > .r > a');
	  
	  if(estado) console.log(estado.innerText.trim());
	  
	}
```


**3 -**  Diseña un script que sustituya todas las imágenes de las entradas de [Tecnología del Mundo Today](http://www.elmundotoday.com/noticias/tecnologia/) por [imágenes dummy de gatitos](https://placekitten.com/).
```javascript
		var imagenes = document.querySelectorAll('.td-module-thumb img');

		for(var i = 0; i < imagenes.length; i++){
			var url = document.querySelectorAll('.td-module-thumb img')[i].src;
			var ancho = document.querySelectorAll('.td-module-thumb img')[i].width;
			var alto = document.querySelectorAll('.td-module-thumb img')[i].height;
			var sustituto = "http://lorempixel.com/"+ancho+"/"+alto+"/cats";
			document.querySelectorAll('.td-module-thumb img')[i].src = sustituto;
			// Hack para solucionar el visionado
			document.querySelectorAll('.td-module-thumb img')[i].removeAttribute("srcset");
		}
```

