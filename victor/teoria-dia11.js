/* Ejercicios dia 11 */
//Ejercicio 1
var date = new Date();

date.setDate(date.getDate() + 30);

console.log(date);

/* Ejercicio 2 */
var date = new Date(), courseDate = new Date(2017,9,25);
var hours = Math.trunc((date - courseDate) / 3600000);
var days = Math.trunc(hours / 24);
console.log("Horas: " + hours + " / Dias: " + days);

/* Ejercicio 3 */
var date = new Date();
var endDate = new Date(2017,26,5);
var hours = Math.trunc((endDate - date) / 3600000);
var days = Math.trunc(hours / 24);
console.log("Días: " + days + " / horas: " + hours + " / milisegundos: " + endDate - date);

/* Ejercicio 4 */
var date = new Date();
date.setFullYear(date.getFullYear() + 1);
console.log(date.toLocaleString());

/* Ejercicio 5 */
var date = new Date();
console.log(date.toLocaleString('ko-KR'));