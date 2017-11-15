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

    var fechaActual = new Date();
    var principioCurso = new Date(2017, 9, 25);

    var tiempoDesde = (fechaActual.getHours() - principioCurso.getHours());

    var calculo = tiempoDesde / 24 *1000;
    
    console.log(calculo);
    
    
```

**3 -** ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?
```javascript
    // Tu solución

    var fechaActual = new Date();
    var endCurso = new Date(2017, 5, 29);
    endCurso.setFullYear(fechaActual.getFullYear()); 
    
    var tiempoRestanteMili = (endCurso.getTime() - fechaActual.getTime());
    var tiempoRestanteHoras = tiempoRestanteMili * 3600000;
    var tiempoRestanteDias = tiempoRestanteMili * 3600000 / 1000 * 24;
    
    tiempoRestanteMili.toLocaleString();
    tiempoRestanteHoras.toLocaleString();
    tiempoRestanteDias.toLocaleString();
    

    
```

**4 -** ¿Que fecha será dentro de un año y 10 horas más?
```javascript
    // Tu solución


    var fechaActual = new Date();
    
    fechaActual.setFullYear(fechaActual.getFullYear()+1);
    fechaActual.setHours(fechaActual.getHours()+10);
    
    fechaActual.toLocaleString();

    

```

**5 -** Imprimir por consola la fecha completa (formato texto) en koreano, japones.
```javascript
    // Tu solución
```

