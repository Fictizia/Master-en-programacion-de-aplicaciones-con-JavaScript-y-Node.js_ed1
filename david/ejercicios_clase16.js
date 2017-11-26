//Ejercicio 1
var global = document.querySelectorAll('#areas section');
var duracionCurso,nombreCurso,nombreStrong,contador,url;
for (var i=0; i<global.length; i++){
    console.log("\n##"+global[i].getElementsByTagName('h2')[0].innerText+"##\n");
    var filtro = global[i].querySelectorAll('li');
    console.log("**Total de cursos: "+filtro.length+"**");
    for (var j=0; j<filtro.length; j++){
        nombreStrong = filtro[j].getElementsByTagName('strong');
        duracionCurso = filtro[j].getElementsByClassName('contextualInfo');
        url = filtro[j].getElementsByTagName('a')[0].href;
        console.log("["+nombreStrong[0].innerText.trim()+"("+duracionCurso[0].innerText+")] "+url);
    }
}


//Ejercicio 2

var global = document.querySelectorAll('.bloquet');

global.forEach(function(e,i){
    var numLinea = e.querySelectorAll('.imagen .txt');
    var estadoLinea = e.querySelectorAll('.circulacion .txt');
    console.log("\n"+ numLinea[0].innerText+" : "+estadoLinea[0].innerText)
});

//Ejercicio 3
var global = document.querySelectorAll('.td-module-thumb img');

global.forEach(function(e,i){
    e.src = "http://www.frikiweb.com/wp-content/uploads/2014/08/giphy.gif";
    e.srcset = "http://www.frikiweb.com/wp-content/uploads/2014/08/giphy.gif"
});