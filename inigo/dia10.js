//1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

		var num = Math.floor(Math.random() * 2);

		if(num === 1){
			console.log("Cruz");
		}else{
			console.log("Cara");
		}
		
//2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

		var con = 0;
		var mensaje = "";

		console.groupCollapsed();
		console.log("Tiradas");
		for (var i = 0; i <= 100; i++) {
		var dado1 = Math.floor(Math.random() * 6) + 1;
		var dado2 = Math.floor(Math.random() * 6) + 1;

			if(dado1 + dado2 === 10){
				con++;
				mensaje = "      |||||||           Suman 10";
			}else{
				mensaje = "";
			}
			console.log("Tirada " + i + ": " + "Dado1 = " + dado1 + "     ||||    Dado2 = " + dado2 + mensaje);
		};
		console.groupEnd();
		console.log("Veces que suman 10: " + con);

//1 - Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.