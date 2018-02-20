![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 61

### Versionado semantico

- [SemVer](http://semver.org/lang/es/)

### Código Limpio

- [Clean Code concepts adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)

### Guías de estilo

- [Idiomatic.js](https://github.com/rwaldron/idiomatic.js/)
- [JavaScript Standard Style ](http://standardjs.com/#why-should-i-use-javascript-standard-style)
- [NPM](https://docs.npmjs.com/misc/coding-style)
- [Felix Geisendörfer](https://github.com/felixge/node-style-guide)
- [Airbnb](https://github.com/airbnb/javascript)
- [Google](https://google.github.io/styleguide/javascriptguide.xml)

### Documentation

- [JSDoc](http://usejsdoc.org/)

### Recursos

- [JS The Right Way](http://jstherightway.org/)
- [JavaScript Clean Coding Best Practices - Node.js at Scale](https://blog.risingstack.com/javascript-clean-coding-best-practices-node-js-at-scale/)
- [Clean Code JavaScript in CSS-TRICKS](https://css-tricks.com/clean-code-javascript/)
- [JavaScript Best Practices](https://www.devbridge.com/articles/javascript-best-practices/)
- [Untangling Spaghetti Code: How to Write Maintainable JavaScript](https://www.sitepoint.com/write-maintainable-javascript/)
- [Uncle Bob’s Clean Code: Irrelevant in the Age of Full-Stack JavaScript?](https://spin.atomicobject.com/2016/12/21/clean-code-full-stack-javascript/)

### ECMA6

- **Soporte**
	- [Compatibilidad de kangax](https://kangax.github.io/compat-table/es6/)

- **Compiladores y transpiladores**
	- [Babel - web](https://babeljs.io/)
	- [Babel - Github](https://babeljs.io/repl/)
	- [Lebab by David Walsh](https://davidwalsh.name/lebab)
	- [lebab - web](https://lebab.io/try-it)
	- [Lebab - Github](https://github.com/lebab/lebab)

- **Recursos**
	- [Pensar asíncronamente en un mundo síncrono](https://medium.com/@ulisesGascon/pensar-as%C3%ADncronamente-en-un-mundo-s%C3%ADncrono-8e25cfcafd83)
	- [ECMAScript 6 Features - jsfeatures.in](https://jsfeatures.in/ES6)
	- [ECMAScript 6 Features by Luke Hoban](https://github.com/lukehoban/es6features#readme)
	- [Learn ES2015 - A detailed overview of ECMAScript 6 features by Babel team](https://babeljs.io/docs/learn-es2015/)
	- [ECMAScript 6 Cheatsheet by Erik Moeller](http://help.wtf/es6)
	- [First Steps with ECMAScript 6 by Axel Rauschmayer](http://exploringjs.com/es6/ch_first-steps.html)
	- [JS Features by Hemanth.HM](http://jsfeatures.in/)
	- [Minimalist examples of ES6 functionalities by Hemanth.HM](https://github.com/hemanth/paws-on-es6)
	- [Understanding ECMAScript 6 by Nicholas C. Zakas](https://leanpub.com/understandinges6/read/)
	- [ES6 Overview in 350 Bullet Points by Ponyfoo](https://ponyfoo.com/articles/es6)
	- [Promise visualization playground for the adventurous](https://bevacqua.github.io/promisees/)
	- [ECMAScript 6 equivalents in ES5 by Addi Osmani](https://github.com/addyosmani/es6-equivalents-in-es5)


**[Principales cambios](http://es6-features.org/)**

- Constantes (cons):
```javascript
	const PI = 3.141593
  
  PI = 3.1; // Uncaught TypeError: Assignment to constant variable.
  
  const objeto = {
    usuario: "yo mismo",
    role: "profe"
  }
  
  objeto.role = "estudiante" // Propiedades no protegidas al cambio
  objeto.nuevo = "" // Se peuden crear nuevas propiedades
  objeto = "" // Uncaught TypeError: Assignment to constant variable. 
  
```

- Scoping:
	- Variables Internas (let):
	```javascript
		for (let i = 0; i < a.length; i++) {
	    let = a[i];
	    //...
		}

		/* ECMA5
		for (var i = 0; i < a.length; i++) {
	    var = a[i];
	    //...
		}
		*/
    
    
    var uno = 1;
    let dos = 2;
    if( uno === 1 ){
      var uno = 10;
      let dos = 20;
      console.log(uno); // 10
      console.log(dos); // 20
    }
    console.log(uno); // 10
    console.log(dos); // 2
    
	```
	- Funciones Internas:
	```javascript
		{
		    function nivel1 () { return 1 }
		    nivel1 ();
		    {
		        function nivel2() { return 2 }
		        nivel2 ();
		    }
		}

		/* ECMA5
		(function () {
		    var nivel1 = function () { return 1; }
		    nivel1();
		    (function () {
		        var nivel2 = function () { return 2; };
		        nivel2();
		    })();
		})();
		*/
	```

- Arrow Functions:
	- No pueden usarse con *yield*
	- No pueden ser usadas como constructores
	```javascript
	var Foo = () => {};
	var foo = new Foo(); // TypeError: Foo is not a constructor
	```
	- No tienen una propiedad de prototipo prototype
	```javascript
	var Foo = () => {};
	console.log(Foo.prototype); // undefined
	```
	- No pueden tener saltos de línea
	```javascript
	var func = ()
           => 1; 
	// SyntaxError: expected expression, got '=>'
	```
	- Retorno de objetos literales
	```javascript
	var func = () => {  foo: 1  };               
	// Al llamar func() retorna undefined!
	
	var func = () => {  foo: function() {}  };   
	// Error de sintaxis: SyntaxError: function statement requires a name
	
	// Funciona correctamente
	var func = () => ({ foo: 1 });
	```
	- Orden de parseo
	```javascript
	let callback;

	callback = callback || function() {}; // ok
	
	callback = callback || () => {};      
	// SyntaxError: invalid arrow-function arguments
	
	callback = callback || (() => {});    // ok
	```
	- Siempre son anónimas:
	```javascript
		impares  = numeros.map(v => v + 1);
		pares = evens.map(v => ({ even: v, odd: v + 1 }))
		otrosNumeros  = evens.map((v, i) => v + i)

		/* ECMA5
		impares  = numeros.map(function (v) { return v + 1; });
		pares = evens.map(function (v) { return { even: v, odd: v + 1 }; });
		otrosNumeros  = numeros.map(function (v, i) { return v + i; });
		*/

	```
	- *return* implicito en declaración inline
	```javascript
		var odds = [1,2,3,4,5].filter(num => num % 2);
		console.log(odds); // Array [ 1, 3, 5 ]
	```
	- *return* con cuerpo de bloque
	```javascript
	var func = x => x * x;                  
	// sintaxis de cuerpo conciso, el "return" está implícito
	
	var func = (x, y) => { return x + y; }; 
	// con cuerpo de bloque, se necesita "return" explícito
	```
	- *this* contextual:
	```javascript
	this.nums.forEach((v) => {
	    if (v % 5 === 0)
	        this.fives.push(v)
	})

	/* ECMA 5
	var self = this;
	this.nums.forEach(function (v) {
	    if (v % 5 === 0)
	        self.fives.push(v);
	});
	*/
	```
	- Las Arrow functions no exponen un objeto arguments 
	```javascript
	var arguments = 42;
	var arr = () => arguments;
	
	arr(); // 42
	
	function foo() {
	  var f = () => arguments[0]; // Referencia al objeto arguments
	  return f(2);
	}
	
	foo(1); // 1
	```
	- El parámetro rest es la mejor alternativa
	```javascript
	function foo() { 
	  var f = (...args) => args[0]; 
	  return f(2); 
	}
	
	foo(1); // 2
	```
	- Arrow functions usadas como métodos
	```javascript
	var obj = {
	  i: 10,
	  b: () => console.log(this.i, this),
	  c: function() {
	    console.log(this.i, this);
	  }
	}
	obj.b(); // prints undefined, Window {...} (or the global object)
	obj.c(); // prints 10, Object {...}
	```
	```javascript
	var obj = {
	  a: 10
	};
	
	Object.defineProperty(obj, 'b', {
	  get: () => {
	    console.log(this.a, typeof this.a, this);
	    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
	  }
	});
	```
	- Invocación a través de los métodos call y apply
	```javascript
	var adder = {
	  base : 1,
	    
	  add : function(a) {
	    var f = v => v + this.base;
	    return f(a);
	  },
	
	  addThruCall: function(a) {
	    var f = v => v + this.base;
	    var b = {
	      base : 2
	    };
	            
	    return f.call(b, a);
	  }
	};
	
	console.log(adder.add(1));         // Imprime 2 como es esperado
	console.log(adder.addThruCall(1)); // También imprime 2 aunque se esperaba 3
	```
	- Sintaxis básica
	```javascript
	(param1, param2, paramN) => {declaraciones} 
	(param1, param2, paramN) =>expresion
	// Equivalente a: () => { return expresion; } 
	
	// Los paréntesis son opcionales cuando sólo dispone de un argumento: singleParam => { statements } 
	singleParam => expresion 
	
	// Una función sin argumentos requiere paréntesis: 
	() => { declaraciones }
	```
	- Sintaxis Avanzada
	```javascript
	// Incluir entre paréntesis el cuerpo para retornar un objeto literal:
	params => ({foo: bar})
	
	// Soporta parámetros rest y parámetros por default
	(param1, param2, ...rest) => { statements }
	(param1 = valorPredef1, param2, ..., paramN = valorPredefN) => { statements }
	
	// Destructuración mediante la lista de parámetros también es soportada
	var f = ([a, b] = [1, 2], {x: c} = {x: a + b}) => a + b + c; f(); // 6
	```

- Gestión de Parámetros en funciones:
	- Parametros opcionales:
	```javascript
		function f (x, y = 7, z = 42) {
		    return x + y + z
		}

		/* ECMA5
		function f (x, y, z) {
		    if (y === undefined){
				y = 7;
			}
		    z = z || 42;
		    return x + y + z;
		};
		*/
	```
	- Parametros adicionales:
	```javascript
		function f (x, y, ...a) {
		    return (x + y) * a.length
		}

		/* ECMA5
		function f (x, y) {
		    var a = Array.prototype.slice.call(arguments, 2);
		    return (x + y) * a.length;
		};
		*/
	```

- Las plantillas de cadena de texto:
	- Concepto:
	```javascript
		`cadena de texto ${expresión} texto`
	```
	- Multiples líneas:
	```javascript
		console.log(`línea 1 de texto
		línea 2 de texto`);

		/* ECMA5
		console.log("línea 1 de texto\nlínea 2 de texto");
		*/
	```
	- Expresiones:
	```javascript
		var customer = { name: "Foo" }
		var card = { amount: 7, product: "Bar", unitprice: 42 }
		message = `Hello ${customer.name},
		want to buy ${card.amount} ${card.product} for
		a total of ${card.amount * card.unitprice} bucks?`

		/* ECMA5
		var customer = { name: "Foo" };
		var card = { amount: 7, product: "Bar", unitprice: 42 };
		message = "Hello " + customer.name + ",\n" +
		"want to buy " + card.amount + " " + card.product + " for\n" +
		"a total of " + (card.amount * card.unitprice) + " bucks?";
		*/
	```
- Mejoras en Objetos (propiedades y métodos):
	- Acortador de propiedades
	```javascript
	let obj = { x, y }
	
	/* ECMA5
	var obj = { x: x, y: y };
	*/
	```
	- Definición de propiedades computerizadas:
	```javascript
		obj = {
		    foo: "bar",
		    [ "prop_" + foo() ]: 42
		}

		/* ECMA5
		obj = {
		    foo: "bar"
		};
		obj[ "prop_" + foo() ] = 42;
		*/
	```
	- Métodos:
	```javascript
		obj = {
		    foo (a, b) {
		        …
		    },
		    bar (x, y) {
		        …
		    },
		    // Generador
		    *quux (x, y) {
		        …
		    }
		}

		/* ECMA5
		obj = {
		    foo: function (a, b) {
		        …
		    },
		    bar: function (x, y) {
		        …
		    },
		    //  quux: no equivalent in ES5
		    …
		};
		*/
	```
- Parsear Binarios y Octales:
```javascript
	0b111110111 === 503
	0o767 === 503

	/* ECMA 5
	parseInt("111110111", 2) === 503;
	parseInt("767", 8) === 503;
	*/
```

- Asignación desestructurada:
	- Objetos:
	```javascript
	//Object Matching, Shorthand Notation & Deep Matching
	var { op: a, lhs: { op: b }, rhs: c } = getASTNode()
	
	//Default Values
	var obj = { a: 1 }
	var { a, b = 2 } = obj
	
	// Parameter Context Matching
	function g ({ name: n, val: v }) {
    	console.log(n, v)
	}
	function h ({ name, val }) {
	    console.log(name, val)
	}
	g({ name: "foo", val:  7 })
	h({ name: "bar", val: 42 })
	
	/* ECMA5
	//Object Matching, Shorthand Notation & Deep Matching
	var tmp = getASTNode();
	var a = tmp.op;
	var b = tmp.lhs.op;
	var c = tmp.rhs;
	
	//Default Values
	var obj = { a: 1 };
	var a = obj.a;
	var b = obj.b === undefined ? 2 : obj.b;
	
	// Parameter Context Matching
	function g (arg) {
	    var n = arg.name;
	    var v = arg.val;
	    console.log(n, v);
	};
	function h (arg) {
	    var name = arg.name;
	    var val  = arg.val;
	    console.log(name, val);
	
	g({ name: "foo", val:  7 });
	h({ name: "bar", val: 42 });
	*/
	```
	- Arrays:
	```javascript
		// Matching
		var list = [ 1, 2, 3 ]
		var [ a, , b ] = list

		// Parameter Context Matching
		function f ([ name, val ]) {
		    console.log(name, val)
		}

		f([ "bar", 42 ]);

		// Fail-Soft Destructuring
		var list2 = [ 7, 42 ]
		var [ a = 1, b = 2, c = 3, d ] = list2

		/* ECMA5
		// Matching
		var list = [ 1, 2, 3 ];
		var a = list[0], b = list[2];

		// Parameter Context Matching
		function f (arg) {
		    var name = arg[0];
		    var val  = arg[1];
		    console.log(name, val);
		};

		f([ "bar", 42 ]);

		// Fail-Soft Destructuring
		var list2 = [ 7, 42 ];
		var a = typeof list2[0] || 1;
		var b = typeof list2[1] || 2;
		var c = typeof list2[2] !== "undefined" ? list2[2] : 3;
		var d = typeof list2[3] !== "undefined" ? list2[3] : undefined;
		*/
	```
- Nuevos Métodos Integrados:
	- Asignación de propiedades enumerables en objetos:
	```javascript
		var dst  = { quux: 0 }
		var src1 = { foo: 1, bar: 2 }
		var src2 = { foo: 3, baz: 4 }
		Object.assign(dst, src1, src2)

		// Verificación
		dst.quux === 0
		dst.foo  === 3
		dst.bar  === 2
		dst.baz  === 4

		/* ECMA5
		var dst  = { quux: 0 };
		var src1 = { foo: 1, bar: 2 };
		var src2 = { foo: 3, baz: 4 };
		Object.keys(src1).forEach(function(k) {
		    dst[k] = src1[k];
		});
		Object.keys(src2).forEach(function(e) {
		    dst[k] = src2[k];
		});

		// Verificación
		dst.quux === 0;
		dst.foo  === 3;
		dst.bar  === 2;
		dst.baz  === 4;
		*/
	```
	- Repetir
	```javascript
	" ".repeat(4 * depth)
	"foo".repeat(3)
	
	/* ECMA5
	Array((4 * depth) + 1).join(" ");
	Array(3 + 1).join("foo");
	*/
	```
	- Busqueda en sub-cadenas:
	```javascript
		"hello".startsWith("ello", 1) // true
		"hello".endsWith("hell", 4)   // true
		"hello".includes("ell")       // true
		"hello".includes("ell", 1)    // true
		"hello".includes("ell", 2)    // false

		/* ECMA5
		"hello".indexOf("ello") === 1;    // true
		"hello".indexOf("hell") === (4 - "hell".length); // true
		"hello".indexOf("ell") !== -1;    // true
		"hello".indexOf("ell", 1) !== -1; // true
		"hello".indexOf("ell", 2) !== -1; // false
		*/
	```
	- Chequear No-Numericos e infinitos:
	```javascript
		Number.isNaN(42) === false
		Number.isNaN(NaN) === true

		Number.isFinite(Infinity) === false
		Number.isFinite(-Infinity) === false
		Number.isFinite(NaN) === false
		Number.isFinite(123) === true

		/* ECMA5
		var isNaN = function (n) {
		    return n !== n;
		};
		var isFinite = function (v) {
		    return (typeof v === "number" && !isNaN(v) && v !== Infinity && v !== -Infinity);
		};
		isNaN(42) === false;
		isNaN(NaN) === true;

		isFinite(Infinity) === false;
		isFinite(-Infinity) === false;
		isFinite(NaN) === false;
		isFinite(123) === true;
		*/
	```
	- isSafeInteger():
	```javascript
		Number.isSafeInteger(42) === true
		Number.isSafeInteger(9007199254740992) === false

		/* ECMA5
		function isSafeInteger (n) {
		    return (
		           typeof n === 'number'
		        && Math.round(n) === n
		        && -(Math.pow(2, 53) - 1) <= n
		        && n <= (Math.pow(2, 53) - 1)
		    );
		}
		isSafeInteger(42) === true;
		isSafeInteger(9007199254740992) === false;
		*/
	```
	- Truncar Número Flotante:
	```javascript
	console.log(Math.trunc(42.7)) // 42
	console.log(Math.trunc( 0.1)) // 0
	console.log(Math.trunc(-0.1)) // -0

	/* ECMA5
	function mathTrunc (x) {
	    return (x < 0 ? Math.ceil(x) : Math.floor(x));
	}
	console.log(mathTrunc(42.7)) // 42
	console.log(mathTrunc( 0.1)) // 0
	console.log(mathTrunc(-0.1)) // -0
	*/
	```

- For... of (iteración sobre valores y no propiedades):
```javascript
  let arr = [3, 5, 7];
  arr.foo = "hello";

  for (let i in arr) {
     console.log(i);
     // "0", "1", "2", "foo"
  }

  for (let i of arr) {
     console.log(i);
     // "3", "5", "7"
  }

```
- Generadores:
	- [Ejemplo de Miguel Sánchez](http://miguelsr.js.org/2015/06/08/es6-generators.html)
	```javascript
		function* greatGenerator(name) {
		    yield "Hola " + name + "!";
		    yield "Esta línea saldrá en la segunda ejecución";
		    yield "Esta otra, en la tercera";
		    if (name === "Miguel") yield "Esta otra, saldrá en la cuarta solo si te llamas miguel"
		}
		var generatorInstance = greatGenerator("paco");
		console.log(generatorInstance.next().value); // Hola paco!
		console.log(generatorInstance.next().value); // Esta línea saldrá la segunda ejecución
		console.log(generatorInstance.next().value); // Esta otra, en la tercera
		console.log(generatorInstance.next().value); // undefined
	```

- Map:
	- Manejando datos independientes con una estructura clave/valor
	```javascript
		let miMap = new Map();
		let miArray = [];

		miMap.set('cadena', 'Hola!');
		miMap.set(miArray, [500, "hola", true, false]);

		console.log(miMap.get(miArray)); // [500, "hola", true, false]
		console.log(miMap.get('cadena')); // Hola!

		console.log(miMap.size); // 2

		miMap.delete('cadena');

		console.log(miMap.size); // 1
	```
- Set:
	```javascript
	let s = new Set()
	s.add("hello").add("goodbye").add("hello")
	s.size === 2
	s.has("hello") === true
	for (let key of s.values()) // insertion order
	    console.log(key)
	```
- Set vs Map:
	```javascript
	//@see: https://stackoverflow.com/a/24085746
	var array = [1, 2, 3, 3];

	var set = new Set(array); // Will have [1, 2, 3]
	assert(set.size, 3);
	
	var map = new Map();
	map.set('a', 1);
	map.set('b', 2);
	map.set('c', 3);
	map.set('C', 3);
	map.set('a', 4); // Has: a, 4; b, 2; c: 3, C: 3
	assert(map.size, 4);
	```

- Clases:
	- La idea es POO sin prototipos
	- Definición de Clase:
	```javascript
		class coche{
		  constructor(marca, modelo, antiguedad, color, tipo) {
		    this.marca = marca;
		    this.modelo = modelo;
		    this.antiguedad = antiguedad;
		    this.color = color;
		    this.tipo = tipo;
		  }
		  detalles() {
		    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
		  }
		}

		let miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
		miCoche.detalles();

		/* ECMA 5
		var coche = function (marca, modelo, antiguedad, color, tipo) {
		    // Propiedades
		    this.marca = marca;
		    this.modelo = modelo;
		    this.antiguedad = antiguedad;
		    this.color = color;
		    this.tipo = tipo;
		    // Metodos
		    this.detalles = function(){
		      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
		    }
		};

		var miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
		miCoche.detalles();
		*/
	```
	- Extensión de Clase:
	```javascript
		class perro {
		  constructor(nombre) {
		    this.patas = 4;
		    this.ojos = 2;
		    this.nombre = nombre;
		  }

		  ladrar() {
		    console.log(`${this.nombre} esta ladrando!`);
		  };
		}

		class pastorAleman extends perro {
		  constructor(nombre) {
		    super('pastorAleman');
		    this.colorLengua = "negra";
		    this.colorOjos = "marrón";
		    this.capacidadTrabajo = true;
		    this.especialidad = "Pastoreo";
		  }

		  informacion() {
		  	console.log(`Nombre: ${this.nombre}
		  	Número patas: ${this.patas}
		  	Número ojos: ${this.ojos}
		  	Color ojos: ${this.colorOjos}
		  	Color Lengua: ${this.colorLengua}
		  	Capacidad de trabajo: ${this.capacidadTrabajo}
		  	Especialidad: ${this.especialidad}`);
		  }
		}

		let miPerro = new pastorAleman('Golden');
		miPerro.informacion();
		miPerro.ladrar();

		/* ECMA 5
		var perro  = function (nombre) {
		    this.patas = 4;
		    this.ojos = 2;
		    this.nombre = nombre;
		    this.ladrar = function(){
		    	console.log(this.nombre + " esta ladrando!");
		    }
		};

		var pastorAleman = function () {
		    this.colorLengua = "negra";
		    this.colorOjos = "marrón";
		    this.capacidadTrabajo = true;
		    this.especialidad = "Pastoreo";
		    this.informacion = function(){
				console.log("Nombre: "+this.nombre+"\nNúmero patas: "+this.patas+"\nNúmero ojos: "+this.ojos+"\nColor Lengua: "+this.colorLengua+"\nColor ojos: "+this.colorOjos+"\nCapacidad de trabajo: "+this.capacidadTrabajo+"\nEspecialidad: "+this.especialidad);
		    }
		};

		pastorAleman.prototype = new perro("Golden");

		var miPerro = new pastorAleman();
		miPerro.informacion();
		miPerro.ladrar();
		*/
	```
	- Métodos Estáticos:
	```javascript
		class coche{
		  static info (edad){
		  	console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conduccir": "y ... ¡Sorpresa! No puedes conduccir."}`);
		  }
		  constructor(marca, modelo, antiguedad, color, tipo) {
		    this.marca = marca;
		    this.modelo = modelo;
		    this.antiguedad = antiguedad;
		    this.color = color;
		    this.tipo = tipo;
		  }
		  detalles() {
		    console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
		  }
		}

		coche.info(50);
		coche.info(8);
		let miCoche = new coche ("Seat", "Panda", 20, "azul", "turismo");
		miCoche.detalles();
	```
	- Getter/Setter
	```javascript
	class Rectangle {
	    constructor (width, height) {
	        this._width  = width
	        this._height = height
	    }
	    set width  (width)  { this._width = width               }
	    get width  ()       { return this._width                }
	    set height (height) { this._height = height             }
	    get height ()       { return this._height               }
	    get area   ()       { return this._width * this._height }
	}
	var r = new Rectangle(50, 20)
	r.area === 1000
	
	/* ECMA5
	var Rectangle = function (width, height) {
	    this._width  = width;
	    this._height = height;
	};
	Rectangle.prototype = {
	    set width  (width)  { this._width = width;               },
	    get width  ()       { return this._width;                },
	    set height (height) { this._height = height;             },
	    get height ()       { return this._height;               },
	    get area   ()       { return this._width * this._height; }
	};
	var r = new Rectangle(50, 20);
	r.area === 1000;
	*/
	```
- Módulos (Exportación):
	- Único
	```javascript
		// config.js
		let config = {
			token: "secreto",
		}

		export default config;
	```
	- Mutiples
	```javascript
		// config.js
		let config = {
			token: "secreto",
		}

		let config_details = {
			detalles: "más datos"
		}

		export config;
		export config_details;
	```
	- Combinada
	```javascript
		// config.js
		let config = {
			token: "secreto",
		}

		let config_details = {
			detalles: "más datos"
		}

		let configuraciones = {config, config_details}

		export default configuraciones;
		export config;
		export config_details;
	```
- Módulos (Importación):
	- Síncrona
	```javascript
		// único
		import config from './config.js';

		// Multiples
		import * as config from './config.js';

		// Combinandos
		import configuraciones from './config.js';
		import { config, config_details } from './config.js';
	```
	- Asíncrona (solo un módulo)
	```javascript
		System.import('modulo')

	    .then(modulo => {
	        // Uso del módulo importado
	    })
	    .catch(error => {
	        // Gestión de errores
	    });
	```
	- Asíncrona (multiples módulos)
	```javascript
	    Promise.all(
	        ['module1', 'module2', 'module3']
	        .map(x => System.import(x)))
	    .then(([module1, module2, module3]) => {
	        // Use module1, module2, module3
	    });
	```
- Módulos (Comparativa):
	- Export/Import
	```javascript
	//  lib/math.js
	export function sum (x, y) { return x + y }
	export var pi = 3.141593
	
	//  someApp.js
	import * as math from "lib/math"
	console.log("2π = " + math.sum(math.pi, math.pi))
	
	//  otherApp.js
	import { sum, pi } from "lib/math"
	console.log("2π = " + sum(pi, pi))

	/* ECMA5
	//  lib/math.js
	LibMath = {};
	LibMath.sum = function (x, y) { return x + y };
	LibMath.pi = 3.141593;
	
	//  someApp.js
	var math = LibMath;
	console.log("2π = " + math.sum(math.pi, math.pi));
	
	//  otherApp.js
	var sum = LibMath.sum, pi = LibMath.pi;
	console.log("2π = " + sum(pi, pi));
	
	*/
	```
	- Default & Wildcard
	```javascript
	//  lib/mathplusplus.js
	export * from "lib/math"
	export var e = 2.71828182846
	export default (x) => Math.exp(x)
	
	//  someApp.js
	import exp, { pi, e } from "lib/mathplusplus"
	console.log("e^{π} = " + exp(pi))
	
	/* ECMA5
	//  lib/mathplusplus.js
	LibMathPP = {};
	for (symbol in LibMath)
	    if (LibMath.hasOwnProperty(symbol))
	        LibMathPP[symbol] = LibMath[symbol];
	LibMathPP.e = 2.71828182846;
	LibMathPP.exp = function (x) { return Math.exp(x) };
	
	//  someApp.js
	var exp = LibMathPP.exp, pi = LibMathPP.pi, e = LibMathPP.e;
	console.log("e^{π} = " + exp(pi));
	*/
	```
- Typed Arrays
	```javascript
	//  ES6 class equivalent to the following C structure:
	//  struct Example { unsigned long id; char username[16]; float amountDue }
	class Example {
	    constructor (buffer = new ArrayBuffer(24)) {
	        this.buffer = buffer
	    }
	    set buffer (buffer) {
	        this._buffer    = buffer
	        this._id        = new Uint32Array (this._buffer,  0,  1)
	        this._username  = new Uint8Array  (this._buffer,  4, 16)
	        this._amountDue = new Float32Array(this._buffer, 20,  1)
	    }
	    get buffer ()     { return this._buffer       }
	    set id (v)        { this._id[0] = v           }
	    get id ()         { return this._id[0]        }
	    set username (v)  { this._username[0] = v     }
	    get username ()   { return this._username[0]  }
	    set amountDue (v) { this._amountDue[0] = v    }
	    get amountDue ()  { return this._amountDue[0] }
	}
	
	let example = new Example()
	example.id = 7
	example.username = "John Doe"
	example.amountDue = 42.0
	```
- Promesas
![promises_ecma6](https://mdn.mozillademos.org/files/8633/promises.png)
> A promise represents the eventual result of an asynchronous operation. The primary way of interacting with a promise is through its *then* method, which registers callbacks to receive either a promise’s eventual value or the reason why the promise cannot be fulfilled.
> From [promisesaplus.com/](http://promisesaplus.com/)

- Estados:
    - Fulfilled – La acción en relación con la promesa se logró.
    - Rejected – La acción en relación con la promesa falló.
    - Pending – Pendiente, no se ha cumplido o rechazado aún.
    - Settled - Arreglada, se ha cumplido o se ha rechazado (resuelta).

- En ECMA6:
- [Soporte en navegadores](http://caniuse.com/#search=promise)  
    - Una promesa
    ```javascript
        var cuentaPromesas = 0;
        var errorMode = false;
        function testPromesa() {

          var numPromesaActual = ++cuentaPromesas;

          console.warn("Promesa Asíncrona numero ("+numPromesaActual+") - Iniciada")

          var miPromesa = new Promise(
            function(resolve, reject) {       

              console.info("Promesa Asíncrona numero ("+numPromesaActual+") - Proceso asincrónico empezado");

              if(errorMode){
                  reject(numPromesaActual)
              } else{
                window.setTimeout(
                  function() {
                    resolve(numPromesaActual)
                  }, Math.random() * 2000 + 1000);
              }
            });
          miPromesa.then(
            function(val) {
              console.info("Promesa Asíncrona numero ("+val+") - Proceso asincrónico terminado");
              console.warn("Promesa Asíncrona numero ("+numPromesaActual+") - Finalizada");
            }).catch(
              function(val){
                console.error("Promesa Asíncrona numero ("+val+") - ERROR FATAL");
            });
        };

        testPromesa();
    ```
- [Internationalization & Localization](http://kangax.github.io/compat-table/esintl/
)
- [Software design patterns implemented in EcmaScript 6](http://loredanacirstea.github.io/es6-design-patterns/)
