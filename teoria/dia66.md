![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 66

### Librerías Nativas (CORE)

**[Los estados](https://nodejs.org/docs/latest-v9.x/api/documentation.html)**
- 0 *Deprecated*
- 1 *Experimental*
- 2 *Unstable*
- 3 *Stable*
- 4 *API Frozen*
- 5 *Locked*

**Los módulos**
- **[Buffer](https://nodejs.org/api/buffer.html)** - *Permite el trabajo con datos crudos*
- [C/C++ Addons](https://nodejs.org/api/addons.html) - *Permite integrar librerias de C/C++*
- **[Child Processes](https://nodejs.org/api/child_process.html)** - *Permite crear y gestionar "procesos hijo"*
- [Cluster](https://nodejs.org/api/cluster.html) - *Permite gestionar nuestro proceso principal e "hijos" entre diversos módulos*
- [Command Line Options](https://nodejs.org/api/cli.html) - *Controla el lanzamiento de Node por Consola*
- [Console](https://nodejs.org/api/console.html) - *Permite trabajar con la consola (terminal), imitando la consola del navegador*
- [Crypto](https://nodejs.org/api/crypto.html) - *Relacionado a las funcionalidades de criptografía necesarias apra algunso protocolos como SSL*
- [Debugger](https://nodejs.org/api/debugger.html) - *Utilidades de depuración*
- [DNS](https://nodejs.org/api/dns.html) - *Gestion y resolución de nombres de Dominios*
- [Domain](https://nodejs.org/api/domain.html) - *DEPRECIADO*
- [Errors](https://nodejs.org/api/errors.html) - *Gestión de errores*
- **[Events](https://nodejs.org/api/events.html)** - *Permite gestionar y crear eventos*
- **[File System](https://nodejs.org/api/fs.html)** - *Permite manipular y crear ficheros en el sistema*
- [Globals](https://nodejs.org/api/globals.html) - *Ámbito global*
- **[HTTP](https://nodejs.org/api/http.html)** - *Gestión del protocolo HTTP*
- **[HTTPS](https://nodejs.org/api/https.html)** - *Gestión del protocolo HTTPS (http y tls/ssl)*
- **[Modules](https://nodejs.org/api/modules.html)** - *Gestión y carga de módulos*
- [Net](https://nodejs.org/api/net.html) - *Nos aporta una capa de red asíncrona y permite gestionar "streams" tanto cliente como servidor.*
- [OS](https://nodejs.org/api/os.html) - *Información básica sobre el sistema operativo en el que estamos funcionando*
- **[Path](https://nodejs.org/api/path.html)** - *Gestión de rutas dentro del sistema (navegación de carpetas y archivos)*
- **[Process](https://nodejs.org/api/process.html)** - *Objeto global que gestiona el proceso del sistema que representa nuestra ejecución de Node*
- [Punycode](https://nodejs.org/api/punycode.html) - *Sintaxís de codificación a RFC 3492 y RFC 5891*
- **[Query Strings](https://nodejs.org/api/querystring.html)** - *Manipualción y gestion de cadenas URL*
- [Readline](https://nodejs.org/api/readline.html) - *Puede leer línea a línea información de entrada como la consola*
- [REPL](https://nodejs.org/api/repl.html) - *Read-Eval-Print-Loop (REPL)*
- **[Stream](https://nodejs.org/api/stream.html)** - *Interfaz abstracta usada por otros módulos para gestionar el flujo de la información*
- **[Timers](https://nodejs.org/api/timers.html)** - *Funciones globales de tiempo como setInterval, clearInterval, etc...*
- [TLS/SSL](https://nodejs.org/api/tls.html) - *Capa de encriptación basada en OpenSSL*
- [UDP/Datagram](https://nodejs.org/api/dgram.html) - *Gestión del protocolo UDP*
- **[URL](https://nodejs.org/api/url.html)** - *Facilita la resolución y parseo de URLs*
- **[Utilities](https://nodejs.org/api/util.html)** - *Utilidades varias, la mayoría depreciadas*
- [V8](https://nodejs.org/api/v8.html) - *Información sobre v8*
- [VM](https://nodejs.org/api/vm.html) - *Permite aislar código en "sandboxes"*
- [ZLIB](https://nodejs.org/api/zlib.html) - *Permite trabajar con Gzip/Gunzip, Deflate/Inflate y DeflateRaw/InflateRaw*


### HTTP

- **Hello World con HTTP:**
```javascript
  var http = require('http');

  var puerto = 3000;
  var direccion = "127.0.0.1";
  var mensaje = 'Hola a todos, ahora usando HTTP\n';


  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(mensaje);
  }).listen(puerto, direccion);
  console.log('Server running at http://'+direccion+':'+puerto+'/');
```

- **Hello World desde c9.io:**
```javascript
  var http = require('http');

  var mensaje = 'Hola a todos, ahora usando HTTP con C9.io\n';

  http.createServer(function(req, res) {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(mensaje);
  }).listen(process.env.PORT, process.env.IP);

  console.log('Server running at http://'+process.env.IP+':'+process.env.PORT+'/');
```

- **Rediccionamiento:**
```javascript
  var http = require('http');

  http.createServer(function (req, res) {
    res.writeHead(301, {
      'Location': 'http://www.google.es/'
    });
      res.end();
  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
```

- **Ping (petición http):**
```javascript
    var url = "google.es";

    http.get({ host: url }, function(resOrigen) {

        http.createServer(function (req, res) {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("La respuesta de " +url+" es "+resOrigen.statusCode );
            console.log("La respuesta de " +url+" es "+resOrigen.statusCode );

        }).listen(process.env.PORT, process.env.IP);

        console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');


    }).on('error', function(e) {

        http.createServer(function (req, res) {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end("La respuesta de " +url+" genera un error - " + e.message  );

        }).listen(process.env.PORT, process.env.IP);

        console.log('Servidor disponible en http://'+process.env.IP+':'+process.env.PORT+'/');
        console.log("Tenemos un error!! - " + e.message);
    });
```

- **[Objeto Request](https://nodejs.org/api/http.html#http_http_request_options_callback)**
- **[Objeto Response](https://nodejs.org/api/http.html#http_class_http_serverresponse)**
- **[Guide - Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)**


### URL

- **Leyendo urls:**
```javascript
  var url = require('url');

  var demoURL = "http://localhost:3000/ruta?parametro=dato#detalle";

  console.log("El host: "+url.parse(demoURL).hostname);
  console.log("El puerto: "+url.parse(demoURL).port);
  console.log("La ruta: "+url.parse(demoURL).pathname);
  console.log("La parametro: "+url.parse(demoURL).query);
  console.log("El hash(#): "+url.parse(demoURL).hash);
```

- **Trabajando con rutas:**
```javascript
  var http = require('http'),
      url = require('url');

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Index!');

    } else if (pathname === '/otro') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('sencillamente otra página');


    } else if (pathname === '/alindex') {
        res.writeHead(301, {
        'Location': '/'
      });
      res.end();    

    } else {
        res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('Querido... 404!');
    }

  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
```

- **Ping recurrente (consola):**
```javascript
      var http = require('http');
      var url = "google.es";
      var tiempo = 3500;

      setInterval(function() {
          http.get({ host: url }, function(res) {
              if (res.statusCode === 200 ) {  
                  console.log("Sin errores en " +url);
              } else {
                  console.log("Respuesta Http "+res.statusCode+" en " +url);
              }    
          }).on('error', function(e) {
                  console.log("Con errores -> La respuesta de "+url+" es "+e.message  );
          });
      }, tiempo);
```

### Asincronía:

> El modelo de programación de Node.js es monohilo, asíncrono y dirigido por eventos.
1. No puede haber código bloqueante o todo el servidor quedará bloqueado y esto incluye no responder a nuevas peticiones entrantes.
2. La asincronicidad implica que no sabemos cuándo ni en que orden se va a ejecutar el código, generalmente esto no es importante pero en ocasiones sí lo es y habrá que tenerlo en cuenta.
3. En caso de error inesperado debemos capturarlo y controlar el posible estado en que haya podido quedar la ejecución del código.
> Nicolas Nombela en [nnombela](http://nnombela.com/blog/2012/03/21/asincronicidad-en-node-dot-js/)

- **Sincrónico - código bloqueante:**

```javascript
    var http = require("http");
    var numeroPeticion = 1

    function writeResponse(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hola Mundo!, numero de peticion "+numeroPeticion);
        response.end();
        console.log("Se termino... "+numeroPeticion);
    }

    function sleepSynch(seconds, response) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + Math.floor((Math.random() * 1000) + 500) * seconds) {
            // Nada pasa....
        }
        writeResponse(response);
    }

    http.createServer(function(request, response) {
        console.log("Empezo... "+numeroPeticion);
        sleepSynch(10, response);
        numeroPeticion++;
    }).listen(process.env.PORT);

    console.log("en puerto ->" + process.env.PORT);
```

- **Asincronico - timeOut()**

```javascript
    var http = require("http");

    function writeResponse(response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hola Mundo!");
        response.end();
        console.log("Se termino... ");
    }

    function sleepAsynch(seconds, response) {
        setTimeout(function() {
        writeResponse(response);
        }, Math.floor((Math.random() * 1000) + 100) * seconds);
    }

    http.createServer(function(request, response) {

        console.log("Empezo... ");
        sleepAsynch(10, response);
    }).listen(process.env.PORT);

    console.log("en puerto ->" + process.env.PORT);
```


### Mantener Node funcionando

-  Se cierra:
```javascript
  setTimeout(function (){
    process.stdout.write("Cerrando Node...")
  }, 1000)
```

- Se mantiene:
```javascript
  setInterval(function (){
    // Nada pasa... pero sigo funcionando
  }, 1000)
```

- Programando una salida:
```javascript
  var contador = 0
  setInterval(function (){
    contador++
    if(contador > 10){
      process.exit()
    } else {
        console.log("Sigo. Valor contador -> "+contador +"\n")
    }
  }, 1000);
```


### File System

- **Leer un archivo**
```javascript
  var fs = require('fs');
  fs.readFile('archivo.txt', 'utf8', function (err, data) {
      if (!err) {
        console.log(data);
      } else {
        throw err;
      }
  });
```

- **Escribir un archivo**
```javascript
  var fs = require('fs'),
      data = "y esto... se guardará en el archivo.txt";
  fs.writeFile('archivo.txt', data, function (err) {
    if (!err) {
      console.log('Datos guardados en el archivo.txt');
    } else {
      throw err;
    }
  });
```

- **Usando Promesas y Callbacks**

```javascript
var fs = require("fs");

// Con CallBacks!
fs.readFile("./miArchivo.txt", function(error, content){
	console.log("Leyendo el archivo...");
	fs.writeFile("./logitud.txt", content.length, function(error){
	    if (error) {
	        console.log("error! ", error);
	    } else {
		    console.log("Terminado... hemos almacenado una cadena que vale ",content.length);
	    }
	});
});



// Con Promesas!

function leerArchivo (nombre) {
	return new Promise(function(resolver, rechazar){
		fs.readFile(nombre, function(error, contenido) {
			console.log("Empezando la lectura de ", nombre);
			if(error){
				console.log("Error en la lectura");
				return rechazar(error);
			}
				console.log("Lectura finalizada en ", nombre);
				resolver(contenido);
		});
	});
}

function escribirArchivo (nombre, contenido){
	return new Promise(function(resolver, rechazar){
		fs.writeFile(nombre, contenido, function(error){
			if(error){
				console.log("Error en la escritura de ", nombre);
				rechazar(error);
			} else {
				console.log("Escritura Termianda en ", nombre);
				resolver();
			}
		});
	});
}


//Opción1
leerArchivo("./miArchivo.txt")
.then(function(contenido){
    escribirArchivo("./longitud.txt", contenido);
})
.catch(function(error){
	console.log("Promesas con errores: ");
	console.log(error);
});



//Opción2
Promise.all([
	leerArchivo("./otros.txt"),
	leerArchivo("./usuarios.txt"),
	leerArchivo("./mas_cosas.txt")
	]).then(function(respuestas){
		console.log("Tenemos un total de "+respuestas.length+" respuesta/s.");
		console.log("El primero tiene "+respuestas[0].length+" caracteres");
		console.log("El segundo tiene "+respuestas[1].length+" caracteres");
		console.log("El tercero tiene "+respuestas[2].length+" caracteres");
	});


//Opcion3
Promise.race([
	leerArchivo("./otros.txt"),
	leerArchivo("./usuarios.txt"),
	leerArchivo("./mas_cosas.txt")
	]).then(function(respuesta){
		console.log("El más rápido tiene solo "+respuesta.length+" caracteres.");
	});
```


- **[Más métodos para:](https://nodejs.org/api/fs.html)**
	- Síncronos
	- Escucha de cambios
	- Manipulación de carpetas
	- etc...

### Events

![events](https://www.safaribooksonline.com/library/view/nodejs-the-right/9781941222355/images/eventloop.png)
- Patrón Observador
- Similar al navegador

- **Suscribiendonos a eventos**
	- Sin eventos
	```javascript
		var http = require('http');

		var server = http.createServer(function (request, response) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end("¡Hola people!");
		}).listen(process.env.PORT);

		console.log('Servidor escuchando por el puerto ' +process.env.PORT);
	```
	- Con eventos
	```javascript
		var http = require('http');

		var server = http.createServer().listen(process.env.PORT);

		server.on('request', function (request, response) {
			response.writeHead(200, {"Content-Type": "text/plain"});
			response.end("¡Hola people!");
		});

		console.log('Servidor escuchando por el puerto ' +process.env.PORT);
	```
- **Ejemplo sencillo: Creando nuestros eventos**
```javascript
  var eventos = require('events');

  var EmisorEventos = eventos.EventEmitter;
  var ee = new EmisorEventos();
  ee.on('datos', function(fecha){
     console.log(fecha);
  });
  setInterval(function(){
     ee.emit('datos', Date.now());
  }, 500);
```

- **Ejemplo: Juguemos al Ping-Pong**
```javascript
	var EventEmitter = require('events').EventEmitter;
	var pingPong = new EventEmitter();

	var pingNumero = 1;

	console.log('Bienvenido al juego de Ping/Pong!');
	console.log('Empezamos en 5 segundos....');

	setTimeout(function(){
	  console.log('Primer Ping... que desencadenará el juego');
	  pingPong.emit('ping', pingNumero);
	  pingNumero++;
	}, 5000);

	pingPong.on('ping', function(numero) {
	  console.log('Llegó el Ping('+numero+'). Emitimos Pong');
	  setTimeout(function(){
	    pingPong.emit('pong');
	  }, 1000);
	});

	pingPong.on('pong', function() {
	  console.log('Llegó el Pong. Emitimos Ping');
	  setTimeout(function(){
	    pingPong.emit('ping', pingNumero);
	    pingNumero++;
	  }, 1000);
	});

	var pingLogger = function(numero) {
	  console.log('Llegó el Ping ('+numero+') al nuevo listener');
	}

	setTimeout(function(){
	  console.log('Añadiendo un nuevo listener a Ping');
	  pingPong.on('ping', pingLogger);
	}, 10000);

	setTimeout(function(){
	  console.log('Eliminando el último listener');
	  pingPong.removeListener('ping', pingLogger);
	}, 12000);

	console.log('Nota: Recuerda que los Eventos nos ayudan con la asincronía, ¿no?');
```


### Ejercicios

**1 -** Crea las rutas básicas para tener una página web clásica (¿Quienes somos? | ¿Donde Estamos? | ¿Que hacemos? | Contacto... etc...)

```javascript
    // Tu solución
```

