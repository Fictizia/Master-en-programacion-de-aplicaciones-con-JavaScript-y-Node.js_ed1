## Ejercicio 1

var cadena = "Hola me llamo Pepe y soy calvo";
var aBuscar = prompt("Introduce una cadena para buscar: ");
var contador = 0;
var posicionEncontrada = 0;

while(posicionEncontrada !== -1){
    console.log(posicionEncontrada);
    posicionEncontrada = buscarCadena(cadena, aBuscar, posicionEncontrada);
    if(posicionEncontrada !== -1){
        contador ++;
        posicionEncontrada++;
    }
}

console.log(contador);

function buscarCadena(cadena, aBuscar, posicionEncontrada){
    return cadena.indexOf(aBuscar, posicionEncontrada);
}