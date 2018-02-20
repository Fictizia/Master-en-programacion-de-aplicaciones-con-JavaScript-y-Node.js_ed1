![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 46

### Iterator

> El patrón surge del deseo de acceder a los elementos de un contenedor de objetos (por ejemplo, una lista) sin exponer su representación interna. Además, es posible que se necesite más de una forma de recorrer la estructura siendo para ello necesario crear modificaciones en la clase.

> La solución que propone el patrón es añadir métodos que permitan recorrer la estructura sin referenciar explícitamente su representación. La responsabilidad del recorrido se traslada a un objeto iterador.

> El problema de introducir este objeto iterador reside en que los clientes necesitan conocer la estructura para crear el iterador apropiado. *[Wikipedia](https://www.wikiwand.com/es/Iterador_(patr%C3%B3n_de_dise%C3%B1o))*

- **Claves:**
	- Acceso secuencial a los elementos de un array o propiedades de un objeto sin exponerlos.

- **Array:**
```javascript
// Patrón Iterador
var iterador = (function() {

  var indice = 0,
      datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      totalDatos = datos.length;

  return {
      siguiente: function() {
          var elemento;
          if (!this.tieneSiguiente()) {
              return null;
          }
          elemento = datos[indice];
          indice ++;
          return elemento;
      },
      tieneSiguiente: function() {
          return indice < totalDatos;
      },
      rebobinar: function() {
          indice = 0;
          return datos[indice];
      },
      actual: function() {
          return datos[indice];
      }
  };

}());

/* Probando
while(iterador.tieneSiguiente()) {  
    console.log(iterador.siguiente());
}

iterador.rebobinar();  
console.log(iterador.actual());  
*/
```

- **Objeto:**
```javascript
var iterador = (function() {

  var indice = 0,
      datos = { primerDato: 1, segundoDato: 'dos', tercerDato: 'tercero' },
      llaves = Object.keys(datos),
      totalDatos = llaves.length;

  return {
      siguiente: function() {
          var elemento;
          if (!this.tieneSiguiente()) {
              return null;
          }
          elemento = datos[llaves[indice]];
          indice ++;
          return elemento;
      },
      tieneSiguiente: function() {
          return indice < totalDatos;
      },
      rebobinar: function() {
          indice = 0;
          return datos[llaves[indice]];
      },
      actual: function() {
          return datos[llaves[indice]];
      }
  };

}());

/* Probando
while(iterador.tieneSiguiente()) {  
    console.log(iterador.siguiente());
}

iterador.rebobinar();  
console.log(iterador.actual());  
*/
```

### Façade

> Se aplicará el patrón fachada cuando se necesite proporcionar una interfaz simple para un subsistema complejo, o cuando se quiera estructurar varios subsistemas en capas, ya que las fachadas serían el punto de entrada a cada nivel. Otro escenario proclive para su aplicación surge de la necesidad de desacoplar un sistema de sus clientes y de otros subsistemas, haciéndolo más independiente, portable y reutilizable (esto es, reduciendo dependencias entre los subsistemas y los clientes). *[Wikipedia](https://www.wikiwand.com/es/Facade_(patr%C3%B3n_de_dise%C3%B1o))*

- **Claves:**
	- Creación de interfaces de alto nivel.
	- Muy usado en librerías
	- Oculta el código más complejo
	- Desacoplarnos de código externo

```javascript
var moduloRobotAutonomo = (function() {

    var _privado = {
        velocidad: 0,  // Km/h
        velocidadMax: 20, // Km/h
        velocidadMin: 2, // Km/h

        // ... más propiedades relativos a sensores, navegación, etc...

        velocidadActual: function() {
            console.log( "Velocidad Actual:" + _privado.velocidad);
        },
        ajustarVelocidad: function( valor ) {
            this.velocidad = valor;
        },
        acelerar: function() {
          if (_privado.velocidad >= _privado.velocidadMax ) {
            console.warn("Máxima velocidad Alcanzada!");
            _privado.velocidadActual();
          } else if (_privado.velocidad < _privado.velocidadMax){
              _privado.ajustarVelocidad (_privado.velocidad+1)
              _privado.velocidadActual();
          };
        },
        desacelerar: function() {
          if (_privado.velocidad <= _privado.velocidadMin ) {
            console.warn("Mínima velocidad Alcanzada!");
            _privado.velocidadActual();
          } else if (_privado.velocidad > _privado.velocidadMin){
              _privado.ajustarVelocidad (_privado.velocidad-1)
              _privado.velocidadActual();
          };
        },
        parar: function(){
          _privado.velocidad = 0;
          console.log("Robot parado");
        },
        validarVelocidad: function (valor) {
          if( valor <= _privado.velocidadMax && valor >= _privado.velocidadMin ){
            return true
          }else {
            return false
          }  
        }

		// más métodos relativos a sensores, navegación, etc...
    };

    return {
        facadeAPI: {
          velocidadCrucero: function(valor){
            if(_privado.validarVelocidad(valor)){
              _privado.ajustarVelocidad(valor);
              _privado.velocidadActual();
            }else{
              console.warn("La velocidad deseada "+valor+"Km/h no esta entre "+_privado.velocidadMin+"Km/h y los "+_privado.velocidadMax+"Km/h. permitidos" )
            }
          },
          masLento: _privado.desacelerar,
          masRapido: _privado.acelerar,
          stop:_privado.parar
        }
    };
}());

/* Jugando con el robot
var robot = moduloRobotAutonomo.facadeAPI;
robot.velocidadCrucero(20); // velocidad = 20
robot.masRapido(); // Max alcanzado
robot.stop(); // Parado
robot.masLento(); // Min alcanzado
*/
```

### Mediator

> Habitualmente un programa está compuesto de un número de clases (muchas veces elevado). La lógica y computación es distribuida entre esas clases. Sin embargo, cuantas más clases son desarrolladas en un programa, especialmente durante mantenimiento y/o refactorización, el problema de comunicación entre estas clases quizás llegue a ser más complejo. Esto hace que el programa sea más difícil de leer y mantener. Además, puede llegar a ser difícil cambiar el programa, ya que cualquier cambio podría afectar código en muchas otras clases.

> Con el patrón mediador, la comunicación entre objetos es encapsulada con un objeto mediador. Los objetos no se comunican de forma directa entre ellos, en lugar de ello se comunican mediante el mediador. Esto reduce las dependencias entre los objetos en comunicación, reduciendo entonces la Dependencia de código. *[Wikipedia](https://www.wikiwand.com/es/Mediator_(patr%C3%B3n_de_dise%C3%B1o))*

- Claves:
	- Una interfaz única - Objeto central.
	- Todos los módulos comunican con este módulo central.

```javascript
	// Patron de Mediador
	var moduloCentral = (function(){

	    var _temas = {};

	    var _suscribir = function( tema, fn ){
	        if ( !_temas[tema] ){
	            _temas[tema] = [];
	        }
	        _temas[tema].push( { context: this, callback: fn } );
	        return this;
	    };

	    var _publicar = function( tema ){
	        var args;
	        if ( !_temas[tema] ){
	            return false;
	        }
	        args = Array.prototype.slice.call( arguments, 1 );
	        for ( var i = 0, l = _temas[tema].length; i < l; i++ ) {
	            var subscription = _temas[tema][i];
	            subscription.callback.apply( subscription.context, args );
	        }
	        return this;
	    };

	    return {
	        verTemas: _temas,
	        publicar: _publicar,
	        suscribir: _suscribir,
	        instalarEn: function( obj ){
	            obj.suscribir = _suscribir;
	            obj.publicar = _publicar;
	        }
	    };

	}());

	// Creamos dos Objetos
	var modulo1 = {};
	var modulo2 = {};
	console.clear();

	// Instalamos ...
	moduloCentral.instalarEn(modulo1);
	moduloCentral.instalarEn(modulo2);

	// Ajustamos las suscripciones
	modulo1.suscribir("test", function(){
	    console.info("\"modulo1\" suscrito a \"test\". Callback disparado! ")
	});

	modulo2.suscribir("test2", function(){
	    console.info("\"modulo2\" suscrito a \"test2\". Callback disparado! ")
	});

	moduloCentral.suscribir("testCentral", function(){
	    console.info("\"moduloCentral\" suscrito a \"testCentral\". Callback disparado! ")
	});

	// Suscripciones extra...
	moduloCentral.suscribir("test", function(){
	    console.info("\"moduloCentral\" suscrito a \"test\". Callback disparado! ")
	});
	moduloCentral.suscribir("test2", function(){
	    console.info("\"moduloCentral\" suscrito a \"test2\". Callback disparado! ")
	});
	console.clear();

	// Disparamos las publicaciones
	modulo2.publicar("testCentral");
	modulo2.publicar("test2");
	modulo2.publicar("test");

	modulo1.publicar("testCentral");
	modulo1.publicar("test2");
	modulo1.publicar("test");

	moduloCentral.publicar("testCentral");
	moduloCentral.publicar("test2");
	moduloCentral.publicar("test");
```

### Mixins

> En los lenguajes de programación orientada a objetos, un mixin es una clase que ofrece cierta funcionalidad para ser heredada por una subclase, pero no está ideada para ser autónoma. Heredar de un mixin no es una forma de especialización sino más bien un medio de obtener funcionalidad. Una subclase puede incluso escoger heredar gran parte o el total de su funcionalidad heredando de uno o más mixins mediante herencia múltiple.

> Un mixin puede aplazar la definición y la vinculación de métodos hasta el tiempo de ejecución, aunque los atributos y los parámetros de instanciación siguen siendo definidos en tiempo de compilación. [Wikipedia](https://www.wikiwand.com/es/Mixin)

```javascript
    var Perro = function(nombre) {
        this.nombre = nombre  || "Sin nombre aún"
        this.patas = 4;
        this.ojos = 2;
    };

    // Mixin 1
    var PerroGuia = function() {};

    PerroGuia.prototype = {
        guiar: function() {
            console.log("Te estoy guiando...");
        }
    };

    // Mixin 2
    var PerroSuperPoderes = function() {};

    PerroSuperPoderes.prototype = {
    	perseguir: function() {
            console.log("Te estoy persiguiendo....");
        },
        rastrear: function() {
            console.log("Te estoy rastreando...");
        },
        camuflar: function() {
            console.log("Ya no me ves...");
        },
        conducir: function() {
            console.log("Ahora... estoy conduciendo!");
        }
    };

    // Mixin 3
    var PastorAleman = function () {};

    PastorAleman.prototype = {
        colorLengua: "negra",
        colorOjos: "marrón",
        capacidadTrabajo: true,
        especialidad: "Pastoreo"
    };


    function extender(claseReceptora, claseDonante) {
        // solo extendemos los metodos que pasamos por parametros
        if (arguments[2]) {
            for (var i = 2, len = arguments.length; i < len; i++) {
                claseReceptora.prototype[arguments[i]] = claseDonante.prototype[arguments[i]];
            }
        }
        // extendemos todos los metodos
        else {
            for (var nombreMetodo in claseDonante.prototype) {
                // comprobamos que ya no existiese un metodo llamado igual
                if (!claseReceptora.prototype[nombreMetodo]) {
                    claseReceptora.prototype[nombreMetodo] = claseDonante.prototype[nombreMetodo];
                }
            }
        }
    }

    // Extendemos todos los metodos
    extender(Perro, PerroGuia);
    extender(Perro, PastorAleman);

    // Extendemos solo conducir
    extender(Perro, PerroSuperPoderes, "conducir");

    var miPerroGuia = new Perro("K9");

    // utilizamos los metodos heredados
    console.log("Nombre: "+miPerroGuia.nombre+"\nNúmero patas: "+miPerroGuia.patas+"\n Número ojos: "+miPerroGuia.ojos+"\n Color Lengua: "+miPerroGuia.colorLengua+"\n Color ojos: "+miPerroGuia.colorOjos+"\n Capacidad de trabajo: "+miPerroGuia.capacidadTrabajo+"\n Especialidad: "+miPerroGuia.especialidad);
    miPerroGuia.guiar();
    miPerroGuia.conducir();
```

### Observer

> Definir una dependencia uno-a-muchos entre objetos, de tal forma que cuando el objeto cambie de estado, todos sus objetos dependientes sean notificados automáticamente. Se trata de desacoplar la clase de los objetos clientes del objeto, aumentando la modularidad del lenguaje, creando las mínimas dependencias y evitando bucles de actualización (espera activa o polling). En definitiva, normalmente, usaremos el patrón Observador cuando un elemento “quiere” estar pendiente de otro, sin tener que estar encuestando de forma permanente si éste ha cambiado o no.

> El patrón Observer es la clave del patrón de arquitectura Modelo Vista Controlador (MVC). *[Wikipedia](https://www.wikiwand.com/es/Observer_(patr%C3%B3n_de_dise%C3%B1o))*

```javascript
    var objetoPrincipal = {
        observadores: [],

        suscripcion: function(f) {
            this.observadores.push(f);
        },

        eliminarSuscripcion: function(f) {
            this.observadores = this.observadores.filter(
                function(observador) {
                    if (observador !== f) {
                        return observador;
                    }
                }
            );
        },

        mensaje: function(o, objeto) {
            var ambito = objeto || window;
            this.observadores.forEach(function(observador) {
                observador.call(ambito, o);
            });
        }
    }

    var otraFuncion1 = function(item) {
        console.info(item + " desde otraFuncion1");
    };

    function otraFuncion2(item) {
        console.info(item + " desde otraFuncion2");  
    };

    // Pruebas
    objetoPrincipal.mensaje('mensaje #1');

    objetoPrincipal.suscripcion(otraFuncion1);
    objetoPrincipal.suscripcion(otraFuncion2);
    objetoPrincipal.mensaje('mensaje #2');

    objetoPrincipal.eliminarSuscripcion(otraFuncion2);
    objetoPrincipal.mensaje('mensaje #2');

    objetoPrincipal.suscripcion(otraFuncion2);
    objetoPrincipal.mensaje('mensaje #3');
```

### Chain of Responsability

> El patrón de diseño Chain of Responsibility es un patrón de comportamiento que evita acoplar el emisor de una petición a su receptor dando a más de un objeto la posibilidad de responder a una petición. Para ello, se encadenan los receptores y pasa la petición a través de la cadena hasta que es procesada por algún objeto. Este patrón es utilizado a menudo en el contexto de las interfaces gráficas de usuario donde un objeto puede contener varios objetos. Según si el ambiente de ventanas genera eventos, los objetos los manejan o los pasan. [Wikipedia](https://www.wikiwand.com/es/Chain_of_Responsibility_(patr%C3%B3n_de_dise%C3%B1o))

```javascript
    var Peticion = function(cantidad) {
        this.cantidad = cantidad;
        logger.registra("Pedido: " + cantidad + "€\n");
    }

    Peticion.prototype = {
        get: function(valorMoneda) {
            var cuenta = Math.floor(this.cantidad / valorMoneda);
            this.cantidad -= cuenta * valorMoneda;

    		if(cuenta !== 0){
    	        if(valorMoneda < 5 ) {
    				logger.registra("Facilita un total de " + cuenta + " monedas de " + valorMoneda + "€");
    	        } else {
    	        	logger.registra("Facilita un total de " + cuenta + " billetes de " + valorMoneda + "€");
    	        }
    		}

            return this;
        }
    }

    var logger = (function() {
        var registro = "";
        return {
            registra: function(mensaje) { registro += mensaje + "\n"; },
            resumen: function() {
            	console.log(registro);
            	registro = "";
            }
        }
    })();

    function calcularBilletes(cantidad) {
        var peticion = new Peticion(cantidad);

        peticion.get(500).get(200).get(100).get(50).get(20).get(10).get(5) // Billetes
        		.get(2).get(1).get(0.50).get(0.20).get(0.10).get(0.05).get(0.02).get(0.01); // Monedas

        logger.resumen();
    }

    calcularBilletes(443.79);
```

### MVC Convencional

![MVC Convencional](https://alexatnet.com/content/images/2017/04/diagram.png)

- [Aproximación de Alex Netkachov](https://webcache.googleusercontent.com/search?q=cache:NQ4lsKof02EJ:https://alexatnet.com/model-view-controller-mvc-in-javascript/+&cd=2&hl=es&ct=clnk&gl=es)
- [Ejemplo de Alex Netkachov](http://jsfiddle.net/alex_netkachov/ZgBrK/)
