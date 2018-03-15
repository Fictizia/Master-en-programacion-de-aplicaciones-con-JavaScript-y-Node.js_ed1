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
      res.end('Quienes somos...', 'utf8');
    }
    else if (route === '/servicios') {
      res.end('Nuestros servicios...', 'utf8');
    }
    else if (route === '/precios') {
      res.end('Precios...', 'utf8');
    }
    else if (route === '/contactenos') {
      res.end('Contáctenos...', 'utf8');
    }
    else {
      res.end('Página no encontrada...', 'utf8');
    }
  }

}).listen(process.env.PORT, process.env.IP);
