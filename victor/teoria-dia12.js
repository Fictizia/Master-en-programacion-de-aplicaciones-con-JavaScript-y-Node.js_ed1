/* Ejercicios dia 12 */
//Ejercicio 1
var text = "lorem ipsum em posisd hene nem em";
var textSearch = "em";
var pos = 0, cont = 0;

while(pos >= 0) {
    pos = text.indexOf(textSearch, pos);
    
    if(pos >= 0) {
        pos++;
        cont++;
    }
}

console.log("Veces encontrado: " + cont);