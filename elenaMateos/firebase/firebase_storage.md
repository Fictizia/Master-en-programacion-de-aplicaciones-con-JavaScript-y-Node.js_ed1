# FIREBASE STORAGE:
#### Resumen del vídeo: [Getting Started with Firebase Storage on the Web - Firecasts](https://www.youtube.com/watch?v=SpxHVrpfGgU)

### Pasos:

 1. Crear un fichero html con la llamada al scrip de firebase como hemos hecho hasta el momento, para inicializar un proyecto de firebase:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title> </title>
  </head>
  <body>
    <progress value="0" max="100" class="uploader" id="uploader">0%
    </progress>
    <input type="file" value="upload" id="fileButton" />
    
    
    // Inicialización de Firebase:
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: '<your-api-key>',
        authDomain: '<your-auth-domain>',
        databaseURL: '<your-database-url>',
        storageBucket: '<your-storage-bucket>'
      };
      firebase.initializeApp(config);
      </script>
  </body>
</html>

```

 2. Vamos a crear una página muy sencilla con una barra de progreso y un texto que nos dice que fichero se sube a firebase.
 De forma que al hacer clic en el fichero, veremos en la barra de progreso como ese fichero sube al storage de Firebase.
 3. Por abreviar pondremos el estilo dentro del html:
 ```html
 <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title> Firebase Web Quickstart </title>
    <style media="screen">
    body {
        display: flex;
        min-height: 100vh;
        width: 100%;
        padding: 0;
        margin: 0;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
    
    .uploader {
        -webkit-appearance: none;
        appearance: none;
        width: 50%;
        margin-bottom: 10px;
    }
    
    </style>
  </head>
  <body>
    <!-- Codigo html -->
    
    <script src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js"></script>
    <script>
      // Initialize Firebase
      var config = {
        apiKey: '<your-api-key>',
        authDomain: '<your-auth-domain>',
        databaseURL: '<your-database-url>',
        storageBucket: '<your-storage-bucket>'
      };
      firebase.initializeApp(config);
      </script>
  </body>
</html>
 
 ```
 4. Asignamos variales a los elementos del DOM que vamos a manejar.
 5. Asignamos evento al botón fileButton y un callback, para coger
  el fichero, crear la referencia al Storage y subirlo, y para 
  actualizar la barra de progreso mientras el fichero sube.
 6. IMPORTANTE: En el proceso de desarrollo y mientras realizamos la práctica las **reglas de escritura** deben estar habilitadas,
es decir, dentro de la consola de Firebase en, reglas de seguridad, se ha de poner 'true' para lectura y escritura o no funcionará. Una vez se haya
terminado la práctica, estas reglas deben setarse de nuevo a 'logeado' para evitar que cualquiera pueda acceder =):

**allow read, write: if auth != null;** Es lo que viene por defecto y como debe dejarse al terminar.

**allow read, write if true** es como ha de ponerse para que funcione la práctica.
 

```javascript

// Script a añadir después del script de firebase

// Get elements
var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

// Añadir el listener para los eventos:

fileButton.addEventListener('change', function(e){
  // Get file:
  var file = e.target.files[0];
  
  // CREAR LA REFERENCIA AL STORAGE:
  // por ejemplo carpeta fotos/nombre_de_foto y la almacenamos en una 
  // variale para tratar el progreso de subida
  var storageRef = firebase.storage().ref('sweet_gifts/' + file.name); 
  
  // Subir el archivo:
  
  var task = storageRef.put(file)
  
  // Actualizar la barra de progreso (monitorizar el progreso)
  
  task.on('state_changed', // Pasamos 3 callbacks para gestionar los posibles estados:
  
    function progress(snapshot){  // Con 'snapshot' vemos el estado en el momento. 
        var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploader.value = percentage;
        
    },
    
    function(error){
        // que hacer si hay error
        console.log('Errorrrrrrrr subiendo archivo!!!!!')
    },
    
    function complete(){
        // que hacer al completarse la carga
        // Mostrar un pop-up...
        alert('Archivo subido!');
    }
  );
})

```



