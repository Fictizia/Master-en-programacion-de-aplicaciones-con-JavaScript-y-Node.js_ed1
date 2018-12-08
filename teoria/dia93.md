![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7

# Clase 93

### Browserify

![Logo](https://raw.githubusercontent.com/browserify/browserify/HEAD/assets/logo.png)

### Browserify: Caracteristicas

- solo soporta el patrón CommonJS, usaremos `require()` en el browser
- Genera un fichero bundle con todo el js
- Se puede usar con un fichero de configuración complejo
- Se instala globalmente `npm install browserify -g`

### Browserify: Funcionamiento

Nuestro fichero `public/main.js`:
```javascript
var foo = require('./foo.js');
var bar = require('../lib/bar.js');
var gamma = require('gamma');

var elem = document.getElementById('result');
var x = foo(100) + bar('baz');
elem.textContent = gamma(x);
```

Nuestro fichero `public/foo.js`:
```javascript
module.exports = function (n) { return n * 111 }
```

Comando que hace toda la magia:
```bash
browserify main.js > bundle.js
```

Nuestro fichero `public/index.html`
```html
<!doctype html>
<html>
  <head>
    <title>Browserify Playground</title>
  </head>
  <body>
    <script src="/static/js/bundle.js"></script>
  </body>
</html>
```


### Browserify: Profundizando

- [browserify-handbook](https://github.com/browserify/browserify-handbook)
- [Getting Started with Browserify](https://www.sitepoint.com/getting-started-browserify/)
- [Primeros pasos con Browserify con Nazarí González](http://www.nazariglez.com/2015/02/19/primeros-pasos-con-browserify/)
- [Browserify. Desarrollando tu Frontend como en Node.js con Carlos Azaustre](https://carlosazaustre.es/browserify-desarrollando-tu-frontend-como-en-node-js/)
- [Getting Started with Browserify with Kyle](https://www.youtube.com/watch?v=CTAa8IcQh1U)
- [Usa módulos del lado cliente con Browserify! en Cristalab](http://www.cristalab.com/tutoriales/usa-modulos-del-lado-cliente-con-browserify-c114540l/)
- [Building angular app using browserify in Hackernoon](https://hackernoon.com/building-angular-app-using-browserify-704a7947a09e)
- [Hacking Browserify with Krasimir](http://krasimirtsonev.com/blog/article/hacking-browserify)

### Webpack

![webpack](https://www.campusmvp.es/recursos/image.axd?picture=/2017/4T/Webpack-logo.png)


> Webpack takes modules with dependencies and generates static assets representing those modules.


![webpack](https://camo.githubusercontent.com/0d3c9687ac274c17b7cf573b518bf06abd88e7ce/68747470733a2f2f7765627061636b2e6769746875622e696f2f6173736574732f776861742d69732d7765627061636b2e706e67)

### Importante

**Conceptos Clave**
- Webpack intenta gestioanr todo tipo de ficheros y no únicamente el código
- El objetivo final de Webpack es generar un grafico de dependencias
- Para Webpack todo son modulos, y como tal puedes requerirlos `require("css/estilos.css")`
- La filosfía es cargar solo las cosas que se necesitan y cuando se necesitan, evitando una compilación masiva y permitiendo una carga asíncrona
- Webpack es un sistema CLI, si necesitas también un servidor funcionando... necesitas instalar `webpack-dev-server`
- `webpack-dev-server` es básicamente un Express.. lanzado por defecto en el puerto 8080
- Toda la configuración se guarda en el fichero `webpack.config.js`
- Cuando el sistema es muy complejo se dividen las tareas de `Production-and-Development` a `Production-only` o `Development-only`. Para ello se crea un fichero adicional, `webpack.config.prod.js`
- 

**Migraciones y comparativas**
- [Guía de migración de v1.x a v2.x](https://webpack.js.org/guides/migrating/)
- [Comparación (Webpack, require, browserify...)](https://webpack.github.io/docs/comparison.html)


### Instalación

**Instalación de dependencias**
```bash
npm install webpack webpack-dev-server --save-dev
```

**Añadir las tareas al `package.json`**
```json
"scripts": {
  "start": "webpack-dev-server",
  "build": "webpack"
}
```



### [Conceptos clave](https://webpack.js.org/concepts/)

- [Entry](https://webpack.js.org/concepts/#entry)
- [Output](https://webpack.js.org/concepts/#output)
- [Loaders](https://webpack.js.org/concepts/#loaders)
- [Plugins](https://webpack.js.org/concepts/#plugins)
- [Targets](https://webpack.js.org/concepts/targets/)
- [Modules](https://webpack.js.org/concepts/modules/)

### Concepto: [Puntos de entrada (entry)](https://webpack.js.org/concepts/entry-points/)

- Es el punto de entrada de nuestra aplicación
- Existen varias formas de determinar el punto o puntos de entrada

**[Entrada única](https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax)**
- Esta es la más común cuando se trata de single-page application (SPA)
- Podemos pasar un Array de Strings para usar el paradigma de `multi-main entry`
```javascript
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```

**[Entrada única](https://webpack.js.org/concepts/entry-points/#single-entry-shorthand-syntax)**
- Esta es la más común cuando se trata de single-page application (SPA)
```javascript
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```

**[Entrada única (objeto)](https://webpack.js.org/concepts/entry-points/#object-syntax)**
```javascript
const config = {
  entry: {
    main: './src/index.js'
  }
};
```

**[Separanado app y vendors](https://webpack.js.org/concepts/entry-points/#separate-app-and-vendor-entries)**
```javascript
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

**[Aplicación multipágina](https://webpack.js.org/concepts/entry-points/#multi-page-application)**
```javascript
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```

### Concepto: [Salida (output)](https://webpack.js.org/concepts/output/)

> Options affecting the output of the compilation. output options tell webpack how to write the compiled files to disk. Note that, while there can be multiple entry points, only one output configuration is specified.

- Se determina que fichero o ficheros se generarán después del proceso de bundle.
- Para ubicar los ficheros en una carpeta usamos la propiedad `path`
- Para definir el nombre de salida, usaremos `filename` aunque generemos varios ficheros
- También podemos usar la propiedad `publicPath` para generar correctamente las rutas relativas dentro del CSS y HTML, solo es requerido por algunso plugins
- `publicPath` tambén es util para gestionar nuestros fiheros pro CDN en producción y en local durante el desarrollo de forma automática

**Una única salida (SPA)**
```javascript
const path = require('path');

module.exports = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  }
};
```

**Multipagina**
```javascript
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[file].js' // Genera pageOne.js, pageTwo.js, pageThree.js
    /*
    //pageOne.html
    <script src=”dist/pageOne.js”></script>
    //pageTwo.html
    <script src=”dist/pageTwo.js”></script>
    */
  }
};
```

### Concepto: [Cargadores (loaders)](https://webpack.js.org/concepts/loaders/)

> Loaders are transformations that are applied on the source code of a module. They allow you to preprocess files as you require() or “load” them. Thus, loaders are kind of like “tasks” in other build tools, and provide a powerful way to handle front-end build steps. Loaders can transform files from a different language (like TypeScript) to JavaScript, or inline images as data URLs. Loaders even allow you to do things like require() CSS files right in your JavaScript!
- Es la manera que tiene webpack de gestionar nuestros `assets`
- Es necesario utilizar una expresion regular dentro de la propiedad `test` para determinar que ficheros serán acoplados al proceso de Webpack
- Podemos vincular este `loader` con un módulo usando `use -> loader`
- Podemos pasar configuracion adicional desde `use -> query`
- `exclude` nos permite excluir ficheros/carpetas no deseados
- Los cargadores trabajan con los ficheros antes de ser procesados por Webpack

```javascript
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.txt$/, use: 'raw-loader',
        use: [
          {
            exclude: /node_modules/ /*Exclude node_modules folder*/,
            loader: /* Nombre del módulo */,
            query: /* Configuración opcional del objeto */
          }
        ] 
      }
    ]
  }
};

module.exports = config;
```

### Concepto: [Plugins](https://webpack.js.org/concepts/plugins/)

> Plugins are the backbone of webpack. webpack itself is built on the same plugin system that you use in your webpack configuration!
> They also serve the purpose of doing anything else that a loader cannot do.

- nos permiten alterar el resultado final de nuestro `bundle`
- Al contrario que los loaders, aqui estamos trabajando después de generar el `chunk` de información del `bundle` 

```javascript
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');

const config = {
  entry: './path/to/my/entry/file.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.txt$/, use: 'raw-loader'}
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
```

### Concepto: [Modules (modules)](https://webpack.js.org/concepts/modules/)

> In modular programming, developers break programs up into discrete chunks of functionality called a module.
> Each module has a smaller surface area than a full program, making verification, debugging, and testing trivial. Well-written modules provide solid abstractions and encapsulation boundaries, so that each module has a coherent design and a clear purpose within the overall application.
> Node.js has supported modular programming almost since its inception. On the web, however, support for modules has been slow to arrive. Multiple tools exist that support modular JavaScript on the web, with a variety of benefits and limitations. webpack builds on lessons learned from these systems and applies the concept of modules to any file in your project.

Existen muchas formas de gestionar la modularización en Webpack:
- Con el patrón [ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) usando `import`
- Con el patrón [CommonJS](http://www.commonjs.org/specs/modules/1.0/) usando `require()`
- Con el patrón [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md) usando `define` y `require`
- Usando `@import` en ficheros del tipo css/sass/less
- Importnado imágenes desde el css con `url(...)` o desde el html con `<img src="...">`
- Con Webpack 2.x no existen limitaciones. En Webpack 1.x solo se podia usar ES2015


### Concepto: [Objetivos (targets)](https://webpack.js.org/concepts/targets/)
> Because JavaScript can be written for both server and browser, webpack offers multiple deployment targets that you can set in your webpack configuration.

Con los objetivos puedes definir cual es el objetivo de la configuración, permitiendo multiples casos.

**`webpack.config.js` con un objetivo**
```javascript
module.exports = {
  target: 'node'
};
```

**`webpack.config.js` con multiples objetivos**
```javascript
var path = require('path');
var serverConfig = {
  target: 'node',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.node.js'
  }
  //…
};

var clientConfig = {
  target: 'web', // Por defecto es siempre "web", asi que puede ser omitido
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'lib.js'
  }
  //…
};

module.exports = [ serverConfig, clientConfig ];
// Se generará dist/lib.js y dist/lib.node.js
```

### [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

> Hot Module Replacement (HMR) exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways:
> - Retain application state which is lost during a full reload.
> - Save valuable development time by only updating what's changed.
> - Tweak styling faster -- almost comparable to changing styles in the browser's debugger.

Cuando el cósigo cambia... tenemos 3 formas de procesar los cambios con `webpack-dev-server`
- `webpack-dev-server`: Refrescamos nosotros la página manualmente
- `webpack-dev-server --inline`: Se refresca la página entera
- `webpack-dev-server  --inline --hot`: Se refresca exclusivamente el fragmento que cambio, Hot Module Replacement (HMR)


### Webpack con Ejemplos: Lidiando con estilos
Instalando las dependencias [css-loader](https://github.com/webpack-contrib/css-loader) y [style-loader](https://github.com/webpack-contrib/style-loader)
```bash
npm install --save-dev css-loader style-loader
```

Fichero `webpack.config.js`
```javascript
var baseConfig = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      }
    ]
  }
};
```

### Webpack con Ejemplos: Lidiando con estilos y LESS
Instalando las dependencias [less-loader](https://github.com/webpack-contrib/less-loader), [css-loader](https://github.com/webpack-contrib/css-loader) y [style-loader](https://github.com/webpack-contrib/style-loader)
```bash
npm install --save-dev css-loader style-loader less-loader
```

Fichero `webpack.config.js`
```javascript
var baseConfig = {
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./build')
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
};
```

### JS Drama: Grunt, Gulp, NPM Scripts, Webpack...

![evolution....](https://buddy.works/data/blog/_images/webpack-gulp/webpack-gulp-1.png)

**[Google Trends](https://trends.google.es/trends/explore?cat=5&date=today%205-y&q=gulp,grunt,webpack)**
![trends...](https://user-images.githubusercontent.com/5110813/38163801-3ca0073a-34fa-11e8-920b-d736d805f414.png)

**Aclarando puntos**
- Gulp/Grunt/NPM Scripts son `Task Runners`
- webpack NO es un `Task Runner`, es un `module bundler` como `Browserify`
- Webpack es ideal para trabajar con frameworks, especialmente React


**Recursos**
- [React without npm, Babel, or webpack](https://medium.com/@clmyles/react-without-npm-babel-or-webpack-1e9a6049714)
- [Combine Webpack with Gulp 4 by Pascal Klau](https://css-tricks.com/combine-webpack-gulp-4/)
- [Webpack — The Confusing Parts](https://medium.com/@rajaraodv/webpack-the-confusing-parts-58712f8fcad9)
- [Webpack or Browserify & Gulp: Which Is Better?](https://www.toptal.com/front-end/webpack-browserify-gulp-which-is-better)

### ¡Manos a la obra!

- **[:scream: La guía definitiva para aprender webpack desde cero :scream:](https://css-tricks.com/introduction-webpack-entry-output-loaders-plugins/)**
- **[awesome-webpack](https://github.com/webpack-contrib/awesome-webpack)**
- **[Guides](https://webpack.js.org/guides/)**
- **[Documentación](https://webpack.js.org/configuration/)**
