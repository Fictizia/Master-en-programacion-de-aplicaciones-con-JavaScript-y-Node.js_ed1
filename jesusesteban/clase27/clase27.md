### Ejercicios

Todos los ejercicios deben seguir el mismo proceso:
- Escribir las pruebas primero (Test First Development)
- Refactorización (Refactoring)

**1 -** Diseña un algoritmo que lea dos números y realice los siguientes cálculos:
- Características:
	- Valor de su suma
	- Valor de su resta
	- Valor de su division
	- Valor de su producto

- Pruebas necesarias:
	- Comprobar si ambos parámetros son números
	- Comprobar si uno o varios parámetros son cadenas

```javascript
	// Tests
	QUnit.module( "Módulo de calculosVarios(valor1, valor2)", function(){
		
		var condicion = {suma: 50, resta: -30, division: 0.25, multiplicacion: 400};
		var condicion2 = {suma: 30, resta: 50, division: -4, multiplicacion: -400};

	    QUnit.test( "calculosVarios(10, 40) con números", function( assert ) {
	        propEqual(condicion, calculosVarios(10, 40), "calculosVarios(10, 40) es igual a condicion");
	    	propEqual(condicion2, calculosVarios(40, -10), "calculosVarios(40, -10) es igual a condicion2");
	    });


	    QUnit.test( "calculosVarios(\"10\", \"40\") con cadenas", function( assert ) {
	        propEqual(condicion, calculosVarios("10", "40"), "calculosVarios(\"10\", \"40\") es igual a condicion");
	    	propEqual(condicion2, calculosVarios("40", "-10"), "calculosVarios(\"40\", \"-10\") es igual a condicion2");
	    });

    });
    
	// Código
	function calculosVarios(valor1, valor2){
		valor1 = parseFloat(valor1);
		valor2 = parseFloat(valor2);
		return {
			suma: valor1+valor2,
			resta: valor1-valor2,
			division: valor1/valor2 ,
			multiplicacion: valor1*valor2
		}
	}
```


**2 -** Diseña un algoritmo que lea tres números distintos y nos diga cual de ellos es el mayor.

- Pruebas necesarias:
	- Comprobar si ambos parámetros son números
	- Comprobar si uno o varios parámetros son cadenas
	- Comprueba si todos los parámetros son iguales

```javascript
	// Tests
	QUnit.module( "Módulo de compararVariosNumeros()", function(){
		
		var condicion = "3 es mayor";
		var condicion2 = "Son iguales";

	    QUnit.test("con números", function() {
	        deepEqual(compararVariosNumeros(2,1,3), condicion, "compararVariosNumeros(2,1,3) 3 es el mayor");
	        deepEqual(compararVariosNumeros(1,3,2), condicion, "compararVariosNumeros(1,3,2) 3 es el mayor");
	        deepEqual(compararVariosNumeros(3,2,1), condicion, "compararVariosNumeros(3,2,1) 3 es el mayor");
	        deepEqual(compararVariosNumeros(3,3,3), condicion2, "compararVariosNumeros(3,3,3) son iguales");
	    }); 

	    QUnit.test("con cadenas", function() {
	        deepEqual(compararVariosNumeros("2","1","3"), condicion, "compararVariosNumeros(\"2\",\"1\",\"3\") 3 es el mayor");
	        deepEqual(compararVariosNumeros("1","3","2"), condicion, "compararVariosNumeros(\"1\",\"3\",\"2\") 3 es el mayor");
	        deepEqual(compararVariosNumeros("3","2","1"), condicion, "compararVariosNumeros(\"3\",\"2\",\"1\") 3 es el mayor");
	        deepEqual(compararVariosNumeros("3","3","3"), condicion2, "compararVariosNumeros(\"3\",\"3\",\"3\") son iguales");
	    }); 
    });

	// Código
	function compararVariosNumeros (valor1, valor2, valor3) {

		valor1 = parseFloat(valor1);
		valor2 = parseFloat(valor2);
		valor3 = parseFloat(valor3);

		if (valor1 > valor2 & valor1 > valor3) {
			return valor1 + " es mayor";
		} else if (valor1 === valor2 && valor2 === valor3) {
			return "Son iguales";
		} else {
			if(valor2 > valor3){
				return valor2 + " es mayor";
			} else {
				return valor3 + " es mayor";
			}
		};
	}
```


**3 -** Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
- Se aplica un 25% cuando:
	- Estamos en los meses de invierno
	- Y no es viernes o fin de semana.

- Pruebas necesarias:
	- Comprobar si uno o varios los parámetros son números
	- Comprobar si uno o varios parámetros son cadenas
	- Comprobar cada uno de los meses del invierno
	- Comprobar cada día de la semana
	- Comprobar precios negativos
	- Comprobar "diaSemana": "Sabado" y "Sábado"
	- Comprobar "diaSemana": "Sabado" y "Sábado"

```javascript
	// Tests
	QUnit.module( "Módulo de calcularDescuento()", function(){
		
		var condicion = "BINGO! Has acertado de mes y días. Debes pagar solamente 375";
		var condicion1 = "Precio incorrecto!";
		var condicion2 = "No se aplica descuento.. ven en invierno mejor!. Debes pagar 500";
		var condicion3 = "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar 500";


	    QUnit.test("Precios", function() {
	        deepEqual(calcularDescuento (1, 1, -500), condicion1, "-500");
	        deepEqual(calcularDescuento (1, 1, 0), condicion1, "0");
	        deepEqual(calcularDescuento (1, 1, 500), condicion, "500");
	        deepEqual(calcularDescuento (1, 1, "500"), condicion, "\"500\"");
	    }); 

	    QUnit.test("Días de la semana", function() {
	        deepEqual(calcularDescuento (1, 1, 500), condicion, "(1) - Lunes");
	        deepEqual(calcularDescuento (1, "1", 500), condicion, "(\"1\") - Lunes");
	        deepEqual(calcularDescuento (1, "Lunes", 500), condicion, "(\"Lunes\") - Lunes");
	        deepEqual(calcularDescuento (1, 2, 500), condicion, "(2) - Martes");
	        deepEqual(calcularDescuento (1, "2", 500), condicion, "(\"2\") - Martes");
	        deepEqual(calcularDescuento (1, "Martes", 500), condicion, "(\"Martes\") - Martes");
	        deepEqual(calcularDescuento (1, 3, 500), condicion, "(3) - Miércoles");
			deepEqual(calcularDescuento (1, "3", 500), condicion, "(\"3\") - Miércoles");
			deepEqual(calcularDescuento (1, "Miercoles", 500), condicion, "(\"Miercoles\") - Miércoles");
	        deepEqual(calcularDescuento (1, 4, 500), condicion, "(4) - Jueves");
			deepEqual(calcularDescuento (1, "4", 500), condicion, "(\"4\") - Jueves");
			deepEqual(calcularDescuento (1, "Jueves", 500), condicion, "(\"Jueves\") - Jueves");
	        deepEqual(calcularDescuento (1, 5, 500), condicion3, "(5) - Viernes");
			deepEqual(calcularDescuento (1, "5", 500), condicion3, "(\"5\") - Viernes");
			deepEqual(calcularDescuento (1, "Viernes", 500), condicion3, "(\"Viernes\") - Viernes");
	        deepEqual(calcularDescuento (1, 6, 500), condicion3, "(6) - Sábado");
	        deepEqual(calcularDescuento (1, "6", 500), condicion3, "(\"6\") - Sábado");
	        deepEqual(calcularDescuento (1, "Sabado", 500), condicion3, "(\"Sabado\") - Sábado");
	        deepEqual(calcularDescuento (1, "Sábado", 500), condicion3, "(\"Sábado\") - Sábado");
	        deepEqual(calcularDescuento (1, 7, 500), condicion3, "(7) - Domingo");
			deepEqual(calcularDescuento (1, "7", 500), condicion3, "(\"7\") - Domingo");
			deepEqual(calcularDescuento (1, "Domingo", 500), condicion3, "(\"Domingo\") - Domingo");
	    });

		QUnit.test("Meses del año", function() {
	        deepEqual(calcularDescuento (1, 1, 500), condicion, "(1) - Enero");
	        deepEqual(calcularDescuento ("1", 1, 500), condicion, "(\"1\") - Enero");
	        deepEqual(calcularDescuento ("Enero", 1, 500), condicion, "(\"Enero\") - Enero");
	        deepEqual(calcularDescuento (2, 1, 500), condicion, "(2) - Febrero");
	        deepEqual(calcularDescuento ("2", 1, 500), condicion, "(\"2\") - Febrero");
	        deepEqual(calcularDescuento ("Febrero", 1, 500), condicion, "(\"Febrero\") - Febrero");
	        deepEqual(calcularDescuento (3, 1, 500), condicion2, "(3) - Marzo");
	        deepEqual(calcularDescuento ("3", 1, 500), condicion2, "(\"3\") - Marzo");
	        deepEqual(calcularDescuento ("Marzo", 1, 500), condicion2, "(\"Marzo\") - Marzo");	        
	        deepEqual(calcularDescuento (4, 1, 500), condicion2, "(4) - Abril");
	        deepEqual(calcularDescuento ("4", 1, 500), condicion2, "(\"4\") - Abril");
	        deepEqual(calcularDescuento ("Abril", 1, 500), condicion2, "(\"Abril\") - Abril");
	        deepEqual(calcularDescuento (5, 1, 500), condicion2, "(5) - Mayo");
	        deepEqual(calcularDescuento ("5", 1, 500), condicion2, "(\"5\") - Mayo");
	        deepEqual(calcularDescuento ("Mayo", 1, 500), condicion2, "(\"Mayo\") - Mayo");
	        deepEqual(calcularDescuento (6, 1, 500), condicion2, "(6) - Junio");
	        deepEqual(calcularDescuento ("6", 1, 500), condicion2, "(\"6\") - Junio");
	        deepEqual(calcularDescuento ("Junio", 1, 500), condicion2, "(\"Junio\") - Junio");
	        deepEqual(calcularDescuento (7, 1, 500), condicion2, "(7) - Julio");
	        deepEqual(calcularDescuento ("7", 1, 500), condicion2, "(\"7\") - Julio");
	        deepEqual(calcularDescuento ("Julio", 1, 500), condicion2, "(\"Julio\") - Julio");
	        deepEqual(calcularDescuento (8, 1, 500), condicion2, "(8) - Agosto");
	        deepEqual(calcularDescuento ("8", 1, 500), condicion2, "(\"8\") - Agosto");
	        deepEqual(calcularDescuento ("Agosto", 1, 500), condicion2, "(\"Agosto\") - Agosto");
	        deepEqual(calcularDescuento (9, 1, 500), condicion2, "(9) - Septiembre");
	        deepEqual(calcularDescuento ("9", 1, 500), condicion2, "(\"9\") - Septiembre");
	        deepEqual(calcularDescuento ("Septiembre", 1, 500), condicion2, "(\"Septiembre\") - Septiembre");
	        deepEqual(calcularDescuento (10, 1, 500), condicion2, "(10) - Octubre");
	        deepEqual(calcularDescuento ("10", 1, 500), condicion2, "(\"10\") - Octubre");
	        deepEqual(calcularDescuento ("Octubre", 1, 500), condicion2, "(\"Octubre\") - Octubre");
	        deepEqual(calcularDescuento (11, 1, 500), condicion2, "(11) - Noviembre");
	        deepEqual(calcularDescuento ("11", 1, 500), condicion2, "(\"11\") - Noviembre");
	        deepEqual(calcularDescuento ("Noviembre", 1, 500), condicion2, "(\"Noviembre\") - Noviembre");
	        deepEqual(calcularDescuento (12, 1, 500), condicion, "(12) - Diciembre");
	        deepEqual(calcularDescuento ("12", 1, 500), condicion, "(\"12\") - Diciembre");
	        deepEqual(calcularDescuento ("Diciembre", 1, 500), condicion, "(\"Diciembre\") - Diciembre");
		});

    });

	// Código
	function calcularDescuento (mes, diaSemana, precio) {

		
		if (typeof mes === 'string'){
			
			switch (mes){
				case '12':
					mes = "Diciembre";
					break;
				case '1':
					mes = "Enero";
					break;
				case '2':
					mes = "Febrero";
					break;
			}
		} else {
			mes = parseInt(mes);
			
			switch (mes){
				case 12:
					mes = "Diciembre";
					break;
				case 1:
					mes = "Enero";
					break;
				case 2:
					mes = "Febrero";
					break;
			}
		}

		if (typeof diaSemana === 'string'){

			switch (diaSemana){
				case '5':
					diaSemana = "Viernes";
					break;
				case '6':
					diaSemana = "Sabado";
					break;
				case '7':
					diaSemana = "Domingo";
					break;
			}
		} else {
			
			diaSemana = parseInt(diaSemana);
			
			switch (diaSemana){
				case 5:
					diaSemana = "Viernes";
					break;
				case 6:
					diaSemana = "Sabado";
					break;
				case 7:
					diaSemana = "Domingo";
					break;
			}

		}

		
		precio = parseFloat(precio);

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;
		
		if (precio > 0){
			if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
				
				if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Sábado" || diaSemana === "Domingo"){
					return "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar " + precio;
				} else {
					return "BINGO! Has acertado de mes y días. Debes pagar solamente " + precioConDescuento;
				}

			} else {
				return "No se aplica descuento.. ven en invierno mejor!. Debes pagar " + precio;
			}
		
		} else {
			return "Precio incorrecto!";
		}

	}
```


**4 -** Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año)
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- El año mínimo es 1970
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DIASEMANA, DD de MES de AAAA)

```javascript
	// Tests
	QUnit.module( "Módulo de verificadorDeFechas()", function(){
		
		var condicion = "Error! los datos no son correctos!";
		var condicion2 = {fecha: "24/03/2016", fechaCompleta: "jueves, 24 de marzo de 2016"};
	    
	    QUnit.test("Entrada de datos", function() {
			deepEqual(verificadorDeFechas(24,3,2016), condicion2, "(24/03/2016) Fecha completa");
			deepEqual(verificadorDeFechas("24","3","2016"), condicion2, "(24/03/2016) Fecha completa (string)");
	    	deepEqual(verificadorDeFechas(-1, 1, 1980), condicion, "(-1) Día fuera de rango");
	    	deepEqual(verificadorDeFechas(32, 1, 1980), condicion, "(32) Día fuera de rango");
	    	deepEqual(verificadorDeFechas("hola", 1, 1980), condicion, "(\"hola\") Día no válido");
	    	deepEqual(verificadorDeFechas(1, -1, 1980), condicion, "(-1) Mes fuera de rango");
	    	deepEqual(verificadorDeFechas(1, 13, 1980), condicion, "(13) Mes fuera de rango");
	    	deepEqual(verificadorDeFechas(1, "hola", 1980), condicion, "(\"hola\") Mes no válido");
	    	deepEqual(verificadorDeFechas(1, 1, 1969), condicion, "(1969) Mes fuera de rango");
	    	deepEqual(verificadorDeFechas(1, 1, "hola"), condicion, "(\"hola\") Mes no válido");
	    }); 

    });

	// Código
	function verificadorDeFechas(day, month, year) {
		
		day = parseInt(day);
		month = parseInt(month);
		year = parseInt(year);

		if(day <= 31 && day > 0 && month <=12 && month > 0 && year >= 1970){

			// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
			var fecha = new Date(year, month-1, day);

			var opciones = { 
				weekday: 'long', 
				year: 'numeric', 
				month: 'long', 
				day: 'numeric' 
			};

			return {
				fecha: fecha.toLocaleDateString('es-ES'),
				fechaCompleta: fecha.toLocaleDateString('es-ES', opciones)
			}

		} else {
			return "Error! los datos no son correctos!"
		}

	}
```


**5 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.

```javascript
	// Tests
	QUnit.module( "Módulo de cuantasVeces()", function(){

	    QUnit.test("Verificar resultados", function() {
	    	deepEqual(cuantasVeces("a", "amigas, amigos, y demas... gentes"), 4, "(a) 4 veces en \"amigas, amigos, y demas... gentes\"");
	    	deepEqual(cuantasVeces("x", "amigas, amigos, y demas... gentes"), 0, "(x) 0 veces en \"amigas, amigos, y demas... gentes\"");
	    	notOk(cuantasVeces(), "false, sin parámetros");
	    	notOk(cuantasVeces(1, 1123), "false, usando números");
	    	notOk(cuantasVeces({letra:"a"}, {texto:"hola"}), "false, usando objetos");
	    }); 

    });

	// Código
	
	function cuantasVeces(letra, texto) {
		
		if (typeof letra === 'string' && typeof texto === 'string') {
			
			var totalVeces = 0;
			var seleccionTexto = texto.split("");
			
			for (var i = 0; i <= seleccionTexto.length; i++) {
				
				if (seleccionTexto[i] === letra){
					totalVeces++
				};
				
			};

			return totalVeces;

		} else {
			return false;
		}
	}
```

**6 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```javascript
	// Tests
	QUnit.module( "Módulo de conversionRomana()", function(){

	    QUnit.test("Verificar números", function() {
			deepEqual(conversionRomana(1), "I", "1 = I");
			deepEqual(conversionRomana(4), "IV", "4 = IV");
			deepEqual(conversionRomana(5), "V", "5 = V");
			deepEqual(conversionRomana(6), "VI", "6 = VI");
			deepEqual(conversionRomana(7), "VII", "7 = VII");
			deepEqual(conversionRomana(8), "VIII", "8 = VIII");
			deepEqual(conversionRomana(9), "IX", "9 = IX");
			deepEqual(conversionRomana(10), "X", "10 = X");
			deepEqual(conversionRomana(12), "XII", "12 = XII");
			deepEqual(conversionRomana(23), "XXIII", "23 = XXIII");
			deepEqual(conversionRomana(34), "XXXIV", "23 = XXIII");
			deepEqual(conversionRomana(45), "XLV", "45 = XLV");
			deepEqual(conversionRomana(50), "L", "50 = L");
	    }); 

	    QUnit.test("Verificar cadenas", function() {
			deepEqual(conversionRomana("1"), "I", "\"1\" = I");
			deepEqual(conversionRomana("4"), "IV", "\"4\" = IV");
			deepEqual(conversionRomana("5"), "V", "\"5\" = V");
			deepEqual(conversionRomana("6"), "VI", "\"6\" = VI");
			deepEqual(conversionRomana("7"), "VII", "\"7\" = VII");
			deepEqual(conversionRomana("8"), "VIII", "\"8\" = VIII");
			deepEqual(conversionRomana("9"), "IX", "\"9\" = IX");
			deepEqual(conversionRomana("10"), "X", "\"10\" = X");
			deepEqual(conversionRomana("12"), "XII", "\"12\" = XII");
			deepEqual(conversionRomana("23"), "XXIII", "\"23\" = XXIII");
			deepEqual(conversionRomana("34"), "XXXIV", "\"23\" = XXIII");
			deepEqual(conversionRomana("45"), "XLV", "\"45\" = XLV");
			deepEqual(conversionRomana("50"), "L", "\"50\" = L");
	    });

	    QUnit.test("Verificar otros", function() {
			notOk(conversionRomana(51), "51 - fuera de rango");
			notOk(conversionRomana(-1), "-1 - fuera de rango");
	    }); 
    });

	// Código
	
	function conversionRomana(numero) {
		
		numero = parseInt(numero);

		var numeroOriginal = numero;
	  

		if (numero <= 50 && numero > 0){

	    var numeroRomano = "";
	    
			while(numero > 0){
				
				if(numero === 50){
					numeroRomano = "L";
					numero = 0;
				} else if (numero >= 40 && numero < 50){
					numeroRomano += "XL";
					numero -= 40;
				} else if (numero >= 10 && numero < 40){
					numeroRomano += "X";
					numero -= 10;
				} else if(numero === 9){
					numeroRomano += "IX";
					numero -= 9;
				} else if(numero === 8){
					numeroRomano += "VIII";
					numero -= 8;
				} else if (numero === 7){
					numeroRomano += "VII";
					numero -= 7;
				} else if (numero === 6){
					numeroRomano += "VI";
					numero -= 6;
				} else if (numero === 5) {
					numeroRomano += "V";
					numero -= 5;
				} else if (numero === 4){
					numeroRomano += "IV";
					numero -= 4;				
				} else if(numero <= 3 && numero > 0){
					numeroRomano += "I";
					numero -= 1;
				}
	      
			}

			return numeroRomano;

		} else {
	    
			return false;
		
	  }

	}
```

**7 -** Agrupa todo el código y los test:
- Requisitos: 
	- Utiliza una estructura de archivos acorde

- [Solución](../OTROS/test_completo/index.html)