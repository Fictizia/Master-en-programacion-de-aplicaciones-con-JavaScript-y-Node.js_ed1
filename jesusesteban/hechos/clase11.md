# Clase 11

### Ejercicios

**1 -** ¿Que fecha será dentro de 30 días?
```javascript
    // Tu solución

    var fechaActual = new Date();

	fechaActual.setDate(fechaActual.getDate() + 30);  
	fechaActual.toLocaleString(); 
    
    console.log(fechaActual);

    
```

**2 -** ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?
```javascript
    // Tu solución

	var inicio = new Date(2017, 10, 25, 19, 0, 0);
	console.log("Fecha de inicio: " + inicio.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = ahora - inicio;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Han pasado " + diferencia +"ms");
	console.log("Han pasado "+ segundos +" segundos.");
	console.log("Han pasado "+ minutos +" minutos.");
	console.info("Han pasado "+ horas +" horas.");
	console.info("Han pasado "+ dias +" días.");
    
    
```

**3 -** ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?
```javascript
    // Tu solución

	var fin = new Date(2018, 7, 1, 22, 0, 0);
	console.log("Fecha de finalización: " + fin.toLocaleString());
	var ahora = new Date();
	console.log("Fecha actual: " + ahora.toLocaleString());
	var diferencia = fin - ahora;
	    
	var segundos = Math.floor( diferencia / 1000);
	var horas = Math.floor( diferencia / ( 60 * 60 * 1000 ) );
	var minutos = Math.floor( diferencia / ( 60 * 1000 ) );
	var dias = Math.floor( diferencia / ( 24 * 60 * 60 * 1000 ) );
	
	console.log("Quedan " + diferencia +"ms");
	console.log("Quedan "+ segundos +" segundos.");
	console.log("Quedan "+ minutos +" minutos.");
	console.info("Quedan "+ horas +" horas.");
	console.info("Quedan "+ dias +" días.");    

    
```

**4 -** ¿Que fecha será dentro de un año y 10 horas más?
```javascript
    // Tu solución
	var ahora = new Date();
	console.log("Hoy es " + ahora.toLocaleString());
	ahora.setHours(ahora.getHours() + 10);
	ahora.setFullYear(ahora.getFullYear() + 1);
	console.log("En un año y 10 horas será " + ahora.toLocaleString());

```

**5 -** Imprimir por consola la fecha completa (formato texto) en koreano, japones.
```javascript
    // Tu solución
	var ahora = new Date();
	
	var opciones = { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	};
	
	console.log(ahora.toLocaleString("ko-KO", opciones));
	console.log(ahora.toLocaleString("ja-JA", { 
	    weekday: 'long',
	    year: 'numeric', 
	    month: 'long', 
	    day: 'numeric'
	}));  
	
	
```

