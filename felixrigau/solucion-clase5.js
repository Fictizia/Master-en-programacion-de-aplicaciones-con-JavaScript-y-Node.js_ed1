// 1 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.
//
// Esperamos que el número sea menor de 50
// numeros_romanos
//
//     // Tu solución

function toConvertToRomanNumerals() {
    var numeroString,
        numero,
        units,
        tens = "", //Verifica que el número tenga decenas
        one = "I",
        five = "V",
        ten = "X",
        fifty = "L";

    do { //Validar que el usuario entre un número menor que 50
        numeroString = prompt("Introduzca un número menor que 50:");
        numero = parseInt(numeroString);
    } while (numero < 0 || numero > 50);

    if (numero < 10) {
        units = parseInt(numeroString[0]); //Número de las unidades
    }else {
        units = parseInt(numeroString[1]); //Número de las unidades
        tens = parseInt(numeroString[0]); // Número de las decenas
    }

    if (tens) {

    }

    if (units == 4 || units == 9) {
        if (units == 4) {
            units = one + five;
        }else {
            units = one + ten;
        }
    } else if (units == 3 || units == 8) {
        if (units == 3) {
            units = one + one + one;
        }else {
            units = five + one + one + one;
        }
    } else if (units == 2 || units == 7) {
        if (units == 2) {
            units = one + one;
        }else {
            units = five + one + one;
        }
    } else if (units == 1 || units == 6) {
        if (units == 1) {
            units = one;
        }else {
            units = five + one;
        }
    } else if (units == 5){
        units = five;
    }else {
        units = "";
    }

    if (typeof tens == "number") {
        if (tens%5 == 0) {
            tens = fifty;
        }else if (tens%4 == 0) {
            tens = ten + fifty;
        }else {
            for (var i = 0, auxiliary = ""; i < tens; i++) {
                auxiliary += ten;
            }
            tens = auxiliary;
        }
    }

    if (numero == 50) {
        console.log("El número romano es: "+ fifty);
    }else {
        console.log("El número romano es: "+ tens + units);
    }
}


// 2 - Diseña un programa que nos confirme si un año es bisiesto o no.
//
// Caracteristicas de un año bisiesto:
// Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100
// O puede ser divisble entre 100 y entre 400
//     // Tu solución
// 3 - Diseña un programa que imprima los numeros del 1 al 100.
//
//     // Tu solución
// 4 - Diseña un programa que imprima los numeros del 100 al 0.
//
//     // Tu solución
// 5 - Diseña un programa que imprima los numeros pares entre 0 y 100.
//
//     // Tu solución
// 6 - Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
//
//     // Tu solución
// 7 - Diseña un programa que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
//
//     // Tu solución
// 8 - Diseña un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.
//
//     // Tu solución
// 9 - Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
//
//     // Tu solución
// 10 - Diseña un programa que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
//
//     // Tu solución
