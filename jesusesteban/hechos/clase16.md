# Clase 16


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


