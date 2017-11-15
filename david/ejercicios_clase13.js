//Ejercicio 1
var array1 = ["Oscar", "Victor", "Iñigo"]
var array2 = [65238, 987456, 632145]
var array3 = [false, true, false,true]
var newArray = [];
var mayorLength = 0;

var mayorLength = Math.max(array1.length, array2.length, array3.length);
for (var i = 0; i<mayorLength; i++){
    newArray.push([array1[i],array2[i],array3[i]])
}

console.log(newArray.toString());


//Ejercicio 2
var array1 = []
for(var i =0;i<100;i++){
    array1.push(Math.floor(Math.random()*10));
}
var arrayPar = array1.filter(par);
var arrayImPar = array1.filter(impar);

console.log(arrayPar.sort().toString());
console.log(arrayImPar.sort().toString());

function par(elemento){
    return elemento%2 === 0;
}
function impar(elemento){
    return elemento%2 !== 0;
}

//Ejercicio 3
var arrayAgenda = []
var opc = 0;
do{
    opc = prompt("Que desea hacer \n 1. Añadir gente\n 2. Darse de baja\n");
}while(isNaN(opc) || opc > 2 || opc < 0);

switch (opc) {
    case 1:
        // code
        break;
    case 2: 
        break;
    default:
        break;
}

function anadirPeople(arrayAgenda){
    
    return arrayAgenda;
}