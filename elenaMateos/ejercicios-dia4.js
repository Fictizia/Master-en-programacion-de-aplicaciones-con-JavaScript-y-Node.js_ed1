'use strict'


var mujeres = 3;
var hombres = 5
var total = mujeres + hombres
var segmentoMujeres = 3*100
var porcentajeMujeres = segmentoMujeres / total
var porcentajeHombres = 100 - porcentajeMujeres

console.log('El porcentaje de mujeres en el curso es ' + porcentajeMujeres + '%');
console.log('El porcentaje de hombres en el curso es ' + porcentajeHombres + '%');
//mostrar ("El porcentaje de mujeres en el curso es " + @porcentajeMujeres + "%" )
//mostrar ('El porcentaje de hombres en el curso es ' + @porcentajeHombres + '%' )
var numero1 = 5;
var numero2 = 7;

if (numero1 > numero2) {
  console.log(numero1 + ' es mayor que ' + numero2);
}
else if (numero1 < numero2) {
  console.log(numero1 + ' es menor que ' + numero2);
} else {
  console.log('Los números son iguales');
}



// Ejercicio 8

var numero = prompt('Dame un número por favor');

if (numero % 2 === 0) {
  console.log('El número que me has dado es par');
} else {
  console.log('El número que mes has dado es impar');
}
/*  ### EJERCICIO 9
9 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:
La palabra clave es "Fictizia mola mucho"
Solo existen tres intentos
Si se pasan los tres intentos. Se despliega un mensaje informativo. */

var password = "Fictizia mola mucho";
var userPassword ;

for (var i = 0; i < 3; i++) {
  userPassword = prompt('Dime la contraseña');
  if (userPassword === password) {
    console.log('Felicidades, puedes acceder al sistema');
  }else{
    console.log('Lo siento no has acertado la constraseña, no puedes entrar');
  }
}
