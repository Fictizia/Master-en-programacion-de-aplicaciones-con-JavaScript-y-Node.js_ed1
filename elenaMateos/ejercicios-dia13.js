var nombres = ["Oscar", "etc"];
var telefonos = [9897667, "..."];
var boleanos = [false, "etc"];
var agenda = [];

function crearArray (){
    for(var i = 0; i < nombres.length; i++){
       // agenda[i] = nombres[i] + ',' + telefonos[i] + ',' + boleanos[i];
        agenda.push([nombres[i],telefonos[i],boleanos[i]]);
    }
     

}
crearArray();
typeof(agenda);


// Variante

var nombres = ["Oscar", "Amparo", "Jose Luí", "Rigoberto", "etc"];
var telefonos = [9897667, 9897688, 9897148, "..."];
var boleanos = [false, false, , false, false, , false, false, "etc"];
var agenda = [];


function crearArray (){
    for(var i = 0; i < nombres.length; i++){
       // agenda[i] = nombres[i] + ',' + telefonos[i] + ',' + boleanos[i];
        agenda.push([nombres[i],telefonos[i],boleanos[i]]);
    }
     

}
crearArray();
typeof(agenda);