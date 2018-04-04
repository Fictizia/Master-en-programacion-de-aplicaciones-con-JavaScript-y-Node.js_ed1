ulisesgascon [12:02]
https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/66
GitHub
Express super Hack: Proxy con Cors + Estáticos + Root · Issue #66 · Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1
Version avanzada de #56 // npm install express request var express = require('express'); var request = require('request'); var app = express(); var path = require('path'); // Static files app.use(...

Resuelto
Si tiras este fichero....
y pones tu app en /public
deberia funcionar
haz tus llamadas ajax hacia /proxy?url=URL--PETICION y ya lo tienes montado por HTTPS o lo que tengas en tu maquina
Y relamente CORS tambien te da un poco igual, pero te lo habilito por si acaso haces mas cosas o aislas este codigo
^^
y no te olvides de `npm install express request`
:guiño:

