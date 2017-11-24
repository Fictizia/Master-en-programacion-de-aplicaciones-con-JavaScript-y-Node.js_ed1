//1 - Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]
//Variante (Diferentes longitudes)
        var nombres = ["Oscar","Pepe","Jacinto","Pablo"];
        var dnis = ["12345678K","87654321T","74592736N"];
        var booleans = [true,true,false];
        var nuevo = [];
        
        var masGrande = Math.max(nombres.length, dnis.length, booleans.length);
        
        for (var i = 0; i < masGrande; i++) {
          nuevo[i] = [nombres[i] + " - " + dnis[i] + " - " + booleans[i]];
        }
        console.log(nuevo);

//2 - Crea un Array con 100 numeros enteros al azar. Después crea un array para almacenar los números pares y otro array para los impares.
//Opcional: Ordena los números pares e impares en sus respectivos arrays

        var numeros = [];
        var pares = [];
        var impares = [];
        
        for (var i = 0; i < 100; i++) {
            var ale = Math.floor(Math.random() * 6) + 1
            numeros.push(ale);
            if(numeros[i] %2 === 0)
            {
                pares.push(ale);
            }else{
                // impares.push(ale);
            }
        }
        console.log(numeros);
        console.log(pares.sort());
        console.log(impares.sort());
    
/*3 - Vamos a gestionar la lista de asistentes de un evento.

Características:
-Cada asistente recibirá el identificador de su posición en el Array.
-El identificador no puede cambiar una vez reservado el asiento.
-Los asistentes pueden darse de baja, y el asiento que ocupaban queda libre.
-Los nuevos asistentes seran asigandos primero a asientos desocupados.
Opcional: Verifica antes de asignar un asistente que no se registro previamente.*/

        var asistentes = [];
	
	function asignar(nombre) {
	    var registrado = false;
	    var vacante = false;
	
	    for (var i = 0; i < asistentes.length; i++) {
	        if (asistentes[i] === undefined) {
	            vacante = i;
	        }
	        if (asistentes[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	    if (registrado || registrado === 0) {
	        console.log("Ya estabas registrado!");
	        console.log("Eres el asistente número", registrado);
	    } else {
	        if (vacante || vacante === 0) {
	            asistentes[vacante] = nombre;
	            console.log("Eres el asistente número", vacante);
	            console.log("Felicidades! has ocupado un asiento que estaba vacio.");
	        } else {
	            asistentes.push(nombre);
	            console.log("Eres el asistente número", asistentes.length - 1);
	            console.log("No quedan asientos vacios antes que el tuyo.");
	        }
	    }
	
	}
	
	function quitar(nombre) {
	    var registrado = false;
	
	    for (var i = 0; i < asistentes.length; i++) {
	        if (asistentes[i] === nombre) {
	            registrado = i;
	        }
	    }
	
	
	    if (registrado || registrado === 0) {
	        asistentes[registrado] = undefined;
	        console.log("El asistente " + nombre + " ha sido eliminado.");
	        console.log("El asiento " + registrado + " esta vacio.");
	    } else {
	        console.log("El asistente " + nombre + "... no existe!");
	    }
	}
       
        
       