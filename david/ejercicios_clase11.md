## Ejercicio 1
var hoy = new Date();

hoy.setDate(hoy.getDate()+30);
var en30dias = hoy;

console.log(en30dias);

## Ejercicio 2
var diaHoy = new Date();
var empezoCurso = new Date(2017,9,25);

var diferencia =diaHoy - empezoCurso;
var horas = diferencia / 3600000;
var dias = Math.trunc(horas/24);
console.log("Horas: "+horas);
console.log("Dias: "+dias);

## Ejercicio 3
var diaHoy = new Date();
var diaFin = new Date(2017,26,5);
var horas = diferencia / 3600000;
var dias = Math.trunc(horas/24);
var diferencia = diaFin - diaHoy;
console.log("Milisegundos: "+diferencia);
console.log("Horas: "+horas);
console.log("Dias: "+dias);

#Ejercicio 4
var diaHoy = new Date();
diaHoy.setFullYear(diaHoy.getFullYear()+1);
console.log(diaHoy.toLocaleString());


#Ejercicio 5
var hoy = new Date();
console.log(hoy.toLocaleString('ko-KR'));