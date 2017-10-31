# Clase 4

### Recordatorios

**[Issue Relevante](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/5)**

**[Apúntate a Slack!](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/1)**

### Ejercicios

**1 -** Diseña un programa que lea dos números y realice los siguientes cálculos:
- Valor de su suma
- Valor de su resta
- Valor de su division
- Valor de su producto
```
    procedimiento #operacionesBasicas @A y @B
    	definir @suma = @a mas @b
        definir @resta = @a menos @b
        definir @division = @a dividido @b
        definir @producto = @a multiplicado @b
        mostrar "La suma de " + @a + " y " + @b + " es igual a " + @suma
    	mostrar "La resta de " + @a + " y " + @b + " es igual a " + @resta
    	mostrar "La división de " + @a + " y " + @b + " es igual a " + @division
    	mostrar "El producto de " + @a + " y " + @b + " es igual a " + @producto

```

**2 -** Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.
- Trucos:
	- Calcular porcentajes (segmento*100)/total
```
    procedimiento #porcentajeGenero @genero y @total
    	devolver "El porcentaje es de " + @genero * 100 / @total
    //para mujeres
    mostrar #porcentajeGenero 3 y 8
    //para hombres
    mostrar #porcentajeGenero 5 y 8
```

**3 -** Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
```
    procedimiento #whoIsBigger @A y @B
    	si @A > @B
    		mostrar "El número mayor es " + @A
    	pero si @A < @B
    		mostrar "El número mayor es " + @B
    	si no
    		mostrar "Los números son iguales"
```

**4 -** Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
```
    procedimiento #whoIsBigger @A y @B y @C
    	si @A > @B Y @A > @C
    		mostrar "El número mayor es " + @A
    	pero si @A > @B Y @A < @C
    		mostrar "El número mayor es " + @C
    	pero si @B > @C
    		mostrar "El número mayor es " + @B
    	si no
    		mostrar "El número mayor es " + @C
```

**5 -** Diseña un programa que siga el siguiente proceso:
- Pedir por teclado tres números.
- Si el primero es negativo, debe sumar los otros dos
- Si no multiplicará los tres numeros
- Mostrar el resultado final incluyendo una referencia a la operación realizada.
```
    //falta validar
    pedir @numero1
    pedir @numero2
    pedir @numero3

    si @numero1 menor 0
    	definir @resultado = @numero2 + @numero3
    	mostrar @numero2 + " + " + @numero3 + " es igual a " + @resultado
    si no
    	definir @resultado = @numero1 * @numero2 * @numero3
    	mostrar @numero1 + " multiplicado por " + @numero2 + " multiplicado por " + @numero3 + " es igual a " + @resultado
```

6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.
```
    // solo deberia haber 1 variable, falta función precargada date() para saber que dia es hoy
    //validador typeof
    procedimiento #discount @price y @day y @month y @dayWeek
    	si @month == 12 AND @day >= 21 OR @month == 3 AND @day <= 20 OR @month == 1 OR @month == 2
    		si @dayWeek <= 4
    			// no se pueden usar parentesis asi que dividimos la operacion en 2
    			definir @discountPhase1 = @price * 25
    			definir @discount = @discountPhase1 / 100
    			definir @appliedPrice = @price - @discount
    			mostrar "Rebaja aplicada!El precio actualiado es de " + @appliedPrice
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
