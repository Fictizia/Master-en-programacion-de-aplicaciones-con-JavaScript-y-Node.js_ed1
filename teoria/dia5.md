![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 5

### Ejercicios

**1 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
	Proceso conversionRomana
		Escribir "Dame un número:"
		Leer numero
		
		numeroOriginal <- numero
		numeroRomano <- ""
		
		Si numero <= 50 & numero > 0 Entonces
			
				Mientras numero > 0 Hacer
					// Escribir "Numero: ", numero
					
					Si numero = 50 Entonces
						numeroRomano = "L"
						numero = 0
					Fin Si
					
					Si numero >= 40 & numero < 50 Entonces
						numeroRomano = numeroRomano + "XL"
						numero = numero - 40
					Fin Si
					
					Si numero >= 10 & numero < 40 Entonces
						numeroRomano = numeroRomano + "X"
						numero = numero - 10
					Fin Si	
					
					Si numero = 9 Entonces
						numeroRomano = numeroRomano + "IX"
						numero = numero - 9
					Fin Si		
					
					Si numero = 8 Entonces
						numeroRomano = numeroRomano + "VIII"
						numero = numero - 8
					Fin Si	
					
					Si numero = 7 Entonces
						numeroRomano = numeroRomano + "VII"
						numero = numero - 7
					Fin Si	
					
					Si numero = 6 Entonces
						numeroRomano = numeroRomano + "VI"
						numero = numero - 6
					Fin Si	
					
					Si numero = 5 Entonces
						numeroRomano = numeroRomano + "V"
						numero = numero - 5
					Fin Si	
					
					Si numero = 4 Entonces
						numeroRomano = numeroRomano + "IV"
						numero = numero -4
					Fin Si
					
					Si numero <= 3 & numero > 0 Entonces
						numeroRomano = numeroRomano + "I"
						numero = numero - 1
					Fin Si		
					
				Fin Mientras
				
				Escribir numeroOriginal " en números romanos es " numeroRomano
		Sino
			Escribir numeroOriginal " NO es un número valido (0-50)"
		Fin Si
		
	FinProceso
```

**2 -** Diseña un programa que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100
	- O puede ser divisble entre 100 y entre 400
```
	Proceso esBisiesto
		
		Escribir "Dime el Año:"
		Leer year
		
		Si year % 4 = 0 & year % 100 <> 0 Entonces
			Escribir "Amigo, el año " year " es bisiesto!"
		Sino
			Si year % 400 = 0 & year % 100 = 0 Entonces
				Escribir "Amigo, el año " year " es bisiesto!"
			Sino
				Escribir "Amigo, el año " year " NO es bisiesto!"
			Fin Si
		Fin Si
		
	FinProceso
```

**3 -** Diseña un programa que imprima los numeros del 1 al 100.
```
	Proceso contadorPositivo
		
		controlador = 1
		
		Escribir "Empieza la cuenta!"
		
		Mientras controlador <= 100 Hacer
			Escribir controlador
			controlador = controlador +1
		Fin Mientras
		
		Escribir "Terminó la cuenta mágica..."
		
	FinProceso
```

**4 -** Diseña un programa que imprima los numeros del 100 al 0.
```
	Proceso contadorNegativo
		
		controlador = 100
		
		Escribir "Empieza la cuenta!"
		
		Mientras controlador >= 0 Hacer
			Escribir controlador
			controlador = controlador -1
		Fin Mientras
		
		Escribir "Terminó la cuenta mágica..."
		
	FinProceso
```

**5 -** Diseña un programa que imprima los numeros pares entre 0 y 100.
```
	Proceso contadorPares
		
		controlador = 2
		
		Escribir "Empieza la cuenta!"
		
		Mientras controlador <= 100 Hacer
			Escribir controlador
			controlador = controlador +2
		Fin Mientras
		
		Escribir "Terminó la cuenta mágica..."
		
	FinProceso 
```

**6 -** Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
```
	Proceso contador50Impares
		Escribir "Dame un número:"
		Leer numero
		
		controlador = 1
		
		Escribir "Empieza la cuenta!"
		
		Mientras controlador <= 50 Hacer
			
			Si numero % 2 = 0 Entonces
				numero <- numero + 1
				controlador <- controlador + 1
			Sino
				Escribir numero
				controlador <- controlador + 1
				numero <- numero + 1
			Fin Si
			
		Fin Mientras
		
		Escribir "Terminó la cuenta mágica..."
		
	FinProceso
```

**7 -** Diseña un programa que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
```
 	Proceso contadorEspecial
 		Escribir "Dame un número:"
 		Leer numero
 		
 		controlador = 1
 		Totalimpares = 0
 		totalImpares = 0
 		
 		Escribir "Empieza la cuenta!"
 		
 		Mientras controlador <= 50 Hacer
 			
 			Si numero % 2 = 0 Entonces
 				controlador <- controlador + 1
 				totalPares<- totalPares + numero
 				numero <- numero + 1
 			Sino
 				totalImpares<- totalImpares + 1
 				numero <- numero + 1
 			Fin Si
 			
 		Fin Mientras
 		
 		Escribir "Total de suma de pares ", totalPares
 		Escribir "Total de impares ", totalImpares
 		Escribir "Terminó la cuenta mágica..."
 		
 	FinProceso
```

**8 -** Diseña un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.
```
	Proceso cuantasVeces
		Escribir "Dame una letra:"
		Leer letra
		
		Escribir "Dame un texto:"
		Leer texto
		
		controlador <- 0
		longitudTexto <- Longitud(texto)
		totalVeces <- 0
		
		Mientras controlador <= longitudTexto Hacer
			letraActual <- SubCadena(texto,controlador,controlador)
			controlador <- controlador + 1
			
			// Escribir "letra actual .... " letraActual
			Si letraActual = letra Entonces
				totalVeces = totalVeces +1
			Fin Si
			
		Fin Mientras
		
		Escribir letra "se ha repetido un total de " totalVeces
	FinProceso
```

**9 -** Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```
	Proceso azarMoneda
		valor <- azar(2)
		
		Si valor = 1 Entonces
			Escribir "Salio Cara!"
		Sino
			Escribir "Salio Cruz!"
		Fin Si
		
	FinProceso
```

**10 -** Diseña un programa que  simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```
	Proceso azarMoneda
	
		coincidencias <- 0
		controlador <- 0
		
		Mientras controlador <= 100 Hacer
			
			dado1 <- azar(7)
			dado2 <- azar(7)
			tirada <- dado1 + dado2
	
			Si tirada = 10 Entonces
				coincidencias = coincidencias +1
			Fin Si
			
			controlador = controlador + 1
			
		Fin Mientras
		
		Escribir "El azar ... sumó 10 un total de " coincidencias " veces"
	
	FinProceso
```
