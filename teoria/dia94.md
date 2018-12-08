![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7

# Clase 94

### Yeoman
![Yeoman Logo](https://raw.githubusercontent.com/yeoman/media/master/optimized/yeoman-masthead.png)
> The Yeoman workflow comprises three types of tools for improving your productivity and satisfaction when building a web app: the scaffolding tool (yo), the build tool (Grunt, Gulp, etc) and the package manager (like Bower and npm).

- [Yeoman Instalation Working Flow](https://www.youtube.com/watch?v=zBt2g9ekiug)
- [Yeoman - Generator-webapp](https://github.com/yeoman/generator-webapp)
- [Yeoman - Santa Barbara JavaScript Meetup](http://www.slideshare.net/tim_doherty/yeoman-santa-barbara-bjava-scriptmeetup)
- [Automating Your Front-end Workflow with Yeoman 1.0 (Addy Osmani)](https://www.youtube.com/watch?v=1OAfGm_cI6Y)


### Yeoman: Instalación
Instalamos Yeoman global (incluye Grunt, Bower...)
```
  npm install yo -g
```

Instalamos globalmente el generador de proyectos web
```
  npm install --global generator-gulp-webapp
```

En la carpeta deseada lanzamos el generador para que se cree un pryecto completo
```
  yo gulp-webapp
```

Acabada la instalación con exito
```
  gulp serve
```

Preparando todo para producción
```
  gulp
```

### Yeoman: Gestión de errores

Verificamos que es lo que no funciona.
```
  yo doctor
```

*Resultado esperado:*
```
Yeoman Doctor
Running sanity checks on your system

✔ Global configuration file is valid
✔ Node.js version
✔ No .bowerrc file in home directory
✔ No .yo-rc.json file in home directory
✔ npm version
✔ NODE_PATH matches the npm root
```


### Yeoman: [Generadores populares](http://yeoman.io/generators/)

*Nota: Los :small_blue_diamond: son generadores creados por el equipo de Yeoman y se consideran `generadores oficiales`* 

**:top: downloads**
- [ hyperledger-composer](https://github.com/hyperledger/composer#readme): *Generates projects from Hyperledger Composer business network definitions*
- [ jhipster](http://www.jhipster.tech/): *Spring Boot + Angular in one handy generator*
- [ kittn](https://github.com/kittn/generator-kittn#readme): *Kittn Scaffolding and Frontend Toolchain*
- [ garlic-webapp](https://github.com/molnarzs/generator-garlic-webapp#readme): *Generator for GarlicTech webapps*
- [ loopback](https://github.com/strongloop/generator-loopback#readme): *LoopBack*
- [ baukasten](https://github.com/davidhellmann/generator-baukasten#readme): *A little 'Baukasten' for your next project to gettings shit done. It's focused on Craft CMS but there is also a bit WordPress stuff on board*
- [ talend](https://github.com/Talend/ui/tree/master/packages/generator#readme): *Talend's JavaScript generator*
- [ swiftserver](https://github.com/IBM-Swift/generator-swiftserver#readme): *Generator for Kitura REST webservice servers*
- [ ibm-service-enablement](https://github.com/ibm-developer/generator-ibm-service-enablement#readme): *This generator adds Service enablement toapps*
- [ code](http://code.visualstudio.com/): *Visual Studio Code Extensions*
- [ dhboilerplate](https://davidhellmann.com/): *Boilerplate made by David Hellmann #gulp #npm #craftcms #wordpress #vue #twig*
- [ phaser-h5](https://github.com/Sanchez3/generator-phaser-h5): *Generate h5 games with phaser.js or not, based on Gulp!*
- [:small_blue_diamond: angular](https://github.com/yeoman/generator-angular#readme): *AngularJS*
- [ primer-module](https://github.com/primer/primer#readme): *Use this to create a new Primer modules!*
- [ feathers](https://github.com/feathersjs/generator-feathers): *A Feathersapp*
- [ angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack): *Creating MEAN stackapps, using MongoDB, Express, AngularJS, and Node*
- [ hubot](https://github.com/github/generator-hubot#readme): *Hubot*
- [ dmninteractives](https://github.com/DallasMorningNews/generator-dmninteractives#readme): *Interactive pages at The Dallas Morning News*
- [ fabric-composer](https://github.com/hyperledger/composer#readme): *Generates skeleton projects from Hyperledger Composer business network definitions*
- [ weex-plugin](https://github.com/weexteam/weex-plugin-template#readme): *>*
- [ donejs](http://donejs.com/): *Aur DoneJSapp*
- [ feathers-plugin](https://github.com/feathersjs/generator-feathers-plugin): *A generator for Feathersjs Plugins*
- [:small_blue_diamond: mocha](https://github.com/yeoman/generator-mocha#readme): *Mocha*
- [:small_blue_diamond: karma](https://github.com/yeoman/generator-karma#readme): *Karma*
- [ nitro](https://github.com/namics/generator-nitro#readme): *The nitro frontend framework*
- [ toolbox](http://frontend.github.io/toolbox/): *Generator*
- [ jhipster-primeng](https://github.com/sudheerj/generator-jhipster-primeng): *Generate PrimeNG Components*
- [ daggerok-fatjar](https://github.com/daggerok/generator-daggerok-fatjar): *Generate fat-jar java / java-ee / scala projects*
- [ license](https://github.com/jozefizso/generator-license): *Licensebased projects*
- [ ibm-usecase-enablement](https://github.com/ibm-developer/generator-ibm-usecase-enablement#readme): *Generator to add usecase enablement*
- [:small_blue_diamond: webapp](https://github.com/yeoman/generator-webapp#readme): *Scaffold out a front-end web app*
- [:small_blue_diamond: jasmine](https://github.com/yeoman/generator-jasmine#readme): *Jasmine*
- [ office](https://github.com/officedev/generator-office): *Creating Microsoft Office projects using any text editor*
- [ npm-wp-s-theme](https://github.com/mnyorba/generator-npm-wp-s-theme): *A WordPress starter theme (using Underscores) with npm and other good stuff*
- [ terminus-ui](https://github.com/GetTerminus/generator-terminus-ui): *A generator for adding new components to the Terminus UI library*
- [ git](https://documentup.com/kikobeats/generator-git): *Create the configurable scaffolding to start with a git-like project*
- [ ibm-core-node-express](https://github.com/ibm-developer/generator-ibm-core-node-express#readme): *Core node expressapp*
- [ travis](https://github.com/iamstarkov/generator-travis#readme): *Get and keep `.travis.yml` up-to-date effortlessly*
- [ keystone](https://github.com/keystonejs/generator-keystone): *A KeystoneJS Project*
- [ codenut](https://github.com/uznam8x/generator-codenut#readme): *Yoman generator codenut for website*
- [ stereobase](https://github.com/stereosuper/generator-stereobase#readme): *Generate a simple template based on 7-1 architecture, with the opportunity to use Twig and GSAP*
- [:small_blue_diamond: generator](https://github.com/yeoman/generator-generator#readme): *Generate generator*
- [ hughes](http://yeoman.io/generators/coloradohughes.com): *Web development generator for Kevin Hughes*
- [ express](https://github.com/petecoop/generator-express): *A nodejs express*
- [ ng-fullstack](https://github.com/ericmdantas/generator-ng-fullstack#readme): *Client, server or fullstack - it's up to you. ng-fullstack gives you the best of the latest: Node, Go, HTTP/2, Angular 1, Angular 2, Vue, Aurelia, Express, Koa, Echo, Gin, MongoDB, Gulp, Babel, Typescript and much more*
- [ openapi-repo](https://github.com/Rebilly/generator-openapi-repo#readme): *OpenAPI(fka Swagger) repo to help you share spec for your API*
- [ cicero-template](https://github.com/accordproject/cicero#readme): *Code generator for a Cicero Template*
- [ cozen-angular](https://github.com/C0ZEN/generator-cozen-angular): *Use this help you create AngularJSapps based to works properly with the Altran Angular Library*
- [ spring-microservice](https://github.com/NationalLibraryOfNorway/generator-spring-microservice): *Microservice with Maven + Spring + Netflix + Docker*
- [ tcg](https://github.com/jeffreysbrother/generator-tcg#readme): *Rename stuff!*
- [:small_blue_diamond: node](https://github.com/yeoman/generator-node): *Create a Node.js module*
- [ rn-toolbox](https://github.com/bamlab/generator-rn-toolbox#readme): *React-Native generators to kickstart your project*
- [ sublime](https://github.com/mcfly-io/generator-sublime#readme): *Scaffolfding the standard configuration root files like .gitignore, .jshintrc, .jscsrc etc..*
- [ aspnet](https://github.com/omnisharp/generator-aspnet#readme): *ASP.NET Core apps*
- [ typescript-microservice](https://github.com/lifegadget/generator-typescript-microservice#readme): *A NodeJS generator for Node/TypeScript which leverages 'serverless' to be deployable to all the major cloud platforms*
- [ liferay-theme](https://github.com/liferay/generator-liferay-theme#readme): *Creating Liferay themes*
- [ angular2-library](https://github.com/jvandemo/generator-angular2-library): *Generator to create an Angular 2 library*
- [ webappstarter](https://github.com/unbug/generator-webappstarter#readme): *Quick start a web app for mobile.Automatically adjusts according to a device’s screen size without any extra work*
- [ liveblog-theme](https://github.com/liveblog/generator-liveblog-theme#readme): *Generator*
- [ bannertime](https://github.com/bannertime/generator-bannertime): *Creating HTML5 advertising campaigns*
- [ jest](https://github.com/SBoudrias/generator-jest#readme): *Add jest support to any projects*
- [ aem-component](https://github.com/Blainegunn/generator-aem-component#readme): *A basic conponent generator for Adobe Expirecne Manager (AEM)*
- [ fountain-react](http://fountainjs.io/): *Fountain generator to scaffold a webapp with React written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [ sppp](https://github.com/koltyakov/generator-sppp): *SharePoint Pull-n-Push - client-side development*
- [ dizmo](https://github.com/dizmo/yeoman-generator-dizmo): *DizmoGen: a generator for dizmo projects*
- [ ng-poly](https://github.com/dustinspecker/generator-ng-poly#readme): *Modular AngularJS apps with Gulp and optional Polymer support*
- [ giraffe](https://github.com/tsukasa-web/generator-giraffe): *A generator for html5 website*
- [ nodeserver](https://github.com/ibm-developer/generator-nodeserver#readme): *Generates a nodeserver project*
- [ phaser-plus](https://github.com/rblopes/generator-phaser-plus/tree/master/packages/generator-phaser-plus#readme): *Create Phaser Web games with ease*
- [ aspnetcore-spa](https://github.com/aspnet/JavaScriptServices#readme): *DEPRECATED. Do not use. Use 'dotnet new' to create ASP.NET Core Single-Pageappprojects instead*
- [ canner-react](https://github.com/canner/generator-canner-react#readme): *A generator for react projects*
- [ react-webpack](https://github.com/react-webpack-generators/generator-react-webpack#readme): *Using React with Webpack via Babel*
- [ react-skeleton](https://github.com/fiWhy/Yo-React-Skeleton#readme): *React 16 skeleton*
- [ skinny](https://github.com/skinny-framework/skinny-framework): *A generator for Skinny framework which is a 'Scala on Rails'*
- [ screwdriver](https://github.com/screwdriver-cd/generator-screwdriver): *Make a new npm module for use in the Screwdriver project*
- [ fountain-angular1](http://fountainjs.io/): *Fountain generator to scaffold a webapp with Angular 1 written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [ yeogurt](https://github.com/larsonjj/generator-yeogurt): *A generator for creating static sites. Helps you harness the power of your favorite tools: Jade or Nunjucks, Gulp, ES6/2015, and much more!*
- [ bpnr](http://bpnr.co.kr/): *BPNR Dev standard generator*
- [ electrode](http://www.electrode.io/): *Generate Electrode React App*
- [ openhab](https://github.com/kubawolanin/generator-openhab): *Generates simple openHAB items and sitemaps for your home*
- [ ng-component](https://github.com/daftmonk/generator-ng-component#readme): *Generator*
- [ jhipster-nav-element](https://github.com/vivekmore/generator-jhipster-nav-element): *A generator to scaffold a new page (and the corresponding navigation menu) in a JHipster project*
- [ python-lib](https://gitlab.com/hyper-expanse/generator-python-lib#readme): *Generator for bootstrapping a Python library*
- [ jhipster-docker](https://github.com/pascalgrimaud/generator-jhipster-docker): *Additional Docker support: Docker Hub, Local SMTP Server, NGinx*
- [ fountain-webapp](http://fountainjs.io/): *Fountain generator to scaffold a webapp with React or Angular written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [ folklore](https://github.com/Folkloreatelier/folklore-js/tree/master/packages/generator-folklore#readme): *Projects at Folklore*
- [ fountain-angular2](http://fountainjs.io/): *Fountain generator to scaffold a webapp with Angular 2 written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [ jhipster-entity-audit](https://github.com/hipster-labs/generator-jhipster-entity-audit): *JHipster module to enable entity audit and audit log page*
- [ electric](http://electricjs.com/): *Creating documentation sites using electric.js*
- [ fountain-vue](https://github.com/fountainjs/generator-fountain-vue#readme): *Fountain generator to scaffold a webapp with Vue.js written in ES6 (Babel) through Webpack including tools Gulp 4, ESLint, Browsersync and Karma*
- [ tsoa-bootstrap](https://github.com/jeremyoverman/generator-tsoa-bootstrap#readme): *TSOA, Sequelize, and Jasmine scaffolding including model, test, controller, and migration creation*
- [ jhipster-elasticsearch-reindexer](https://github.com/geraldhumphries/generator-jhipster-elasticsearch-reindexer): *Generates a service that reindexes all database rows for each of your entities*
- [ craftplugin](https://github.com/nystudio107/generator-craftplugin#readme): *Generator-craftplugin is Craft CMS plugins*
- [ jhipster-ci](https://github.com/pascalgrimaud/generator-jhipster-ci): *JHipster module, Continuous Integration support in your JHipsterapp*
- [ totem](https://github.com/toolbarthomas/generator-totem#readme): *Creating Totem projects & modules*
- [ ehi-compgen](https://www.eventhi.io/): *Used internally by the EventHi team to generate new components boilerplate*
- [ meanjs](https://github.com/meanjs/generator-meanjs#readme): *MEAN.JS Official Generator*
- [ ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket): *Extensible Angular 5+ enterprise-grade project generator based on angular-cli with best practices from the community. Includes PWA and Cordova support, coding guides and more!*
- [ clam](https://github.com/jayli): *A Clam*
- [ bitch](https://github.com/darlanmendonca/generator-bitch): *A simple generator (for Yeoman) to scaffolding webapps, just frontend stack*
- [ sanji-ui](https://github.com/Sanji-IO/generator-sanji-ui#readme): *Sanji UI generator*
- [ yx](https://github.com/huyaxiong/generator-yx#readme): *Full stack javascript project scaffold*
- [ node-oss](https://github.com/luftywiranda13/generator-node-oss#readme): *Create a Node.js project with ease*
- [ jhipster-swagger2markup](https://github.com/atomfrede/generator-jhipster-swagger2markup): *JHipster module to create nice looking static api docs with swagger2markup*
- [ static-website](https://github.com/claudetech/generator-static-website#readme): *Generator to create static websites*
- [ gulp-angular](https://github.com/swiip/generator-gulp-angular#readme): *AngularJS with Gulp*
- [ angular-page](https://github.com/thepipecat/yo-angular-page#readme): *Yeoman.io generator fo Angular.io page with routing*
- [ jhipster-bootstrap-material-design](https://github.com/moifort/generator-jhipster-bootstrap-material-design): *Add Material design to your JHipsterapp*
- [ angular-famous-ionic](https://github.com/thaiat/generator-angular-famous-ionic#readme): *Scaffolding an app using angularjs browserify and famous*
- [ yi-frames](https://github.com/mapkab/generator-yiframes#readme): *The Frames of Yi-Front-End-Development-Team*
- [ qmui](http://qmuiteam.com/web/): *QMUI Web*
- [ adaptivejs](https://github.com/mobify): *A*
- [ angular-material](https://github.com/iansawyerva/generator-angular-material): *Google's Angular Material*
- [ cat](https://github.com/HsuTing/generator-cat): *Generator cat*
- [ tymlez-plugin](https://www.tymlez.com/): *Tymlez NextGen RTappscaffolding*
- [ prototype](https://github.com/Prototype-Group/generator-prototype#readme): *Scaffold modern frontend web apps with Assemble, Grunt, Sass and Bower. Use modern frameworks like Bourbon, Bootstrap, Foundation and structure the web app with Backbone and RequireJS*
- [ vintage-frontend](https://github.com/Vintage-web-production/generator-vintage-frontend): *Modern front-end workflow generator*
- [ abas-dashboard-widget](https://abas-erp.com/): *This creates basic file structures to develop and test abas dashboard widgets*
- [ rc](https://github.com/react-component/generator-rc#readme): *React component*
- [ hoop-django](http://www.hoopcommunication.it/): *A generator to start a django project*
- [ bunny](https://github.com/luftywiranda13/generator-bunny#readme): *Jumpstart node module, like a bunny*
- [ rest](https://github.com/diegohaz/generator-rest): *RESTful API generator using NodeJS, Express and MongoDB. Watch https://youtu.be/6x-ijyG-ack*
- [ teka](http://www.mmda.com.br/): *Create a brand new teka theme*
- [ ng2-webpack](https://github.com/cmelion/generator-ng2-webpack): *An opinionated tool for scaffolding an app using angular2 and webpack*
- [ cg-angular](https://github.com/cgross/generator-cg-angular): *Enterprise Angular projects*
- [ git-init](https://github.com/iamstarkov/generator-git-init#readme): *Simply `git init` and optional `init` commit*
- [ jhipster-pages](https://github.com/Magillem/generator-jhipster-pages): *Create pages : client only (static), or client and server side. Load data from server, Save data to server, form, table..*
- [ xf](https://github.com/larchanka/generator-xf): *XFramework*
- [ iojs](https://github.com/joeybaker/generator-iojs): *A basic node module template, that includes handy git hooks, a release script, and auto-changelog generation*
- [ simple-static-blog](https://github.com/matthewbdaly/generator-simple-static-blog#readme): *Generating a static blog*
- [ express-no-stress-typescript](https://github.com/cdimascio/generator-express-no-stress-typescript#readme): *Create awesome APIs with Typescript, ExpressJS and Swagger*
- [ jhipster-ionic](https://github.com/oktadeveloper/generator-jhipster-ionic): *A JHipster Module that generates an Ionic Client*
- [ jhipster-postgresuuid-converter](https://github.com/amitjindal/generator-jhipster-postgresuuid-converter): *Postgresql Long to UUID converter*
- [ moda](https://github.com/johannesjo/generator-modular-angular#readme): *A truly modular AngularJS all device apps*
- [ bfee-blankrepo](https://github.com/brennanfee/generator-bfee-blankrepo): *Yoeman generator to create a blank starter repo*
- [ speedseed](https://github.com/ifedu/generator-speedseed): *Oriented to components, allow create/choice template, multiple configuration with easy maintenance*
- [ typings](https://github.com/typings/generator-typings): *Create typings repository for `typings` (https://github.com/typings/typings)*
- [ jhipster-spring-social-connectors](https://github.com/moifort/generator-jhipster-spring-social-connectors): *Add Spring social connector to your JHipsterapp*
- [ mytime-ng2component](https://github.com/gion/generator-ng2component#readme): *An angular 2 component/service generator for all platforms based on new namespace '@angular/core' powered by yeoman. Forked from https://github.com/SteveZheng-BSFT/generator-ng2component*
- [ nuxeo](https://www.nuxeo.com/): *Nuxeo Generator based on Yeoman*
- [ confit](https://github.com/odecee/generator-confit#readme): *Creating the development process, tools and a sample project for current-generation webapps*
- [ future-static](https://github.com/future-team/generator-future-static#readme): *脚手架生成工具*
- [ mean-seed](https://github.com/notorii/generator-mean-seed): *MEAN-seed - AngularJS and node.js responsive/cross-platform/mobile ready app/website*
- [ material-app](https://github.com/michaelkrone/generator-material-app#readme): *Generates a material webappwith AngularJS, Express and Mongoose*
- [ ideil-atom](https://github.com/ideil/generator-ideil-atom#readme): *Ideil Atom*
- [ swaggerize](https://github.com/krakenjs/generator-swaggerize#readme): *OpenAPI(swagger)app*
- [ tabris-js](http://tabrisjs.com/): *Tabris.js*
- [ co-microservice](https://github.com/comparaonline/generator-co-microservice): *This bootstrap a microservice to run on the ComparaOnline infrastructure*
- [ panneau](https://github.com/Folkloreatelier/panneau-js): *Panneau*
- [ cappen-site](https://github.com/cappen): *Generator*
- [ jhipster-swagger-cli](https://github.com/cbornet/generator-jhipster-swagger-cli): *JHipster module to generate swagger client code from a swagger definition*
- [ kickoff](https://github.com/trykickoff/generator-kickoff): *The Kickoff front-end framework. Find out more at http://trykickoff.com*
- [ veams](http://veams.org/): *Scaffold modern frontend web apps or web pages with a static site generator, Grunt and/or Gulp, Sass and Bower. Use modern frameworks like Bourbon, Bootstrap or Foundation and structure your JavaScript with ES Harmony support*
- [ wejs](https://github.com/wejs/generator-wejs#readme): *We.js generate plugins, themes and projects*
- [ ng-panes](https://github.com/joelchu/generator-ng-panes#readme): *AngularJS 1.X, and support 8 UI frameworks. Part of the panes.js framework tool set. 前端开发神器!*
- [ famous](https://github.com/TheAlphaNerd): *Create new Famo.us projects*
- [ hfe](https://github.com/PaulGuo): *HFE*
- [ bcflow-library](https://github.com/the-bcflow/bcflow-template-library#readme): *A generator for build library*
- [ sp](https://github.com/snphq/generator-sp): *A*
- [ packing](https://github.com/packingjs/generator-packing#readme): *[packing](https://github.com/zhongzhi107/packing)*
- [ coffee-react](https://github.com/jhessin/generator-coffee-react#readme): *A simple project using create-react-app, coffeescript, and a custom version of react-hyperscript-helpers*
- [:small_blue_diamond: chrome-extension](https://github.com/yeoman/generator-chrome-extension#readme): *Scaffold out a Chrome extension*
- [ wordpress](https://github.com/wesleytodd/YeoPress): *WordPress*
- [ jhipster-entity-audit-and-delete](https://github.com/hipster-labs/generator-jhipster-entity-audit): *JHipster module to enable entity audit, add audit log page and allow to change default delete behavior*
- [ meshblu-connector](https://github.com/octoblu/generator-meshblu-connector): *A*
- [ angular2-application-scaffolder](https://github.com/ruffiem/generator-angular2-application-scaffolder): *Angular2appScaffolder is designed to be an applicationproviding a full stack working environment for Angular2 (beta 17+) developments*
- [ yohoho](https://github.com/jamrizzi/generator-yohoho): *Agenerators*
- [ jhipster-db-helper](https://github.com/bastienmichaux/generator-jhipster-db-helper): *A JHipster module for already existing databases*
- [ kevoree](https://github.com/kevoree/generator-kevoree): *A Kevoree project*
- [ scaffold](https://github.com/marcosmoura/generator-scaffold#readme): *Generator to automate the most common tasks in day-to-day of a Front End project*
- [ angular-eggs](https://github.com/albatrosary/generator-angular-eggs#readme): *Angular 1.5, Angular Component Router, Bootstrap v4(alpha) and TingoDB(like MongoDB) with an Express server*
- [ react-firebase](http://github.com/prescottprue/generator-react-firebase): *React and Firebase (with option for Redux) starter project generator*
- [ xiaoping-vue](https://github.com/excaliburhan/generator-xiaoping-vue#readme): *A generator for vue project*
- [ thundr-gae-react](https://github.com/3wks/generator-thundr-gae-react): *A React app that runs atop Thundr on Google App Engine*
- [ nightbird](https://github.com/AcklenAvenue/nightbird#readme): *Angular Web App*
- [ frontend](https://github.com/nDmitry/generator-frontend): *Scaffolds out a boilerplate for front-end development*
- [ ssm](https://github.com/ssmWebExpert/generator-ssm#readme): *Pug sass less generator with all we need modules*
- [ huddle](https://github.com/techmuch/generator-huddle#readme): *Generator*
- [ bespoke](https://github.com/bespokejs/generator-bespoke): *Create Bespoke.js presentations using Yeoman*
- [ devine-project](https://github.com/devinehowest/generator-devine-project#readme): *The one and only devine.be project generator*
- [ redux-stack](https://github.com/zakangelle/generator-redux-stack#readme): *A react/redux generator with all the build tooling goodies*
- [ polymer-element](https://github.com/seaneking/generator-polymer-element#readme): *Quickly scaffold lightweight Polymer 2 elements with Yeoman*
- [ tipicss](https://github.com/toolbarthomas/generator-tipicss): *Tipicss*
- [ bone](https://github.com/jiyutech/generator-bone.git): *The generator for koa by jiyu*
- [ dgp-api-aspnetcore](https://github.com/digipolisantwerp/generator-dgp-api-aspnetcore_yeoman): *Generator for an ASP.NET Core API project*
- [ symfonangular](https://github.com/zguillez): *PHP Symfony 3 framework with Javascript AngularJS framework integration for full stack development*
- [ politico-interactives](https://github.com/The-Politico/generator-politico-interactives#readme): *Interactive projects at POLITICO*
- [ mis](https://github.com/tbfe/generator-mis#readme): *百度贴吧MIS生成器*
- [ graphql](https://github.com/lucasbento/create-graphql#readme): *Create production-ready GraphQL servers*


**:top: stars**
- [ react-fullstack](https://github.com/kriasoft/react-starter-kit#readme): *React.js projects based on React Starter Kit (ES6+, Babel, React.js, Express, Webpack, BrowserSync)*
- [ jhipster](http://www.jhipster.tech/): *Spring Boot + Angular in one handy generator*
- [ react-native-ignite](https://github.com/infinitered/ignite#readme): *Create new react native files that fit the IR workflow*
- [ primer-module](https://github.com/primer/primer#readme): *Use this to create a new Primer modules!*
- [ angular-fullstack](https://github.com/angular-fullstack/generator-angular-fullstack): *Creating MEAN stackapps, using MongoDB, Express, AngularJS, and Node*
- [:small_blue_diamond: angular](https://github.com/yeoman/generator-angular#readme): *AngularJS*
- [ gulp-angular](https://github.com/swiip/generator-gulp-angular#readme): *AngularJS with Gulp*
- [ react-server](http://github.com/redfin/react-server): *A react-server generator*
- [:small_blue_diamond: webapp](https://github.com/yeoman/generator-webapp#readme): *Scaffold out a front-end web app*
- [ react-static](https://github.com/kriasoft/react-static-boilerplate#readme): *Project template for authoring stand-alone webapps (aka SPA) optmized for CDN hosting (in Fireabase). It's built upon best of breed technologies including React (ReactJS), Redux, Babel, Webpack, CSS Modules, PostCSS, Browsersync, HMR, React Hot L*
- [ react-webpack](https://github.com/react-webpack-generators/generator-react-webpack#readme): *Using React with Webpack via Babel*
- [:small_blue_diamond: chrome-extension](https://github.com/yeoman/generator-chrome-extension#readme): *Scaffold out a Chrome extension*
- [ ionic](https://github.com/diegonetto/generator-ionic): *A generator for the Ionic Framework*
- [ fluxible](https://github.com/yahoo/fluxible#readme): *Fluxible*
- [ arc](https://github.com/diegohaz/arc): *React app generator with Webpack, React Router, Jest, Redux, Server Side Rendering and more*
- [ nodejs-api](https://github.com/kriasoft/nodejs-api-starter#readme): *Node.js API Starter Kit built with Docker, Node.js, JavaScript (ES6, ES2015+ via Babel), PostgreSQL and GraphQL*
- [ graphql-server](https://github.com/kriasoft/graphql-starter-kit#readme): *GraphQL Starter Kit built with Node.js, JavaScript (ES2015+ via Babel) and PostgreSQL*
- [ electrode](http://www.electrode.io/): *Generate Electrode React App*
- [ wordpress](https://github.com/wesleytodd/YeoPress): *WordPress*
- [ starhackit](https://github.com/FredericHeem/starhackit): *Starhackit - Fullstack starterkit based on react and node*
- [ fountain-webapp](http://fountainjs.io/): *Fountain generator to scaffold a webapp with React or Angular written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [:small_blue_diamond: polymer](https://github.com/yeoman/generator-polymer#readme): *Scaffold out a Polymer project*
- [:small_blue_diamond: mobile](https://github.com/yeoman/generator-mobile): *Mobile based on Web Starter Kit*
- [ hyperledger-composer](https://github.com/hyperledger/composer#readme): *Generates projects from Hyperledger Composer business network definitions*
- [ relay-fullstack](http://lvarayut.github.io/relay-fullstack): *Relay Starter Kit integrated with Relay, GraphQL, Express, ES6/ES7, JSX, Webpack, Babel, Material Design Lite, and PostCSS*
- [ aspnetcore](https://github.com/kriasoft/aspnet-starter-kit#readme): *Stand-alone webapp(SPA) boilerplate built with ASP.NET Core, EF Core, Identity, C#, JavaScript, ES6/ES2015, Babel, Webpack, HMR, Browsersync, PostCSS, CSS Modules and more*
- [ aspnet](https://github.com/omnisharp/generator-aspnet#readme): *ASP.NET Core apps*
- [:small_blue_diamond: generator](https://github.com/yeoman/generator-generator#readme): *Generate generator*
- [ hottowel](https://github.com/johnpapa/generator-hottowel#readme): *HotTowel Angular*
- [ express](https://github.com/petecoop/generator-express): *A nodejs express*
- [ angular2-library](https://github.com/jvandemo/generator-angular2-library): *Generator to create an Angular 2 library*
- [ m-ionic](https://github.com/mwaylabs/generator-m-ionic#readme): *Advanced workflows for building rock-solid Ionic apps: develop, prototype, test, build and deliver high quality apps with Yeoman, Gulp, Bower, Angular, Cordova and of course Ionic. All in one sexy generator*
- [ ng-cli-lib](https://github.com/jvandemo/generator-angular2-library): *Generator to create an Angular 2 library*
- [ m](https://github.com/mwaylabs/generator-m#readme): *Generator-m*
- [ ng-fullstack](https://github.com/ericmdantas/generator-ng-fullstack#readme): *Client, server or fullstack - it's up to you. ng-fullstack gives you the best of the latest: Node, Go, HTTP/2, Angular 1, Angular 2, Vue, Aurelia, Express, Koa, Echo, Gin, MongoDB, Gulp, Babel, Typescript and much more*
- [:small_blue_diamond: backbone](https://github.com/yeoman/generator-backbone#readme): *Scaffold out a Backbone.js project*
- [ jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb): *Supercharge Jekyll development with Yeoman. Yo, Jekyllrb!*
- [ cg-angular](https://github.com/cgross/generator-cg-angular): *Enterprise Angular projects*
- [ rest](https://github.com/diegohaz/generator-rest): *RESTful API generator using NodeJS, Express and MongoDB. Watch https://youtu.be/6x-ijyG-ack*
- [ react-cdk](https://github.com/kadirahq/react-cdk#readme): *React Component Development Kit*
- [ electron](https://github.com/sindresorhus/generator-electron#readme): *Scaffold out an Electron app boilerplate*
- [ rn-toolbox](https://github.com/bamlab/generator-rn-toolbox#readme): *React-Native generators to kickstart your project*
- [ react-webpack-redux](https://github.com/stylesuxx/generator-react-webpack-redux): *ReactJS and Flux (Redux) via Webpack*
- [ nm](https://github.com/sindresorhus/generator-nm#readme): *Scaffold out a node module*
- [ yeogurt](https://github.com/larsonjj/generator-yeogurt): *A generator for creating static sites. Helps you harness the power of your favorite tools: Jade or Nunjucks, Gulp, ES6/2015, and much more!*
- [ javascript](https://www.kriasoft.com/babel-starter-kit): *Generates a JavaScript library boilerplate for Node.js and the browser with ES6 / ES2015, ESLint, Babel, Mocha, Chai, Sinon, Istanbul, Coveralls..*
- [ meanjs](https://github.com/meanjs/generator-meanjs#readme): *MEAN.JS Official Generator*
- [:small_blue_diamond: node](https://github.com/yeoman/generator-node): *Create a Node.js module*
- [:small_blue_diamond: canner-node](https://github.com/yeoman/generator-node): *Create a Node.js module*
- [:small_blue_diamond: my-node](https://github.com/yeoman/generator-node): *Create a Node.js module*
- [:small_blue_diamond: ember](https://github.com/yeoman/generator-ember): *Ember*
- [ react-redux-universal](http://github.com/bertho-zero/react-redux-universal-hot-example): *A full-stack starter kit with react, redux and feathers*
- [ react-gulp-browserify](https://github.com/randylien/generator-react-gulp-browserify): *Facebook's React framework. It includes gulp, browserify, livereload and famous official Twitter bootstrap Sass version*
- [ reveal](https://github.com/slara/generator-reveal): *A Reveal.js*
- [ ngx-rocket](https://github.com/ngx-rocket/generator-ngx-rocket): *Extensible Angular 5+ enterprise-grade project generator based on angular-cli with best practices from the community. Includes PWA and Cordova support, coding guides and more!*
- [ ngx-app](https://github.com/angular-starter-kit/generator-ngx-app#readme): *Angular 4+ enterprise-grade project generator based on angular-cli with best practices from the community, a scalable starter template and a good learning base*
- [ ngx-core](https://github.com/angular-starter-kit/generator-ngx-app#readme): *Angular 2+ industrial project generator based on angular-cli with best practices from the community, a scalable starter template and a good learning base*
- [ rise](https://github.com/bucaran/generator-rise#readme): *Node module template for authoring with ES6+, Babel, Tape and npm scripts*
- [ style-prototype](https://github.com/north/generator-style-prototype): *Style prototypes*
- [ babel-boilerplate](https://github.com/babel/generator-babel-boilerplate): *Generate a boilerplate for a library written in ES2015 for Node and the browser*
- [ graphql](https://github.com/lucasbento/create-graphql#readme): *Create production-ready GraphQL servers*
- [ angular-famous-ionic](https://github.com/thaiat/generator-angular-famous-ionic#readme): *Scaffolding an app using angularjs browserify and famous*
- [ mcfly](https://github.com/mcfly-io/generator-mcfly#readme): *Scaffolding an app using angularjs browserify*
- [ marionette](https://github.com/mrichard/generator-marionette): *Express, Marionette and Backbone with AMD*
- [ jekyllized](https://github.com/sondr3/generator-jekyllized#readme): *Jekyll to rapidly build sites using Gulp*
- [ flux](https://github.com/banderson/generator-flux-react): *App based on Facebook's Flux/React architecture*
- [ sails-rest-api](https://github.com/ghaiklor/generator-sails-rest-api): *Provides already configured and optimized Sails REST API with bundle of predefined features*
- [:small_blue_diamond: chromeapp](https://github.com/yeoman/generator-chromeapp): *Scaffold out a Chrome app*
- [ keystone](https://github.com/keystonejs/generator-keystone): *A KeystoneJS Project*
- [ racket](https://github.com/mohebifar/racket#readme): *Scaffold a universal reactapp*
- [ node-webkit](https://github.com/Dica-Developer/generator-node-webkit): *A generator for node-webkit*
- [ webappstarter](https://github.com/unbug/generator-webappstarter#readme): *Quick start a web app for mobile.Automatically adjusts according to a device’s screen size without any extra work*
- [ docker](https://github.com/Microsoft/generator-docker#readme): *Docker generator*
- [ aws-lambda-dotnet](https://github.com/aws/aws-lambda-dotnet/tree/master/Blueprints): *A collection of generators for writing .NET Core AWS Lambda functions and AWS Serverlessapps*
- [ angular2](https://github.com/swirlycheetah/generator-angular2): *Angular2 Generator*
- [ react-aspnet-boilerplate](https://github.com/pauldotknopf/react-aspnet-boilerplate): *A boiler plate for getting started with ASP.NET projects using react/redux/universal-rendering*
- [ yo-wordpress](https://github.com/romainberger/yeoman-wordpress): *Wordpress projects and plugins*
- [ phaser](https://github.com/julien/generator-phaser): *Generate HTML5 games with phaser.js*
- [ redux](https://github.com/banderson/generator-redux#readme): *CLI for Redux: next-gen functional Flux/React with devtools*
- [ ng-poly](https://github.com/dustinspecker/generator-ng-poly#readme): *Modular AngularJS apps with Gulp and optional Polymer support*
- [ h5bp](https://github.com/h5bp/generator-h5bp#readme): *HTML5 Boilerplate generator*
- [ express-no-stress](https://github.com/cdimascio/generator-express-no-stress#readme): *Create awesome APIs with ExpressJS and Swagger*
- [ zf5](https://github.com/juliancwirko/generator-zf5): *Zurb Foundation 5*
- [ react-component](https://github.com/JedWatson/generator-react-component): *ReactJS Component projects*
- [ angular-flask](https://github.com/rayokota/generator-angular-flask): *AngularJS + Flask*
- [ angularfire](https://github.com/firebase/generator-angularfire): *Angular+Firebase*
- [ plugin-wp](https://github.com/WebDevStudios/generator-plugin-wp#readme): *WordPress plugins*
- [:small_blue_diamond: bootstrap](https://github.com/yeoman/generator-bootstrap#readme): *Bootstrap*
- [ chrome-extension-kickstart](https://github.com/HaNdTriX/generator-chrome-extension-kickstart#readme): *Generator*
- [ angular-go-martini](https://github.com/rayokota/generator-angular-go-martini): *AngularJS + Go + Martini*
- [ material-app](https://github.com/michaelkrone/generator-material-app#readme): *Generates a material webappwith AngularJS, Express and Mongoose*
- [ api](https://github.com/ndelvalle/generator-api#readme): *Creating RESTful NodeJS APIs, using ES6, Mongoose and Express*
- [ bespoke](https://github.com/bespokejs/generator-bespoke): *Create Bespoke.js presentations using Yeoman*
- [ wp-make](https://github.com/10up/generator-wp-make#readme): *Generator*
- [ mean-seed](https://github.com/notorii/generator-mean-seed): *MEAN-seed - AngularJS and node.js responsive/cross-platform/mobile ready app/website*
- [ angular-require](https://github.com/aaronallport/generator-angular-require#readme): *AngularJS using RequireJS*
- [:small_blue_diamond: karma](https://github.com/yeoman/generator-karma#readme): *Karma*
- [ office](https://github.com/officedev/generator-office): *Creating Microsoft Office projects using any text editor*
- [ node-typescript](https://github.com/ospatil/generator-node-typescript#readme): *A minimal creating NodeJS modules using TypeScript*
- [ canner-node-typescript](https://github.com/ospatil/generator-node-typescript#readme): *A minimal creating NodeJS modules using TypeScript*
- [ flux-on-rails](https://github.com/alexfedoseev/generator-flux-on-rails#readme): *Scaffolder of isomorphic/universal Flux app, backed by Rails API*
- [ jhipster-react](https://github.com/deepu105/generator-jhipster-react): *A Jhipster based generator to create react + spring bootapp*
- [ react-on-rails](https://github.com/alexfedoseev/generator-react-on-rails): *Scaffolder of isomorphic NodeJS & ReactJS app, backed by Rails API*
- [ test](https://github.com/phillipalexander/generator-test): *Based generator that creates a simple mocha/chai TDD scaffold for solving algorithms*
- [ angular-webpack-es6](https://github.com/STUkh/generator-angular-webpack-es6#readme): *Angular Webpack ES6 generator. Uses SASS as CSS preprocessor, UI router as default angular router, LazyLoading example included. Inspired by generator-gulp-angular*
- [ meteor](https://github.com/Pent/generator-meteor): *A Meteor app*
- [ jquery-boilerplate](https://github.com/jquery-boilerplate/generator-jquery-boilerplate#readme): *JQuery Boilerplate*
- [ firefox-os](https://github.com/zenorocha/generator-firefox-os): *Firefox OS*
- [ meanstack](https://github.com/wlepinski/generator-meanstack): *The MEAN stack*
- [ angulpify](https://github.com/jgoux/generator-angulpify): *Involving AngularJS, Gulp and Browserify*
- [ openapi-repo](https://github.com/Rebilly/generator-openapi-repo#readme): *OpenAPI(fka Swagger) repo to help you share spec for your API*
- [ gulp-ng](https://github.com/henyojess/generator-gulp-ng): *Gulp+angular*
- [ ionic-gulp](https://github.com/tmaximini/generator-ionic-gulp#readme): *Ionic projects with gulp*
- [ micro-service](https://github.com/vadimdemedes/generator-micro-service#readme): *Kickstart your microservice with `micro` and `ava`!*
- [ hubot](https://github.com/github/generator-hubot#readme): *Hubot*
- [ bootstrap-less](https://github.com/Thomas-Lebeau/generator-bootstrap-less): *Bootstrap less*
- [ bangular](https://github.com/42Zavattas/generator-bangular): *Generate and serve your project in a blink of an eye*
- [ patternlab](http://degdigital.github.io/generator-patternlab/): *Pattern Lab Generator*
- [ chisel](https://github.com/xfiveco/generator-chisel#readme): *Scaffolding front-end and WordPress projects*
- [ server-configs](https://github.com/h5bp/generator-server-configs): *Scaffolds out webserver configuration for various platforms. Goes well with HTML5 Boilerplate*
- [ element](https://github.com/webcomponents/generator-element): *Create Custom Elements using Polymer, X-Tag or VanillaJS*
- [ react-firebase](http://github.com/prescottprue/generator-react-firebase): *React and Firebase (with option for Redux) starter project generator*
- [ loopback](https://github.com/strongloop/generator-loopback#readme): *LoopBack*
- [ mean](https://github.com/jrcryer/generator-mean): *MEAN stack, inspired by mean.io*
- [ htmlemail](https://github.com/jahvi/generator-htmlemail): *HTML Email boilerplate*
- [ assemble](https://github.com/assemble/generator-assemble): *Create new Assemble projects*
- [ rf](https://github.com/taiansu/generator-rf#readme): *RF: a React/Flux webapp generator with webpack, dialects and some good stuffs*
- [ ng2-webpack](https://github.com/cmelion/generator-ng2-webpack): *An opinionated tool for scaffolding an app using angular2 and webpack*
- [ code](http://code.visualstudio.com/): *Visual Studio Code Extensions*
- [ angularjs-library](https://github.com/jvandemo/generator-angularjs-library#readme): *Create an AngularJS component library*
- [ flight](https://github.com/flightjs/generator-flight): *Generator for scaffolding out a Flight web app*
- [ ngtailor](https://github.com/lauterry/generator-ngtailor): *Generator*
- [ jekyll-starter-kit](https://github.com/nirgn975/generator-jekyll-starter-kit): *Combine Jekyll and Google web-starter-kit to enjoy the best of both worlds*
- [ kraken](https://github.com/krakenjs/generator-kraken): *A kraken*
- [ ngbp](https://github.com/thardy/generator-ngbp): *Based on the ngBoilerplate kickstarter, a best-practice boilerplate for scalable Angular projects built on a highly modular, folder-by-feature structure. Now with easily switchable mocking via $httpBackend and RESTful resource scaffolding*
- [ angular-meteor](https://github.com/ndxbxrme/generator-angular-meteor): *Creating AngularJS + Meteorapps*
- [ threejs](https://github.com/timmywil/generator-threejs): *Three.js projects*
- [ angular-crud](https://github.com/jlmonteagudo/generator-angular-crud#readme): *Angular CRUD generator*
- [ hedley](https://github.com/gizra/generator-hedley#readme): *Headless Drupal, Angular app, and Behat framework*
- [ android-mvp-starter](https://github.com/ravidsrk/android-mvp-starter): *An MVP Boilerplate to save me having to create the same project over from scratch every time! :)*
- [ wbp](https://github.com/silvenon/generator-wbp#readme): *Scaffolds a modern workflow for starting a React app*
- [ nodex](https://github.com/NewbranLTD/generator-nodex#readme): *使用语言选项创建 node.js 模块 / Create a Node.js module with language option. Pass `nodex --lang=cn | en`*
- [ joli-symfony](https://github.com/jolicode/generator-joli-symfony#readme): *Scaffolds a standard Symfony2appwith Yeoman*
- [ angularjs-cordova](http://keshavos.github.io/generator-angularjs-cordova): *Combines the best features and practices to initialise and scaffold an AngularJS based cordova mobile app using a module based approach. Includes Angular UI, Bootstrap 3*
- [ electric](http://electricjs.com/): *Creating documentation sites using electric.js*
- [ esri-appbuilder-js](https://github.com/Esri/generator-esri-appbuilder-js#readme): *Help customize the ArcGIS Web AppBuilder*
- [ fountain-vue](https://github.com/fountainjs/generator-fountain-vue#readme): *Fountain generator to scaffold a webapp with Vue.js written in ES6 (Babel) through Webpack including tools Gulp 4, ESLint, Browsersync and Karma*
- [ angular-xl](https://github.com/kennethlynne/generator-angular-xl): *Custom AngularJS*
- [ hapi-style](https://github.com/jedireza/generator-hapi-style): *Scaffolding hapi apps and plugins*
- [ wp-theme](https://github.com/danielauener/generator-wp-grunted-theme): *A WordPress theme generator, to kickstart WordPress theme development with yo, sass and grunt*
- [ bones](https://github.com/matt-bailey/generator-bones): *Scaffolding out a basic web project*
- [ dyno](https://github.com/jhendley25/generator-dyno): *ES6-ready Javascript, with Browserify, Gulp, and Jade*
- [ thorax](https://github.com/walmartlabs/generator-thorax): *A Thorax*
- [ fountain-angular1](http://fountainjs.io/): *Fountain generator to scaffold a webapp with Angular 1 written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [ react-reflux](https://github.com/tfaga/generator-react-reflux): *Facebook's React framework and flux architecture using reflux*
- [ keystone-react](http://keystonejs.com/): *KeystoneJS + ReactappGenerator*
- [ fountain-angular2](http://fountainjs.io/): *Fountain generator to scaffold a webapp with Angular 2 written in ES6 (Babel), TypeScript through Webpack or SystemJS including tools Gulp 4, ESLint, Browsersync and Karma*
- [ vuejs](https://github.com/birdeggegg/generator-vuejs#readme): *A simple Vue + Webpack generator*
- [ create-redux-app](https://github.com/jonidelv/generator-create-redux-app): *Add Redux, styled-components and other useful libraries like Generators in top of create-react-app*
- [:small_blue_diamond: jquery](https://github.com/yeoman/generator-jquery#readme): *Generate a jQuery plugin*
- [ angular-express-sequelize](https://github.com/rayokota/generator-angular-express-sequelize): *AngularJS + Express + Sequelize*
- [ appx](https://github.com/MicrosoftEdge/generator-appx#readme): *Windows 10 App Build System*
- [ aio-angular](https://github.com/pinkyjie/generator-aio-angular#readme): *All In One AngularJS generator*
- [ modern-frontend](https://github.com/endel/generator-modern-frontend#readme): *Scaffold out a modern front-end web app*
- [ hexo-theme](https://github.com/tcrowe/generator-hexo-theme#readme): *Create hexo themes like crazy!*
- [ django](https://github.com/diegotoral/generator-django): *A*
- [ react-webpack-alt](https://github.com/weblogixx/generator-react-webpack-alt): *ReactJS and Flux (alt.js) via Webpack*
- [ mobile-boilerplate](https://github.com/h5bp/generator-mobile-boilerplate#readme): *H5BP Mobile Boilerplate generator*
- [ flask](https://github.com/romainberger/yeoman-flask): *Flask project*
- [ kibana-plugin](https://github.com/elastic/generator-kibana-plugin#readme): *A Kibana plugin*
- [ aurelia](https://github.com/zewa666/generator-aurelia#readme): *The JavaScript Framework Aurelia*
- [ laravel](https://github.com/Freyskeyd/generator-laravel): *A generator for Laravel (with Yeoman)*
- [:small_blue_diamond: gruntfile](https://github.com/yeoman/generator-gruntfile): *A gruntfile*
- [ modern-web-dev](https://npmjs.com/package/generator-modern-web-dev): *Modern Web Development Generator: Gulp, ES2015, TypeScript, Angular 2, SASS, Minification, Bundling, Sourcemaps, ..*
- [ phaser-plus](https://github.com/rblopes/generator-phaser-plus/tree/master/packages/generator-phaser-plus#readme): *Create Phaser Web games with ease*
- [ angm](https://github.com/newaeonweb/generator-angm#readme): *AngularJS help you getting started with a new project based on AngularJS and Angular Material to build large scaleapps*
- [ awesome-list](https://github.com/dar5hak/generator-awesome-list#readme): *GitHub awesome lists 😎*
- [ gulp-bootstrap](https://github.com/niallobrien/generator-gulp-bootstrap): *Scaffold out a front-end web app using Sass (node-sass) by default*
- [ angular-ui-router](https://github.com/yeoman/generator-angular): *AngularJS( include UI-router )*
- [ alfred](https://github.com/samverschueren/generator-alfred#readme): *Scaffold out an Alfred workflow*
- [ ghost](https://github.com/sethvincent/generator-ghost): *Generate Ghost blogs and themes using Yeoman*
- [ gulp-angular2](https://github.com/x6doooo/generator-gulp-angular2#readme): *Angular2 + Gulp, base on angular2-seed and generator-gulp-angular*
- [ polymer-init-custom-build](https://github.com/PolymerElements/generator-polymer-init-custom-build#readme): *A starting point for building apps using Polymer Starter Kit with a custom gulp process leveraging polymer-build*
- [ ng-plugin](https://github.com/tinesoft/generator-ng-plugin#readme): *Bootstrap AngularJS plugin creation, with integrated demo app, continuous integration system, dependencies and code coverage status*
- [ koa](https://github.com/peter-vilja/generator-koa): *A Koa*
- [ ngx-library](https://github.com/tinesoft/generator-ngx-library#readme): *Bootstrap Angular library creation and publication, with integrated demo app, continuous integration/deployment system, code coverage status and much more!*
- [ angular-dropwizard](https://github.com/rayokota/generator-angular-dropwizard): *AngularJS + Dropwizard*
- [ angular-material-fullstack](https://github.com/sincraianul/generator-angular-material-fullstack): *Creating MEAN stackapps, using MongoDB, Express, AngularJS, and Node*
- [ nod](https://github.com/diegohaz/nod): *NodeJS modules generator with ES6 (Babel), Jest, Flow, Travis, Codecov, Documentation and more*
- [ standard-readme](https://github.com/RichardLitt/generator-standard-readme): *Scaffold out a Standard Readme*
- [ openui5](https://github.com/saschakiefer/generator-openui5): *OpenUI5*
- [ serverless-policy](https://github.com/dancrumb/generator-serverless-policy#readme): *Generator for the basic IAM policy to allow a user to deploy a Serverless service*
- [ angular-slim](https://github.com/rayokota/generator-angular-slim): *AngularJS + Slim*
- [ k](https://github.com/minghe/generator-k): *A best Koa generator*
- [ firefox-extension](https://github.com/dgil/generator-firefox-extension#readme): *Firefox Extensions*
- [ jsmodule](https://github.com/necolas/generator-jsmodule): *Generator for scaffolding out a JavaScript module for Node.js or the browser*
- [ mobx-react](https://github.com/cafreeman/generator-mobx-react): *A lightweight for generator for scaffolding new mobx-react projects*
- [ wp-bones](https://github.com/0dp/generator-wp-bones): *Installs Bones Wordpress starter theme into the current directory - goto the themes folder and run wp-bones*
- [ koa-rest](https://github.com/patrickwolleb/generator-koa-rest): *Generator*
- [ es6-angular](https://github.com/leftstick/generator-es6-angular): *Generator-es6-angular*





**Scrip mágico**
```javascript
// Ejecutar en http://yeoman.io/generators/
var md = ""
function generateMd(dataItem){
	
	md += `**:top: ${dataItem}**\n`
	var datos = document.querySelectorAll(".list > tr")
	
	datos.forEach(function(dato){
		var linkSelector = dato.querySelector("a")
		var nameSelector = dato.querySelector(".name")
		var descripcionSelector = dato.querySelector(".description")
		var usefulldata;
		if(linkSelector && nameSelector){
			var usefulldata = {
				official: dato.classList.contains('official'),
				titulo: nameSelector.innerText,
				descripcion: descripcionSelector.innerText,
				link: linkSelector.href
			}		
		}
	
		if(usefulldata){
			md += `- [${usefulldata.official ? ":small_blue_diamond:": ""} ${usefulldata.titulo}](${usefulldata.link}): *${usefulldata.descripcion}*\n`;
		}
	})
	
	md += "\n\n"

}

function orderListBy (dataItem){
	document.querySelector(`[data-sort='${dataItem}']`).click()
}

function startSecuence(dataItem){
	orderListBy(dataItem)
	orderListBy(dataItem)
	generateMd(dataItem)
}

startSecuence("downloads")
startSecuence("stars")
console.log(md)
```


### Yeoman: ¡Hagamos nuestro generador! :muscle::muscle:

**Documentación**
- [Getting started](http://yeoman.io/authoring/index.html)
- [Running Context](http://yeoman.io/authoring/running-context.html)
- [User Interactions](http://yeoman.io/authoring/user-interactions.html)
- [Composability](http://yeoman.io/authoring/composability.html)
- [Managing Depedencies](http://yeoman.io/authoring/dependencies.html)
- [Interacting with the file system](http://yeoman.io/authoring/file-system.html)
- [storing user configs](http://yeoman.io/authoring/storage.html)
- [Unit Testing](http://yeoman.io/authoring/testing.html)
- [Debugging Generators](http://yeoman.io/authoring/debugging.html)
- [Integrating Yeoman in other tools](http://yeoman.io/authoring/integrating-yeoman.html)
- [Full API documentation](http://yeoman.io/generator/)

**Recursos**
- [Create A Custom Yeoman Generator in 4 Easy Steps](https://scotch.io/tutorials/create-a-custom-yeoman-generator-in-4-easy-steps)
- [A quick and dirty introduction to Yeoman generator development](https://benclinkinbeard.com/posts/a-quick-and-dirty-introduction-to-yeoman-generator-development/)
- [Building a Yeoman Generator](https://webcake.co/building-a-yeoman-generator/)
- [One Yeoman generator for all your frontend projects](http://fountainjs.io/doc)
- [Creating your own Custom Yeoman Generator](https://devdactic.com/creating-custom-yeoman-generator/)
- [Guide to create and publish a Yeoman generator](https://medium.com/@vallejos/yeoman-guide-adea4d6ea1e3)
- [Build Your Own Yeoman Generator](https://code.tutsplus.com/tutorials/build-your-own-yeoman-generator--cms-20040)


### Ejercicios

**1 -** Crear un generador de "Liados by OSW" para generar una landing para cualquier liada de OSW. 
Objetivos:
- Debe configurarse desde las preguntas del generador
- Debe ser un HTML
- Debe contener algunas tareas de gulp
- Debe incluir en el html el tiempo que queda hasta la fecha a modo de cuenta atras
- Debe incluir un imagen local o URL que explique la liada
- Debe incluir un README.md explicando el contexto
- Añadir un CTA
- Debe poder desplegarse facilmente en Github Pages
- [Ejemplo](http://osweekends.com/OKRggedon/)

```javascript
  // Tu solución
```

**2 -** Crear un generador de proyectos para OSW, siguiendo [el esquema de los OSW Guilds](https://github.com/OSWeekends/agile-project-template).

```javascript
  // Tu solución
```

