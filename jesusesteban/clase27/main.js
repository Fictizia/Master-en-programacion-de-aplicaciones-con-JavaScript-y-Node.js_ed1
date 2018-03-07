	// Código
	function calculosVarios(valor1, valor2){
		valor1 = parseFloat(valor1);
		valor2 = parseFloat(valor2);
		return {
			suma: valor1+valor2,
			resta: valor1-valor2,
			division: valor1/valor2 ,
			multiplicacion: valor1*valor2
		}
	}