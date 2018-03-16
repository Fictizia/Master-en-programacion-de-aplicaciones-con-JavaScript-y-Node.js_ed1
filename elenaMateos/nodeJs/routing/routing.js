var http = require('http'),
    url = require('url');
 var fs = require('fs');

/*
var quienes = fs.readFileSync('./quienes_somos.html'),
    queHacemos = fs.readFile('./que_hacemos.html'),
    quienesSomos = fs.readFile('./quienes_somos.html');
    
*/
/** 
 * Creamos el servidor:
 * 
 */
 //var index = fs.readFileSync('/index.html')
 
 http.createServer(function (req, res) {
    var ruta = url.parse(req.url).pathname; // Con url.parse(req, res) tomamos la url básica y 
                                                //le decimos que vamos a tratar el path, donde irán las secciones

    if (ruta === '/') { // Si el path coincide con '/' continuamos e imprimios Index en al página
        res.writeHead(200, {
        'Content-Type': 'text/plain'
      });
//res.write(index);
      res.end('Index!');

    } else if (ruta === '/quienes') { // cuando la ruta sea default/otro imprimimos 'sencillamente otra página'
      
      
        res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
      });
      fs.readFile('./quienes_somos.html', function (err, data) {
          console.log("data:", data)
          
          res.end(err ? "<h1>Quienes somos está rotooooooo</h1>" : data);
      })
     
      


    }else if (ruta === '/que') { // cuando la ruta sea default/otro imprimimos 'sencillamente otra página'
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
      fs.readFile('./que_hacemos.html', function (err, data) {
          console.log("data:", data)
          
          res.end(err ? "<h1>Que hacemos está rotooooooo</h1>" : data);
      })
     
     
  } else if (ruta === '/donde') { // cuando la ruta sea default/otro imprimimos 'sencillamente otra página'
        res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf-8'
      });
     
      fs.readFile('./donde_estamos.html', function (err, data) {
          console.log("data:", data)
          
          res.end(err ? "<h1>Donde está rotooooooo</h1>" : data);
      })
     

    } else {
        res.writeHead(301, { // si se pone cualquier otra cosa después de root/ da error y un 404
        'Content-Type': 'text/plain',
        'Location': 'https://github.com/404'
      });
      res.end();
    }

  }).listen(process.env.PORT, process.env.IP);

  console.log('Servidor funcionando en http://'+process.env.IP+':'+process.env.PORT+'/');
