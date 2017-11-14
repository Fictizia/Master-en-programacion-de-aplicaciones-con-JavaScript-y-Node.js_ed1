

/* Ejercicios teoria dia 8 */
//Ejercicio 1.1
var a = 4, b = 7;

if(a > b) { 
    console.log(a + " es mayor que " + b); 
} else if(a < b) { 
    console.log(a + " es menor que " + b);
} else { 
    console.log("Ambos números son iguales");
}

//Ejercicio 1.2
var a = 4, b = 7;

console.log(a > b ? a + " es mayor que " + b : a < b ? a + " es menor que " + b : "Ambos números son iguales");

//Ejercicio 1.3
var a = 4, b = 7;

switch(true) {
    case a > b: 
        console.log(a + " es mayor que " + b); 
        break; 
    case a < b: 
        console.log(a + " es menor que " + b);
        break;
    case a === b:
        console.log("Ambos números son iguales");
        break;
}

//Ejercicio 2.1
var a = 4, b = 2, c = 5, num = 0;

if(a > b && a > c) {
    num = a;
} else if(b > a && b > c) {
    num = b;
} else { 
    num = c;
}

console.log(num + " es el mayor");

//Ejercicio 2.2
var a = 4, b = 2, c = 5, num = 0;

console.log(a > b && a > c ? a + " es el mayor" : b > a && b > c ? b + " es el mayor " : c + " es el mayor");

//Ejercicio 2.3
var a = 4, b = 2, c = 5, num = 0;

switch(true) {
    case a > b && a > c:
        num = a;
        break;
    case b > a && b > c:
        num = b;
        break;
    default: num = c;
        break;
}

console.log(num + " es el mayor");

//Ejercicio 3.1
var a = 4, b = 5, c = 6, res = 0, op = "";

if(a < 0) {
    res = b + c;
    op = "Suma";
} else { 
    res = a * b * c;
    op = "Multiplicacion";
}

console.log("Operacion: " + op + " / resultado: " + res);

//Ejercicio 3.2
var a = 4, b = 5, c = 6;

console.log(a < 0 ? "operacion: Suma / resultado: " + (b + c) : "operacion: Multiplicacion / resultado: " + (a * b * c));

//Ejercicio 3.3
var a = 4, b = 5, c = 6, res = 0, op = "";

switch(true) {
    case a < 0 :
        res = b + c;
        op = "Suma";
        break;
    default: 
        res = a * b * c;
        op = "Multiplicacion";
        break;
}

console.log("Operacion: " + op + " / resultado: " + res);
