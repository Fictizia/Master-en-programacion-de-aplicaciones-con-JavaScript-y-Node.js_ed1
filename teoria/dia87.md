![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7

## Clase 87

### Era pre-websockets: Long polling 

![img](https://www.pubnub.com/wp-content/uploads/2014/11/HTTP-LONG-POLLING.png)

Ejemplos de [Simple Long Polling Example with JavaScript and jQuery by Tian Davis (@tiandavis) from Techoctave.com](https://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery), adaptados por [J@sdeep
](https://github.com/jhbsk) en [este gist](https://gist.github.com/jhbsk/4353139)

**Long Polling**
```javascript
// Long Polling (Recommened Technique - Creates An Open Connection To Server ∴ Fast)
(function poll(){
    $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
    }, dataType: "json", complete: poll, timeout: 30000 });
})();
```

**Recursive Polling**
```javascript
// The setTimeout Technique (Not Recommended - No Queues But New AJAX Request Each Time ∴ Slow)
(function poll(){
   setTimeout(function(){
      $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
        //Setup the next poll recursively
        poll();
      }, dataType: "json"});
  }, 30000);
})();
```

**Traditional Polling**
```javascript
// The setInterval Technique (Not Recommended - Creates Queues of Requests ∴ Can Be Slow)
setInterval(function(){
    $.ajax({ url: "server", success: function(data){
        //Update your dashboard gauge
        salesGauge.setValue(data.value);
    }, dataType: "json"});
}, 30000);
```



**Profundizando en el pasado**
- [What is HTTP Long Polling?](https://www.pubnub.com/blog/2014-12-01-http-long-polling/)
- [Comet](https://es.wikipedia.org/wiki/Comet)
- [Simple Long Polling Example with JavaScript and jQuery](https://techoctave.com/c7/posts/60-simple-long-polling-example-with-javascript-and-jquery)
- [Ejemplo sencillo con nodejs y long polling](https://gist.github.com/kixxauth/912930)


### Era pre-websockets: [Flash Sockets (Adobe Flash)](https://help.adobe.com/es_ES/as3/dev/WSb2ba3b1aad8a27b0-181c51321220efd9d1c-8000.html)


### WebSockets

![WS_Sockets](http://fernetjs.com/wp-content/uploads/2012/11/websocket-lifecycle.png)
- Protocolo de comunicación qe se negocia sobre HTTP
- Full-duplex
- Única conexión permanente (Siempre conectado)
- Stream de mensajes
- Contenido en tiempo real
- Orientado a "eventos" (mensajes)
- Baja latencia


**Librerías para Node.js**

- [Socket.IO](http://socket.io/) - Featuring the fastest and most reliable real-time engine.
- [Nodejs-websocket](https://github.com/sitegui/nodejs-websocket) - Node.js module for websocket server and client.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node) - WebSocket Implementation for Node.JS (Draft -08 through the final RFC 6455).
- [Sockjs-node](https://github.com/sockjs/sockjs-node) - WebSocket emulation - Node.js server.
- [Ws](https://github.com/websockets/ws) - `ws`: The fastest cross platform RFC-6455 WebSocket implementation for Node.js.
- [deepstream.io](https://deepstream.io/) - Open realtime server a fast, secure and scalable realtime server for mobile, web & iot.
- [websocket-as-promised](https://github.com/vitalets/websocket-as-promised) - Promise-based W3C WebSocket wrapper: allows to use promises when connecting, disconnecting and messaging with WebSocket server.
- [faye-websocket-node](https://github.com/faye/faye-websocket-node) - Standards-compliant WebSocket client and server.
- [ws-wrapper](https://github.com/bminer/ws-wrapper) - Lightweight WebSocket wrapper that provides a socket.io-like event-handler API along with Promise-based requests.
- [ws-server-wrapper](https://github.com/bminer/ws-server-wrapper) - Companion library for ws-wrapper for the server-side.
- [uws](https://www.npmjs.com/package/uws) - Tiny WebSockets (access to the C++ library, µWebSockets, via Node.js)



**Entendiendo los eventos**

![Sockets](http://cdn.sandsmedia.com/ps/onlineartikel/pspic/picture_file/53/WebSocket4dd23ade6df2a.png)


**Negociación del protocolo WebSocket**

> Para establecer una conexión WebSocket, el cliente manda una petición de negociación WebSocket, y el servidor manda una respuesta de negociación WebSocket, como se puede ver en el siguiente ejemplo:
> [WebSockets en Wikiwand](https://www.wikiwand.com/es/WebSocket)

- Cliente:
```
  GET /demo HTTP/1.1
  Host: example.com
  Connection: Upgrade
  Sec-WebSocket-Key2: 12998 5 Y3 1 .P00
  Sec-WebSocket-Protocol: sample
  Upgrade: WebSocket
  Sec-WebSocket-Key1: 4 @1 46546xW%0l 1 5
  Origin: http://example.com

  ^n:ds[4U
```

- Servidor:
```
  HTTP/1.1 101 WebSocket Protocol Handshake
  Upgrade: WebSocket
  Connection: Upgrade
  Sec-WebSocket-Origin: http://example.com
  Sec-WebSocket-Location: ws://example.com/demo
  Sec-WebSocket-Protocol: sample

  8jKS'y:G*Co,Wxa-
```

![handshake](https://uploads.toptal.io/blog/image/92281/toptal-blog-image-1459170325553-a4b99c3624d324c33f22611d09ec13e1.gif)

> Los 8 bytes con valores numéricos que acompañan a los campos Sec-WebSocket-Key1 y Sec-WebSocket-Key2 son tokens aleatorios que el servidor utilizará para construir un token de 16 bytes al final de la negociación para confirmar que ha leído correctamente la petición de negociación del cliente.

### WS: Nativo

- [Soporte](http://caniuse.com/#search=websocket)
- [Documentación en MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)

**Abrir la conexión**
```javascript
var myWebSocket = new WebSocket("ws://www.websockets.org");
```

**Gestión de Eventos**

- Siempre dispondremos del parametro event.
```javascript
myWebSocket.onopen = function() { console.log("Connection open ..."); };
myWebSocket.onmessage = function(evt) { console.log( "Received Message: ", evt.data); };
myWebSocket.onclose = function() { console.log("Connection closed."); };      
```

**Envio de mensajoes**
```javascript
myWebSocket.send("Hello WebSockets!");
```

**Cerrar la conexión**
```javascript
myWebSocket.close();
```

### WS: Sockets.io
![Sockets](https://camo.githubusercontent.com/b74075d1deca125ad36f8fded4055f896d9f2108/687474703a2f2f666f746f732e73756265666f746f732e636f6d2f32376135653361633065393936666134663063643066613239386635356366636f2e706e67)

Caracrerísticas:
- Fácil
- Soporte a navegadores obsoletos (Fallback)
- Popular
- Extraordinariamente simple

Eventos reservados:
- socket.on("connect", cb)
- socket.on("disconnect", cb)
- socket.on("error", cb) *Solo cliente*
- socket.on("message", cb)

**Abrir la conexión**
```javascript
  var socket = io("url");
```

**Gestión de Eventos**
```javascript
  socket.on('channel', function(data) { 
    console.log( "Received Message: ", data); 
  });
```

**Envio de mensajoes**
```javascript
socket.emit('channel', data);
```

**Cerrar la conexión**
```javascript
socket.disconnect() 
socket.close(); // Si quieres reabrir. -> socket.connect();
```


### WS: Sockets.io (Server Side)

**Con HTTP directamente:**
```javascript
  var server = require('http').createServer();
  var io = require('socket.io')(server);
  io.on('connection', function(socket){
    socket.on('event', function(data){});
    socket.on('disconnect', function(){});
  });
  server.listen(3000);
```

**Con Express:**
```javascript
  var app = require('express')();
  var server = require('http').createServer(app);
  var io = require('socket.io')(server);
  io.on('connection', function(){ /* … */ });
  server.listen(3000);
```

**Recursos**
- [Socket.io en Github](https://github.com/socketio/socket.io)
- [Socket.io - Express 3/4](http://socket.io/docs/#using-with-express-3/4)


### Nativo vs. Librerías

- [Differences between socket.io and websockets en Stackoverflow](http://stackoverflow.com/a/38558531)
- [WebSocket and Socket.IO by DWD](https://davidwalsh.name/websocket)
- [An Introduction to WebSockets by Matt West](http://blog.teamtreehouse.com/an-introduction-to-websockets)

### Ejemplos

- [IT Pulse](https://github.com/UlisesGascon/twitter-sentiments)
- [Curratelo](https://github.com/UlisesGascon/curratelo)


### Ejercicios

**1 -** Partiendo de este [proyecto](https://github.com/losmescaleros/twitter-sentiments) realiza mejoras de contenido y visuales
- Objetivos:
  - Fork y lanzamiento en el entorno de desarrollo 
  - Mejorar la interfaz (estáticos)
  - Cambiar los hashtags y mejorar el sistema de analisis usando librerias
- Objetivos opcionales:
  - Refactoriza y evoluciona este repositorio para crear una aplicación que analices Tweets con un contenido especifico.

```javascript
// Tu solución
```

**2 -** Partiendo del repositorio [simple-chat#template](https://github.com/josex2r/simple-chat/tree/template) implementa toda la parte de servidor utilizando la librería `socket.io`.

```javascript
// Tu solución
```