![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 15

### Scope

- Declaración y ejecución:
```javascript
	var numero = 450;
	var otroNumero = 23;

	function sumaCuadrados (a, b) {
		var numero = a;
		var otroNumero = b;
		var calculo = (numero*numero) + (otroNumero*otroNumero);
		console.log("\"numero\" es \""+numero+"\", local");
		console.log("\"otroNumero\" es \""+otroNumero+"\", local");
	};

	function verificarGlobales() {
		console.log("\"numero\" es \""+numero+"\", global");
		console.log("\"otroNumero\" es \""+otroNumero+"\", global");
	};
```


### Funciones Avanzadas

- Anónimas (expresiones):
```javascript
	var sumaCuadrados = function (a, b) {
		return (a*a) + (b*b);
	};
    
    console.log("El .name de sumaCuadrados es "+sumaCuadrados.name)
```

- Funciones como dato:
```javascript
	function saludo () {
		console.log("hola!");
	};

	function lanzar (funcion){
		funcion();
	};
```

- Funciones anónimas autoejecutables:
```javascript
	(function() {
		console.log("hola Amigo/a")

	})(); //ex:Jquery
```

- Funciones anónimas con parámetros:
```javascript
	( function(quien){
	   console.log("hola " + quien);
	})("Amigo/a");
```

- Función que devuelve una función anónima:
	- Asignando una variable:
    ```javascript
	function saludo(quien){
	        return function(){
	                console.log("hola " + quien);
	        }
	}
	var saluda = saludo("Amigo/a");
	saluda();
    ```

	- Sin asignar una variable:
    ```javascript
	function saludo(quien){
	        return function(){
	                console.log("hola " + quien);
	        }
	}
	saludo("Amigo/a")();
    ```

### Anidación de funciones

- Anidación:
```javascript
	function saludar(quien){
	        function alertasaludo(){
	                console.log("hola " +  quien);
	        }
	        return alertasaludo;
	}
	var saluda = saludar("Amigo/a");
	saluda();
```

- Anidación:
```javascript
	function saludar(quien){
	        function alertasaludo(){
	                console.log("hola " +  quien);
	        }
	        return alertasaludo;
	}
	saludar("Amigo/a")();
```
    
### Recursión

- Calcular el [factorial](https://www.wikiwand.com/es/Factorial).
```javascript
		function factorial(n){
			if(n <= 1){
		    	return 1
		  	} else {
		    	return n * factorial(n-1)
			}
		}
		
		factorial(0); // n! = 1
		factorial(1); // n! = 1
		factorial(2); // n! = 2
		factorial(3); // n! = 6 (3*2*1)
		factorial(4); // n! = 24 (4*3*2*1)
		factorial(5); // n! = 120 (5*4*3*2*1)
		factorial(6); // n! = 720 (...)
		// ...
```


### Callbacks

> En programación de computadoras, una devolución de llamada o retrollamada (en inglés: callback) es una función "A" que se usa como argumento de otra función "B". Cuando se llama a "B", ésta ejecuta "A". Para conseguirlo, usualmente lo que se pasa a "B" es el puntero a "A".
> [Callbacks en Wikiwand](https://www.wikiwand.com/es/Callback_(inform%C3%A1tica))

- Ejemplo condensado:
```javascript
	var quieroCallback = function(parametro, callback){
	    if ((callback) && (typeof callback === 'function')){
	        callback(parametro);
	    }
	    else
	        console.log(parametro, callback);
	}
	 
	quieroCallback('a', 'b');
	 
	quieroCallback('a', function(val){
	    console.log(val);
	});
```


- Ejemplo con Jquery:
```javascript
    $('#elemento').fadeIn('slow', function() {
    	// código del callback
	});
```


- Otro ejemplo:
```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    callback();
	}

	comerSandwich('jamón', 'queso', function() {
	    console.info('Ya terminé...');
	});
```


- Ejemplo con Callback opcional:
```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    if (callback) {
	        callback();
	    }

	}

	comerSandwich('jamón', 'queso');
```


- Sanitizar el Callback:
```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	    
	    if (callback && typeof(callback) === "function") {
	        callback();
	    }

	}

	comerSandwich('jamón', 'queso');
```


### Asincronía
```javascript
    function comerSandwich(elemento1, elemento2, callback) {
	    console.info('ñam ñam... empiezo con el sándwich.\n\nMe gusta porque tiene tiene ' + elemento1 + ', ' + elemento2);
	  
		setTimeout(alarma, 5000);
		function alarma(){
			console.log("ring! ring!.. pasaron los 5 segundos!");
		};

	  
	    if (callback && typeof(callback) === "function") {
	        callback();
	    }
	}

	comerSandwich('jamón', 'queso', function() { 
	    console.log('Ya terminé...');
	});
```
