![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 4

### Recordatorios

**[Issue Relevante](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/5)**

**[Aountate a Slack!](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/1)**

### Ejercicios

**1 -** Diseña un programa que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto

```
Proceso calculosVarios
	Escribir "El primer numero:"
	Leer valor1
	
	Escribir "El segundo segundo numero:"
	Leer valor2
	
	// Suma
	calculo <- valor1+valor2
	Escribir "El valor de la suma es: ", calculo
	
	// Resta
	calculo <- valor1-valor2
	Escribir "El valor de la resta es: ", calculo
	
	// División
	calculo <- valor1/valor2
	Escribir "El valor de la división es: ", calculo
	
	// Multiplicación
	calculo <- valor1*valor2
	Escribir "El valor de la multiplicación es: ", calculo
	
FinProceso
```


**2 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total
```
Proceso porcentajeAlumnos
	Escribir "El número de mujeres:"
	Leer cantidadMujeres
	
	Escribir "El número de hombres:"
	Leer cantidadHombres
	
	// Suma
	totalAlumnos <- cantidadHombres + cantidadMujeres
	Escribir "El total de alumnos es: ", totalAlumnos
	
	// Porcentaje mujeres
	porcentajeMujeres <- (cantidadMujeres*100)/totalAlumnos
	Escribir "El total de mujeres es: ", cantidadMujeres
	Escribir "El % de mujeres es: ", porcentajeMujeres
	
	// Porcentaje hombres
	porcentajeHombres <- (cantidadHombres*100)/totalAlumnos
	Escribir "El total de hombres es: ", cantidadHombres
	Escribir "El % de hombres es: ", porcentajeHombres

FinProceso
```

**3 -** Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
```
Proceso compararNumeros
	Escribir "El primer número:"
	Leer valor1
	
	Escribir "El segundo valor:"
	Leer valor2
	
	Si valor1 > valor2 Entonces
		Escribir valor1, " es mayor"
	Fin Si
	
	Si valor1 < valor2 Entonces
		Escribir valor2, " es mayor"
	Fin Si
	
	Si valor1 = valor2 Entonces
		Escribir "son iguales"
	Fin Si
	
FinProceso
```

**4 -** Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
Proceso compararVariosNumeros
	Escribir "El primer número:"
	Leer valor1
	
	Escribir "El segundo valor:"
	Leer valor2
	
	Escribir "El tercer valor:"
	Leer valor3
	
	Si (valor1 > valor2) & (valor1 > valor3) Entonces
		Escribir valor1, " es mayor"
	Sino
		Si valor2 > valor3 Entonces
			Escribir valor2, " es mayor"
		Sino
			Escribir valor3, " es mayor"
		Fin Si
	Fin Si
	
FinProceso
```

**5 -** Diseña un programa que siga el siguiente proceso:
- Pedir por teclado tres números.
- Si el primero es negativo, debe sumar los otros dos
- Si no multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.
```
	Proceso jugandoConNumeros
	    Escribir "El primer número:"
	    Leer valor1
		
	    Escribir "El segundo valor:"
	    Leer valor2
		
		Escribir "El tercer valor:"
	    Leer valor3
		
		Si valor1 < 0 Entonces
			calculo <- valor2 + valor3
			Escribir "El resutlado de la suma es ", calculo
		Sino 
			calculo <- valor1 * valor2 * valor3
			Escribir "El resutlado de la multiplicacion es ", calculo		
		FinSi
	
	FinProceso
```

6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
	Proceso calcularDescuento
	    Escribir "¿En que mes estamos?"
	    Leer mes
		
	    Escribir "¿En que día estamos?"
	    Leer diaSemana
		
	    Escribir "¿Cuanto vale el producto?"
	    Leer precio	
		
		descuento <- 25*precio/100
		precioConDescuento <- precio - descuento
		
		
		Si mes = "Diciembre" | mes = "Enero" | mes = "Febrero"  Entonces
			Si diaSemana = "Viernes" | diaSemana = "Sabado" | diaSemana  = "Domingo"  Entonces
				Escribir "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar ", precio
			Sino
				Escribir "BINGO! Has acertado de mes y días. Debes pagar solamente ", precioConDescuento
			Fin Si
		Sino 
			Escribir "No se aplica descuento.. ven en invierno mejor!. Debes pagar ", precio		
		FinSi
	
	FinProceso
```

7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
	 Proceso esPositivo
		Escribir "Dame un número:"
		Leer numero
		
		Si numero < 0 Entonces
			Escribir numero, " es negativo"
		Sino 
			Escribir numero, " es positivo"
		FinSi
	
	FinProceso
```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
	Proceso esPar
		Escribir "Dame un número:"
		Leer numero
		
		Si numero %2 = 0 Entonces
			Escribir numero, " es par"
		Sino 
			Escribir numero, " es impar"
		FinSi
	
	FinProceso
```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	Proceso eureka
		clave <- "Fictizia mola mucho"
		acierto <- FALSO
		contador <- 0
		
		Mientras contador < 3 & acierto = FALSO Hacer
			Escribir "Dime el secreto:"
			Leer secreto
			
			Si secreto = clave Entonces
				acierto <- VERDADERO
				Escribir secreto, " es la clave que esperaba!"
			Sino
				Escribir secreto, " no es correcto."
			Fin Si
			
			contador<- contador+1
			
		Fin Mientras
		
		Si contador >= 3 Entonces
			Escribir "Lo siento... pero has agotado los 3 intentos."
		Fin Si
	
	FinProceso
```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
	Proceso verificadorDeFechas
		
		Escribir "Dime el Año:"
		Leer year
		
		Escribir "Dime el Mes:"
		Leer month
		
		Escribir "Dime el Dia:"
		Leer day
		
		fecha <- ConvertirATexto(day) + "/" + ConvertirATexto(month) + "/" + ConvertirATexto(year)
	
		Si day <= 31 & day > 0 & month <= 12 & month > 0 & year > 0  Entonces
			Escribir "La fecha es correcta ", fecha
			
			Segun month Hacer
				1:
					fechaDetalle <- ConvertirATexto(day) + "de Enero de " + ConvertirATexto(year)
				2:
					fechaDetalle <- ConvertirATexto(day) + "de Febrero de " + ConvertirATexto(year)
				3:
					fechaDetalle <- ConvertirATexto(day) + "de Marzo de " + ConvertirATexto(year)
				4: 
					fechaDetalle <- ConvertirATexto(day) + "de Abril de " + ConvertirATexto(year)
				5:
					fechaDetalle <- ConvertirATexto(day) + "de Mayo de " + ConvertirATexto(year)
				6:
					fechaDetalle <- ConvertirATexto(day) + "de Junio de " + ConvertirATexto(year)
				7:
					fechaDetalle <- ConvertirATexto(day) + "de Julio de " + ConvertirATexto(year)
				8:
					fechaDetalle <- ConvertirATexto(day) + "de Agosto de " + ConvertirATexto(year)
				9:
					fechaDetalle <- ConvertirATexto(day) + "de Septiembre de " + ConvertirATexto(year)
				10:
					fechaDetalle <- ConvertirATexto(day) + "de Octubre de " + ConvertirATexto(year)
				11: 
					fechaDetalle <- ConvertirATexto(day) + "de Noviembre de " + ConvertirATexto(year)
				12:
					fechaDetalle <- ConvertirATexto(day) + "de Diciembre de " + ConvertirATexto(year)
			Fin Segun
			
			Escribir "La fecha en otro formato: ", fechaDetalle
			
		Sino
			Escribir "Error! los datos no son correctos!"
		Fin Si
		
	FinProceso
```
