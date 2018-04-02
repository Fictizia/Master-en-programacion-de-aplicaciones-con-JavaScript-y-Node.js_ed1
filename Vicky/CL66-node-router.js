 var http = require('http'),
      url = require('url');

  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
      res.end('Index!');

    } else if (pathname === '/sobre-nosotros') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('sobre nosotros');

    } else if (pathname === '/donde-estamos') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('¿dónde estamos?');

    } else if (pathname === '/que-hacemos') {
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      res.end('¿Qué hacemos?');
    } else {
        res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('¡Aquí no hay nada!');
    }

  }).listen(process.env.PORT, process.env.IP);