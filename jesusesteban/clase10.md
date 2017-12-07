# Clase 10

### Números

### Ejercicios

**1 -** Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

```javascript
    // Tu solución

    var caraMoneda = Math.floor(Math.random() * 2);
    
    while(caraMoneda){
    	console.log("Ha salido cara");
    	var caraMoneda = Math.floor(Math.random() * 2);
    }
    console.log("Ha salido cruz");
    
```

**2 -** Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

```javascript
    // Tu solución
    function lanzarDados() {

        var coincidencias = 0;

        for (var i = 0; i < 100; i++) {

            var dado1 = Math.floor((Math.random() * 6) + 1);
            var dado2 = Math.floor((Math.random() * 6) + 1);
            var tirada = dado1 + dado2;

            if (tirada === 10) {
                coincidencias++;
            0,
              1
              
            }
        };

        console.info("El azar ... sumó 10 un total de " +coincidencias+ " veces")

    }    
    
    
```

### Dates

### Ejercicios

**1 -** Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año) usando una función.
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

```javascript
    // Tu solución
	function verificadorDeFechas (day, month, year) {
		// Opcion 1
		var fecha = new Date(year, month-1, day);

		if (fecha.getFullYear() === year){
			var opciones = { 
			    weekday: 'long',
			    year: 'numeric', 
			    month: 'long', 
			    day: 'numeric'
			};
			var fechaFormato = fecha.getDate() + "/" + (fecha.getMonth()+1) +"/"+ fecha.getFullYear(); 
			
			console.info("La fecha es correcta", fechaFormato);
			console.info("La fecha en otro formato: ", fecha.toLocaleString("es-ES", opciones));
 
		} else {
			console.warn("Error! los datos no son correctos!");			
		}
	}    
```
