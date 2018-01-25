// Initialize Firebase
var config = {
apiKey: "AIzaSyBWdVvlQmquX4ui3-mF-IFEL-oulrhCdFg",
authDomain: "clase45-474f1.firebaseapp.com",
databaseURL: "https://clase45-474f1.firebaseio.com",
projectId: "clase45-474f1",
storageBucket: "",
messagingSenderId: "688264605206"
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
    var texto = document.getElementById("search-movie");
    if (e.keyCode === 13 && texto !== "undefined") {
        var movie_search = document.getElementById("search-movie").value;
        opciones.buscar("https://www.omdbapi.com/?s="+movie_search+"&apikey=662c3103",opciones.insertar);
    }else{
        console.log("No te entro por el aro")
    }
}


//  http://www.omdbapi.com/?i=tt3896198&apikey=662c3103
    
