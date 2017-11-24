/* Ejercicios dia 13 */
//Ejercicio 1
var array1 = ["Oscar ", "David ", "Jose ", "Pepe "];
var array2 = [9897667, 46545, 4545615];
var array3 = [false, true, false];

array1.forEach(function(e, i) {
    array1[i] = array1[i].concat(array2[i], array3[i]);
});

console.log(array1);

//Ejercicio 2
var pares = [], impares = [];

for(var i = 0; i < 100; i++) {
    var ran = Math.floor(Math.random() * (10 - 0) + 0);
    
    if(ran %2 === 0) {
        pares[pares.length] = ran;
    } else {
        impares[impares.length] = ran;
    }
}
pares = pares.sort();
impares = impares.sort();
console.log(pares);
console.log(impares);

//Ejercicio 3
var asis = ["Pedro", "Maria", "Pepe", "Pepito", "Manolo", "Juan", "Rita"];

var person = {
    verify: function(array) {
        var pos = 0;
        var nom = "";
        
        while(pos >= 0) {
            nom = prompt("Introduce el nombre de la persona que desea insertar:");
            
            if(nom) {
                pos = this.search(asis, nom);
            
                if(pos >= 0) { alert("La persona ya existe, vuelva a intentarlo :)"); }
            } else {
                break;
            }
        }
        
        if(pos === -1) {
            this.add(array, nom);
        }
    },
    add: function(array, nom) {
        var pos = -1;
    
        for(var i = 0; i < array.length; i++) {
            if(typeof array[i] === "undefined" || array[i] === undefined) {
                pos = i;
                i = array.length;
            }
        }
        
        if(pos === -1) {
            array.push(nom);
        } else {
            array[pos] = nom;
        }
        
        pos = pos === -1 ? asis.length : pos;
        alert("Persona añadida correctamente. Su identificador es: " + pos);
    },
    delete: function(array) {
        console.log(asis);
        
        if(array.length > 0) {
            var pos = -1;
                
            while(pos === -1) {
                var nom = prompt("Introduce el nombre de la persona que desea eliminar:");
                
                if(nom) {
                    pos = this.search(asis, nom);
                    
                    if(pos === -1) { alert("La persona que desea eliminar no existe, vuelva a intentarlo :)"); }
                } else {
                    break;
                }
            }
            
            if(pos >= 0) {
                if(menu.delete()) {
                    delete array[pos];
                }
            }
        } else {
            alert("No hay asistentes.");
        }
    },
    search: function(array, nomSearch) {
        var pos = -1;
    
        asis.forEach(function(e,  i) {
            e = e.toLowerCase();
            nomSearch = nomSearch.toLowerCase();
            
            if(e === nomSearch) {
                pos = i;
            }
            
        });
        
        return pos;
    }
};

var menu = {
    open: function() {
        do {
            var option = prompt("Elija una opción: \n 1: Añadir \n 2: Eliminar \n 3: Salir");
        
            option = parseInt(option);
            
            switch(option) {
                case 1:
                    person.verify(asis);
                    break;
                case 2:
                    person.delete(asis);
                    break;
                case 3:
                    alert("Pos si no quieres hacer nada talue!!!");
                    break;
                default:
                    break;
            }
        } while(isNaN(option) || option !== 3);
    },
    delete: function() {
        return confirm("¿Realmente desea eliminar esta persona?");
    }
};