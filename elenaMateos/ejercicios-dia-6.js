'use strict';
// Ejercicio 1:

var Elena = false;

console.assert(Elena, 'Ha salido tu nombre!!!');

/*
2 - Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.

Especificaciones:
Imprimir tu nombre usando console.log, console.info, console.warn
*/


var elena = function(){
  console.log('Elena');
}
console.time();
elena();
console.timeEnd();

var elena = function(){
  console.warn('Elena');
}
console.time();
elena();
console.timeEnd();

var elena = function(){
  console.error('Elena');
}
console.time();
elena();
console.timeEnd();

//3 - Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.

console.log('%c Elena está todo ok', 'color: white; background-color: #126e03');
console.warn('%c Elena que se te está liando pero no es la muerte', 'color: white; background-color: #eb9412');
console.error('%c Elena ala! ya lo has roto XD', 'color: white; background-color:#d60404');

//4 - Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
console.time();
console.log('%c Elena está todo ok', 'color: white; background-color: #126e03');
console.timeEnd();
