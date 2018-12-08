# Clase 4


### Ejercicios

**1 -** Diseña un programa que lea dos números y realice los siguientes cálculos:

- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto
- 
```
    // Tu solución

@numero = 5

@suma = @numero + @numero
@resta = @numero - @numero
@multiplicacion = @numero * @numero
@division = @numero / @numero

mostrar @suma
mostrar @resta
mostrar @multiplicacion
mostrar @division

```

**2 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
  - Calcular porcentajes (segmento*100)/total
```
    // Tu solución

@hombres = 5
@mujeres = 3
@total = @hombres + @mujeres

@operacion = @hombres*100 / @total

mostrar @operacion


```

**3 -** Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
```
    // Tu solución

@numero1 = 10
@numero2 = 5


si @numero1 > @numero2
  mostrar "Mayor"
si no
  mostrar "Menor"


```

**4 -** Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
    // Tu solución

@numero1 = 10
@numero2 = 5
@numero3 = 2


si @numero1 > @numero2 && @numero2 > @numero3
  mostrar "Mayor"
si no
  mostrar "Menor"


```

**5 -** Diseña un programa que siga el siguiente proceso:
- Pedir por teclado tres números.
- Si el primero es negativo, debe sumar los otros dos
- Si no multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.
```
    // Tu solución

pedir @Primernumero
pedir @Segundonumero
pedir @Tercernumero

si @Primernumero <0
  mostrar @Primernumero + @Segundonumero + @Tercernumero
si no
  mostrar @Primernumero * @Segundonumero * @Tercernumero


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

pedir @numero

si @numero >=0
  mostrar "Es positivo"
si no
  mostrar "Es negativo"

```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
    // Tu solución

pedir @numero

si @numero %2 === 0
  mostrar "Es par"
si no
  mostrar "Es impar"

```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
  - La palabra clave es "Fictizia mola mucho"
  - Solo existen tres intentos
  - Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
    // Tu solución

pedir @clave
definir @numero = 0

si @clave == "Fictizia mola mucho"
  mostrar "Bien"
si no
  mostrar "Solo existen tres intentos"
  mostrar @numero
  @numero = @numero + 1
  si @numero >= 3
    mostrar "No te quedan más intentos"



```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
  - El usuario introduce tres números (día, mes, año)
  - Validar la fecha. En caso de error incluir un mensaje informativo.
  - Después de validar, devolvemos la fecha en formato DD/MM/AAAA
  - Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
    // Tu solución
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
