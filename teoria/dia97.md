![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7

# Clase 97

### Heroku

![Heroku_logo](https://upload.wikimedia.org/wikipedia/en/a/a9/Heroku_logo.png)


- [Lenguajes soportados](https://devcenter.heroku.com/categories/language-support)
- [Soporte](https://help.heroku.com/)
- [Precio](https://www.heroku.com/pricing)
- **Documentacion**
  - [Seguridad](https://devcenter.heroku.com/categories/security)
  - [Command Line](https://devcenter.heroku.com/categories/command-line)
  - [Arquitectura](https://devcenter.heroku.com/categories/heroku-architecture)
  - [Deployment](https://devcenter.heroku.com/categories/deployment)
  - [Features](https://devcenter.heroku.com/categories/features)

### Heroku: Uso

**Instalación del Toolbelt**
- En Linux
```
  wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```
- Versiones ejecutables para Windows y OSX
- Es necesario tener instalado previamente Ruby en la máquina


**Login en Heroku**
```
  heroku login
```

**Preparando la Aplicación**
- Ejemplo de Heroku 
```
  git clone https://github.com/heroku/node-js-getting-started.git && cd node-js-getting-started
```

**Crear un proyecto**
- Con un nombre al azar
```
  heroku create
```
- Con nombre propio
```
  heroku create miproyecto
```

**Desplegando nuestro proyecto**
- Nota: Previamente tienes que tener el proyecto gestionado con Git.
```
  git push heroku master
```

**Escalando nuestro proyecto**
- Verificando el número de Dynos
```
  heroku ps
```
- Definiendo el número de Dynos
```
  heroku ps:scale web=1
```

**Abriendo nuestro proyecto**
```
  heroku open
```

**Logs del proyecto**
```
heroku logs --tail
```

**Lanzar el proyecto en local**
```
heroku local web
```

### Heroku: Addons

- [Documentación General](https://devcenter.heroku.com/categories/add-on-documentation)
- [Lista de Addons](https://elements.heroku.com/addons)
  - [Raygun](https://elements.heroku.com/addons/raygun)
    - Informes de error en tiempo real
    - [Documentación para Node](https://devcenter.heroku.com/articles/raygun#using-with-node)
  - [SendGrid](https://elements.heroku.com/addons/sendgrid)
    - Sistema de envio de emails con muchos extras
    - [Documentación para Node](https://devcenter.heroku.com/articles/sendgrid#node-js)
  - [Easy SMS](https://elements.heroku.com/addons/easysms)
    - Envio/Recepción de SMS mundial
    - [Documentación](https://devcenter.heroku.com/articles/easysms)
  - [mLab MongoDB](https://elements.heroku.com/addons/mongolab)
    - MongoDB as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/mongolab)
  - [GrapheneDB](https://elements.heroku.com/addons/graphenedb)
    - Neo4j Graph as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/graphenedb#using-with-node-js-and-node-neo4j)
  - [ClearDB MySQL](https://elements.heroku.com/addons/cleardb)
    - MySQL
    - [Documentación](https://devcenter.heroku.com/articles/cleardb)
  - [Graph Story](https://elements.heroku.com/addons/graphstory)
    - Enterprise Neo4j Graph Databases as a Service
    - [Documentación](https://devcenter.heroku.com/articles/graphstory)
  - [Heroku Scheduler](https://elements.heroku.com/addons/scheduler)
    - Programador de tareas
    - [Documentación](https://devcenter.heroku.com/articles/scheduler#dyno-hour-costs)
  - [Process Scheduler](https://elements.heroku.com/addons/process-scheduler)
    - Programa el escalamiento de tus *process types* y *dynos* por horas
    - [Documentación](https://devcenter.heroku.com/articles/process-scheduler)
  - [DocRaptor](https://elements.heroku.com/addons/docraptor)
    - Conversor de HTML a PDF. Simple y robusto
    - [Documentación](https://devcenter.heroku.com/articles/docraptor)
  - [Tinfoil Security](https://elements.heroku.com/addons/tinfoilsecurity)
    - Escaner de seguridad
    - [Documentación](https://devcenter.heroku.com/articles/tinfoilsecurity)
  - [Auth0](https://elements.heroku.com/addons/auth0)
    - Gestión de credenciales
    - [Documentación del Addon](https://devcenter.heroku.com/articles/auth0)
    - [Documentación para Node](https://auth0.com/docs/quickstart/webapp/nodejs)
  - [OAuth.io](https://elements.heroku.com/addons/oauthio)
    - Gestión de credenciales. Más de 100 provedores 
    - [Documentación](https://devcenter.heroku.com/articles/oauthio) 
  - [CloudAMQP](https://elements.heroku.com/addons/cloudamqp)
    - RabbitMQ as a Service
    - [Documentación para Node](https://devcenter.heroku.com/articles/cloudamqp#use-with-node-js)
  - [Keen IO](https://elements.heroku.com/addons/keen)
    - Analíticas para desarrolladores
    - [Documentación para Node](https://devcenter.heroku.com/articles/keen#using-with-node)
  - [Bonsai Elasticsearch](https://elements.heroku.com/addons/bonsai)
    - Elasticsearch
    - [Documentación](https://devcenter.heroku.com/articles/bonsai)


### Otros paquetes

**Paquetes de interes global**

- node-inspector 
  - Instalación global.
  - Utilizar `debugger;` para lanzar las herrameintas de depuración del navegador.
  ```
  node-debug server.js
  ```
- nodemon
  - [Documentación](https://github.com/remy/nodemon#nodemon)
  - Relanza la aplicación por cada cambio que relaizemos
  ```
  npm install -g nodemon
  ```  
  ```
  nodemon server.js
  ```
- forever
  - Relanza la aplicación cuando deja de funcionar
  - Opciones adiccionales
  - Muy popular
  - [Docuemntación](https://github.com/foreverjs/forever)
  ```
    forever start/stop server.js
  ```
- pm2
  - Pensada para producción
  - Muchas opciones de configuración
  - Monitorización activa de muchos detalles clave de la aplicación
  - [Documentación](http://pm2.keymetrics.io/)
  ```
    pm2 start/stop server.js
  ```

**Otros**
- [formidable](https://www.npmjs.com/package/formidable)
- [fs-extra](https://www.npmjs.com/package/fs-extra)
- [mongose](http://mongoosejs.com/)
  - Driver para trabajr con MongoDB
- [node-mysql](https://github.com/felixge/node-mysql)
  - Facilita el trabajo con MySQL
- [Nodemailer](https://github.com/nodemailer/nodemailer)
  - Gestiona facilemnte el envio de e-mails
- [node-validator](https://github.com/chriso/validator.js)
  - Validación y sanitización de cadenas, especialmente pensado para formularios. 

**[Muchos Más (lista)](https://github.com/sindresorhus/awesome-nodejs/)**


### Otras soluciones de Cloud

- [Google Cloud (GCloud)](https://cloud.google.com/?hl=es)
- [Amazon Web Services (AWS)](https://aws.amazon.com/es/?nc2=h_lg)
- [Azure](https://azure.microsoft.com/)
- [BlueMix](https://www.ibm.com/cloud/)
  - [Productos](https://www.ibm.com/cloud/products/)
  - [Pricing](https://www.ibm.com/cloud/pricing)
  - [Pricing Calculator](https://console.bluemix.net/pricing/?cm_mc_uid=34962018113315235231205&cm_mc_sid_50200000=76818951523523120581&cm_mc_sid_52640000=23655911523523120587)
- [Digital Ocean](https://www.digitalocean.com/)
  - [Pricing](https://www.digitalocean.com/pricing/)
  - [Documentation](https://developers.digitalocean.com/documentation/)
  - [One-click install and deploy Node.js](https://www.digitalocean.com/products/one-click-apps/node-js/)
- [OVH](https://www.ovh.es/)
  - [Lab](https://labs.ovh.com/)
  - [Bounty Factory](https://bountyfactory.io/ovh/ovh)