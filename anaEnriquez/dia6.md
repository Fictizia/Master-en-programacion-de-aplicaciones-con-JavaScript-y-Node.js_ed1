### Ejercicios

**Recuerda:** Utiliza [JSHint](http://jshint.com/) para detectar errores..

**1 -** Utiliza .assert para controlar cuando se muestra tu nombre por consola.
```javascript
    var controlador = false;
    console.assert(controlador,  "Hola, yo soy Ulises Gascón");
```

**2 -** Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
- Especificaciones:
	- Imprimir tu nombre usando **console.log, console.info, console.warn**
```javascript
    var myName = "Ana";
    console.time("Medición de mi nombre");
    	console.log(myName);
    	console.info(myName);
    	console.warn(myName);
    console.timeEnd("Medición de mi nombre");
```

**3 -** Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.
```javascript
    var nombre = "Hola, yo soy Ulises Gascón";
    console.time("presentación");
    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,nombre);
    console.timeEnd("presentación");
```

**4 -** Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
```javascript
    var nombre = "Hola, yo soy Ulises Gascón";
    console.time("presentación");
    
    // console.log
    console.group("grupo console.log");
    console.time("tiempo grupo console.log");
    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,nombre);
    console.timeEnd("tiempo grupo console.log");
    console.groupEnd();
    
    
    // console.info
    console.group("grupo console.info");
    console.time("tiempo grupo console.info");
    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,nombre);
    console.timeEnd("tiempo grupo console.info");
    console.groupEnd();
    
    
    // console.warn
    console.group("grupo console.warn");
    console.time("tiempo grupo console.warn");
    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,nombre);
    console.timeEnd("tiempo grupo console.warn");
    console.groupEnd();
    
    
    console.timeEnd("presentación");
```

**5 -** Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.
```javascript
    function magicNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min
    }

    var alumnos = [
         { nombre: "Felix", puesto: magicNumber(1, 20) },
         { nombre: "Jesus", puesto: magicNumber(1, 20) },
         { nombre: "Ana", puesto: magicNumber(1, 20) },
         { nombre: "David", puesto: magicNumber(1, 20) },
         { nombre: "Elena", puesto: magicNumber(1, 20) },
         { nombre: "Iñigo", puesto: magicNumber(1, 20) },
         { nombre: "Vicky", puesto: magicNumber(1, 20) },
         { nombre: "Victor", puesto: magicNumber(1, 20) }
     ];
     
     console.table(alumnos);
```

**6 -** Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:
- Objetivos:
	-  Captura el nombre del usuario usando prompt
	-  Pregunta al usuario si desea *"comprobar lo rápido que funciona su navegador"*.
	-  En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
    - En caso negativo mostraremos un *alert* informativo.


- Versión 1:
```javascript
    var usuario = prompt("¿Quien eres?");

	var respuesta = confirm("Bienvenido "+usuario+", ¿Deseas ver lo rápido que funciona tu navegador?");
	if (respuesta === true) {
	
	    // console.log
	    console.group("grupo console.log");
	    console.time("tiempo grupo console.log");
	    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.log");
	    console.groupEnd();
	
	    // console.info
	    console.group("grupo console.info");
	    console.time("tiempo grupo console.info");
	    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.info");
	    console.groupEnd();
	
	    // console.warn
	    console.group("grupo console.warn");
	    console.time("tiempo grupo console.warn");
	    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,usuario);
	    console.timeEnd("tiempo grupo console.warn");
	    console.groupEnd();
	
	} else {
	    alert(usuario+" no desea saberlo");
	}
```

- Versión 2:
```javascript
	var usuario = prompt("¿Quien eres?");

	while(!usuario){
		usuario = prompt("¿Quien eres?")
	}

	var respuesta = confirm("Bienvenido "+usuario+", ¿Deseas ver lo rápido que funciona tu navegador?");
	if (respuesta) {
	
	    // console.log
	    console.group("grupo console.log");
	    console.time("tiempo grupo console.log");
	    console.log("%c %s", "background: black; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.log");
	    console.groupEnd();
	
	    // console.info
	    console.group("grupo console.info");
	    console.time("tiempo grupo console.info");
	    console.info("%c %s", "background: #3EBDFF; color: #FFF; font-size:20px;" ,usuario);
	    console.timeEnd("tiempo grupo console.info");
	    console.groupEnd();
	
	    // console.warn
	    console.group("grupo console.warn");
	    console.time("tiempo grupo console.warn");
	    console.warn("%c %s", "background: #FFAA00; color: #FFF; font-size:22px;" ,usuario);
	    console.timeEnd("tiempo grupo console.warn");
	    console.groupEnd();
	
	} else {
	    alert(usuario+" no desea saberlo");
	}
```


