### Ejercicios día 30:
### EJERCICIO 1:
1 - Diseña un programa que lea dos números y realice los siguientes cálculos:

Valor de su suma
Valor de su resta
Valor de su división
Valor de su producto
```
definir @numero1 = 4;
definir @numero2 = 2;

@operacion = numero1 + numero2;
mostrar operacion;

@operacion = numero1 - numero2;
mostrar operacion;

@operacion = numero1 / numero2;
mostrar operacion;

@operacion = numero1 * numero2;
mostrar operacion;

```
### EJERCICIO 2:
2 - Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.

Trucos:
Calcular porcentajes (segmento*100)/total
```

definir @mujeres = 3
definir @hombres = 5
@total = @mujeres + @hombres
@segmentoMujeres = 3*100
@porcentajeMujeres = @segmentoMujeres / @total
@porcentajeHombres = 100 - @porcentajeMujeres

mostrar "El porcentaje de mujeres en el curso es " + @porcentajeMujeres + "%"
mostrar 'El porcentaje de hombres en el curso es ' + @porcentajeHombres + '%'
```

### EJERCICIO 3
3 - Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.

```
definir @numero1 = 5
definir @numero2 = 7

si @numero1 > @numero2
mostrar @numero1 + ' es mayor'
pero si @numero1 < @numero2
mostrar @numero2 + ' es mayor'
si no
mostar 'Son iguales'
```
```
var numero1 = 5;
var numero2 = 7;

if (numero1 > numero2) {
  console.log(numero1 + ' es mayor que ' + numero2);
}
else if (numero1 < numero2) {
  console.log(numero1 + ' es menor que ' + numero2);
} else {
  console.log('Los números son iguales');
}

```
### EJERCICIO 4:
4 - Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
pedir @a
pedir @b
pedir @c

si @a > @b Y @a > @c
    mostrar @a + ' es el mayor'
pero si @b > @a Y @b > @c
    mostrar @b + ' es el mayor'
<<<<<<< HEAD
si no 
    mostrar @c + ' es el mayor'

__ 5 - Diseña un programa que siga el siguiente proceso: __ 
=======
si no
    mostrar @c + ' es el mayor'
```


### EJERCICIO 5
5 - Diseña un programa que siga el siguiente proceso:
>>>>>>> 32113809e613355733a21dfb3e67cdc3db99913b

Pedir por teclado tres números.
Si el primero es negativo, debe sumar los otros dos
Si no multiplicará los tres numeros
Mostrar el resultado final incluyendo una referencia a la operación realizada.
<<<<<<< HEAD

=======
```
>>>>>>> 32113809e613355733a21dfb3e67cdc3db99913b
pedir @a
pedir @b
pedir @c

si @a < 0
<<<<<<< HEAD
entonces @b + @c
=======
entonces @b + @c
```

### EJERCICIO 6
6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.

Se aplica un 25% cuando:
Estamos en los meses de invierno
Y no es viernes o fin de semana.
```
pedir @elMes
pedir @elDia

@lista = diciembre Y enero Y febrero  Y marzo
@lista2 = lunes, martes, miercoles, jueves
por cada @mes en @lista
  si @mes = @elMes
    por cada @dia en @lista2
      si @dia = @elDia
        mostrar 'Tienes descuento del 25%'
      si no
        mostrar 'No hay descuento hoy'

ERROR EN LISTA
```

### EJERCICIO 7
7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.

```
pedir @numero

si @numero < 0
  mostrar 'Tu número es negativo'
si no
  mostrar 'Tu número es positivo'

```

### EJERCICIO 8
8 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es par o impar.

```
var numero = prompt('Dame un número por favor');

if (numero % 2 === 0) {
  console.log('El número que me has dado es par');
} else {
  console.log('El número que mes has dado es impar');
}

```

### EJERCICIO 9
9 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo.

### EJERCICIO 10
10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

Características:
El usuario introduce tres números (día, mes, año)
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)




## CODIGO DE GINGER CODE
```
// Esto es un comentario

// Mostrar información:
mostrar "Hola Mundo!!"

// Declarar variables
definir @numero1 = 1

// Asignar valor a variable
@numero2 = 2
@texto = "Un texto"

// Operaciones sencillas
@union = @texto + " y mas texto"
@operacion = @numero1 * @numero2
@condicion = @numero1 >= @numero2

// Operaciones en versión texto natural
@operacion = @numero1 multiplicado por @numero2
@condicion = @numero1 es mayor o igual que @numero2

// Listas (Arrays)
@lista = 1 y 2 y 3
@lista2 = 1,2,3

// Prompt, solicitar dato al usuario
pedir @nombre

// Diccionarios, objetos o estructuras
@trabajador
	@nombre = @nombre
	@id = 123456
	@tags = "azul","verde","rojo"

// Mostrar objetos completos
mostrar @trabajador

// Condicionales
si 1 > 0
	mostrar "A"
pero si 1<0
	mostrar "B"
si no
	mostrar "C"

// Condicionales anidadas y bucles
si @numero2 > @numero1
	mostrar "Es mayor"
	repetir 2
		mostrar "Repitiendo 2"
	si 1
		@a = 1

// Bucle sencillo (for simplificado)
@contador = 0
repetir 5
	@contador = @contador + 1
	mostrar @contador

// Bucle condicional (while)
repetir si @contador>0
	@contador = @contador - 1
	mostrar @contador

// Iterador (forof)
por cada @cosa en @lista
	mostrar @cosa

// Funciones o procedimientos con parametros
procedimiento #multiplicar @A y @B
	// Resultado de procedimiento
	devolver @A multiplicado por @B

// Forma abreviada para declarar funciones/procedimientos
#dividir @A y @B
	devolver @A / @B

// Ejecución de funciones/procedimientos
mostrar #multiplicar 2 y 2
mostrar #dividir 10 y 5
```
>>>>>>> 32113809e613355733a21dfb3e67cdc3db99913b
