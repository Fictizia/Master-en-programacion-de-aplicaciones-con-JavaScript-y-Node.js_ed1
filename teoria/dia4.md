# Clase 4

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
    // Tu solución
```

6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
    // Tu solución
```

7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
    // Tu solución
```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
    // Tu solución
```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
    // Tu solución
```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
    // Tu solución
```
