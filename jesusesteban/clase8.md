# Clase 8

### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de condicionales (If...else, Switch, operador ternario )

**1 -** Diseña un algoritmo que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

- Usando *if...else*
```javascript
    // Tu solución
	var numero1 = 10;
	var numero2 = 5;
	
	
	if(numero1 > numero2){
		console.log(numero1 + "Es mayor que " + numero2)
	}else{
	}
    
    
    
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución
    
	var numero1 = 10;
	var numero2 = 5;
	
	var esMayor = true;
	
	"El número es mayor si:  " + (esMayor ? "10" : "5")    
    
    
```

- Usando *Switch*
```javascript
    // Tu solución

	var numero1 = 10;
	var numero2 = 5;
    var numero = "";

	switch(numero) {
	    case (numero1):
			console.log("Es mayor que " + numero2);
	        break;
	    case (5):
			console.log("Es menor que " + numero1);
	        break;
	    default:
	        console.log("Ni idea");
	}

    
```

**2 -** Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.

- Usando *if...else*
```javascript
    // Tu solución

	var numero1 = 10;
	var numero2 = 5;
	var numero3 = 2;
    
    if(numero1 > numero2 & numero2 > numero3){
    	console.log("El numero mayor es " + numero1)
    }else{
    	console.log("El numero mayor es " + numero1)
    }
    
    
    
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución

	var numero1 = 10;
	var numero2 = 5;
	var numero3 = 2;
    
	"El número es mayor si:  " + (esMayor ? "10" : "5")    
    
    
    
    
```

- Usando *Switch*
```javascript
    // Tu solución
    
	var numero1 = 10;
	var numero2 = 5;
    var numero = "2";

	switch(numero) {
	    case (numero1):
			console.log("Es mayor que " + numero2);
	        break;
	    case (numero2):
			console.log("Es mayor que " + numero3);
	        break;
	    case (numero3):
			console.log("Es mayor que 1");
	        break;

	    default:
	        console.log("Ni idea");
	}    
    
```


**3 -** Diseña un script que siga el siguiente proceso:
- Si el primero es negativo, debe sumar los otros dos
- Sino multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.

- Usando *if...else*
```javascript
    // Tu solución
    
	var numero1 = 10;
	var numero2 = 5;
    var numero3 = "";
    var numero = prompt("Dime tu numero");

    if(numero < 0){
    	console.log(numero * numero1 * numero2 )
    }else{
    	console.log("Tu número es positivo");
    }
    
    
    
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución
```

- Usando *Switch*
```javascript
    // Tu solución
```


**4 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Usando *if...else*
```javascript
    // Tu solución
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución
```

- Usando *Switch*
```javascript
    // Tu solución
```

**5 -** Diseña un algoritmo que al introducir un numero nos diga si es positivo o negativo.

- Usando *if...else*
```javascript
    // Tu solución
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución
```

- Usando *Switch*
```javascript
    // Tu solución
```

**6 -** Diseña un algoritmo que al introducir un número nos diga si es par o impar.

- Usando *if...else*
```javascript
    // Tu solución
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución
```

- Usando *Switch*
```javascript
    // Tu solución
```


**7 -** Diseña un algoritmo que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4
	- No tiene que ser divisible entre 100
	- Puede ser divisble entre 100 y entre 400

- Usando *if...else*
```javascript
    // Tu solución
```

- Usando *Operador Ternario (?:)*
```javascript
    // Tu solución
```

- Usando *Switch*
```javascript
    // Tu solución
```
