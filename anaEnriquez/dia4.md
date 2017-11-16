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
    		si no
    		    mostrar "Hoy no amigo"
    	si no
    	    mostrar "Hoy no amigo"
    si no
        mostrar "Hoy no amigo"
```

7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
```
    pedir @numero
    si @numero < 0
	    mostrar @numero + " es un número negativo"
    si no
	    mostrar @numero + " es un número positivo"
```

8 - Diseña un algoritmo que al  introducir un numero por teclado. Que nos diga si es par o impar.
```
    pedir @numero
    si @numero % 2 == 0
	    mostrar @numero + " es un número par"
    si no
	    mostrar @numero + " es un número impar"
```

9 -  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.
```
	pedir @masterpass
    definir @count = 0
    definir @magic = "no"
	repetir si @count < 3 AND @magic = "yes"
		si @masterpass === "Fictizia mola mucho"
			mostrar "Acceso concedido, su silla ejectará en 10 segundos para llevarle a la guarida secreta..."
			@magic = "yes"
		si no
        	@count = @count + 1
			@intentos = 3 - @count
			mostrar "Acceso denegado, le quedan " + @intentos + " más antes de que la pasma vaya a su dirección IP"
	si count >= 3
	    mostrar "Sayonara baby"
```

10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
```
    repetir si @data<1
	    pedir @day
	    pedir @month
	    pedir @year
        @data = 1
	    @defaultError = "Por favor, introduce una fecha correcta."
	    si @day > 31 OR @day <= 0
    		@data = 0
    		mostrar @defaultError + " No existen días superiores a 31"
    	pero si @month > 12 OR @month <= 0
    		@data = 0
    		mostrar @defaultError + " No existen meses superiores a 12"
    	pero si @day > 30 Y (@month == 11 OR @month == 4 OR @month == 6 OR @month == 9)
            @data = 0
            mostrar @defaultError + " No existen días mayores a 30 en ese mes"
        pero si @day > 28 Y @month == 2
            @data = 0
            mostrar @defaultError + " En febrero sólo hay 28 días"
    	pero si @day > 31 Y (@month == 1 OR @month == 3 OR @month == 5 OR @month == 7 OR @month == 8 OR @month == 10 OR @month == 12)
            @data = 0
            mostrar @defaultError + " No existen días mayores a 31 en ese mes"
    	//falta un pero si year no tiene 4 cifras...
    	pero si data == 1
    		// habria que mirar si dia y mes son 1 digito para añadir un 0 a la izquierda
    		mostrar "La fecha introducida es " + @day + "/" + @month + "/" + @year
    		@meses = "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            mostrar @day + " de " + @meses@month + " de " + @year
```
