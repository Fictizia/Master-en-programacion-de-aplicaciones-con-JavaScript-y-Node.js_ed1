![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7

## Clase 77

### Express en resumen

- GET Básico
  ```
  app.get('/hola', function(req, res){
      res.send('hemos abierto una nueva ruta!');
  });
  ```

- POST Básico
  - app.js 
  ```
  app.post('/', function(req, res){
    res.send(req.body);
  });
  ```

  - index.jade 
  ```
  section.container
  h1 Manda tu mensaje!

  form(method='post', action='/')
    fieldset
      legend Mandame tu mensaje:
      p.contenido
        label Tu mensaje
        input(name='mensaje')
      p.acciones
        input(type='submit', value='Enviar')
  ```

  - respuesta 
  ```javascript
  {
    "mensaje": "Hola Cracks!"
  }
  ```


- Parámetros en las rutas
  - app.js 
  ```javascript
  app.get('/hola/:usuario', function(req, res){
      res.send('Hola '+req.params.usuario+'. Hemos abierto una nueva ruta personalizada!');
  });
  ```

- Simulando una respuesta de una base de datos en las rutas:

  - app.js 
  ```javascript
  app.get('/consulta/:usuario', function(req, res){
      var datos = {
          marca: "Seat",
          modelo: "Ibiza",
          edad: 20,
          ITVPasada: true,
          seguroPasado: true
      };
      
      res.render('consulta.jade', {usuario: req.params.usuario, datos: datos});
  });
  ```

  - consulta.jade 
  ```
  .datos
    h3 Datos: 
    p= "El Coche de "+usuario+" es un "+datos.marca+" "+datos.modelo
      
    h3 Detalles técnicos:
    ul
        li= "ITV en regla: " +datos.ITVPasada 
        li= "seguro en regla: " +datos.seguroPasado
  ```

**Utilidades**

- Recuperar cabeceras:
  ```
  curl -I 127.0.0.1:3000
  ```
- [PostMan](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
- [Insomnia](https://insomnia.rest/)
- [Html2Jade](http://html2jade.org/)



### PUG (antes Jade)

![Jade_logo](https://css-tricks.com/wp-content/uploads/2016/01/jade-logo-1.png)

**[Jade... ya no se llama jade. Ahora se llama PUG](https://github.com/pugjs/pug/issues/2184)**

![PUG_logo](https://camo.githubusercontent.com/be9ed9b1e0a28a074109fc994da6d00c1d8cd6e6/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f336561326433613836633632323730323064643562323037343361356161343538383038636134652f5356472f5f5f7075672d6c6f676f2d636f6c6f75722d776964652e737667)

**Implementaciones en otros lenguajes**
- [php](https://github.com/kylekatarnls/jade-php)
- [scala](https://scalate.github.io/scalate/documentation/scaml-reference.html)
- [ruby](https://github.com/slim-template/slim)
- [python](https://github.com/SyrusAkbary/pyjade)
- [java](https://github.com/neuland/jade4j)


- **Entendiendo la mécanica**
  - index.jade:
  ```
  doctype html
  html(lang="en")
    head
      title= pageTitle
      script(type='text/javascript').
        if (foo) {
           bar(1 + 5)
        }
    body
      h1 Jade - node template engine
      #container.col
        if youAreUsingJade
          p You are amazing
        else
          p Get on it!
        p.
          Jade is a terse and simple
          templating language with a
          strong focus on performance
          and powerful features.
  ```
  
  - index.html:
  ```html
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Jade</title>
      <script type="text/javascript">
        if (foo) {
           bar(1 + 5)
        }
      </script>
    </head>
    <body>
      <h1>Jade - node template engine</h1>
      <div id="container" class="col">
        <p>You are amazing</p>
        <p>
          Jade is a terse and simple
          templating language with a
          strong focus on performance
          and powerful features.
        </p>
      </div>
    </body>
  </html>
  ```
  
- Bootstrap:
  - index.jade:
  ```
  doctype html
  html
    head
      title title
      include ./includes/styles.jade
    body
      .row
        .container
          .jumbotron
            h1 Hola, desde Bootstrap!
            p ¿Qué te parece?
            p
              a.btn.btn-primary.btn-lg(href='http://getbootstrap.com/', role='button') Aprende más!
      include ./includes/scripts.jade
  ```
  - includes/styles.jade
  ```
  //- includes/styles.jade
  // Bootstrap
  link(rel='stylesheet', href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css')
  ```
  - includes/scripts.jade
  ```
  //- includes/scripts.jade
  // Jquery
  script(src='//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js')
  // Bootstrap
  script(src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js')
  
  ```
  - index.html
  ```
  <!DOCTYPE html>
  <html>
      <head>
          <title>title</title>
          <!-- Bootstrap-->
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
          </head>
          <body>
              <div class="row">
                  <div class="container">
                      <div class="jumbotron">
                          <h1>Hello, desde Bootstrap!</h1>
                          <p>¿Qué te parece?</p>
                          <p>
                              <a href="http://getbootstrap.com/" role="button" class="btn btn-primary btn-lg">Aprende más!</a>
                          </p>
                      </div>
                  </div>
              </div>
              <!-- Jquery-->
              <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
              <!-- Bootstrap-->
              <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
          </body>
      </html>
  ```

- [Pug - Github](https://github.com/pugjs/pug)
- [Pug - Getting Started](https://pugjs.org/api/getting-started.html)
- [Jade Syntax Documentation by example](http://naltatis.github.io/jade-syntax-docs/)
