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
                impares.push(ale);
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

        
        var nombres = ["hola","pepe","maria"];
        var condicion = true;
        
        function crear(){
            var nom = prompt("Introduzca su nombre");
            while(condicion === true){
                if(nombres.indexOf(nom) < 0){
                    console.log("entra");
                    for (var i = 0; i<nombres.length; i++){
                        if(typeof nombres[i] === undefined || nombres[i] === "undefined"){
                            nombres[i] = nom;
                            condicion = false;
                            break;
                        }else{
                            nombres.push(nom);
                            condicion = false;
                        }
                    }
                }else{
                    var nom = prompt("Ya existe ese nombre, introduzca otro");
                }
            }
        };

        /*
        var nombres = ["hola","pepe","maria"];
        var asistentes = [];
        var ids = [1,2,3];
        for (var i = 0; i<nombres.length; i++){
                asistentes.push([ids[i],nombres[i]]);
               
            }
            console.log(ids);
                console.log(nombres);
            //asistentes = ids.concat(nombres);
            console.log(asistentes);
        */
        var nombres = [];
        var asistentes = [];
        var ids = [];
        
        var crear = function crear(){
            nombres.push(prompt("Introduzca su nombre"));
            ids.push(nombres.length);
        };
        
        var ver = function ver(){
            for (var i = 0; i<nombres.length; i++){
                asistentes.push([ids[i],nombres[i]]);
               
            }
            console.log(ids);
                console.log(nombres);
            //asistentes = ids.concat(nombres);
            console.log(asistentes);
        };
        
        var eliminar = function eliminar(){
            console.log(asistentes);
            delete asistentes[2];
            console.log(asistentes);
        };
        
       