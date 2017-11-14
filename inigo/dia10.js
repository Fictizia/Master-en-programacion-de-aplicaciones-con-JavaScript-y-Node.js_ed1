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

        var fecha = function fecha(){
            
            var dia = prompt("Introduce el día");
            while(true) {
                if(isNaN(dia)){
                    dia = prompt("Debe introducir un número para el dia");
                }else{
                    if(dia > 0 && dia <= 31){
                        break;
                    }else{
                        dia = prompt("Debe introducir un número entre el 1 y 31 incluidos");
                    }
                }            
            }
            
            var mes = prompt("Introduce el mes");
            while(true) {
                if(isNaN(mes)){
                    mes = prompt("Debe introducir un número para el mes");
                }else{
                    if(mes > 0 && mes <= 12){
                        break;
                    }else{
                        mes = prompt("Debe introducir un número entre el 1 y 12 incluidos");
                    }
                }     
            }
            
            var anio = prompt("Introduce el año");
            while(true) {
                if(isNaN(anio)){
                    anio = prompt("Debe introducir un número para el anio");
                }else{
                    if(anio > 1979 && anio <= 2050){
                        break;
                    }else{
                        anio = prompt("Debe introducir un número entre el 1980 y 2050 incluidos");
                    }
                }
            }
            var fecha = new Date(anio, mes - 1, dia);
            return fecha;
        }();
        
        var opciones1 = { 
            year: 'numeric', 
            month: 'numeric', 
            day: 'numeric'
        };
        var opciones2 = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        };
            
        console.log("Formato 1: " + fecha.toLocaleString("es-ES",opciones1));
        console.log("Formato 2: " + fecha.toLocaleString("es-ES",opciones2));