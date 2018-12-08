![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7

# Clase 98

### Offline

- [Soporte en Navegadores](http://caniuse.com/#search=offline%20web%20app)

- Uso y limitaciones:
    - Aplicación disponible independientemente del estado de la conexión
    - Se acelera la carga de los archivos
    - Disminuyen las consultas al servidor
    - En algunos navegadores es necesario que el usuario permita el almacenamiento
    - Para incluir cambios en la aplicación es necesario modificar el manifiesto


- Comprobación:
```javascript
    if (!window.applicationCache) {
        console.warn("No se puede utilizar applicationCache :-(");
    } else {
        console.info("Podemos utilizar applicationCache :-)");
    }
```

- Verificando la conexión:
```javascript
    if (window.navigator.onLine) {
        var detalles = "<h1>Estas Conectado a Internet!!</h1>";
        detalles += "<h3>Detalles del navegador:</h3>";
        detalles += "<p>CodeName: " + navigator.appCodeName + "</p>";
        detalles += "<p>Nombre: " + navigator.appName + "</p>";
        detalles += "<p>Versión: " + navigator.appVersion + "</p>";
        detalles += "<p>Cookies Habilitadas: " + navigator.cookieEnabled + "</p>";
        detalles += "<p>Lenguaje: " + navigator.language + "</p>";
        detalles += "<p>Plataforma: " + navigator.platform + "</p>";
        detalles += "<p>User-agent header: " + navigator.userAgent + "</p>";
        document.body.innerHTML = detalles;

    } else {
        document.body.innerHTML = "<h1>No estas Conectado!!</h1>"
        console.warn("No estamos conectados a Internet!");
    }
```
- Verificando la conexión usando eventos:
```javascript
    window.addEventListener("offline", function(){
        console.warn("Estas desconectado!")
    });

    window.addEventListener("online", function(){
        console.info("Estas conectado!")
    });
```

- Usando Cache (manifest):
    - Uso:
        - Los archivos son visibles en la pestaña Resources/Application Cache
        - Es necesario ajustar el MIME en algunos servidores
            ```
            // Ex: Apache
            AddType text/cache-manifest .appcache
            ```
        - El atributo manifest puede señalar a una URL pero deben tener el mismo origen que la aplicación web
        - Los sitios no pueden tener más de 5MB de datos almacenados en caché, pueden ser menos si el usuario lo cambia.
        - Si no se puede descargar el archivo de manifiesto o algún recurso especificado en él, fallará todo el proceso de actualización de la caché.
        - Añadir la versión del manifest como comentario.
        - JAMAS incluir el propio manifest dentro del manifest
        - Nuevo sistema de carga:
            - Si existe manifest, el navegador carga el documento y sus recursos asociados directamente desde local.
            - Se verifica si hubo actualizaciones al manifest.
            - Si se actualizo, el navegador descarga la nueva versión del archivo y de los recursos listados en él (segundo plano).
    - Estructura
        - CACHE, lo que se cacheará
        - NETWORK, lo que NO se cacheará
        - FALLBACK, que se visualizará si algo no esta disponible de manera offline

    - Incluyendo el manifest
    ```html
        <html manifest="ejemplo.appcache">
          <!-- ... -->
        </html>
    ```

    - Ejemplo de Manifest
    ```
        CACHE MANIFEST
        # versión 1.0

        # SI CACHEAR
        CACHE:
        index.html
        offline.html
        css/style.css
        js/script.js
        img1.jpg
        img2.jpg
        img3.jpg
        logo.png

        # Mostraremos offline.html cuando algo falle
        FALLBACK:
        offline.html

        # NO CACHEAR
        NETWORK:
        *
        # * es todo aquello que no este en CACHE
    ```

- Estados de Cache (manifest):
```javascript
    var appCache = window.applicationCache;

    switch (appCache.status) {
      case appCache.UNCACHED: // appCache.status == 0
        console.warn('Un objeto caché de la aplicación no se inicializó correctamente o falló.');
        break;
      case appCache.IDLE: // appCache.status == 1
        console.info('La caché no esta en uso.');
        break;
      case appCache.CHECKING: // appCache.status == 2
        console.info('El manifesto se ha obtenido y esta siendo revisado para actualizarse.');
        break;
      case appCache.DOWNLOADING: // appCache.status == 3
        console.info('Se estan descargando nuevos recursos debido a una actualización del manifesto.');
        break;
      case appCache.UPDATEREADY: // appCache.status == 4
        console.info('Hay una nueva versión del manifiesto.');
        break;
      case appCache.OBSOLETE: // appCache.status == 5
        console.info('El caché esta ahora obsoleto');
        break;
      default:
        console.warn('El Caché esta en estado desconocido');
        break;
    };
```    

- Eventos de Cache:
```javascript
function eventosCache(){

var appCache = window.applicationCache;
appCache.addEventListener('cached', chivato);
appCache.addEventListener('checking', chivato);
appCache.addEventListener('downloading', chivato);
appCache.addEventListener('error', chivato);
appCache.addEventListener('noupdate', chivato);
appCache.addEventListener('obsolete', chivato);
appCache.addEventListener('progress', chivato);
appCache.addEventListener('updateready', chivato);

    function chivato(e) {
        var conexion = (navigator.onLine) ? 'sí': 'no';
        var type = e.type;
        console.log('Conectado: ' + conexion+', Evento: ' + type +", \nMás Información: %O", e);
    }

}
```

- Forzar la actualización (manualmente):

```javascript
var appCache = window.applicationCache;

appCache.update(); // Intentamos actualizar la versión del usuario con un nuevo manifest

if (appCache.status == window.applicationCache.UPDATEREADY) {
  appCache.swapCache();  // La ctualización es correcta y se cambiado a la nueva versión
}
```

### Progressive Web Apps (PWAs)

- [Progressive Web Apps by Google Developers](https://developers.google.com/web/progressive-web-apps/)
- [Awesome PWA](https://github.com/hemanth/awesome-pwa)
- [PWA Builder](http://www.pwabuilder.com/generator)
- [Demo PWA completo de Gokulakrishnan Kalaikovan](https://github.com/gokulkrishh/demo-progressive-web-app)
- [PWA Tutorial de IncredibleWeb](https://github.com/IncredibleWeb/pwa-tutorial)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)
- [Introducing Pokedex.org: a progressive webapp for Pokémon fans](http://www.pocketjavascript.com/blog/2015/11/23/introducing-pokedex-org)

**Manifest**
- [Banners de instalación de apps web](https://developers.google.com/web/fundamentals/engage-and-retain/app-install-banners/)
- [Web App Manifest](https://developer.mozilla.org/es/docs/Web/Manifest)
- [Notificaciones push en la web: Oportunas, relevantes y precisas](https://developers.google.com/web/fundamentals/engage-and-retain/push-notifications/)


### Web Workers: Intro

- Los Web Workers se ejecutan en un subproceso aislado.
- [Especificación](http://www.whatwg.org/specs/web-workers/current-work/)
- [Soporte](http://caniuse.com/#feat=webworkers)


**Arquitectura**
![ejemplo](https://az813057.vo.msecnd.net/testdrive/ieblog/2011/Jul/01_WebWorkersinIE10BackgroundJavaScriptMakesWebAppsFaster_2.png)


**Alcance**
- En el contexto de un Worker, tanto self como this hacen referencia al alcance global del Worker
- Puede acceder a:
	- Objeto navigator
	- Objeto location (de solo lectura)
	- XMLHttpRequest
	- setTimeout(), setInterval(), etc...
	- [Caché de la aplicación](https://developer.mozilla.org/es/docs/Web/API/Window/applicationCache)
	- Importación de secuencias de comandos externas, [importScripts()](https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts)
	- Generación de otros Web Workers

**Limitaciones**
- No se ejecutarán de forma local
- DOM
- Objeto window
- Objeto document
- Objeto parent


**Recomendaciones**

- Obtención previa y/o almacenamiento en caché de datos para un uso futuro
- Métodos para destacar la sintaxis de código u otros formatos de texto en tiempo real
- Corrector ortográfico
- Análisis de datos de vídeo o audio
- Entrada y salida en segundo plano o solicitud de servicios web
- Procesamiento de conjuntos o respuestas JSON de gran tamaño
- Filtrado de imágenes en <canvas>
- Actualización de varias filas de una base de datos web local

**Ejemplos**

- [Web Workers and Service Workers](http://codepen.io/ruzz311/pen/NNroab)
- [WEB Worker sample](http://codepen.io/nacholozano/pen/dpqvYk)

**Recursos**
- Librerías:
	- [parallel.js](https://github.com/parallel-js/parallel.js) 
	- [promise-worker](https://github.com/nolanlawson/promise-worker)
	- [Catiline.js](http://catilinejs.com/)
- [Introducción a los Web Workers en html5rocks](https://www.html5rocks.com/es/tutorials/workers/basics/)
- [Web workers without a separate Javascript file?](http://stackoverflow.com/questions/5408406/web-workers-without-a-separate-javascript-file)
- [Offline Recipes for Service Workers by DWB](https://davidwalsh.name/offline-recipes-service-workers)
- [Using Web Workers to Speed-Up Your JavaScript Applications by treehouse](http://blog.teamtreehouse.com/using-web-workers-to-speed-up-your-javascript-applications)
- [Debugging Web Workers with Chrome Developer Tools](https://blog.chromium.org/2012/04/debugging-web-workers-with-chrome.html)
- [Using Web Workers en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)
- [Concurrency in JavaScript](http://typedarray.org/concurrency-in-javascript/)

### Web Workers: Básico

**Definición y puesta en marcha**

- Instanciando el Web Worker
```javascript
var worker = new Worker('fichero.js');
```

- Arrancando el Web Worker
```javascript
var worker = new Worker('fichero.js');
worker.postMessage();
```

**Comunicación**

- Desde el archivo principal
```javascript
var worker = new Worker('fichero.js');

worker.addEventListener('message', function(evento) {
  console.log('El worker dice: ', evento.data);
}, false);

worker.postMessage('Hola Mundo!');
```

- Desde el Web Worker
```javascript
self.addEventListener('message', function(evento) {
  self.postMessage(evento.data);
}, false);
```

**Parar un Web Worker**

- Desde el archivo principal
```javascript
worker.terminate()
```

- Desde el Web Worker
```javascript
self.close()
```

#### Web Workers: Avanzado

**Subworkers**
- La resolución de las URI de los Subworkers está relacionada con la ubicación de su Worker principal (en oposición a la página principal)
- Los Workers tienen la capacidad de generar Workers secundarios.
- Los Subworkers deben estar alojados en el mismo origen que la página principal.


**Blob**

- [Blob en MDN](https://developer.mozilla.org/es/docs/Web/API/Blob)
- [Soporte blob urls](http://caniuse.com/#feat=bloburls)
- [Soporte blob constructing](http://caniuse.com/#feat=blobbuilder)

En el HTML:
```html
<!-- inline worker -->
<script id="worker" type="javascript/worker">
    (function(s){
    	var increment = 1;
      var count = 0;
      var loop = 999999999;
      
      s.onmessage = function(e) {
          console.log(e.data);
          var test = 0;
          for( var i = 0 ; i < loop ;i++ ){
          	test = i;
            var int = Math.trunc( i*100/loop );
            if( int === count ){
          		s.postMessage( int );
              count += increment;
            }
          }
        s.postMessage( {finish:'loop finished'} );
      };
    })(self);
 </script>
```


En JS:
```javascript
var blob = new Blob([document.querySelector('#worker').textContent], { type: "text/javascript" });
var worker = new Worker(window.URL.createObjectURL(blob));
```

**Shared Web Workers**

- [Epecificación](https://html.spec.whatwg.org/multipage/workers.html#sharedworker)
- [Soporte Shared Web Workers](http://caniuse.com/#feat=sharedworkers)


**Definición y puesta en marcha**

- Instanciando el Web Worker
```javascript
var worker = new SharedWorker("fichero.js");
```

- Arrancando el Web Worker utiliznado port
```javascript
var worker = new SharedWorker("/html5/web-worker-shared.jsp");

worker.port.addEventListener("message", function(event) {
	console.log("datos del ShraedWorker", event.data);
}, false);

worker.port.start();
```

**Comunicación**

- Desde el archivo principal
```javascript
var worker = new SharedWorker("/html5/web-worker-shared.jsp");

worker.port.addEventListener("message", function(event) {
	console.log("datos del ShraedWorker", event.data);
}, false);

worker.port.postMessage("First Message");
```

- Desde el Web Worker
```javascript
var ports = [] ;

onconnect = function(event) {

    var port = event.ports[0];
    ports.push(port);
    port.start();

    port.addEventListener("message",
        function(event) { listenForMessage(event, port); } );
}


listenForMessage = function (event, port) {
    port.postMessage("Reply from SharedWorker to: " + event.data);
}

//Implementation of shared worker thread code
setInterval(function() { runEveryXSeconds() }, 5000);

function runEveryXSeconds() {
    for(i = 0; i < ports.length; i++) {
        ports[i].postMessage("Calling back at : "
                + new Date().getTime());
    }
}
```

### AMP

![logo](https://www.risdall.com/wp-content/uploads/2017/10/AMP-project-logo2-1.png)

- [Qué es AMP: Accelerated Mobile Pages](https://www.humanlevel.com/articulos/posicionamiento-natural-buscadores/amp-accelerated-mobile-pages.html)
- [Kill Google AMP before it kills the web](https://www.theregister.co.uk/2017/05/19/open_source_insider_google_amp_bad_bad_bad/)
- [Google AMP is Not a Good Thing](https://danielmiessler.com/blog/google-amp-not-good-thing/)
- [Google AMP is good for mobile web users – but what about publishers?](https://www.theguardian.com/media/2015/oct/11/google-amp-facebook-instant-articles-apple-news)
- [AMP Project](https://www.ampproject.org/es/)
    - [Tutorial Oficial](https://www.ampproject.org/es/docs/tutorials/create)
    - [Convertir HTML en AMP](https://www.ampproject.org/es/docs/tutorials/converting)
    - [Añadir funciones avanzadas de AMP](https://www.ampproject.org/es/docs/tutorials/add_advanced)
    - [Crear páginas AMP interactivas](https://www.ampproject.org/es/docs/tutorials/interactivity)
    - [Crear páginas AMP que requieran iniciar sesión](https://www.ampproject.org/es/docs/tutorials/login_requiring)
    - [Crear un blog en directo](https://www.ampproject.org/es/docs/tutorials/live_blog)
    - [Guías](https://www.ampproject.org/es/docs/guides/responsive_amp)
    - [Referencias](https://www.ampproject.org/es/docs/reference/components)
- [AMP by example](https://ampbyexample.com/)
    - [Introduction](https://ampbyexample.com/#introduction)
    - [Components](https://ampbyexample.com/#components)
    - [Advanced](https://ampbyexample.com/#advanced)
    - [Dynamic AMP](https://ampbyexample.com/#dynamic_amp)
    - [Visual Effects](https://ampbyexample.com/#visual_effects)
    - [Samples & Templates](https://ampbyexample.com/#samples_templates)