	// Tests
	QUnit.module( "Módulo de calculosVarios(valor1, valor2)", function(){
		
		var condicion = {suma: 50, resta: -30, division: 0.25, multiplicacion: 400};
		var condicion2 = {suma: 30, resta: 50, division: -4, multiplicacion: -400};

	    QUnit.test( "calculosVarios(10, 40) con números", function( assert ) {
	        propEqual(condicion, calculosVarios(10, 40), "calculosVarios(10, 40) es igual a condicion");
	    	propEqual(condicion2, calculosVarios(40, -10), "calculosVarios(40, -10) es igual a condicion2");
	    });


	    QUnit.test( "calculosVarios(\"10\", \"40\") con cadenas", function( assert ) {
	        propEqual(condicion, calculosVarios("10", "40"), "calculosVarios(\"10\", \"40\") es igual a condicion");
	    	propEqual(condicion2, calculosVarios("40", "-10"), "calculosVarios(\"40\", \"-10\") es igual a condicion2");
	    });

    });