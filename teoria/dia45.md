![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 45

### 3 Capas

- CSS (Diseño)
    - en archivos.css

- HTML (Contenido)
    - Nada de css o js en línea
    - Manejo de eventos en archivos.js

- JS (Funcionalidad y plantillas)
    - en archivos.js

### Namespace

> Un espacio de nombres es un contenedor abstracto en el que un grupo de uno o más identificadores únicos pueden existir. Un identificador definido en un espacio de nombres está asociado con ese espacio de nombres. El mismo identificador puede independientemente ser definido en múltiples espacios de nombres, eso es, el sentido asociado con un identificador definido en un espacio de nombres es independiente del mismo identificador declarado en otro espacio de nombres. Los lenguajes que manejan espacio de nombres especifican las reglas que determinan a qué espacio de nombres pertenece una instancia de un identificador. *[Wikipedia](http://www.wikiwand.com/es/Espacio_de_nombres)*

- **Claves**
    - Reducir el número de objetos globales
    - Todo forma parte de un único objeto
    - Se puede trabajar en diversos archivos .js

- **Namespace (función anónima):**
    ```javascript
        var myApp = (function () {
            // privado
            var metodoPrivado1 = function () {
                console.info("Método Privado 1");
            };
            var metodoPrivado2 = function () {
                console.info("Método Privado 2");           
            };
            var propiedadPrivada1 = 'dato1';
            return {
                // público
                metodoPublico1: metodoPrivado1,
                propiedadesPublicas:{
                    propiedad1: propiedadPrivada1,
                    otro: "otro"
                },
                mas:{
                    MetodoPublico2: metodoPrivado2
                }
                //...
            }
        })();
    ```

- **Namespace (Extensión):**
    ```javascript
        var myApp = myApp || {};

        (function( namespace ){
            namespace.propiedad1 = "Propiedad 1";
            namespace.metodo1 = function(){
                return "metodo1";
            };
        })(myApp);
        console.log(myApp);
    ```

- **Usando Namespace:**
    ```javascript
        // global
        var myApp = myApp || {};

        // sub-objeto
        myApp.ejemploDatos = {}

        myApp.ejemploDatos = {
            metodo: function () {
                console.log("esto es un metodo");           
            },
            propiedad1: 1,
            propiedad2: "dos"
        }
    ```

- **Simplificar la creación de elementos:**
    ```javascript
        var myApp = myApp || {};

        myApp.crearElemento = function(nombre){
            var partes = nombre.split('.');
            var nameSpace = myApp;
            for (var i in partes) {
                if (!nameSpace[partes[i]]) {
                    nameSpace[partes[i]] = {};
                }
                nameSpace = nameSpace[partes[i]];
            }
        }

        myApp.crearElemento('uno.dos.tres.cuatro.cinco.y.mas.niveles');
        myApp.uno.dos.tres.cuatro.cinco.y.mas.niveles = "Funciona!"
    ```

### Init-time branching

- **Claves:**
    - Cuando algo no cambia durante la ejecucción
    - Se carga una vez al principio y devuelve funciones segun la condicción

```javascript

    var myApp = {};

    myApp.eventos = {
        agregar: null,
        quitar: null,
        manejador: function(evento){

            console.log("-----------------------------")
            console.log("Type: "+evento.type); // Tipo
            console.log("Bubbles: "+evento.bubbles); // sube por el DOM
            console.log("Cancelable: "+evento.cancelable);
            console.log("CurrentTarget: ", evento.currentTarget);
            console.log("DefaultPrevented: "+evento.defaultPrevented);
            console.log("EventPhase: "+evento.eventPhase);
            console.log("Target: ", evento.target);
            console.log("TimeStamp: "+evento.timeStamp);
            console.log("IsTrusted: "+evento.isTrusted); // true - Usuario o false - Script
            console.log("=============================")

        }
    };

    if (typeof window.addEventListener === 'function') {
        myApp.eventos.agregar = function(el, type, fn) {
            el.addEventListener(type, fn, false);
        };
        myApp.eventos.quitar = function(el, type, fn) {
            el.removeEventListener(type, fn, false);
        };
    } else { // IE8
        myApp.eventos.agregar = function(el, type, fn) {
            el.attachEvent('on' + type, fn);
        };
        myApp.eventos.quitar = function(el, type, fn) {
            el.detachEvent('on' + type, fn);
        };
    }

    /*
        myApp.eventos.agregar(window, 'click', myApp.eventos.manejador);
        myApp.eventos.quitar(window, 'click', myApp.eventos.manejador);
    */

```

### Lazy Definition

> En la teoría de lenguajes de programación, La evaluación perezosa (del inglés lazy evaluation) o llamada por necesidad es una estrategia de evaluación que retrasa el cálculo de una expresión hasta que su valor sea necesario, y que también evita repetir la evaluación en caso de ser necesaria en posteriores ocasiones. Esta compartición del cálculo puede reducir el tiempo de ejecución de ciertas funciones de forma exponencial, comparado con otros tipos de evaluación. *[Wikipedia](http://www.wikiwand.com/es/Evaluaci%C3%B3n_perezosa)*

- **Claves:**
    - Se crean las funciones cuando se ejecuta por primera vez
    - Ahorra recursos en calculos complejos
```javascript

    var myApp = {};

    myApp.eventos = {
        agregar: function(el, type, fn) {
            if (typeof window.addEventListener === 'function') {
                myApp.eventos.agregar = function(el, type, fn) {
                    el.addEventListener(type, fn, false);
                };
            } else { // IE8
                myApp.eventos.agregar = function(el, type, fn) {
                    el.attachEvent('on' + type, fn);
                };
            }

            myApp.eventos.agregar(el, type, fn);
        },
        quitar: function(el, type, fn) {
            if (typeof window.addEventListener === 'function') {
                myApp.eventos.quitar = function(el, type, fn) {
                    el.removeEventListener(type, fn, false);
                };
            } else { // IE8
                myApp.eventos.quitar = function(el, type, fn) {
                    el.detachEvent('on' + type, fn);
                };
            }
            myApp.eventos.quitar(el, type, fn);
        },
        manejador: function(evento){

            console.log("-----------------------------")
            console.log("Type: "+evento.type); // Tipo
            console.log("Bubbles: "+evento.bubbles); // sube por el DOM
            console.log("Cancelable: "+evento.cancelable);
            console.log("CurrentTarget: ", evento.currentTarget);
            console.log("DefaultPrevented: "+evento.defaultPrevented);
            console.log("EventPhase: "+evento.eventPhase);
            console.log("Target: ", evento.target);
            console.log("TimeStamp: "+evento.timeStamp);
            console.log("IsTrusted: "+evento.isTrusted); // true - Usuario o false - Script
            console.log("=============================")

        }
    };

    /*
        myApp.eventos.agregar(window, 'click', myApp.eventos.manejador);
        myApp.eventos.quitar(window, 'click', myApp.eventos.manejador);
    */

```

### Module

> La meta del Patrón para Diseño de Software, consiste en proporcionar las características y estructura sintáctica, definida por el paradigma de Programación Modular, a Lenguajes de Programación, que no lo soportan completamente, o que solo lo soportan de forma incompleta.

> Este patrón requiere 2 elementos, un elemento es el elemento de definición; el cual, puede ser un grupo de código fuente, un solo objeto, o una sola clase, que aplica este patrón. Y el otro, es el elemento de implementación, el cual es un grupo de código fuente, un solo objeto, o una sola clase, que utiliza el elemento de definición.

> Un elemento, puede utilizar ambos casos, definir un patrón, y aplicar otro. Es común, en este patrón, que se aplique varias veces, en una misma aplicación. *[Wikipedia](https://www.wikiwand.com/es/Module_(patr%C3%B3n_de_dise%C3%B1o))*

- **Claves:**
    - Usamos funciones anonimas autoejecutadas
    - Encapsulamos la lógica
    - Exponemos solo parte

```javascript
    var mates = mates || {};

    mates.operaciones = (function() {
      var total = 0;

      return {
        sumar: function(a, b){
          var suma = a + b;
          total += suma;
          return suma;
        },
        restar: function(a, b){
          var resta = a - b;
          total -= resta;
          return resta;
        },
        total: function(){
          return total;
        }
      };
    })();

    mates.operaciones.total();  
    mates.operaciones.sumar(12, 21);
    mates.operaciones.total();
    mates.operaciones.restar(40, 1);
    mates.operaciones.total();
```


### Revealing Module Pattern

- **Claves:**
    - Incluir métodos privados en el retorno

```javascript
    var constructorCocheEmpresa = function (marca, modelo, antiguedad, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.antiguedad = antiguedad;
        this.color = color;

        var _ITVPasada = true;
        var _ITVfrecuencia = "Cada año";
        var _seguroEnRegla = true;
        var _companySeguros = "SegurExpress";
        var _tipoSeguro = "a terceros";



        function _dameDetalles(){
          console.log("Tu coche es un "+marca+" "+modelo+" con "+antiguedad+" años y color "+color);
        }

        function _datosPrivados() {
            if (_ITVPasada && _seguroEnRegla)
                console.info("INFO: Todo en Regla, tienes que pasar la ITV "+_ITVfrecuencia+". Tienes un seguro "+_tipoSeguro+" con "+_companySeguros);
            else{
                console.error("ALERTA! El coche no puede usarse. El seguro o la ITV no esta en regla.");
            }
        }

        return {
         datosPrivados:   _datosPrivados,
         dameDetalles:   _dameDetalles
        }
    };

    /*
    var miCoche = new constructorCocheEmpresa ("Audi", "S8", 2, "negro", "Berlina");
    miCoche.datosPrivados();
    miCoche.dameDetalles();
    */

```

# Patrones de diseño

### Prototype

> Este patrón resulta útil en escenarios donde es preciso abstraer la lógica que decide qué tipos de objetos utilizará una aplicación, de la lógica que luego usarán esos objetos en su ejecución. Los motivos de esta separación pueden ser variados, por ejemplo, puede ser que la aplicación deba basarse en alguna configuración o parámetro en tiempo de ejecución para decidir el tipo de objetos que se debe crear. En ese caso, la aplicación necesitará crear nuevos objetos a partir de modelos. Estos modelos, o prototipos, son clonados y el nuevo objeto será una copia exacta de los mismos, con el mismo estado. Como decimos, esto resulta interesante para crear, en tiempo de ejecución, copias de objetos concretos inicialmente fijados, o también cuando sólo existe un número pequeño de combinaciones diferentes de estado para las instancias de una clase.

> Dicho de otro modo, este patrón propone la creación de distintas variantes de objetos que nuestra aplicación necesite, en el momento y contexto adecuado. Toda la lógica necesaria para la decisión sobre el tipo de objetos que usará la aplicación en su ejecución se hace independiente, de manera que el código que utiliza estos objetos solicitará una copia del objeto que necesite. En este contexto, una copia significa otra instancia del objeto. El único requisito que debe cumplir este objeto es suministrar la funcionalidad de clonarse. *[Wikipedia](https://www.wikiwand.com/es/Prototype_(patr%C3%B3n_de_dise%C3%B1o))*

- **Clonación simple:**
```javascript
  var coche = {
      marca: "Seat",
      modelo: "Panda",
      antiguedad: 20,
      color: "azul",
      tipo: "turismo"
  };

  var clonCoche = Object.create(coche);

  console.log(clonCoche.marca+" "+clonCoche.modelo);  
```

- **Clonación compleja:**
```javascript
    var coche = {
      marca: "Land Rover",
      modelo: "Santana Aníbal",
      antiguedad: 35,
      color: "Marrón tierra",
      tipo: "4x4",
      detalles: dameDetalles
    };

    var furgon = {
      taraMinima: 1200,
      cargaUtil: 768,
      volumenCarga: 4.5,
      detalles: detallesTecnicos
    };

    var conductor = {
      nombre: "Yo",
      apellido: "Mismo",
      experiencia: 10000,
      limite: 120,
      detalles: function(){
        console.info("El conductor es "+ this.nombre + " " +this.apellido+". Con "+this.experiencia+" horas de experiencia y una restricción a "+this.limite+"Km/h.");
      }
    }

    function dameDetalles(){
      console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
    };

    function detallesTecnicos(){
      console.warn("Tu coche tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
    };

    // Patrón de Prototype
    var miPickup = Object.create(coche, {
        'conductor': { value: conductor },
        'carga': { value: furgon}
      });


    miPickup.detalles();
    miPickup.carga.detalles();
    miPickup.conductor.detalles();
    console.log("Es \"coche\" prototipo de \"miPickup\" ? "+coche.isPrototypeOf(miPickup));
    console.log("Es \"conductor\" prototipo de \"miPickup\" ? "+conductor.isPrototypeOf(miPickup));
    console.log("Es \"furgon\" prototipo de \"miPickup\" ? "+furgon.isPrototypeOf(miPickup));
```

### Decorator

> El patrón Decorator responde a la necesidad de añadir dinámicamente funcionalidad a un Objeto. Esto nos permite no tener que crear sucesivas clases que hereden de la primera incorporando la nueva funcionalidad, sino otras que la implementan y se asocian a la primera. *[Wikipedia](https://www.wikiwand.com/es/Decorator_(patr%C3%B3n_de_dise%C3%B1o))*

- **Claves:**
    - Extender objetos.
    - Sobreescribir dinamicamente los métodos.

- **Añadiendo una funcionalidad:**
```javascript
function constructorCoches( color ){
  this.marca = "Seat";
  this.modelo = "Ibiza";
  this.antiguedad = 20;
  this.color = color || "rojo";
  this.detalles = function (){
    console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años y color "+this.color);
  }
}


var cocheRojo = new constructorCoches();
cocheRojo.detalles();


var otroCoche = new constructorCoches( "Azul" );
otroCoche.detalles();


// Decorator
otroCoche.definirModelo = function( nuevoModelo ){
this.modelo = nuevoModelo;
};

otroCoche.definirColor = function( nuevoColor ){
this.color = nuevoColor;
};

otroCoche.definirModelo( "Panda" );
otroCoche.definirColor( "Azul Oscuro" );
otroCoche.detalles();

var nuevoCoche = new constructorCoches( "Verde" );
nuevoCoche.detalles();
```

- **Añadiendo multiples funcionalidades:**
```javascript
// Constructor
function constructorCoches( color ){
  this.marca = "Seat";
  this.modelo = "Ibiza";
  this.antiguedad = 20;
  this.color = color || "rojo";
  this.extras = 0;
  this.detalles = function (){
    console.log("Tu coche es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años y color "+this.color);
  }
}

// Decorator 1
function gps( coche ) {
  coche.gps = true;
  coche.extras++;
}

// Decorator 2
function aireAcondiccionado( coche ){
  coche["aire acondiccionado"] = true;
  coche.extras++;
}

// Decorator 3
function elevaLunas( coche ){
  coche.elevaLunas = true;
  coche.extras++;
}

// Decorator 4
function farosLed( coche ){
  coche["faros led"] = true;
  coche.extras++;
}

// Decorator 5
function detallesTecnicos( coche ){
  coche.detallesTecnicos = function(){
    if(coche.extras > 0){
      console.info("El coche tiene "+coche.extras+" extras: \n");
      (coche.gps) ? console.log("- GPS"):console.log("- SIN GPS");
      (coche["aire acondiccionado"]) ? console.log("- Aire acondiccionado"):console.log("- SIN Aire acondiccionado");
      (coche["faros led"]) ? console.log("- Faros Led"):console.log("- SIN Faros Led");
      (coche.elevaLunas) ? console.log("- Elevalunas"):console.log("- SIN Elevalunas");
    } else {
      console.info("Parece.. que no se han añadido extras aun.");
    }
  };
}

var cocheRojo = new constructorCoches();
cocheRojo.detalles();


// Aplicando cambios
detallesTecnicos(cocheRojo);
cocheRojo.detallesTecnicos();

// Aplicando más cambios
gps(cocheRojo);
aireAcondiccionado(cocheRojo);
elevaLunas(cocheRojo);
farosLed(cocheRojo);
cocheRojo.detallesTecnicos();


var nuevoCoche = new constructorCoches( "Verde" );
nuevoCoche.detalles();
```


# Patrones de Diseño Avanzado

### Singleton

> Es un patrón de diseño diseñado para restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto.

> Su intención consiste en garantizar que una clase sólo tenga una instancia y proporcionar un punto de acceso global a ella.

> El patrón singleton se implementa creando en nuestra clase un método que crea una instancia del objeto sólo si todavía no existe alguna. Para asegurar que la clase no puede ser instanciada nuevamente se regula el alcance del constructor (con modificadores de acceso como protegido o privado). *[Wikipedia](https://www.wikiwand.com/es/Singleton)*


- **Claves:**
    - limitamos la instanciación de una clase a un objeto único

```javascript
    var miSingleton = (function () {
        var instancia;

        function crearInstancia() {
            var objeto = new Object();
            return objeto;
        }

        return {
            instanciacion: function () {
                if (!instancia) {
                    instancia = crearInstancia();
                }
                return instancia;
            }
        };
    })();

    /*
        var instancia1 = {};
        var instancia2 = {};
        console.info("¿Es lo mismo? " + (instancia1 === instancia2));  
        instancia1 = miSingleton.instanciacion();
        instancia2 = miSingleton.instanciacion();
        console.info("¿Es la misma instaciación? " + (instancia1 === instancia2));  
    */
```

### Factory

> Las clases principales en este patrón son el creador y el producto. El creador necesita crear instancias de productos, pero el tipo concreto de producto no debe ser forzado en las subclases del creador, porque las posibles subclases del creador deben poder especificar subclases del producto para utilizar.

> La solución para esto es hacer un método abstracto (el método de la fábrica) que se define en el creador. Este método abstracto se define para que devuelva un producto. Las subclases del creador pueden sobrescribir este método para devolver subclases apropiadas del producto... *[Wikipedia](https://www.wikiwand.com/es/Factory_Method_(patr%C3%B3n_de_dise%C3%B1o))*

- **Claves:**
    - No usaremos *new*
    - Un objeto Factory nos devuelve el nuevo objeto

```javascript
    var opcionesCoche = {
        marca: "Land Rover",
        modelo: "Santana Aníbal",
        antiguedad: 35,
        color: "Marrón tierra",
        tipo: "4x4"
    };

    var opcionesFurgon = {
        taraMinima: 1200,  
        cargaUtil:  768,
        volumenCarga: 4.5,
        tipo: "furgon"
    };

    var coche = function (opciones) {
        this.marca = opciones.marca;
        this.modelo = opciones.modelo;
        this.antiguedad = opciones.antiguedad;
        this.color = opciones.color;
        this.tipo = opciones.tipo;

        this.detalles = function (){
            console.log("Tu vehículo es un "+this.marca+" "+this.modelo+" con "+this.antiguedad+" años, clase "+this.tipo+" y color "+this.color);
        };
    };

    var furgon = function (opciones) {
        this.taraMinima = opciones.taraMinima;
        this.cargaUtil = opciones.cargaUtil;
        this.volumenCarga = opciones.volumenCarga;

        this.detallesTecnicos = function(){
            console.warn("Tu vehículo tiene una Tara mínima de "+this.taraMinima+". Carga útil de "+this.cargaUtil+" y un volumen de carga de "+this.volumenCarga+"m3");
        };
    };

    // Patrón Factoría
    function factoriaVehiculos(){}

    factoriaVehiculos.prototype.claseVehiculo = coche;

    factoriaVehiculos.prototype.createVehicle = function(options) {
        if (options.tipo === "turismo"  || options.tipo === "4x4"  ) {
            this.claseVehiculo = coche;
        } else {
            this.claseVehiculo = furgon;
        }
        return new this.claseVehiculo(options);
    };

    // Aplicando el Patrón
    var factoriaCoches = new factoriaVehiculos();

    var miFurgon = factoriaCoches.createVehicle(opcionesFurgon);
    var mi4x4 = factoriaCoches.createVehicle(opcionesCoche);
    var miCoche = factoriaCoches.createVehicle({
        marca: "Seat",
        modelo: "Ibiza",
        antiguedad: 20,
        color: "Azul Oscuro",
        tipo: "turismo"
    });

    // Comprobaciones
    function chequearInstanciacion(){
        console.info("¿Es \"miCoche\" una instancia de \"coche\" ? " + (miCoche instanceof coche));
        miCoche.detalles();
        console.info("¿Es \"mi4x4\" una instancia de \"coche\" ? " + (mi4x4 instanceof coche));
        mi4x4.detalles();
        console.info("¿Es \"miFurgon\" una instancia de \"furgon\" ? " + (miFurgon instanceof furgon));
        miFurgon.detallesTecnicos();
    }

    chequearInstanciacion();
```

### Ejercicios

**1 -** Desarrolla una aplicación para gestionar las peliculas que te gustan. Incluyendo llamadas AJAX a la base de datos de IMBD para enriquecer los datos, usando [OMDb API](http://omdbapi.com/).
- Todas las películas que se introducen quedan guardadas en Firebase.
- Las peliculas pueden ser consulatadas.
- Las peliculas pueden ser eliminadas.
- Las peliculas pueden ser editadas desde el html. 

```javascript
//Tu solución
```
