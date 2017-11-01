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



// 6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
//
// Se aplica un 25% cuando:
// Estamos en los meses de invierno
// Y no es viernes o fin de semana.
