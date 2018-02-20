![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 13

### Ejercicios

**1 -** Junta estos tres Arrays *["Oscar", ...], [9897667, ...], [false, ...]* de tal forma que construyan un único Array anidado *[["Oscar", 9897667, false], [etc...]]* 

```javascript
	/*
		--- COMO ARRAY ---
	*/
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana"],
		arreglo2 = [9897667, 81721623, 91823871, 71236123],
		arreglo3 = [false, true, true, false];
	
	var anidacion = [];
	
	for (var i = 0; i <= arreglo1.length; i++){
		var resumen = [arreglo1[i], arreglo2[i], arreglo3[i]];
		anidacion.push(resumen);
	}
	
	console.log("El resultado es %O", anidacion);
	
	/*
			---- COMO OBJETO ---
	*/
	
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana"],
	arreglo2 = [9897667, 81721623, 91823871, 71236123],
	arreglo3 = [false, true, true, false];

	var anidacion = [];
	
	for (var i = 0; i <= arreglo1.length; i++){
		anidacion.push({
			nombre: arreglo1[i],
			id: arreglo2[i], 
			admin: arreglo3[i]
		});
	}
	
	console.log("El resultado es %O", anidacion);
```

- Variante (Diferentes longitudes)
```javascript
	var arreglo1 = ["Oscar", "Pedro", "Marco", "Juana", true, 4, 12, 12],
	    arreglo2 = [9897667, 81721623, 91823871, 71236123],
	    arreglo3 = [false, true, true, false];
	
	// Saber valor Máximo
	var maximo = Math.max(arreglo1.length, arreglo2.length, arreglo3.length);
	
	// Nivelar - Fase 1:
	arreglo1[maximo] = "";
	arreglo2[maximo] = "";
	arreglo3[maximo] = "";
	
	// Fix
	arreglo1.pop();
	arreglo2.pop();
	arreglo3.pop();
	
	
	var anidacion = [];
	
	for (var i = 0; i < arreglo1.length; i++){
	    anidacion.push([arreglo1[i], arreglo2[i], arreglo3[i]]);
	}
	
	console.log("El resultado es %O", anidacion); 
```

**2 -** Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

- Opcional: Ordena los números pares e impares en sus respectivos arrays


```javascript
	var arrayPares = [], arrayImpares = [];
	
	for (var i = 0; i<100; i++){
		var random = Math.floor((Math.random() * 6) + 1)
		if(random % 2 !== 0){
			arrayImpares.push(random);
		} else {
			arrayPares.push(random);
		}
	}
	
	// Opcional
	arrayPares = arrayPares.sort();
	arrayImpares = arrayImpares.sort();
```


**3 -** Vamos a gestionar la lista de asistentes de un evento. 

- Características:
	- Cada asistente recibirá el identificador de su posición en el Array.
	- El identificador no puede cambiar una vez reservado el asiento.
	- Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
	- Los nuevos asistentes seran asigandos primero a asientos desocupados. 

- Opcional:
	- Verifica antes de asignar un asistente que no se registro previamente. 
```javascript
	var lista = [];
	
	function asignar(nombre) {
	    var registrado = false;
	    var vacante = false;
	
	    for (var i = 0; i < lista.length; i++) {
	        if (lista[i] === undefined) {
	            vacante = i;
	        }
	        if (lista[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        console.warn("Ya estabas registrado!");
	        console.info("Eres el asistente número", registrado);
	    } else {
	        if (vacante || vacante === 0) {
	            lista[vacante] = nombre;
	            console.info("Eres el asistente número", vacante);
	            console.info("Felicidades! has ocupado un asiento que estaba vacio.");
	        } else {
	            lista.push(nombre);
	            console.info("Eres el asistente número", lista.length - 1);
	            console.info("No quedan asientos vacios antes que el tuyo.");
	        }
	    }
	
	}
	
	function quitar(nombre) {
	    var registrado = false;
	
	    for (var i = 0; i < lista.length; i++) {
	        if (lista[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        lista[registrado] = undefined;
	        console.info("El asistente " + nombre + " ha sido eliminado.");
	        console.info("El asiento " + registrado + " esta vacio.");
	    } else {
	        console.warn("El asistente " + nombre + "... no existe!");
	    }
	}
	
	// Test:
	asignar("Ulises");
	/*
	Eres el asistente número 0
	No quedan asientos vacios antes que el tuyo.
	*/
	asignar("Yo mismo");
	/*
	Eres el asistente número 1
	No quedan asientos vacios antes que el tuyo.
	*/
	quitar("ulises"); // El asistente ulises... no existe!
	quitar("Ulises");
	/*
	El asistente Ulises ha sido eliminado.
	El asiento 0 esta vacio.
	*/
	asignar("Carlos"); // Eres el asistente número 0
	asignar("Carlos");
	/*
	Ya estabas registrado!
	Eres el asistente número 0
	*/
```

### Tiempo para proyecto personal

![img_promo](https://sinsip.com/medium/ts.png)
