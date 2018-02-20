![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 6

### Evento: Cloud Fest 2017

![img](https://cloudfestmad.firebaseapp.com/images/banners/banner.png)

**[Info y entradas](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/12)**


## Proyecto personal

**Funcionamiento:**
- Usaremos los [issues de nuestro repositorio](https://github.com/Fictizia/Curso-JS-para-desarrolladores-web_ed8/issues) para coordinar todas las dudas que tengais.
- Crearemos un nuevo repositorio en Github para desarrollar el proyecto.

**Requisitos para este proyecto:**
- Manipulación dinánima del DOM
- Llamada AJAX

**Fecha de entrega:**
- Clase 26

### JSHint
- [JSHint Online](http://jshint.com/)
- [JSHint About](http://jshint.com/about/)
- [JSHint Repository](https://github.com/jshint/jshint)

### Consola

- [@ChromeDevTools en Twitter](https://twitter.com/chromedevtools?lang=es)
- [Chrome DevTools](https://developer.chrome.com/devtools)

**Métodos:**
- .assert() *Aparece un mensaje de error en la consola si la afirmación es falsa.*:
```javascript
 var controlador = false;
 console.assert(controlador, "\"controlador\" es igual a \"false\"");
```

- .clear() *Limpia la consola*:
```javascript
 console.clear()
```


- .dir() *Retorna una lista interactiva de las propiedades de un objeto*:
```javascript
 console.dir(document.body);
```

- .dirxml() *Retorna una representación HTML del objeto*:
```javascript
 console.dirxml(document.body);
```


- Agrupadores:
 - .group() *Crea un grupo de mensajes de consola*:
 ```javascript
     console.group("bucleFor");
     for(var i=100; i>0; i--){
         console.info("Iteración numero %i", i)
     }
     console.groupEnd();
 ```
 - .groupCollapsed() *Crea un grupo de mensajes de consola minimizados (por defecto)*:
 ```javascript
     console.groupCollapsed("bucleFor");
     for(var i=100; i>0; i--){
         console.info("Iteración numero %i", i)
     }
     console.groupEnd();
 ```
 - .groupEnd() *Cierra el grupo de mensajes*:
 ```javascript
     console.group("bucleFor");
     for(var i=100; i>0; i--){
         console.info("Iteración numero %i", i)
     }
     console.groupEnd();
 ```


- Tablas:
 - .table() *Muestra los datos dentro de una tabla*:
 ```javascript
 var lenguajes = [
     { nombre: "JavaScript", extension: ".js" },
     { nombre: "TypeScript", extension: ".ts" },
     { nombre: "CoffeeScript", extension: ".coffee" }
 ];
 
 console.table(lenguajes);
 
 console.table(lenguajes, "extension");
 ```

- Gestión del tiempo:
 - .time() *Inicia un contador en ms*:
 - .timeEnd() *Para el contador y devuelve el resutlado*:
 ```javascript
  console.time("Medición de miArray");
  var miArray = new Array(1000000);
  for (var i = miArray.length - 1; i >= 0; i--) {    
   miArray[i] = new Object();
  };
  console.timeEnd("Medición de miArray");
 ```

- Notificadores:
 - .log() *Saca un mensaje por consola*:
 ```javascript
  console.log("Hola en formato clásico");
 ```
 - .info() *Similar a console.log*:
 ```javascript
  console.info("Hola en formato informativo");
 ```
 - .warn() *Similar a Console.log*:
 ```javascript
  console.warn("Hola en formato alerta");
 ```
 - .error() *Similar a console.log, invcluye *:
 ```javascript
  console.error("Hola en formato error");
 ```

- Formateadores:

Formato | Descripción
------------ | -------------
%s | Cadena
%d o %i | Número entero
%f | Decimal
%o | DOM
%O | Objeto js
%c | CSS

- Ejemplos:
 - *%o* para estrcuturas del DOM
 ```javascript
  var parrafos = document.getElementsByTagName("p");
  console.log("DOM: %o", parrafos);
 ```
 - *%O* para objectos JS
 ```javascript    
  var objeto = {"nombre":"Yo","Apellido":"Mismo"};
  console.log("Objeto: %O", objeto);
 ```
 - usando CSS:
 ```javascript
  console.log('Esto es aburrido...');
  console.log('%c Pero se puede mejorar fácilmente! ', 'background: #3EBDFF; color: #FFF; font-size:25px;');
 ```


### Caracteres especiales:

- `\t` *Tabulador*
- `\'` *Comillas Simples*
- `\"` *Comillas Dobles*
- `\\` *\*
- `\n` *Salto de línea*

```javascript
    function caracteresDemo () {
    console.log("Hasta aquí... todo correcto. Ahora vamos a \"tabular\":\tves? Ya estamos más lejos.\n\'Otra linea ;-)\'")
    };
    
    caracteresDemo()
```

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
	var nombre = "Hola, yo soy Ulises Gascón";
	console.time("presentación");
	console.log(nombre);
	console.info(nombre);
	console.warn(nombre);
	console.timeEnd("presentación");
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



### Comentarios
- Una línea
```javascript
// Comentario en una línea
```
- Multiples Líneas
```javascript
/*
Una Línea....
Otra linea...
Etc...
*/
```
- [JSDoc](https://en.wikipedia.org/wiki/JSDoc)

### Variables

- No se pueden usar espacios
```javascript
var con espacios = 1;
```

- No usar un número delante
```javascript
var 1numero = 1;
```

- Válidos, pero no recomendado
```javascript
var con_guiones_bajos = 1;
var dame$ = 1;
```

- Válidos, es mejor usar [camelCase](https://es.wikipedia.org/wiki/CamelCase)
```javascript
var otraOpcion = 1;
var opcionCon123123 = 1;
```


### Tipos de variables

Operador *typeof* y su [especificación](http://www.ecma-international.org/ecma-262/5.1/#sec-11.4.3)

- [x] Undefined
```javascript
typeof undefined
typeof noDefinido
typeof tampocoCreado
```

- [x] Object
```javascript
typeof null
typeof [15, 4]
typeof new Date()
typeof {a:1}
```

- [x] Boolean
```javascript
typeof false
typeof true
typeof Boolean(false)
```

- [x] Number
```javascript
typeof 3
typeof 3.14
typeof NaN
typeof Infinity
```

- [x] String
```javascript
typeof "hola"
```

- [x] Function
```javascript
typeof function(){}
```


### Matemáticas Básicas
```javascript
var suma = 5 + 4;
var resta = 10 - 6;
var multiplicacion = 3 * 3;
var division = 6 / 2;
var modulo = 43 % 10;

function calcular (operacion) {
    console.log(operacion);
};
```

### Matemáticas Básicas (Agrupando operaciones)
```javascript
var expresion1 = (3 + 7) * 10;
var expresion2 = (-56 * 6) - 74 * -25;
var expresion3 = (3 * 3) + 10 - 12 / 2;
var expresion4 = 44 + (83 % (33 + 100));
var expresion5 = -145 + (500 / 10 - 5) + 10 * 10 ;

function calcular (operacion) {
    console.log(operacion);
};
```

### Matemáticas Básicas (crecimiento y decrecimiento)
```javascript
var numero = 5;

console.log(--numero); // 4
console.log(numero--); // 5 (luego 4)
console.log(++numero); // 6
console.log(numero++); // 5 (luego 6)
```

### Operadores de asignación
- = *Asignacion*
```javascript
var x = 1;
var y = 2;
x = y;
console.info("\"x\" vale ", x);
```

- += *Suma*
```javascript
var x = 1;
var y = 2;
x += y;
console.info("\"x\" vale ", x); // x = x + y
```

- -= *Resta*
```javascript
var x = 1;
var y = 2;
x -= y;
console.info("\"x\" vale ", x); // x = x - y
```

- *= *Multiplicación*
```javascript
var x = 1;
var y = 2;
x *= y;
console.info("\"x\" vale ", x); // x = x * y
```

- /= *División*
```javascript
var x = 1;
var y = 2;
x /= y;
console.info("\"x\" vale ", x); // x = x / y
```

- %= *Resto*
```javascript
var x = 1;
var y = 2;
x %= y;
console.info("\"x\" vale ", x); // x = x % y
```


**Jugando con variables**

```javascript
var empezoComo3 = 3;
era3();

empezoComo3 = 35;
era3();

empezoComo3 = empezoComo3 + 30;
era3();

empezoComo3 += 4;
era3();

empezoComo3++;
era3();

empezoComo3 -= 12;
era3();

empezoComo3--;
era3();

empezoComo3 *= 10;
era3();

empezoComo3 /= 11;
era3();

empezoComo3 += "texto";
era3();

empezoComo3 += 20;
era3();

empezoComo3++;
era3();


function era3 () {
    console.log("empezoComo3 debería ser 3, ahora su valor es " + empezoComo3);
};
```


### Interacción Básica con el Usuario

- alert():
    ```javascript
    alert("¡Bienvenido a esta web!");
    ```

- confirm():
    ```javascript
    confirm("¿Esta seguro que desea abandonar esta web?");
    ```


- Ejemplo:
    ```javascript
    var respuesta = confirm("presiona un botón!");
    if (respuesta === true) {
        console.log("Has aceptado!");
    } else {
        console.log("Has cancelado");
    }
    ```

- prompt():
    ```javascript
    prompt("¿Como te llamas?");
    ```

- Registremos los datos en una variable:
    ```javascript
    var nombre = prompt("¿Como te llamas?");
    ```

### Ejercicios

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
