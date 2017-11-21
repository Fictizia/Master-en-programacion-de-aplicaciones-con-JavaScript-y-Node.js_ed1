# Clase 12

### Arrays

### Ejercicios

**1 -** Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.

```javascript
    // Tu solución
    
    var texto = "Es el vecino el que elige al alcalde y es el alcalde el que quiere que sean los vecinos el alcalde"
    
    function compruebaLetra(elemento) {
      return elemento === "e";
    }

    var filtrarLetras = [texto].filter(compruebaLetra);    
    
    
    
```

