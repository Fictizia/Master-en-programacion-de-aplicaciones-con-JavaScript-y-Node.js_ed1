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
    init:function () {
        opciones.leer(opciones.mis_pelis);
    },
    mis_pelis : firebase.database().ref(),
    leer: function(referencia){
        referencia.on("value", function(snapshot) {
            document.querySelector(".container").innerHTML = "";
            for(var pelicula in snapshot.val()){
                document.querySelector(".container").innerHTML += 
                `<div class="row text-center">
                    <div class="col-md-6">
                        <h3 id="title">${snapshot.val()[pelicula].Title}</h3>
                    </div>
                    <div class="col-md-4">
                        <div class="row lista">
                            <div class="col-md-6">
                                <button type="button" data-type="ver" class="btn btn-default">
                                    Ver
                                </button>
                            </div>
                            <div class="col-md-6">
                                <button type="button" data-type="borrar" class="btn btn-default borrar">
                                    Borrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
                opciones.initButtons(snapshot.val()[pelicula].Title,snapshot.val()[pelicula].Year,snapshot.val()[pelicula].Poster)
            }
        }, function (errorObject) {
            console.log("Fallo en lectura de datos: " + errorObject.code);
        });
    },
    insertar: function(datos){
        opciones.mis_pelis.push(datos, function(error) {
        if (error) {
          console.warn("No se han podido guardar los datos." + error);
        } else {
          console.info("Datos guardados con exito. : "+datos);
          opciones.leer(opciones.mis_pelis);
        }
      });
    },
    buscar: function(url,callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos =  JSON.parse(xmlHttp.responseText);
                console.log(datos)
                callback(datos.Search[0]);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    },
    initButtons: function(titulo,anio,img){
        var botones = document.querySelector(".lista");
        botones.addEventListener("click",function(e){
            if(e.target.nodeName === 'BUTTON'){
                if(e.target.parentNode.getAttribute('data-type')==='ver'){
                    document.querySelector("#titulo strong").innerHTML = titulo;
                    document.querySelector("#anio strong").innerHTML = anio;
                    document.querySelector(".ficha-peli").style.display = "block";
                    document.querySelector(".container-ficha img").src = img;
                }
            }
        });     
    }   
}

function runScript(e) {
    var texto = document.getElementById("inputPelis").value;
    if (e.keyCode === 13 && texto !== "undefined") {
        opciones.buscar("https://www.omdbapi.com/?s="+texto+"&apikey=2edf44fe",opciones.insertar);
    }else{
        console.log("No te entro por el aro")
    }
}
    
opciones.init();