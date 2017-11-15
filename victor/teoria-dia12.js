/* Ejercicios dia 12 */
//Ejercicio 1
var text = "lorem ipsum em posisd hene nem em ";
var pos = 0;
var cont = 0;

while(pos >= 0) {
    pos = search(text, "em", pos);
    
    if(pos >= 0) {
        pos++;
        cont++;
    }
}

console.log("Veces encontrado: " + cont);

function search(text, search, start) {
    return text.indexOf(search, start);
    
}