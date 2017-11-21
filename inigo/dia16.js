//1 - Saca una lista de los cursos disponibles en Fictizia en las 4 areas de formación y conviertelo en Markdown. Características:
var listaH2 = document.querySelectorAll('#areas section h2');
var cursos = [];

var listaCursos = document.querySelectorAll('#areas section ul li a');
for (var i = 0; i < listaCursos.length; i++) {
    var curso = new Object();  
        curso.nombre = listaCursos[i].children[0].innerText;  
        curso.enlace = listaCursos[i].href;  
        curso.horas = listaCursos[i].children[1].innerText;
        curso.categoria = listaCursos[i].parentNode.parentNode.parentNode.children[0].innerText;
    cursos.push(curso);
}

console.log("# Cursos de Fictizia");
for (var i = 0; i < listaH2.length; ++i) {
    var elemento = listaH2[i].innerText;
    console.log("## ", elemento);
    for (var j = 0; j < cursos.length; ++j) {
        if(cursos[j].categoria === elemento){
            console.log("- [" + cursos[j].nombre + " (" + cursos[j].horas + ")](" + cursos[j].enlace + ")" );
        }
    }
    //cont = 0;
}
//2 - Hagamos la web del Metro más divertida.

var listaLineas = document.querySelectorAll('.bloquet');

for (var i = 0; i < listaLineas.length -1; i++) {//-1 porque el ultimo elemento esta vacio
    console.log(listaLineas[i].querySelector('.circulacion > .txt > a').innerText);
}

//3 - Diseña un script que sustituya todas las imágenes de las entradas de Tecnología del Mundo Today por imágenes dummy de gatitos.
var imagenes = document.querySelectorAll('div.td-module-thumb > a > img');

for(var i = 0; i < imagenes.length; i++){
	imagenes[i].src = "http://www.hillspet.es/images/en-gb/img-UnderstandingKitten.jpg";
	imagenes[i].srcset = "http://www.hillspet.es/images/en-gb/img-UnderstandingKitten.jpg";
}