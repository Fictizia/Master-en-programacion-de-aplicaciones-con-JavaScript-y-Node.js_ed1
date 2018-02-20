![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 42

### Firebase

![FirebaseLogo](https://firebase.google.com/images/brand-guidelines/logo-standard.png)

- [Pricing](https://firebase.google.com/pricing/)
- [Features](https://firebase.google.com/features/)
- [Clientes](https://firebase.google.com/customers/)
- [Documentación](https://firebase.google.com/docs/)
  - [Primeros Pasos](https://firebase.google.com/docs/web/setup)
  - [Referencia de la API](https://firebase.google.com/docs/reference/js/)
  - [Ejemplos](https://firebase.google.com/docs/samples/#web)
- [Librerías y ayudas](https://firebase.google.com/docs/libraries/)

### Aprendiendo con Firebase 2.x

- [Firebase Docs](https://www.firebase.com/docs/)
- [Firebase Open Data Sets (deprecated)](https://www.firebase.com/docs/open-data/)
- [Firebase - GeoFire](https://github.com/firebase/geofire-js)
- [Firebase - Backbone](https://www.firebase.com/docs/web/libraries/backbone/quickstart.html)
- [Firebase - Angular](https://www.firebase.com/docs/web/libraries/angular/quickstart.html)
- [Firebase - Nodejs/js](https://www.firebase.com/docs/web/quickstart.html)
- [Firebase - Ionic](https://www.firebase.com/docs/web/libraries/ionic/guide.html)
- [Firebase - React](https://www.firebase.com/docs/web/libraries/react/)
- [Firebase - Ember](https://www.firebase.com/docs/web/libraries/ember/)


**Primeros pasos**

- Crear una cuenta:
  - [SignUp](https://www.firebase.com/signup/)
  
- Gestionar dependéncias en cliente:
```javascript
  <script src="https://cdn.firebase.com/js/client/2.2.9/firebase.js"></script>
```

- Gestionar dependéncias en Nodejs:
```
  npm install firebase -save
```


**Limitaciones**

- [Limitaciones técnicas](https://www.firebase.com/docs/web/guide/understanding-data.html#section-limitations)
- [Conversión de Arrays](https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase)


**Guardando Datos**

- [Guardando datos en Firebase](https://www.firebase.com/docs/web/guide/saving-data.html#section-ways-to-save)
- set() Almacena / remplaza los datos
- update() Actualiza los datos
- push() Alamacena los datos con un ID único.
- transaction() Para datos complejos y cocurridos.




- set():

```javascript
  var ref = new Firebase("https://<<---URL--->>.firebaseio.com/fb-ejemplos/escritura");
  var usersRef = ref.child("users");
  usersRef.set({
    alanisawesome: {
      date_of_birth: "June 23, 1912",
      full_name: "Alan Turing"
    },
    gracehop: {
      date_of_birth: "December 9, 1906",
      full_name: "Grace Hopper"
    }
  });
```

```javascript
  var ref = new Firebase("https://<<---URL--->>.firebaseio.com/fb-ejemplos/escritura");
  usersRef.child("alanisawesome").set({
    date_of_birth: "June 23, 1912",
    full_name: "Alan Turing"
  });
  usersRef.child("gracehop").set({
    date_of_birth: "December 9, 1906",
    full_name: "Grace Hopper"
  });
```


- update():

```javascript
  var hopperRef = usersRef.child("gracehop");
  hopperRef.update({
    "nickname": "Amazing Grace"
  });
```

- push():

```javascript
// update y Callback
  var dataRef = ref.child("IDs");
  dataRef.push("Guardando datos...", function(error) {
    if (error) {
      console.warn("No se han podido guardar los datos." + error);
    } else {
      console.info("Datos guardados con exito.");
    }
  });
```

- **[Demo](https://codepen.io/ulisesgascon/pen/pyYYoR)**


**Eventos**

- Evento (value):

```javascript
  var ref = new Firebase("https://docs-examples.firebaseio.com/web/saving-data/fireblog/posts");
  
  ref.on("value", function(snapshot) {
    console.log(snapshot.val());
  }, function (errorObject) {
    console.log("Fallo en lectura de datos: " + errorObject.code);
  });
```


- Evento (child_changed):

```javascript
  var ref = new Firebase("https://<<--URL-->>.firebaseio.com/fb-ejemplos/escritura/users");
  
  ref.on("child_changed", function(snapshot) {
    var usersData = snapshot.val();
    console.log("Nuevos cambios(child_changed): ", usersData);
  });
```


- Evento (child_removed):

```javascript
  var ref = new Firebase("https://<<--URL-->>.firebaseio.com/fb-ejemplos/escritura/users");
  
  ref.on("child_removed", function(snapshot) {
    var usersData = snapshot.val();
    console.log("Usuario eliminado(child_removed): ", usersData);
  });
```


- once() *una vez*:

```javascript
var ref = new Firebase("https://<<--URL-->>.firebaseio.com/fb-ejemplos/escritura/users");

ref.once("child_changed", function(snapshot) {
  var usersData = snapshot.val();
  console.log("Nuevo cambio(once - child_changed): " + usersData);
});
```


- Quitar evento (value):

```javascript
  ref.off("value");
```

- Quitar todos los eventos:

```javascript
  ref.off();
```

- **[Demo](https://codepen.io/ulisesgascon/pen/grEEeP)**


**Queries**

- orderByChild() Ordenar por hijo
- orderByKey() Ordenar por Llave
- orderByValue() Ordenar por valor
- orderByPriority() Ordenar por prioridad
- Documentación
  - [Firebase - Queries Part I](https://www.firebase.com/blog/2013-10-01-queries-part-one.html)
  - [Firebase - Queries Part II](https://www.firebase.com/blog/2014-01-02-queries-part-two.html)
  - [Firebase - Denormalizing is normal](https://www.firebase.com/blog/2013-04-12-denormalizing-is-normal.html)
  - [Firebase Docs - Ordenando Datos](https://www.firebase.com/docs/web/guide/retrieving-data.html#section-ordered-data)



- orderByChild():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByChild("height").on("child_added", function(snapshot) {
    console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
  });
```

- orderByKey():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByKey().on("child_added", function(snapshot) {
    console.log(snapshot.key());
  });
```

- orderByValue():

```javascript
  var scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
  scoresRef.orderByValue().on("value", function(snapshot) {
    snapshot.forEach(function(data) {
      console.log("The " + data.key() + " dinosaur's score is " + data.val());
    });
  });
```

- **[Demo](https://codepen.io/ulisesgascon/pen/dMrrgb)**

**Queries Avanzadas**

- limitToFirst() desde el primero...
- limitToLast() desde el final...
- startAt() empiezan por...
- endAt() terminan por...
- equalTo() igual a...


**Queries Avanzadas (básicos)**

- limitToFirst():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByChild("height").limitToFirst(2).on("child_added", function(snapshot) {
    console.log(snapshot.key());
  });
```


- limitToLast():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByChild("weight").limitToLast(2).on("child_added", function(snapshot) {
    console.log(snapshot.key());
  });
```


**Queries Avanzadas (concatenando)**

- .orderByValue() y .limitToLast():

```javascript
  var scoresRef = new Firebase("https://dinosaur-facts.firebaseio.com/scores");
  scoresRef.orderByValue().limitToLast(3).on("value", function(snapshot) {
    snapshot.forEach(function(data) {
      console.log("The " + data.key() + " dinosaur's score is " + data.val());
    });
  });
```


- .orderByChild() y .startAt():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByChild("height").startAt(3).on("child_added", function(snapshot) {
    console.log(snapshot.key());
  });
```


- .orderByKey() y .endAt():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByKey().endAt("pterodactyl").on("child_added", function(snapshot) {
    console.log(snapshot.key());
  });
```


- .startAt() y .endAt() *usando tilde*:

```javascript
var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
ref.orderByKey().startAt("b").endAt("b~").on("child_added", function(snapshot) {
  console.log(snapshot.key());
});
```

- .equalTo():

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
    console.log(snapshot.key());
  });
```


- Ejemplo: *Busquemos un dinosaurio que sea mas pequeño que un Stegosaurus*

```javascript
  var ref = new Firebase("https://dinosaur-facts.firebaseio.com/dinosaurs");
  ref.child("stegosaurus").child("height").on("value", function(stegosaurusHeightSnapshot) {
    var favoriteDinoHeight = stegosaurusHeightSnapshot.val();
  
    var queryRef = ref.orderByChild("height").endAt(favoriteDinoHeight).limitToLast(2)
    queryRef.on("value", function(querySnapshot) {
        if (querySnapshot.numChildren() == 2) {
          // Data is ordered by increasing height, so we want the first entry
          querySnapshot.forEach(function(dinoSnapshot) {
            console.log("el dinosaurio más pequeño que el Stegosaurus es " + dinoSnapshot.key());
  
            // Returning true means that we will only loop through the forEach() one time
            return true;
          });
        } else {
          console.log("El Stegosaurus es el dinosaurio más pequeño");
        }
    });
  });
```

- **[Demo](https://codepen.io/ulisesgascon/pen/qZvvve)**

**Trabajar Offline**

- [Documentación](https://www.firebase.com/docs/web/guide/saving-data.html#section-writes-offline)


- Realizando acciones al desconectarse:

```javascript
  var presenceRef = new Firebase('https://<<--URL-->>.firebaseio.com/info/connectednow');
  presenceRef.onDisconnect().set("I disconnected!");
  
```



**Social Login**

- [User-auth con Firebase](https://www.firebase.com/docs/web/guide/user-auth.html)
- [Ejemplo en jsfiddle](http://jsfiddle.net/firebase/a221m6pb/embedded/result,js,css/)


**Seguridad y Autorización**

- [Ajustes de seguridad](https://www.firebase.com/docs/security/guide/securing-data.html)


**Deploy**

- [Deploy en Cloud](https://www.firebase.com/docs/web/guide/deploying.html)
- [Deploy usando Node](https://www.firebase.com/docs/hosting/quickstart.html)




### Analicemos Código

- [Código Fuente demo de Velocidad](https://github.com/UlisesGascon/raspberrypi-system-info-data-to-firebase)
- [Curratelo](https://github.com/UlisesGascon/curratelo)
- [Raspberrypi system info data to Firebase](https://github.com/UlisesGascon/raspberrypi-system-info-data-to-firebase)
- [Calidad del Aire con Firebase](https://github.com/UlisesGascon/Calidad-del-Aire-con-Firebase)
- [Agroduino](https://github.com/UlisesGascon/Agroduino)
- [Aire Madrid](https://github.com/UlisesGascon/Aire-Madrid)
- [EMT Bus Live](https://github.com/Borjagodoy/emtBusLive)
- [Bitcoin price ticker with Arduino](https://github.com/UlisesGascon/Bitcoin-price-ticker-with-Arduino)
- [MovieFire con Nodejs](https://github.com/UlisesGascon/Simple-API-REST-with-Firebase-and-IMBD)


### [Nuevo Firebase 3.x](https://firebase.google.com/)

![new_logo](http://cdn772.swedroid.se/wp-content/uploads/2016/05/google-firebase-logo-600x308.png)
![funcionalidades](https://cdn.scotch.io/1/Bg4r7dI1Q2W3bX9Sf4oD_unnamed.png)

**Más info**
- [Firebase expands to become a unified app platform](https://firebase.googleblog.com/2016/05/firebase-expands-to-become-unified-app-platform.html)
- [MIgration guide](https://firebase.google.com/support/guides/firebase-web)


**Claves del cambio**
- Nueva Interfaz
- Muchas funcionalidades Nuevas
- Un enfoque amplio a desarrollo de apps nativas (Android e iOS)
- Existe un asistente para migrar los proyectos a la nueva consola
- Los nuevos proyectos ya no componen el nombre del dominio

### Migración de FIrebase 2.x a 3.x

**Nueva versión de las librerías**
- Cliente
```html
  <!-- Antes -->
  <script src="https://cdn.firebase.com/js/client/2.3.2/firebase.js"></script>
  <!-- Ahora -->
  <script src="https://www.gstatic.com/firebasejs/3.0.4/firebase.js"></script>
```

- NPM
```
  npm uninstall firebase --save
  npm install firebase --save
```

**Obtener una referencia de la base de datos**
- Antes
```javascript
  var ref = new Firebase("https://databaseName.firebaseio.com");
```

- Ahora
```javascript
// See https://firebase.google.com/docs/web/setup#project_setup for how to auto-generate this config
  var config = {
    apiKey: "apiKey",
    authDomain: "projectId.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com"
  };
  
  firebase.initializeApp(config);
  
  var rootRef = firebase.database().ref();
```


**Los métodos de obtención sin argumento son propiedades solo de lectura**
- Antes
```javascript
// Reference
  var key = ref.key();
  var rootRef = ref.root();
  var parentRef = ref.parent();

// Query
  var queryRef = query.ref();

// DataSnapshot
  ref.on("value", function(snapshot) {
    var dataRef = snapshot.ref();
    var dataKey = snapshot.key();
  });
```

- Ahora
```javascript
// Reference
  var key = ref.key;
  var rootRef = ref.root;
  var parentRef = ref.parent;

// Query
  var queryRef = query.ref;

// DataSnapshot
  ref.on("value", function(snapshot) {
    var dataRef = snapshot.ref;
    var dataKey = snapshot.key;
  });
```


**Actualización de tu código de autenticación**
- Antes
```javascript
  ref.authWithOAuthPopup("twitter", function(error, authData) {
    if (error) {
      // An error occurred
      console.error(error);
    } else {
      // User signed in!
      var uid = authData.uid;
    }
  });
```

- Ahora
```javascript
  var auth = firebase.auth();
  
  var provider = new firebase.auth.TwitterAuthProvider();
  auth.signInWithPopup(provider).then(function(result) {
    // User signed in!
    var uid = result.user.uid;
  }).catch(function(error) {
    // An error occurred
  });
```


**Obtener el token de acceso**

- Antes
```javascript
  ref.onAuth(function(authData) {
    if (authData) {
      var accessToken = authData.providerData[authData.provider].accessToken;
    }
  });
```

- Ahora
```javascript
  var auth = firebase.auth();
  
  var provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(function(result) {
    var accessToken = result.credential.accessToken;
  });
```


**Controlar el estado de autenticación**

- Antes
```javascript
  ref.onAuth(function(authData) {
    if (authData) {
      // User signed in!
      var uid = authData.uid;
    } else {
      // User logged out
    }
  });
```

- Ahora
```javascript
  var auth = firebase.auth();
  
  auth.onAuthStateChanged(function(user) {
    if (user) {
      // User signed in!
      var uid = user.uid;
    } else {
      // User logged out
    }
  });
```
