
### 1- Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]

Variante (Diferentes longitudes)

```javascript
var nombres = ["Oscar", "etc"];
var telefonos = [9897667, "..."];
var boleanos = [false, "etc"];
var agenda = [];

function crearArray (){
    for(var i = 0; i < nombres.length; i++){
       // agenda[i] = nombres[i] + ',' + telefonos[i] + ',' + boleanos[i];
        agenda.push([nombres[i],telefonos[i],boleanos[i]]);
    }


}
crearArray();
typeof(agenda);


// Variante

var nombres = ["Oscar", "Amparo", "Jose Luí", "Rigoberto", "etc"];
var telefonos = [9897667, 9897688, 9897148, "..."];
var booleanos = [false, false, , false, false, , false, false, "etc"];
var agenda = [];
var arr = [];


function crearArray (arr){
    for(var i = 0; i < arr.length; i++){
       // agenda[i] = nombres[i] + ',' + telefonos[i] + ',' + booleanos[i];
        agenda.push([nombres[i],telefonos[i],booleanos[i]]);
    }
};

if (nombres.length > telefonos.length && nombres.length>booleanos.length) {
    crearArray(nombres);
} else if (telefonos.length>nombres.length && telefonos.length>booleanos.length) {
    crearArray(telefonos);
} else  {
    crearArray(booleanos)
};

agenda.forEach(function(personaAgenda){
for (var i = 0; i < agenda.length; i++) {

  if (personaAgenda[i] === undefined) {
    personaAgenda[i] = 'No hay dato!';
  }
  }
})
console.log(agenda);
```
### 2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.
```javascript

var numerosArray =[];
var paresArray= [];
var imparesArray = [];

for (var i = 0; i < 101; i++) {

  var numero = Math.floor(Math.random() * 100);
  numerosArray.push(numero);
  if (numero % 2 === 0) {
    paresArray.push(numero);
  } else {
    imparesArray.push(numero);
  }

}

```

__Opcional: Ordena los números pares e impares en sus respectivos arrays__

```javascript

```
### 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:

Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional:

Verifica antes de asignar un asistente que no se registro previamente.
