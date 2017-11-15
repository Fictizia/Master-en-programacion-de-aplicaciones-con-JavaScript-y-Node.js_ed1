'use strict':
/*
### 1 - Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.

Características:

· La palabra clave es "Fictizia mola mucho"
· Solo existen tres intentos
· Si se pasan los tres intentos. Se despliega un mensaje informativo.
*/

// Usando for __

var mensaje = prompt('Dime la contraseña');

for (var i = 1; i < 3; i++) {
  if (mensaje === 'Fictizia mola mucho') {
    alert('Contraseña correcta');
    i = 3;
  }else{
    console.log('Llevas ' + i + ' intentos, te quedan ' + (3 -i));
    alert('Contraseña incorrecta');
    mensaje = prompt('Vuelve a intentarlo');

  }
}
// Usando while y break __

var mensaje = prompt('Dime la contraseña');
var intentos = 1;

while (mensaje !== 'Fictizia mola mucho') {
  alert('Contraseña incorrecta, te quedan ' + (3 - intentos));
  mensaje = prompt('Dime la contraseña');
  intentos = intentos +1;
  if (intentos === 3) {
    break;
  }
}

//Usando Do...While __
var mensaje = prompt('Dime la contraseña');
var intentos = 1;
do {
  mensaje = prompt('Contraseña incorrecta, the quedan ' + (3 - intentos) + ' intentos');
  intentos = intentos + 1;
} while (mensaje == 'Ficticia mola mucho' || (intentos < 3));

    // AAAAAAARRRRRRRHHHHHHH!!!!!!!!!!!!!!!!!!!!!!!!

/*
2 - Diseña un algoritmo que imprima los numeros del 1 al 100.
*/
// Usando for __

  var numero = 1;

  for (var i = 0; i < 99; i++) {
    console.log(numero);
    numero = numero + 1;
  }

//Usando while __

var numero = 1;
while (numero < 100) {
  console.log(numero);
  numero = numero + 1;
}

// Usando Do...While __
var numero = 1;

do {
  console.log(numero);
  numero = numero + 1;
} while (numero < 100);

/*
3 - Diseña un algoritmo que imprima los numeros del 100 al 0.
*/
// Usando for
var numero = 100;

for (var i = 100; i > 0; i--) {
  console.log(numero);
  numero = numero - 1;
}
// Usando while
var numero = 100;

while (numero > 0) {
  console.log(numero);
  numero = numero - 1
}
// Usando Do...While
var numero = 100;

do {
  console.log(numero);
  numero = numero - 1

} while (numero > 0);

/*
4 - Diseña un algoritmo que imprima los numeros pares entre 0 y 100.
*/
// Usando for

var numero = 0;

for (var i = 0; i < 50; i++) {
  console.log(numero);
  numero = numero +2;
}

// Usando while
var numero = 0;

while (numero < 100) {
  console.log(numero);
  numero = numero + 2;
}
// Usando Do...While
var numero = 0;

do {
  console.log(numero);
  numero = numero +2;

} while (numero < 100);

/*
5 - Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
*/
// Usando for (desestructurado)
var numeroUsuario = prompt('Dame un número e imprimiré los impares entre ese número y los 50 siguientes =)!!');
var numeroUsuario = parseInt(numeroUsuario);
var numeroFinal = numeroUsuario + 50;

if (numeroUsuario%2 === 0) {
  numeroUsuario = numeroUsuario - 1;
}

for (; numeroUsuario < numeroFinal ; ) {
  numeroUsuario = numeroUsuario + 2
  console.log(numeroUsuario);
}


  // Usando while
var numeroUsuario = prompt('Dame un número e imprimiré los impares entre ese número y los 50 siguientes =)!!');
var numeroUsuario = parseInt(numeroUsuario);
var numeroFinal = numeroUsuario + 50;

if (numeroUsuario%2 === 0) {
  numeroUsuario = numeroUsuario -1;
}

while (numeroUsuario < numeroFinal) {
  numeroUsuario = numeroUsuario + 2
  console.log(numeroUsuario);
}
// Usando Do...While
var numeroUsuario = prompt('Dame un número e imprimiré los impares entre ese número y los 50 siguientes =)!!');
var numeroUsuario = parseInt(numeroUsuario);
var numeroFinal = numeroUsuario + 50;

if (numeroUsuario%2 === 0) {
  numeroUsuario = numeroUsuario - 1;
}

do {
  numeroUsuario = numeroUsuario + 2
  console.log(numeroUsuario);

} while (numeroUsuario < numeroFinal);

/*
6 - Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de
números impares partiendo de un número dado por el usuario
*/
// Usando for
var numeroUsuario = prompt('Dame un número!  ^.^ Así puedo jugar!');
numeroUsuario = parseInt(numeroUsuario);
var numeroFinal = numeroUsuario + 50;
var esPar = 0;
var esImpar = 0;
var totalPar = 0;
var totalImpar = 0;



if (numeroUsuario%2 === 0) {
  esPar = numeroUsuario;
  totalPar = numeroUsuario;
  totalImpar = numeroUsuario - 1;
}else {
  esImpar = numeroUsuario;
  totalPar = numeroUsuario - 1;
  totalImpar = numeroUsuario;
}

for (var i = 0; i < numeroFinal; i++) {
  esPar = esPar + 2;
  totalPar = totalPar + esPar;

  esImpar = esImpar + 2;
  totalImpar = totalImpar + esImpar;
}
console.log(totalPar);
console.log(totalImpar);


// Usando while >.< no sale
var numeroUsuario = prompt('Dame un número!  ^.^ Así puedo jugar!');
numeroUsuario = parseInt(numeroUsuario);
var numeroFinal = numeroUsuario + 50;
var esPar = 0;
var esImpar = 0;
var totalPar = 0;
var totalImpar = 0;



if (numeroUsuario%2 === 0) {
  esPar = numeroUsuario;
  totalPar = numeroUsuario;
  totalImpar = numeroUsuario - 1;
}else {
  esImpar = numeroUsuario;
  totalPar = numeroUsuario - 1;
  totalImpar = numeroUsuario;
};
while (numeroUsuario < numeroFinal) {
totalPar = totalPar + esPar;
esPar = esPar +2;
totalImpar = totalImpar + esImpar;
esImpar = esImpar + 2;
numeroUsuario = numeroUsuario + 1;
};

console.log(totalPar);
console.log(totalImpar);



// Usando Do...While
var numeroUsuario = prompt('Dame un número!  ^.^ Así puedo jugar!');
numeroUsuario = parseInt(numeroUsuario);
var numeroFinal = numeroUsuario + 50;
var esPar = 0;
var esImpar = 0;
var totalPar = 0;
var totalImpar = 0;



if (numeroUsuario%2 === 0) {
  esPar = numeroUsuario;
  totalPar = numeroUsuario;
  totalImpar = numeroUsuario - 1;
}else {
  esImpar = numeroUsuario;
  totalPar = numeroUsuario - 1;
  totalImpar = numeroUsuario;
};
do {
  totalPar = totalPar + esPar;
  esPar = esPar + 2;
  totalImpar = totalImpar + esImpar;
  esImpar = esImpar + 2;
  numeroUsuario = numeroUsuario + 1;

} while (numeroUsuario < numeroFinal);

console.log(totalPar);
console.log(totalImpar);
/*
7 - Diseña un algoritmo introducido un numero y pasarlo a número romanos.

__Esperamos que el número sea menor de 50__
*/

// Usando for
var numeroUsuario = prompt('Dame un número igual o menor a 50 y lo pasaré a números romanos =)');
numeroUsuario = parseInt(numeroUsuario);
var numeroRomano = '';




// Usando while

// Usando Do...While
