# Clase 6

### Ejercicios

**Recuerda:** Utiliza [JSHint](http://jshint.com/) para detectar errores..

**1 -** Utiliza .assert para controlar cuando se muestra tu nombre por consola.
```javascript
    // Tu solución

var x = 0;
Boolean(x);
console.assert(x, "\"x\" es igual a \"False\"");

```

**2 -** Crea un script que nos permita calcular el tiempo que se necesita para realizar la siguientes acciones.
- Especificaciones:
  - Imprimir tu nombre usando **console.log, console.info, console.warn**
```javascript
    // Tu solución

 console.time("Ejercicio");
 var miNombre = "Jesús";
 console.log(miNombre);
 console.info(miNombre);
 console.warn(miNombre);
 
 console.timeEnd("Ejercicio");

```

**3 -** Partiendo del ejercicio anterior mejora los estilos de cada mensaje usando estilos.
```javascript
    // Tu solución


 console.time("Ejercicio");
  var miNombre = "Jesús";
  console.log('%c Jesús ', 'background: #CCC; color: #FFF; text-transform: uppercase;');
 
 console.timeEnd("Ejercicio");




```

**4 -** Agrupa cada tipo de mensaje y añade un contador de tiempo por cada grupo.
```javascript
    // Tu solución

var miNombre = "Jesús";
 
  console.group("bucleFor");
     for(var i=2; i>0; i--){
      console.log(miNombre);
      console.info(miNombre);
      console.warn(miNombre);
    }
  console.groupEnd();


```

**5 -** Crea una tabla usando la consola para mostrar el nombre de tus compañeros y el puesto que ocupa en la clase.
```javascript
    // Tu solución

var alumnos =[
    {nombre: "Vicky", puesto: 1}, 
    {nombre: "Felix", puesto: 2}, 
    {nombre: "Victor", puesto: 3}, 
    {nombre: "Iñigo", puesto: 4}, 
    {nombre: "Elena", puesto: 5}, 
    {nombre: "Ana", puesto: 6}, 
    {nombre: "David", puesto: 7}, 
    {nombre: "Jesus", puesto: 8}
];
console.table(alumnos);

```



### Ejercicios

**1 -** Vamos a solicitar la colaboración del usuario para lograr nuestros objetivos:
- Objetivos:
  -  Captura el nombre del usuario usando prompt
  -  Pregunta al usuario si desea *"comprobar lo rápido que funciona su navegador"*.
  -  En caso afirmativo imprimiremos el nombre del usuario por consola aplicandole estilos y calculando el tiempo que tarda en realizar la operación
    - En caso negativo mostraremos un *alert* informativo.

- Versión 1:
```javascript
    // Tu solución

    var usuario = prompt("¿Cual es tu nombre?");
    var navegador = confirm("¿Quieres ver lo rápido que funciona tu navegador?");

    if (navegador) {
        console.time("velocidad");
            console.log('%c %s','background: #CCC; color: #FFF; text-transform: uppercase;font-size: 12px;', usuario);
        console.timeEnd("velocidad");
        
        console.time("velocidad");
            console.warn('%c %s','background: yellow; color: #000; text-transform: uppercase;font-size: 14px;', usuario);
        console.timeEnd("velocidad");
        
        console.time("velocidad");
            console.info('%c %s','background: red; color: #FFF; text-transform: uppercase;font-size: 16px;', usuario);
        console.timeEnd("velocidad");
    }
    else {
        alert("Si quieres ver la velocidad de tu navegador, vuelve a intentarlo y acepta");
    }    
    
    
    
    
```


