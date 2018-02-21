![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 27

### Testing

**Estado actual:**

![testing_graph](http://ashleynolan.co.uk/assets/img/blog/tooling-survey/2015/q7.jpg)


**Objetivos:**
- Código que verifica el funcionamiento de otro código.
- Deben poder realizarse de manera automática.
- Cubrir mayor cantidad de código posible.
- Independientes entre si.
- Capaces de ejercutarse infinidad de veces.
- Pueden agruparse en Test Suites.
- Uso de colores y mensajes claros.

- Ejemplo:
```javascript
    // Función 
    function sumar (p1, p2){
      return p1 + p2;
    }
    
    // Test
    function testSumar(){
      if (sumar(1, 2) !== 3) {
        document.write('<p style="color: red;">sumar(1, 2) ERROR - No devuelve 3</\p>');
      } else {
        document.write('<p style="color: green;">sumar(1, 2) OK</p>');
      }
    
      if (sumar("2", 2) !== 4) {
        document.write('<p style="color: red;">sumar("2", 2) ERROR - No devuelve 4</p>');
      } else {
        document.write('<p style="color: green;">sumar("2", 2) OK</p>');
      }
    }
```

### Test Driven Development (TDD)

> Desarrollo guiado por pruebas de software, o Test-driven development (TDD) es una práctica de ingeniería de software que involucra otras dos prácticas: Escribir las pruebas primero (Test First Development) y Refactorización (Refactoring). Para escribir las pruebas generalmente se utilizan las pruebas unitarias (unit test en inglés). En primer lugar, se escribe una prueba y se verifica que las pruebas fallan. A continuación, se implementa el código que hace que la prueba pase satisfactoriamente y seguidamente se refactoriza el código escrito. El propósito del desarrollo guiado por pruebas es lograr un código limpio que funcione. La idea es que los requisitos sean traducidos a pruebas, de este modo, cuando las pruebas pasen se garantizará que el software cumple con los requisitos que se han establecido [Wikiwand](https://www.wikiwand.com/es/Desarrollo_guiado_por_pruebas)

- Primero los test
- Depués el código (Refactorización <-> Testing)
    - Ciclo de Vida:
        - Escribe los tests
        - Ejecuta los tests (Sin código, solo probando los propios tests)
        - Escribe el código suficiente para que pasen los tests.
        - Ejecuta los tests
        - Refactoriza
        - Repite


### Behavior Driven Development (BDD)

> En la Ingeniería de Software, behavior-driven development o desarrollo guiado por el comportamiento (DGC), es un proceso de desarrollo de software que surgió a partir del desarrollo guiado por pruebas (DGP). El desarrollo guiado por el comportamiento combina las técnicas generales y los principios del DGP, junto con ideas del diseño guiado por el dominio y el análisis y diseño orientado a objetos para proveer al desarrollo de software y a los equipos de administración, con herramientas compartidas y un proceso compartido de colaboración en el desarrollo de software.

> Aunque el DGC es esencialmente una idea sobre cómo el desarrollo de software debería ser administrado tanto por los intereses del negocio como por el entendimiento técnico, la práctica del DGC asume el uso de herramientas de software especializadas para asistir en el proceso de desarrollo. Aunque estas herramientas son comúnmente desarrolladas específicamente para su uso en proyectos de DGC, se pueden ver como formas especializadas de las herramientas que asisten en el DGP. Las herramientas sirven para agregar automatización para el lenguaje ubicuo (lenguaje estructurado alrededor del modelo de dominio, utilizado en el diseño guiado por el dominio para conectar actividades entre miembros del equipo), el cual es el tema central del DGC. [Wikiwand](http://www.wikiwand.com/es/Desarrollo_guiado_por_comportamiento)

- Orientado al comportamiento 
- Se comprueban que las funcionalidades cumplan lo que se espera de ellas

### Frameworks:

**[QUnit](https://api.qunitjs.com/)**
- [Documentación](https://api.qunitjs.com/) 
- Utilizado por jQuery 
```javascript
    // Función 
    function sumar (p1, p2){
      return p1 + p2;
    }
        
    // Test
    test("test de la funcion sumar(p1, p2)", function() {
      equal(sumar( 1, 2), 3, "1 + 2 = 3" );
      notEqual(sumar( "2", 2), "4", " 2(cadena) + 2 != 4(cadena) ");
    });
```

**[Mocha](https://mochajs.org/)**
- Muy popular
- En necesario incluir [Chai](http://chaijs.com/)
```javascript       
    // Función 
    function sumar (p1, p2){
      return p1 + p2;
    }
            
    // Test
    mocha.setup('bdd');
    var expect = chai.expect;
    var should = chai.should();
    describe("Test de la funcion sumar(p1, p2)", function() {
      it('1 + 2 = 3', function() {
        expect(sumar( 1, 2)).to.equal(3);
      });
            
      it('\"2\" + 2 != \"4\"', function() {
        expect(sumar( "2", 2)).not.equal("4");
      });
            
    });
            
    mocha.run()
```

### QUnit

**Preparando el entorno:**
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>QUnit</title>
  <link rel="stylesheet" href="//code.jquery.com/qunit/qunit-1.20.0.css">
</head>
<body>
  <div id="qunit"></div>
  <div id="qunit-fixture"></div>
  <script src="//code.jquery.com/qunit/qunit-1.20.0.js"></script>
</body>
</html>
```
- [Demo](../OTROS/qunit.html)

**[API Doc](http://api.qunitjs.com/):**

- [Assert](http://api.qunitjs.com/category/assert/)
	- assert.async() *JUnit espera la finalización de una operación/es asíncrona/s*:
		- Un caso
		```javascript
			QUnit.test( "Probando una llamada asíncrona assert.async() test", function( assert ) {
			  var llamadaTermianda = assert.async();
			  setTimeout(function() {
			    assert.ok( true, "Unica llamada terminada.");
			    llamadaTermianda();
			  }, 500 );
			});
		```
		- Multiples casos
		```javascript
			QUnit.test( "Multiples llamadas asíncronas realizadas", function( assert ) {
			  assert.expect( 3 );
			  var llamadaTermianda = assert.async( 3 );
			 
			  setTimeout(function() {
			    assert.ok( true, "Primera llamada terminada." );
			    llamadaTermianda();
			  }, 7000 );
			 
			  setTimeout(function() {
			    assert.ok( true, "Segunda llamada terminada." );
			    llamadaTermianda();
			  }, 6000 );
			 
			  setTimeout(function() {
			    assert.ok( true, "Tercera llamada terminada." );
			    llamadaTermianda();
			  }, 5000 );
			});
		```
	- assert.deepEqual() *Comparación estrcita*:
	```javascript
		QUnit.test("testing equal()", function() {
			var a = {'nombre' : 'Luis'};
			var b = a;
			deepEqual(a, b, "el objeto a y el b son iguales");
			b = {'nombre' : 'Luis'};
			deepEqual(a, b, "el objeto a y el b son iguales");
		});	
	```
	- assert.equal() *Comparación no estricta*:
	```javascript
		QUnit.test("testing equal()", function() {
			equal(1, 1, "1 es 1");
			equal("1","1", "\"1\" es \"1\"");
			equal(1, "1", "1 es \"1\"");
			equal(1, true, "1 es true");
			equal(1, !false, "1 no es false");
			
			// (objetos)
			var a = {'nombre' : 'Luis'};
			var b = a;
			equal(a, b, "el objeto a y el b son iguales");
			b = {'nombre' : 'Luis'};
			equal(a, b, "el objeto a y el b son iguales");
		});	
	```
	- assert.expect() *Especifica el número de comparaciones*:
	```javascript
		QUnit.test( "Usando assert.expect() ", function( assert ) {
		  assert.expect( 2 );
		 
		  function calcular( x, operacion ) {
		    return operacion( x );
		  }
		 
		  var resultado = calcular( 2, function( x ) {
		    assert.ok( true, "calcular() llama a la función operacion." );
		    return x * x;
		  });
		 
		  assert.equal( resultado, 4, "2 al cuadrado es 4" );
		});
	```
	- assert.notDeepEqual() *Comparación desigual estrcita*:
	```javascript
	    QUnit.test("testing equal()", function() {
	        var a = {'nombre' : 'Luis'};
		var b = {'nombre' : 'Alberto'};
	        notDeepEqual(a, b, "el objeto a y el b no son iguales");
	    }); 
	```
	- assert.notEqual() *Comparación desigual no estrcita*:
	```javascript
	    QUnit.test("testing notEqual()", function() {
	        notEqual(true, false, "1 no es false");
	    }); 
	```
	- assert.notOk() *Comparación de un valor boleano (false)*:
	```javascript
		QUnit.test( "Testeando assert.notOk()", function( assert ) {
		  assert.notOk( false, "test false" );
		  assert.notOk( "", "test cadena vacía" );
		  assert.notOk( NaN, "test NaN" );
		  assert.notOk( null, "test null" );
		  assert.notOk( undefined, "test undefined" );
		  // Fallará desde aquí
		  assert.notOk( true, "test true" );
		  assert.notOk( 1, "test número 1 " );
		  assert.notOk( "algo", "Test cadena no vacía" );
		});	
	```
	- assert.notPropEqual() *Comparación de las propiedades de dos objetos (false)*:
	```javascript
		QUnit.test( "Testeando notPropEqual()", function( assert ) {
			var a = {'nombre' : 'Luis', 'valor' : 2};
			var b = {'nombre' : 'Luis', 'valor' : '2'};
			notPropEqual(a, b, "el objeto a y el b no son iguales");
		});	
	```
	- assert.notStrictEqual() *Comparación estricta (false)*:
	```javascript
		QUnit.test( "Testeando assert.notStrictEqual()", function( assert ) {
		  assert.notStrictEqual( 1, "1", "1 y '1' mismo valor, pero diferente tipo" );
		});
	```
	- assert.ok() *Comparación de un valor boleano (true)*:
	```javascript
	    QUnit.test( "Testeando assert.ok()", function( assert ) {
	      assert.ok( true, "test true" );
	      assert.ok( 1, "test número 1 " );
	      assert.ok( "algo", "Test cadena no vacía" );
	    }); 
	```
	- assert.propEqual() *Comparación de las propiedades de dos objetos (true)*:
	```javascript
		QUnit.test( "Testeando propEqual()", function( assert ) {
			var a = {'nombre' : 'Luis', 'valor' : 2};
			var b = a;
			propEqual(a, b, "el objeto a y el b son iguales");
			b = {'nombre' : 'Luis', 'valor' : '2'};
			propEqual(a, b, "el objeto a y el b son iguales");
		});	
	```

	- assert.strictEqual() *Comparación estricta (true)*:
	```javascript
		QUnit.test("Testeando equal()", function() {
			strictEqual(1, 1, "1 is 1");
			strictEqual("1","1", "\"1\" is \"1\"");
			strictEqual(1, "1", "1 is \"1\"");
			strictEqual(1, true, "1 is true");
			strictEqual(1, !false, "1 is not false");
		});	
	```


- [Callbacks](http://api.qunitjs.com/category/callbacks/)
	- QUnit.begin() *Dispara un callback cuando empieza el test suite*:
	```javascript
		QUnit.begin(function( details ) {
		  console.log( "Total de Tests:", details.totalTests );
		});	
	```
	- QUnit.done() *Dispara un callback cuando termina el test suite*:
	```javascript
		QUnit.done(function( details ) {
		  console.log( "Total: ", details.total, " Fallados: ", details.failed, " Pasados: ", details.passed, " Tiempo: ", details.runtime );
		});
	```
	- QUnit.log() *Dispara un callback cuando termina una comprobación*:
	```javascript
		QUnit.log(function( details ) {
		  console.log( "Log: ", details.result, details.message );
		});
	```
	- QUnit.moduleDone() *Dispara un callback cuando termina un módulo*:
	```javascript
		QUnit.moduleDone(function( details ) {
		  console.log( "Módulo terminado: ", details.name, "Fallos/Total: ", details.failed, details.total );
		});	
	```
	- QUnit.moduleStart() *Dispara un callback cuando empieza el módulo*:
	```javascript
		QUnit.moduleStart(function( details ) {
		  console.log( "Módulo empezado: ", details.name );
		});
	```
	- QUnit.testDone() *Dispara un callback cuando termina un test*:
	```javascript
		QUnit.testDone(function( details ) {
		  console.log( "Test terminado: ", details.module, details.name, "Fallados/total: ", details.failed, details.total, details.duration );
		});
	```
	- QUnit.testStart() *Dispara un callback cuando empieza un test*:
	```javascript
		QUnit.testStart(function( details ) {
		  console.log( "Ahora: ", details.module, details.name );
		});
	```


- [Test](http://api.qunitjs.com/category/test/)
	- QUnit.module() *Agrupar los tests bajo una misma etiqueta*:
		- Usando módulos:
		```javascript
			QUnit.module( "Módulo A", function(){
				QUnit.test( "Ejemplo básico", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 2", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
			});
			
			QUnit.module( "Módulo B", function(){
				QUnit.test( "Ejemplo básico 3", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 4", function( assert ) {
				  assert.ok( true, "Espero true..." );
				});
			});
		```
		- Usando sub-módulos:
		```javascript
			QUnit.module( "Módulo A", function(){
				QUnit.test( "Ejemplo básico", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 2", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
			});
			
			QUnit.module( "Módulo B", function(){
				QUnit.test( "Ejemplo básico 3", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
				QUnit.test( "Ejemplo básico 4", function( assert ) {
					assert.ok( true, "Espero true..." );
				});
			
				QUnit.module( "Módulo B.1", function() {
				    QUnit.test( "Ejemplo básico 5", function( assert ) {
				      assert.ok( true, "Espero true..." );
				    });
				});
			});
		```

	- QUnit.only() *Bloque todos los tests y solamente .only() se ejecutará*:
	```javascript
		QUnit.module( "Módulo A", function(){
			QUnit.only( "Ejemplo básico", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
			QUnit.test( "Ejemplo básico 2", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
		});	
	```
	- QUnit.skip() *Salta el test*:
	```javascript
		QUnit.module( "Módulo A", function(){
			QUnit.test( "Ejemplo básico", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
			QUnit.skip( "Ejemplo básico 2", function( assert ) {
				assert.ok( true, "Espero true..." );
			});
		});
	```


**[Plugins](https://qunitjs.com/plugins/):**
- [Ninja Theme](https://github.com/Krinkle/qunit-theme-ninja) 
- [Html](https://github.com/JamesMGreene/qunit-assert-html)


### Resumen:

**Comparaciones de Igualdad**:

- .equal() *Comparación NO estrcita ( x == y)*
- .ok() *Comprobación boleana estricta ( x == true)*
- .strictEqual() *Comparación estrcita ( x === y)*

- Especiales:
	- .deepEqual() *Comparación recursiva para Expresiones regulares, Objetos, Arrays, Fechas, Funciones...*
	- .propEqual() *Comprobación estricta de las propiedades de un objeto*


**Comparaciones de Desigualdad**:

- .notEqual() *Comparación NO estrcita (x != y)*
- .notOk() *Comprobación boleana NO estricta ( x == false)*
- .notStrictEqual() *Comparación estrcita ( x !== y)*

- Especiales:
	- .notDeepEqual() *Comparación recursiva para Expresiones regulares, Objetos, Arrays, Fechas, Funciones...*
	- .notPropEqual() *Comprobación estricta de las propiedades de un objeto*



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
