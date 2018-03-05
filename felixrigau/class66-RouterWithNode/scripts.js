var http = require('http');
var url = require('url');
var route = '';

http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain charset=utf-8' });
  route = url.parse(req.url).pathname;

  if (route !== '/favicon.ico') {
    console.log(route)
    if (route === '/') {
      res.end('HomePage!');
    }
    else if (route === '/quienes-somos') {
      res.end('Quienes somos...');
    }
    else if (route === '/servicios') {
      res.end('Nuestros servicios...');
    }
    else if (route === '/precios') {
      res.end('Precios...');
    }
    else if (route === '/contactenos') {
      res.end('Contáctenos...');
    }
    else {
      res.end('Página no encontrada...');
    }
  }

}).listen(process.env.PORT, process.env.IP);
