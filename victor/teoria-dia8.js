/* Ejercicios teoria dia 8 */
/****** Ejercicio 1 ******/
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

/****** Ejercicio 2 ******/
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

/****** Ejercicio 3 ******/
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

/****** Ejercicio 4 ******/
//Ejercicio 4.1
var price = 10, desc = 0;
var date = new Date(), day = date.getDay(), month = date.getMonth();

if(month >= 11 && month < 2 && day < 5) {
    desc = price * 25 / 100;
    price -= desc;
}

console.log("El precio final es: " + price);

//Ejercicio 4.2
var price = 10, desc = 0, priceDesc = 0;
var date = new Date(), day = date.getDay(), month = date.getMonth();

desc = price * 25 / 100;
priceDesc = price - desc;

price = month >= 11 && month < 2 && day < 5 ? priceDesc : price;

console.log("El precio final es: " + price);

//Ejercicio 4.3
var price = 10, desc = 0;
var date = new Date(), day = date.getDay(), month = date.getMonth();

switch(true) {
    case month >= 11 && month < 2 && day < 5:
        desc = price * 25 / 100;
        price -= desc;
        break;
}

console.log("El precio final es: " + price);

/****** Ejercicio 5 ******/
//Ejercicio 5.1
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

if(num >= 0) {
    console.log("El número es positivo");
} else {
    console.log("El número es negativo");
}

//Ejercicio 5.2
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

num >= 0 ? console.log("El número es positivo") : console.log("El número es negativo");

//Ejercicio 5.3
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

switch(true) {
    case num >= 0:
        console.log("El número es positivo");
        break;
    default:
        console.log("El número es negativo");
        break;
}

/****** Ejercicio 6 ******/
//Ejercicio 6.1
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

if(num %2 == 0) {
    console.log("El número es par");
} else {
    console.log("El número es impar");
}

//Ejercicio 6.2
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

num %2 == 0 ? console.log("El número es par") : console.log("El número es impar");

//Ejercicio 6.3
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

switch(true) {
    case num %2 == 0:
        console.log("El número es par");
        break;
    default:
        console.log("El número es impar");
        break;
}

/****** Ejercicio 7 ******/
//Ejercicio 7.1
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

if((num %4 == 0 && num %100 != 0) || num %400 == 0) {
    console.log("Es bisiesto");
} else {
    console.log("No es bisiesto");
}

//Ejercicio 7.2
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

(num %4 == 0 && num %100 != 0) || num %400 == 0 ? console.log("Es bisiesto") : console.log("No es bisiesto");

//Ejercicio 7.3
var num = prompt("Escribe un número");

while(isNaN(num)) {
    num = prompt("Debe introducir un número");
}

switch(true) {
    case ((num %4 == 0 && num %100 != 0) || num %400 == 0):
        console.log("Es bisiesto");
        break;
    default:
        console.log("No es bisiesto");
        break;
}