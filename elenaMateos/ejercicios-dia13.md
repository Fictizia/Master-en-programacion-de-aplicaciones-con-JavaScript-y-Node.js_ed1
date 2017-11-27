
#### 1- Junta estos tres Arrays:

 ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]

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

//Solución de clase: lo suyo es poner un objeto dinámico
function crearArray (){
    for(var i = 0; i < nombres.length; i++){
       // agenda[i] = nombres[i] + ',' + telefonos[i] + ',' + boleanos[i];
        agenda.push({
        }[nombres[i],telefonos[i],boleanos[i]]);
    }
}

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

Opcional: Ordena los números pares e impares en sus respectivos arrays

```javascript
//con arrayParaes = arrayPares.sort();
paresArray.sort();
console.log(paresArray);
imparesArray.sort();
console.log(imparesArray);

```
### 3 - Vamos a gestionar la lista de asistentes de un evento.

Características:

Cada asistente recibirá el identificador de su posición en el Array.
El identificador no puede cambiar una vez reservado el asiento.
Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
Los nuevos asistentes serán asigandos primero a asientos desocupados.
Opcional:

Verifica antes de asignar un asistente que no se registro previamente.

* crear lista
* crear funcion de asignación
* crear función de quitar.

Pista: *indexOf (usar el indice de posición para getionar, busquedas en arrays mejor usar este método).*

```javascript

var asistentes = ['Juanjo', 'Ana', 'Isra', 'Amparo', 'Tomás'];
var posicion = '';

// asignar posicion

function asignarPosicion(){

  nuevoAsistente = prompt('Dame tu nombre');

  comprobarAsistente(nuevoAsistente);

  if (nuevoAsistente !== 'no registrar') {

  console.log('entra en asistente nuevo');
  asistentes.push(nuevoAsistente);
  posicion = asistentes.indexOf(nuevoAsistente);
  console.log('Hola '+ nuevoAsistente +'. Tu identificador es ' + posicion + 'Asistente');
 }
}

function comprobarAsistente(asistente) {

  for (var i = 0; i < asistentes.length; i++) {

    if (asistentes[i] === 'borrado') {
      asistentes[i] = asistente;
      console.log('Hola '+ asistente + ' tu identificador es '+ i +'Asistente')
      nuevoAsistente = 'no registrar';

    } else if (asistente === asistentes[i]) {
        console.log('Este asistente ya está registrado. Tu identificador es ' + i +'Asistente. Gracias!!!');
        nuevoAsistente = 'no registrar';
    }
  }
}

// Quitar posición

//.some() Verifica si alguno de los elementos en el arreglo pasan la prueba
//implementada por la función dada:


function quitarPosicion(){

  var asistenteMenos = prompt ('Dame el nombre a eliminar');

  for (var i = 0; i < asistentes.length; i++) {
    if (asistenteMenos === asistentes[i]) {
      delete asistentes[i];
      asistentes[i] = 'borrado';
    }
  }
}
// test:
asignarPosicion();
```
