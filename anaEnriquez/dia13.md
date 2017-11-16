# Clase 13

### Ejercicios

**1 -** Junta estos tres Arrays *["Oscar", ...], [9897667, ...], [false, ...]* de tal forma que construyan un único Array anidado *[["Oscar", 9897667, false], [etc...]]* 


- Variante (Diferentes longitudes)

```javascript
    var array1 = ["Oscar", "mas", "cosas"];
    var array2 = [9897667, 25];
    var array3 = [false, true, false, false];
    
    var concatArray = [];
    
    var a=0;
    var b=0;
    
    
    while( a < array1.length || a < array2.length || a < array3.length) {
      if( array1.length > a) {
        concatArray[a,b] = array1[a];
        b++;
      }
      
      if( array2.length >a ){
         concatArray[a,b] = array2[a];
         b++;
      }
         
      if( array3.length > a ){
         concatArray[a,b] = array3[a];
         b++;
      } 
      a++;
    }
```

**2 -** Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.

- Opcional: Ordena los números pares e impares en sus respectivos arrays

```javascript
    var number = [];
    
    function luckyNumber(minimo,maximo) { 
      return Math.floor(Math.random() * (maximo - minimo + 1) + minimo); 
    }
    
    
    for(i=0;i<100;i++){
     
      number[i] = luckyNumber(1,100);
      
    }
    
    var odds = [];
    var evens = [];
    
    for(i=0;i<100;i++){
     
      if (number[i]%2 !==0) {
      
        odds.push(number[i]);
        
      } else evens.push(number[i]);
      
    }
```


**3 -** Vamos a gestionar la lista de asistentes de un evento. 

- Características:
	- Cada asistente recibirá el identificador de su posición en el Array.
	- El identificador no puede cambiar una vez reservado el asiento.
	- Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
	- Los nuevos asistentes seran asigandos primero a asientos desocupados. 

- Opcional:
	- Verifica antes de asignar un asistente que no se registro previamente. 
```javascript
    // Tu solución
```
