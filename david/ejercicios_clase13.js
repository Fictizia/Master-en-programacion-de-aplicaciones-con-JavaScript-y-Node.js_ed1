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
    opc = parseInt(prompt("Que desea hacer: \n1. Añadir gente\n2. Darse de baja\n3. Salir"));

    switch (opc) {
        case 1:
            arrayAgenda = anadirPeople(arrayAgenda);
            console.log(arrayAgenda);
            break;
        case 2: 
            arrayAgenda = borrarPeople(arrayAgenda);
            console.log(arrayAgenda);
            break;
        case 3: 
            alert("Que pases un buen día!! 8===========D~~~~");
            console.log(arrayAgenda);
            break;
        default: alert("No contemplado")
            break;
    }
}while(isNaN(opc) || opc !== 3);


function borrarPeople(arrayAgenda){
    var nombre = prompt("Introduce un nombre a borrar: ");
    var pos = validar(nombre,arrayAgenda);
    if(pos !==-1){
        delete arrayAgenda[pos];
         alert("El nombre ha sido borrado.");
    }else{
         alert("El nombre a borrar no existe.");
    }
    return arrayAgenda;
}

function anadirPeople(arrayAgenda){
    var nombre = prompt("Introduce un nombre a añadir: ").toLocaleLowerCase();
    var pos = validar(nombre,arrayAgenda);
    if(pos===-1){
        anadirAsientosVacios(nombre,arrayAgenda);
        alert("Registrado con exito")
    }else{
        alert("Este asistente ya está registrado");
    }
    return arrayAgenda;
}

function validar(nombre,arrayAgenda){
    var pos = -1;
    if(arrayAgenda.indexOf(nombre)!==-1){
        pos = arrayAgenda.indexOf(nombre);
    }
    return pos;
}

function anadirAsientosVacios(nombre,arrayAgenda){
    var posVacia = 0;
    var boolean = false;
    for(var i=arrayAgenda.length; i>=0; i--){
        if(typeof arrayAgenda[i] === "undefined"){
            posVacia = i;
            boolean = true;
        }
    }
    if(boolean){
        arrayAgenda[posVacia] = nombre;
    }else{
        arrayAgenda.push(nombre);
    }
}