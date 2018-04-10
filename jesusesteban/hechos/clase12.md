# Clase 12

### Arrays

### Ejercicios

**1 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```javascript
    // Tu solución
    
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

