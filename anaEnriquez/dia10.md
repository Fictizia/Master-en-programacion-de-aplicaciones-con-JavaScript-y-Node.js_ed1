### Ejercicios

**1 -** Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

```javascript

    function azarMoneda() {

        var valor = Math.floor((Math.random() * 2) + 1);

        if (valor === 1){
            console.info("Ha salido Cara!!");
        } else {
            console.info("Ha salido Cruz!");
        }

    }
    
```

**2 -** Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

```javascript

    function azarDados() {

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

**3 -** Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
- Características:
	- El usuario introduce tres números (día, mes, año) usando una función.
	- Validar la fecha. En caso de error incluir un mensaje informativo.
	- Después de validar, devolvemos la fecha en formato DD/MM/AAAA
	- Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

```javascript
    alert("Introduce una fecha en 3 pasos");    
    var validator = true;
    while(validator) {
      
      var monthValidator = true;
      
      while(monthValidator) {
      
      	var month = Number(prompt("Introduce el mes en dígitos numéricos"));
        
        if(isNaN(month)) {
        	console.log("Por favor, introduce el mes con dígitos numéricos");
        } else if(month < 1 || month > 12) {
          
          console.log("Introduce un mes válido");
          
        } else{
          
          monthValidator = false;
          
        }
      
      }
      
      var dayValidator = true;
      
      while(dayValidator) {
        
      	var day = Number(prompt("Introduce un día en dígitos numéricos"));
        
        if(isNaN(day)) {
        	console.log("Por favor, introduce un día en dígitos numéricos");
        } else {
          
          switch(month) {
              
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
              if(day < 1 || day > 31) {
                console.log("Introduce un día válido para el mes " + month);
              } else {
                
                dayValidator = false;
              }
              break;
            case 2:
              if(day < 1 || day > 28) {
                console.log("Introduce un día válido para el mes " + month);
              } else {
                
                dayValidator = false;
              }
              break;
            case 4:
            case 6:
            case 9:
              if(day < 1 || day > 30) {
                console.log("Introduce un día válido para el mes " + month);
              } else {
                
                dayValidator = false;
              }
              break;
              
          }
          
        }
        
      }
      
      var yearValidator = true;
      
      while(yearValidator) {
      
        var year = Number(prompt("Introduce un año en dígitos numéricos"));
        
        if(isNaN(year)) {
        	console.log("Por favor, introduce el año en dígitos numéricos");
        } else { yearValidator = false; }
        
      }
      
      if(!dayValidator && !monthValidator && !yearValidator) {
        validator = false;
      }
      
    }

    console.log(day + "/" + month + "/" + year);

    var fechaDetalle = "";

    switch (month) {
        case 1:
            fechaDetalle = day + " de Enero de " + year;
            break;
        case 2:
            fechaDetalle = day + " de Febrero de " + year;
            break;
        case 3:
            fechaDetalle = day + " de Marzo de " + year;
            break;
        case 4:
            fechaDetalle = day + " de Abril de " + year;
            break;
        case 5:
            fechaDetalle = day + " de Mayo de " + year;
            break;
        case 6:
            fechaDetalle = day + " de Junio de " + year;
            break;
        case 7:
            fechaDetalle = day + " de Julio de " + year;
            break;
        case 8:
            fechaDetalle = day + " de Agosto de " + year;
            break;
        case 9:
            fechaDetalle = day + " de Septiembre de " + year;
            break;
        case 10:
            fechaDetalle = day + " de Octubre de " + year;
            break;
        case 11:
            fechaDetalle = day + " de Noviembre de " + year;
            break;
        case 12:
            fechaDetalle = day + " de Diciembre de " + year;
            break;
    }

    console.log(fechaDetalle);
    
    // LOS MESES  VAN DE 0 A 11. habría que restar uno para que la fecha coincidiera. 
```
