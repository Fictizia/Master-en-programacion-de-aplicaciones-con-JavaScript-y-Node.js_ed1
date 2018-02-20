![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 8

### Dudas

**[Conocéis alguna fuente donde encontrar APIs molonas para consumir?](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/15)**


### [Evento: Github Constellation](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/16)

![img](https://user-images.githubusercontent.com/24463350/30349089-7e531e6e-97c6-11e7-93c4-592f7d144cd3.png)


### Retos: coolsole, nuestra primera librería de JS!

Hagamos una librería como Guild para hacer un sistema más avanzado de gestión de la consola.

### Asignación por igualdad
```javascript
	var administrador = 'Yo mismo';
	var esAdministrador = (administrador === 'Yo mismo');
```
    
### If... else

- Estructura:
    ```javascript
    /* IF ...ELSE
    if (-algo verdadero-) {
        -ejecutaremos este código-
    } else {
        -Si lo anterior no era verdadero, se ejecutara este código-
    };
    */
    ```

- Documentación:
    - [If... else en w3schools](http://www.w3schools.com/js/js_if_else.asp)
    - [If... else en MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

- Ejemplo:
    ```javascript
    if (true) {
        console.log("true, por eso me ejecuto");
    } else {
        console.log("false, por eso me ejecuto");
    }
    ```


### Else if...

```javascript
function testCondiccion (condicion){
    if (condicion == 1) {
        console.log("1, por eso me ejecuto");
    } else if (condicion == 2){
        console.log("2, por eso me ejecuto");
    } else {
        console.log("no es 1 o 2, por eso me ejecuto");
    }
}
```


### Switch

- Estructura:
    ```javascript
    /* Switch
	switch(expresión) {
	    case n:
	        //Código
	        break;
	    case n:
	        //Código
	        break;
	    default:
	        //Código
	}
    */
    ```

- Documentación:
    - [Switch en w3schools](http://www.w3schools.com/js/js_switch.asp)
    - [Switch en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/switch)

- **Casos únicos:**
    ```javascript
	var nombre = "";
	switch (nombre) {
	  case "Pepe":
	    console.log("Hola Pepe");
	    break;
	  case "Luis":
	    console.log("Hola Luis");
	    break;
	  case "Antonio":
	    console.log("Hola Antonio");
	    break;
	  default:
	    console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

- **Multiples coincidencias:**
    ```javascript
	var nombre = "";
	switch (nombre)
	{
	   case "Pepe":
	   case "Luis":
	   case "Antonio":
	       alert('Hola '+nombre);
	       break;

	   default:
	       console.log('Ninguno de los nombres que pensamos... es '+nombre);
	}
    ```

### Operador Ternario (?:)

- Estructura:
    ```javascript
    /* 
    -- Una operación por caso --
	condicion ? expresion1 : expresion2 
    
    -- Multiples Operaciones por caso --
	condicion ? (
		operacion1,
		operacion2,
		otraoperacion
	) : ( 
		operacion1,
		operacion2,
		otraoperacion
	);

    -- Evaluaciones multiples --
    	condicion ? expresion1 : condicion2 ? expresion1 : expresion2;
    */
    ```

- Una operación por caso:
```javascript
	var esMiembro = true;
	console.info("El pago son  " + (esMiembro ? "20.00€" : "50.00€"));
```

- Evalución múltiple:
```javascript
	var esMiembro = true;
	var esAdulto = true;
	console.info(esMiembro ? "El pago son 20.00€" : esAdulto ? "Puedes enviar la solicitud cuando quieras" : "Tines que esperar aún. Lo siento.");
```

- Múltiples Operaciones:
```javascript
	var mensaje,
	esMiembro = true;
	
	esMiembro ? (
		mensaje = "El pago son 20.00€",
		console.info(mensaje)
	) : (
		mensaje = "El pago son 50.00€",
		console.info(mensaje)
	);
```

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript
	function compararNumeros (valor1, valor2) {
		if (valor1 > valor2) {
			console.info(valor1, "es mayor.")
		} else if (valor1 < valor2){
			console.info(valor2, "es mayor.")
		} else {
			console.info("Son iguales")
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function compararNumeros (valor1, valor2) {
		(valor1 > valor2) ? console.info(valor1, "es mayor.") 
			: (valor1 < valor2) ? console.info(valor2, "es mayor.") 
			: console.info("Son iguales");
	}
```

- Usando *Switch*
```javascript
	function compararNumeros (valor1, valor2) {
		switch (true){
			case (valor1 > valor2):
				console.info(valor1, "es mayor.");
				break;
			case (valor1 < valor2):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info("Son iguales");
		}
	}
```

**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Usando *if...else*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		if (valor1 > valor2 && valor1 > valor3) {
			console.info(valor1, "es mayor.")
		} else {
			if(valor2 > valor3){
				console.info(valor2, "es mayor.")
			} else {
				console.info(valor3, "es mayor.")
			}
		};
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		(valor1 > valor2 && valor1 > valor3) ? console.info(valor1, "es mayor.") 
			: (valor2 > valor3) ? console.info(valor2, "es mayor.") 
			: console.info(valor3, "es mayor.");
	}
```

- Usando *Switch*
```javascript
	function compararVariosNumeros (valor1, valor2, valor3) {
		switch (true){
			case (valor1 > valor2 && valor1 > valor3):
				console.info(valor1, "es mayor.");
				break;
			case (valor2 > valor3 && valor2 > valor1):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info(valor3, "es mayor.")
		}
	}
```


**3 -** Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando *if...else*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		if (valor1 < 0) {
			console.log("El resultado de la suma es", valor2+valor3)
		} else {
			console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3)
		};
	}

```

- Usando *Operador Ternario (?:)*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		(valor1 < 0) ? console.log("El resultado de la suma es", valor2+valor3) 
			: console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
	}
```

- Usando *Switch*
```javascript
	function jugandoConNumeros (valor1, valor2, valor3) {
		switch(true){
			case (valor1 < 0):
				console.log("El resultado de la suma es", valor2+valor3)
				break;
			default:
				console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
		}
	}
```


**4 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Usando *if...else*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
			
			if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo"){
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
			} else {
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
			}

		} else {
			console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
		};

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		(mes === "Diciembre" || mes === "Enero" || mes === "Febrero") ? 
				(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo") ?
				 console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio)
				 : console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento)
		: console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
	}
```

- Usando *Switch*
```javascript
	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		switch (true) {
			case ((mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (diaSemana !== "Viernes" && diaSemana !== "Sabado" && diaSemana !== "Domingo")):
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
				break;
			case (mes !== "Diciembre" && mes !== "Enero" && mes !== "Febrero"):
				console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
				break;
			default:
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
		}

	}
```
- alternativa


```javascript

/* -- Factores de error

- Tipo de datos
- limpieza de strings a no utf-8
- 

--- problemas de escalabilidad

- comparacion con && y ||

*/



function fix(string){
	string = string.trim();
	string = string.toLowerCase();
	// ¿Quitar los acentos?
	return string
}

function calcularDescuento (mes, dia, precio) {

	// Tratamiento
	if(!mes && !dia && !precio) {
		return false;
	} else {
		mes = fix(mes);
		dia = fix(dia);
	}

/*
	if(typeof(mes) === "string") {
		mes = mes.trim();
		mes = mes.toLowerCase();
		// ¿Quitar los acentos?
	}
*/
	//dia


	var diasNoDescuento = ["viernes", "sabado", "domingo"];

	var descuento = 25*precio/100;
	var precioConDescuento = precio - descuento;

	if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
		
		if(diasNoDescuento.indexOf(dia) === -1){
			console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
		} else {
			console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
		}

	} else {
		console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
	};

}
```


**5 -** Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

- Usando *if...else*
```javascript
	function esPositivo (numero) {

		if(numero < 0){
			console.info(numero, " es negativo");
		} else {
			console.info(numero, " es positivo");
		}

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esPositivo (numero) {
		(numero < 0) ? console.info(numero, " es negativo")
			: console.info(numero, " es positivo");
	}
```

- Usando *Switch*
```javascript
	function esPositivo (numero) {

		switch(true){
			case (numero < 0):
				console.info(numero, " es negativo");
				break;
			default:
				console.info(numero, " es positivo");
		}

	}
```

**6 -** Diseña un algoritmo que al introducir un número nos diga si es par o impar.

- Usando *if...else*
```javascript
	function esPar (numero) {

		if(numero %2 === 0 ){
			console.info(numero, " es par");
		} else {
			console.info(numero, " es impar");
		}
	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esPar (numero) {
		(numero %2 === 0) ? console.info(numero, " es par")
			: console.info(numero, " es impar");
	}
```

- Usando *Switch*
```javascript
	function esPar (numero) {

		switch(true){
			case (numero %2 === 0):
				console.info(numero, " es par");
				break;
			default:
				console.info(numero, " es impar");
		}

	}
```


**7 -** Diseña un algoritmo que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4
	- No tiene que ser divisible entre 100
	- Puede ser divisble entre 100 y entre 400

- Usando *if...else*
```javascript
	function esBisiesto (year) {
		
		if (year % 4 === 0 && year % 100 !== 0) {
			console.info("Amigo, el año " +year+ " es bisiesto!");
		} else if (year % 400 === 0 && year % 100 === 0) {
			console.info("Amigo, el año " +year+ " es bisiesto!");
		} else {
			console.warn("Amigo, el año " +year+ " NO es bisiesto!");
		};

	}
```

- Usando *Operador Ternario (?:)*
```javascript
	function esBisiesto (year) {
		(year % 4 === 0 && year % 100 !== 0) 
			? console.info("Amigo, el año " +year+ " es bisiesto!")
			: (year % 400 === 0 && year % 100 === 0) 
			? console.info("Amigo, el año " +year+ " es bisiesto!")
			: console.warn("Amigo, el año " +year+ " NO es bisiesto!");
	}
```

- Usando *Switch*
```javascript
	function esBisiesto (year) {

		switch(true){
			case (year % 4 === 0 && year % 100 !== 0):
			case (year % 400 === 0 && year % 100 === 0):
				console.info("Amigo, el año " +year+ " es bisiesto!");
				break;
			default:
				console.warn("Amigo, el año " +year+ " NO es bisiesto!");
		}

	}
```


### Tiempo para proyecto personal

![img_promo](https://sinsip.com/medium/ts.png)
