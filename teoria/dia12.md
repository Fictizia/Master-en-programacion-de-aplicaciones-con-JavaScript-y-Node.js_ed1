![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 12

### Arrays

- Creando un array:
    ```javascript
	var arreglo = [];
	arreglo = [1, "platano", "piscina", "manzana", true];
    ```

- Usando el Índice:
    ```javascript
	arreglo[1];
    ```

- Cambiar un valor del Índice:
    ```javascript
	arreglo[0] = "fresa";
	arreglo[4] = "pera";
	arreglo[2] = "limón";
    ```

- delete *sobrescribe a undefined*
    ```javascript
    delete arreglo[0];
    ```

- Elementos vacios:
    ```javascript
    arreglo[0] = undefined;
    ```

**Propiedades**

- Índice total:
    ```javascript
    	arreglo.length;
    ```

- Usando el Índice total en un bucle:
    ```javascript
	var numeros = [1, 2, 3, 4, 5];
	for (var i = 0; i < numeros.length; i++) {
	  numeros[i] *= 10;
	}
    ```

**Métodos**

- .push() *Añadir elemento al índice*:
    ```javascript
	arreglo.push("nuevo");
    ```

- .pop() *Eliminar el último elemento del índice*:
    ```javascript
    	arreglo.pop();
    ```

- .shift() *Eliminar el primer elemento*:
    ```javascript
    	arreglo.shift();
    ```

- .splice() *Borrar*:
    ```javascript
    	var manzana = arreglo.splice(3, 1);
    ```

- .map():
    ```javascript
	var arreglo = ["plátano", "fresa", "lima", "manzana"];
	var resultado = arreglo.map(function (elemento){return elemento + " modificado!"});
	console.log(resultado);
    ```
    
- .isArray():
    ```javascript
    	var arreglo = [1,2,3]
    	
    	// true
    	Array.isArray([1]);
    	Array.isArray(arreglo);
    	
    	// false
    	Array.isArray();
	Array.isArray({});
	Array.isArray(null);
	Array.isArray(undefined);
    ```

- .concat() *Retorna un nuevo Array con los Arrays especificados concatenados*:
   - Dos Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    
    	var nuevaArray = arreglo.concat(arreglo2);

	console.log(nuevaArray); 
    ```
   - Múltiples Arrays:
    ```javascript
    	var arreglo = ['a', 2, true];
    	var arreglo2 = [1, 2, 4];
    	var otroArreglo = ['abc', 1, false]
    
    	var nuevaArray = arreglo.concat(arreglo2, [5.25, 100], otroArreglo);

	console.log(nuevaArray);
    ```

- .every() *verifica si todos los elementos en el arreglo pasan la prueba implementada por la función dada:*
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].every(tamañoValido);   // false
	[12, 54, 18, 130, 44].every(tamañoValido); // true    
    ```

- .filter() *Crea un nuevo array con aquellos elementos que cumplan la condición*:
    ```javascript
	function tamañoValido(elemento) {
	  return elemento >= 10;
	}
	var filtrados = [true, 134, 10, 0, null, "Hola"].filter(tamañoValido);
    ```

- .forEach() *Se ejecuta la función por cada elemento del array*:
    ```javascript
	function logger(element, index, array) {
	    console.log("array[" + index + "] = " + element);
	}
	[2, 5, 9].forEach(logger);
    ```

- .indexOf() *Devuelve la posición donde se escuentra el elemento o -1 si no lo encuentra*:
    ```javascript
	var array = [2, 5, 9];
	var index = array.indexOf(9); // 2
	var index = array.indexOf(12); // -1
    ```

- .join() *Une todos los elementos en una cadena*:
    ```javascript
	var array = ['dato1', 2, , 'masDatos'];
	var datosJuntos = array.join();      // 'dato1,2,masDatos'
	var datosJuntos2 = array.join('');    // 'dato12masDatos'
	var datosJuntos3 = array.join(' + '); // 'dato1 + 2 + masDatos'
    ```

- .lastIdexOf() *Devuelve la posición del último elemento que coincide o -1 si no lo encuentra*:
    ```javascript
	var array = [7, 1, 3, 7];
	array.lastIndexOf(7); // 3
	array.lastIndexOf(2); // -1
    ```

- .reduce() *Aplica una función a un acumulador y a cada valor de un vector para reducirlo a un único valor*:
    ```javascript
	var reduce = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduce); // 10
    ```

- .reduceRight() *Aplica una función a un acumulador y a cada valor (de izq. a dcha.) de un vector para reducirlo a un único valor*:
    ```javascript
  	var reduceRight = [0,-3,1,2,4,6].reduce(function(valorAnterior, valorActual, indice, vector){
	  return valorAnterior + valorActual;
	});
	console.log(reduceRight); // 10
    ```

- .reverse() *Invierte el orden de un Array*:
    ```javascript
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.reverse(); 
	console.log(miArray) // ["más datos...", true, 2, "uno"]
    ```

- .slice() *Devuelve un nuevo Array con un segmento determinado del Array original*:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	var citricos = frutas.slice(1, 3);
	console.info(citricos);
    ```

- .some() *Verifica si alguno de los elementos en el arreglo pasan la prueba implementada por la función dada:*:
    ```javascript
	function tamañoValido(elemento, indice, arrreglo) {
	  return elemento >= 10;
	}
	[12, 5, 8, 130, 44].some(tamañoValido);   // true
	[12, 54, 18, 130, 44].some(tamañoValido); // true
    ```

- .sort() **:
    ```javascript
	var frutas = ['Platano', 'Naranja', 'Limón', 'Manzana', 'Mango'];
	frutas.sort(); // ["Limón", "Mango", "Manzana", "Naranja", "Platano"]
	
	var miArray = ['uno', 2, true, 'más datos...'];
	miArray.sort(); // [2, "más datos...", true, "uno"]
    ```

- .toLocalString() *Retorna como string (configuración regional) todos los elementos*:
    ```javascript
	var numero = 1337.89;
	var fecha = new Date();
	var miArray = [numero, fecha, 'más datos'];
	
	var arrayConvertida = miArray.toLocaleString(); 
	console.log(arrayConvertida);     
    ```

- .toString() *Retorna una cadena de texto con todos los nombres*:
    ```javascript
	var amigos = ['Luis', 'Carlos', 'Marco', 'Eduardo'];
	console.log(amigos.toString());
    ```

- .unShift() *Añade nuevos elementos al principio del array y devuelve la longitud actualizada*:
    ```javascript
	var miArray = [1, 2];
	
	miArray.unshift(true, "otros datos...");
	console.log(miArray);
    ```

### Ejercicios

**1 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```javascript
	function cuantasVeces (letra, texto) {
		
		var totalVeces = 0;
		var seleccionTexto = texto.split("");
		
		for (var i = 0; i <= seleccionTexto.length; i++) {
			
			if (seleccionTexto[i] === letra){
				totalVeces++
			};
			
		};
		
		return {
			letra: letra, 
			totalVeces: totalVeces, 
			texto: texto
		}
	}

var nombreVar = cuantasVeces ("h", "hola");


if(nombreVar.totalVeces > 0){
	console.log("Tenemos resultados....")
}

console.log("Se repite "+nombreVar.letra+" "+nombreVar.totalVeces+" veces... en "+nombreVar.texto)
```


### Arreglos avanzados
```javascript
var arreglo1 = ["plátano", "fresa", "lima", "manzana"];
var arreglo2 = ["entrante", "primero", "segundo", "postre"];

var juntandoArreglos = [arreglo1, arreglo2];

function testArreglos () {
    console.log(juntandoArreglos[0][0]);
    console.log(juntandoArreglos[1][3]);
};
```
