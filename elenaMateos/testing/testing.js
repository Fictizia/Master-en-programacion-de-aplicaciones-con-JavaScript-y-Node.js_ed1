/*
1 - Diseña un algoritmo que lea dos números y realice los siguientes cálculos:

Características:
Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto
Pruebas necesarias:

Comprobar si ambos parámetros son números
Comprobar si uno o varios parámetros son cadenas
*/

Qunit.module("Calculos válidos de (valor1, valor2)", function(){
    // Declaro variables para testear números:
    var condición1 = {suma: 50, resta: -30, division: 0.25, multipkicacion: 400};
    var condición2 = {suma: 50, resta: -30, division: 0.25, multipkicacion: 400};
    
    Qunit.test( "calculosVarios(10, 40) con números", function( assert ) {
	        propEqual(condicion, calculosVarios(10, 40), "calculosVarios(10, 40) es igual a condicion");
	    	propEqual(condicion2, calculosVarios(40, -10), "calculosVarios(40, -10) es igual a condicion2");
	    });
    
});


	function calculosVarios(valor1, valor2){
            valor1 + valor2;
            return
	    
	}