# Clase 8

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript

    // Tu solución
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

    // Tu solución
	function compararNumeros (valor1, valor2) {
		(valor1 > valor2) ? console.info(valor1, "es mayor.") 
			: (valor1 < valor2) ? console.info(valor2, "es mayor.") 
			: console.info("Son iguales");
	}
    
    
```

- Usando *Switch*
```javascript
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
	function compararVariosNumeros (valor1, valor2, valor3) {
		(valor1 > valor2 && valor1 > valor3) ? console.info(valor1, "es mayor.") 
			: (valor2 > valor3) ? console.info(valor2, "es mayor.") 
			: console.info(valor3, "es mayor.");
	}
    

```

- Usando *Switch*
```javascript
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
	function jugandoConNumeros (valor1, valor2, valor3) {
		(valor1 < 0) ? console.log("El resultado de la suma es", valor2+valor3) 
			: console.log("El resutlado de la multiplicacion es", valor1 * valor2 * valor3);
	}
	
	
```

- Usando *Switch*
```javascript
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
	function esPositivo (numero) {
		(numero < 0) ? console.info(numero, " es negativo")
			: console.info(numero, " es positivo");
	}
	
```

- Usando *Switch*
```javascript
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
	function esPar (numero) {
		(numero %2 === 0) ? console.info(numero, " es par")
			: console.info(numero, " es impar");
	}
	
```

- Usando *Switch*
```javascript
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
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
    
    // Tu solución
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
