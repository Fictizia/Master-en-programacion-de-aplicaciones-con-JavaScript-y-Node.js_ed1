/* Ejercicios dia 14 */
//Ejericio 1

var maquina = {
    clientes: {
        user: {
            getSaldo: function() {
            
            },
            getGastos: function() {
                
            }
        },
        productos: {
            consumir: function() {
                
            }
        }
    },
    admin: {
        clientes: {
            agregar: function() {
                
            },
            eliminar: function() {
                
            },
            agregarSaldo: function() {
                
            },
            retirarSaldo: function() {
                
            },
            resetearSaldo: function() {
                
            }
        },
        productos: {
            agregar: function() {
                
            },
            eliminar: function() {
                
            },
            getExistencias: function() {
                
            },
            getDisponibles: function() {
                
            },
            imprimirInforme: function() {
                
            }
        }
    }
};

var usuarios = [{nombre: "Victor", usuario: "vmrodriguez", pass: "123456789", tipo: "cliente", presupuesto: "200"},
                {nombre: "Antonio", usuario: "alguerrero", pass: "987654321", tipo: "cliente", presupuesto: "160"},
                {nombre: "Pepe", usuario: "psherrero", pass: "123789456", tipo: "cliente", presupuesto: "60"}];

var productos = [{codigo: "1234", producto: "kitkat", coste: "10", existencias: "15"},
                 {codigo: "1235", producto: "sandwich jamon y queso", coste: "15", existencias: "32"},
                 {codigo: "1236", producto: "agua", coste: "12", existencias: "8"},
                 {codigo: "1237", producto: "ositos haribo", coste: "5", existencias: "18"},
                 {codigo: "1238", producto: "palmera de chocolate", coste: "10", existencias: "3"}];
                 

function init() {
    var login = false;
    var actualUser = {};
    
    do {
        var user = prompt("Introduce el usuario:");
        
        if(user) {
            usuarios.forEach(function(e, i) {
                if(user === e.usuario) {
                    actualUser = e;
                }
            });
            
            if(actualUser.length >= 0) {
                
            }
        }
    } while(!login);
}