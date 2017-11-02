/*
1 - Diseña un programa que lea dos números y realice los siguientes cálculos:

Valor de su suma
Valor de su resta
Valor de su division
Valor de su producto

*/
// Tu solución
    function toCalculate(number1, number2, operation) {
        var result;
        if(operation === "+"){
            result = number1 + number2;
        }else if (operation === "-"){
            result = number1 - number2;
        }else if (operation === "*"){
            result = number1 * number2;
        }else if (operation === "/") {
            if(number2 !== 0){
                result = number1 / number2;
            }else {
                console.log("La división por 0 no está definida.");
            }
        }else {
            console.log("Por favor, introduzca una operación válida. \"+\"(suma) \"-\"(resta) \"*\"(multiplicación) \"/\"(división)");
        }
        if (result || result === 0) { //Verificación si la variable "result" tiene no está vacía.
            console.log("El resultado es: " + result);
        }
    }

// *************************************************
// 2 - Diseña un programa para calcular el porcentaje de hombres y mujeres en nuestro curso.

// Trucos:
// Calcular porcentajes (segmento*100)/total
// Tu solución
    function percentageFamaleAndMaleByGroup(men, women) {
        totalGroup = men + women;
        console.log("El porcentaje de mujeres en nuestro curso es de: " + (women*100)/totalGroup + " %");
        console.log("El porcentaje de hombres en nuestro curso es de: " + (men*100)/totalGroup + " %");
    }

// *************************************************
// 3 - Diseña un programa que lea dos números y los compare. Como resultado esperamos que nos diga cual es mayor... o si son iguales.
//
// Tu solución
    function toCompareNumbers(number1,number2) {
        if (typeof number1 == 'number' && typeof number2 == 'number') {
            if (number1 === number2) {
                console.log("Los números son iguales");
            } else {
                if (number1 > number2) {
                    console.log(number1 + " es mayor que " + number2);
                } else {
                    console.log(number2 + " es mayor que " + number1);
                }
            }
        }else {
            console.log("Esta función solo acepta número por parámetros.");
        }
    }


// *************************************************
// 4 - Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor.
//
// Tu solución
    function toFindBigNumbers(numbers) {// Recibe por parámetro un arreglo de 3 números o más
        var bigNumber = numbers[0];
        console.log("Entre los siguientes números:");
        for (var i = 0; i < numbers.length; i++) {//Lista todos los números del arreglo y guarda el mayor en la var "bigNumber"
            console.log(numbers[i] + ", ");
            if (bigNumber <= numbers[i]) {
                bigNumber = numbers[i];
            }
        }
        console.log("El número " + bigNumber + " es el mayor.");
    }

// *************************************************
// 5 - Diseña un programa que siga el siguiente proceso:
//
// Pedir por teclado tres números.
// Si el primero es negativo, debe sumar los otros dos
// Si no multiplicará los tres numeros
// Mostrar el resultado final incluyendo una referencia a la operación realizada.
//     // Tu solución
    function toOperateWhitNumbers() {
        var number1 = window.prompt("Por favor, intruduzca el primer número:");
        var number2 = window.prompt("Por favor, intruduzca el segundo número:");
        var number3 = window.prompt("Por favor, intruduzca el tercer número:");
        var result;
        if (number1 < 0) {
            result = parseInt(number2) + parseInt(number3);
            console.log("El resultado es: " + result + ". Operación realizada: Suma.");
        }else {
            result = parseInt(number1) * parseInt(number2) * parseInt(number3);
            console.log("El resultado es: " + result + ". Operación realizada: Multiplicación.");
        }
    }


// *************************************************
// 6 - Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
//
// Se aplica un 25% cuando:
// Estamos en los meses de invierno
// Y no es viernes o fin de semana.
//     // Tu solución
function productSales(price, day, month) {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDay();
    if (month == 12 || month < 4 && day >= 5 ) {
        return price * 0.25
    } else {
        return price
    }
}



// *************************************************
// 7 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es positivo o negativo.
//
//     // Tu solución
function positiveOrNegative() {
    var numero = prompt("Por favor, introduzca un número")
    numero = parseInt(numero);
    if(numero > 0){
        console.log("El número es positivo");
    }else if (numero < 0) {
        console.log("El número es negativo");
    }else {
        console.log("El número es cero");
    }
}



// *************************************************
// 8 - Diseña un algoritmo que al introducir un numero por teclado. Que nos diga si es par o impar.
//
//     // Tu solución
function oddOrEven() {
    var numero = prompt("Por favor, introduzca un número")
    numero = parseInt(numero);
    if (numero%2 == 0) {
        console.log("El número es par.");
    }else {
        console.log("El número es impar.");
    }
}



// *************************************************
// 9 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
//
// Características:
// La palabra clave es "Fictizia mola mucho"
// Solo existen tres intentos
// Si se pasan los tres intentos. Se despliega un mensaje informativo.
//     // Tu solución
function authorizeUsers() {
    var key;
    var attempts = 1;
    while (attempts <= 3) {
        key = prompt("Por favor, introduzca la palabra clave.");
        if (key === "Fictizia mola mucho") {
            window.alert("Bienvenido al sistema.");
            break;
        }
        if (attempts === 2) {
            window.alert("Atención: Le queda solo un intento para introducir correctamente la clave.");
        }
        if (attempts === 3) {
            window.alert("Lo sentimos, espere 5 min para volver a intentarlo.");
            break;
        }
        attempts ++;
    }
}



// *************************************************
// 10 - Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.
//
// Características:
// El usuario introduce tres números (día, mes, año)
// Validar la fecha. En caso de error incluir un mensaje informativo.
// Después de validar, devolvemos la fecha en formato DD/MM/AAAA
// Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
//     // Tu solución
