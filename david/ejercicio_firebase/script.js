// Initialize Firebase
var config = {
    apiKey: "AIzaSyDWflvEHULO1PxMm4iF0_SF21Ddu1kti-8",
    authDomain: "pelis-b3dd4.firebaseapp.com",
    databaseURL: "https://pelis-b3dd4.firebaseio.com",
    projectId: "pelis-b3dd4",
    storageBucket: "",
    messagingSenderId: "543976760568"
};
firebase.initializeApp(config);

var opciones = {
    leer: function(referencia){
        referencia.on("value", function(snapshot) {
            console.log(snapshot.val());
        }, function (errorObject) {
            console.log("Fallo en lectura de datos: " + errorObject.code);
        });
    },
    insertar: function(datos){
        var mis_pelis = firebase.database().ref();
        mis_pelis.push(datos, function(error) {
        if (error) {
          console.warn("No se han podido guardar los datos." + error);
        } else {
          console.info("Datos guardados con exito. : "+datos);
        }
      });
    },
    buscar: function(url){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos =  JSON.parse(xmlHttp.responseText);
                callback(datos.Search[0]);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }
}

function runScript(e) {
    var texto = document.getElementById("inputPelis");
    if (e.keyCode === 13 && texto !== "undefined") {
        var movie_search = document.getElementById("inputPelis").value;
        opciones.buscar("https://www.omdbapi.com/?s="+movie_search+"&apikey=2edf44fe",opciones.insertar);
    }else{
        console.log("No te entro por el aro")
    }
}
    
