var programaPelis = {};
var config = {
    apiKey: "AIzaSyBnex26wP_taceovQNvbI-oW7vqohk4lk0",
    authDomain: "pelis-e1abf.firebaseapp.com",
    databaseURL: "https://pelis-e1abf.firebaseio.com",
    projectId: "pelis-e1abf",
    storageBucket: "",
    messagingSenderId: "203049926948"
};
firebase.initializeApp(config);
programaPelis.configuracion = (function(){
    var init = function () {
        programaPelis.herramientas.inicializarBotones();
        //firebase.auth().signOut();
    };
    return {inicializar: init};
})();
programaPelis.llamada = (function(){
    var ajax = function(url,callback){
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos =  JSON.parse(xmlHttp.responseText);
                console.log(datos)
                callback(datos);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
    }
    return {buscar : ajax};
})();
programaPelis.herramientas = (function(){
    var mis_pelis = firebase.database();
    var initButtons = function(){
        var botonGuardar = document.querySelector(".container");
        botonGuardar.addEventListener("click",function(e){
            if(!firebase.auth().currentUser){
                alert("Debes estar logueado.")
            }else{
                if(e.target.nodeName === 'BUTTON'){
                    if(e.target.getAttribute('data-type') === "guardar"){
                        var idPeli = e.target.getAttribute('data-id');
                        var idUser = String(firebase.auth().currentUser.uid)
                        mis_pelis.ref('/'+idUser+'/'+idPeli).set(
                            {
                                'Titulo' : e.target.getAttribute('data-name'),
                                'Anio' : e.target.getAttribute('data-year'),
                                'Poster' : e.target.getAttribute('data-poster')
                         });
                    }
                }
            }  
        });
        var inputPelis = document.getElementById("input");
        inputPelis.addEventListener("keyup",function(e){
           if (e.keyCode === 13 && inputPelis.value !== "undefined") {
                programaPelis.llamada.buscar("https://www.omdbapi.com/?s="+inputPelis.value+"&apikey=2edf44fe",pintarResults);
            }else{
                console.log("No te entro por el aro")
            }
        });
        var botonLoggin = document.querySelector(".navegar");
        botonLoggin.addEventListener("click",function(e){
            if(firebase.auth().currentUser===null){
                programaPelis.logging.loggin();
            }else{
                firebase.auth().signOut();
                document.getElementById("icono").src = "img/icon.svg"
                document.getElementById("misPelis").style.display = 'none'
            }
        });
    };
    var pintarResults = function(datos){
        var peliculas = datos.Search
        document.querySelector(".container").innerHTML = "";
        peliculas.forEach(function(element){
            document.querySelector(".container").innerHTML +=
            `<div class="row text-center">
                    <div class="col-md-2">
                        <img src=${element.Poster}>
                    </div>
                    <div class="col-md-6">
                        <h3 id="title">${element.Title}</h3>
                    </div>
                    <div class="col-md-4">
                        <div class="row lista">
                            <div class="col-md-12">
                                <button type="button" data-poster="${element.Poster}" data-year="${element.Year}" data-id="${element.imdbID}" data-name="${element.Title}" data-type="guardar" class="btn btn-default">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
        });
    };
    return {referencia: mis_pelis, inicializarBotones: initButtons};
})();
/*programaPelis.firebase = (function(){
    var escritura = function(){
        
    }
    
    return {};
})();*/
programaPelis.logging = (function(){
    var usuario = function(){
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            document.getElementById("icono").src = result.user.photoURL
            document.getElementById("misPelis").style.display = 'block'
        }).catch(function(error) {
          console.error(error)
        });
    };
    return {loggin : usuario};
})();
 /*   leer: function(referencia){
        document.querySelector('.ficha-peli').style.display = 'none';
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
                            <div class="col-md-12">
                                <button type="button" data-id="${pelicula}" data-type="ver" class="btn btn-default">
                                    Ver
                                </button>
                            </div>
                            <div class="col-md-12">
                                <button type="button" data-id="${pelicula}" data-type="borrar" class="btn btn-default borrar">
                                    Borrar
                                </button>
                            </div>
                            <div class="col-md-12">
                                <button type="button" data-id="${pelicula}" data-type="guardar" class="btn btn-default borrar">
                                    Guardar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
            }
        }, function (errorObject) {
            console.log("Fallo en lectura de datos: " + errorObject.code);
        });
    },
    verDetalles: function(referencia){
        referencia.once('value', function (snapshot) {
            document.querySelector('.ficha-peli').style.display = 'block';
            document.querySelector('#titulo strong').innerHTML=snapshot.val().Title;
            document.querySelector('#anio strong').innerHTML=snapshot.val().Year;
            document.querySelector('.caption img').src = snapshot.val().Poster;
        })
    },
    borrarPeli:function (referencia) {
        document.querySelector('.ficha-peli').style.display = 'none';
        referencia.remove();
    },
}*/

programaPelis.configuracion.inicializar();