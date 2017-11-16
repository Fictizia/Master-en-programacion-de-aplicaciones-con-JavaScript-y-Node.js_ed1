### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript
    function numbersComparator(number1,number2) {
		if (number1 === number2) {
    		console.log("Los números introducidos son iguales");
		}else if (number1 > number2) {
    		console.log(number1 + " es mayor que " + number2);
		}else {console.log(number2 + " es mayor que " + number1)}
	};
	var firstNumber = prompt("Introduce el primer número");
	var secondNumber = prompt("Introduce el segundo número");

	numbersComparator(firstNumber,secondNumber);
```

- Usando *Operador Ternario (?:)*
```javascript
    function numbersComparator(number1,number2) {  
		console.log(number1 === number2 ? "Los números introducidos son iguales" : number1 > number2 ? number1 + " es mayor que " + number2 : number2 + " es mayor que " + number1); 
	};

	var firstNumber = prompt("Introduce el primer número");
	var secondNumber = prompt("Introduce el segundo número");

	numbersComparator(firstNumber,secondNumber);
```

- Usando *Switch*
```javascript
   MAL
```

**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Usando *if...else*
```javascript
    function numbersComparator(number1,number2,number3) {  
	  if(number1 > number2 && number1 > number3){
	    console.log(number1 + " es el número mayor");
	  }else if(number2 > number1 && number2 > number3){
	       console.log(number2 + " es el número mayor");    
	       }else {console.log(number3 + " es el número mayor")}
	};
	
	var firstNumber = prompt("Introduce el primer número");
	var secondNumber = prompt("Introduce el segundo número");
	var thirdNumber = prompt("Introduce el tercer número");
	numbersComparator(firstNumber,secondNumber, thirdNumber);
```

- Usando *Operador Ternario (?:)*
```javascript
    function numbersComparator(number1,number2,number3) {  
	  console.log(number1 > number2 && number1 > number3 ? number1 + " es el número mayor" : number2 > number1 && number2 > number3 ? number2 + " es el número mayor" : number3 + " es el número mayor"); 
	};
	
	var firstNumber = prompt("Introduce el primer número");
	var secondNumber = prompt("Introduce el segundo número");
	var thirdNumber = prompt("Introduce el tercer número");
	numbersComparator(firstNumber,secondNumber, thirdNumber);
```

- Usando *Switch*
```javascript
    MAL
```


**3 -** Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando *if...else*
```javascript
    function mathOperations(number1,number2,number3) {
	  if(number1 < 0){
	    var total = number2 + number3;
	    console.log(number1 + " es un número negativo, asi que hemos sumado " + number2 + " y " + number3 + " y da un total de " + total);
	  }else {
	    var total = number1 * number2 * number3;
	    console.log("El resultado de multiplicar los 3 números es " + total)
	  }
	}
	var firstNumber = prompt("Introduce el primer número");
	var secondNumber = prompt("Introduce el segundo número");
	var thirdNumber = prompt("Introduce el tercer número");
	numbersComparator(firstNumber,secondNumber, thirdNumber);
	
	// REFACTORING !!!
	
	
	
```

- Usando *Operador Ternario (?:)*
```javascript
    function mathOperations(number1,number2,number3) {
	  number1 < 0 ? (
	    total = number2 + number3,
	    console.log(number1 + " es un número negativo, asi que hemos sumado " + number2 + " y " + number3 + " y da un total de " + total)
	    ) : (
	      total = number1 * number2 * number3,
	      console.log("El resultado de multiplicar los 3 números es " + total)
	    );
	}
	var firstNumber = prompt("Introduce el primer número");
	var secondNumber = prompt("Introduce el segundo número");
	var thirdNumber = prompt("Introduce el tercer número");
	numbersComparator(firstNumber,secondNumber, thirdNumber);
```

- Usando *Switch*
```javascript
    MAL
```


**4 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Usando *if...else*
```javascript
    var price = pprompt("introduce el precio para comprobar si tiene descuento");
	var weekend = confirm("¿Es viernes o fin de semana?");
	var month = prompt("Introduce el mes en formato numérico");
	while(typeof month !== 'number') {
	  var month = prompt("Introduce el mes en formato numérico");
	}
	function discount(price,weekend,month){
	  if(month === 12 || month === 1 || month === 2 || month === 3){
	    if(weekend){
	      var percentage = (price * 25)/100;
	      var newPrice = price - percentage;
	      console.log("Enhorabuena! puedes comprarlo más barato! El nuevo precio es " + newPrice)
	    } else {console.log("Lo siento, no es momento de descuentos")}
	  } else {console.log("Lo siento, no es momento de descuentos")}
	}
	function discount(price,weekend,month);
```

- Usando *Operador Ternario (?:)*
```javascript
    var price = pprompt("introduce el precio para comprobar si tiene descuento");
	var weekend = confirm("¿Es viernes o fin de semana?");
	var month = prompt("Introduce el mes en formato numérico");
	while(typeof month !== 'number') {
	  var month = prompt("Introduce el mes en formato numérico");
	}
	function discount(price,weekend,month){
	  if(month === 12 || month === 1 || month === 2 || month === 3){
	    if(weekend){
	      var percentage = (price * 25)/100;
	      var newPrice = price - percentage;
	      console.log("Enhorabuena! puedes comprarlo más barato! El nuevo precio es " + newPrice)
	    } else {console.log("Lo siento, no es momento de descuentos")}
	  } else {console.log("Lo siento, no es momento de descuentos")}
	  
	  (month === 12 || month === 1 || month === 2 || month === 3) ? (
	      weekend ? (
	        percentage = (price * 25)/100,
	        newPrice = price - percentage,
	        console.log("Enhorabuena! puedes comprarlo más barato! El nuevo precio es " + newPrice)
	      ) : console.log("Lo siento, no es momento de descuentos")
	    ): (
	        console.log("Lo siento, no es momento de descuentos")
	    )
	  
	  
	};
	function discount(price,weekend,month);
```

- Usando *Switch*
```javascript
    NO SE ANIDAR SWITCHES, CASI SE ME FRIE EL CEREBRO ANIDANDO TERNARIOS
```

**5 -** Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

- Usando *if...else*
```javascript
    var number = pprompt("Introduce un número positivo o negativo y lo sabré");
	if(number<0){
	  console.log("El número es negativo chaval");
	} else {console.log("El número es positivo macho")}
```

- Usando *Operador Ternario (?:)*
```javascript
4
    var number = pprompt("Introduce un número positivo o negativo y lo sabré");
	
	console.log(number<0 ? "El número es negativo chaval" : "El número es positivo macho")
```

- Usando *Switch*
```javascript
    var number = pprompt("Introduce un número positivo o negativo y lo sabré");
	
	switch (number) {
	  case number < 0:
	    console.log("El número es negativo chaval");
	    break;
	  default:
	    console.log("El número es positivo macho")
	    break;
```

**6 -** Diseña un algoritmo que al introducir un número nos diga si es par o impar.

```javascript
    var number = pprompt("Introduce un número y te diré si es par o impar");

	if(number % 2 === 0){
	  console.log("El número es par");
	} else {console.log("El número es impar")}
	
	console.log(number % 2 === 0 ? "El número es par" : "El número es impar")
	
	
	switch (number) {
	  case number % 2 === 0:
	    console.log("El número es par");
	    break;
	  default:
	    console.log("El número es impar")
	    break;
```


**7 -** Diseña un algoritmo que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4
	- No tiene que ser divisible entre 100
	- Puede ser divisble entre 100 y entre 400


```javascript
    var year = pprompt("Introduce un año y te diré si es bisiesto");
    
	function leapYear(year){
	  if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)){
	    console.log("El año " + year + " es bisiesto");
	  } else console.log("El año " + year + " no es bisiesto")
	}
	    
	console.log((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0) ? "El año " + year + " es bisiesto" : "El año " + year + " no es bisiesto")
	
	switch (year) {
	  case year % 4 == 0 && year % 100 != 0:
	  case year % 100 == 0 && year % 400 == 0:
	    console.log("El año " + year + " es bisiesto");
	    break;
	  default:
	    console.log("El año " + year + " no es bisiesto")
	    break;
```
