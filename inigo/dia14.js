//Práctica 1 - Diseña un script para gestionar por consola una máquina expendedora

var cliente1 = {nombre: "Pepe García",usuario: "pepe",pass: "123",tipo: "cliente",presupuesto: 7,gasto: 10};
var cliente2 = {nombre: "Manolo Escobar",usuario: "manolo",pass: "1234",tipo: "cliente",presupuesto: 10,gasto: 6};
var cliente3 = {nombre: "Luis Martín",usuario: "luis",pass: "12",tipo: "admin",presupuesto: 3,gasto: 9};

var producto1 = {id: 1,nombre: "patatas",coste: 2,stock: 2};
var producto2 = {id: 2,nombre: "agua",coste: 1,stock: 10};
var producto3 = {id: 3,nombre: "sandwich",coste: 3,stock: 7};
var producto4 = {id: 4,nombre: "fanta",coste: 4,stock: 9};
var producto5 = {id: 5,nombre: "cafe",coste: 1,stock: 11};

var listaClientes = [cliente1,cliente2,cliente3];

var listaProductos = [producto1,producto2,producto3,producto4,producto5];

var maquina = {
    cliente: {
        saldo: verSaldo,
        gastos: verGastos,
        consumir: consumirProducto,
    },
    admin: {
        cliente: {
            agregar: agregarCliente,
            eliminar: eliminarCliente,
            saldo: {
                ver: verSaldo,
                recargar: recargarSaldo,
                resetear: resetearSaldo,
                quitar: quitarSaldo
            },
            gastos: verGastos,
            esCliente: esCliente
        },
        producto: {
            agregar: agregarProducto,
            eliminar: eliminarProducto,
            stock: consultarStock,
            esProducto: esProducto
        },
    }
}

function esCliente(user){
	var bool = false;
    for (var i = 0; i < listaClientes.length; i++) {
        if (listaClientes[i].usuario === user) {
            bool = true;
            break;
        }
    }
    return bool;
}

function agregarCliente(cliente){
	if (!maquina.admin.cliente.esCliente(cliente.usuario)) {
        if (cliente.nombre &&  cliente.pass && cliente.usuario && cliente.tipo && cliente.presupuesto) {
            listaClientes.push(cliente);
            console.log("Usuario agregado");
            return true;
        } else {
            console.log("Introduzca todos los datos");
            return false;
        }
    } else {
        console.log("El usuario ya existe");
        return false;
    }
}

function eliminarCliente(user){
    if (maquina.admin.cliente.esCliente(user)) {
        for (var i = 0; i < listaClientes.length; i++) {
            if (listaClientes[i].usuario === user) {
                listaClientes.splice(i, 1);
                break;
            }
        }
        console.log("Usuario eliminado");
        return true;

    } else {
        console.log("No existe el usuario");
        return false;
    }
}
function verSaldo(user, pass){
	var saldoRestante = -1;
    for (var i = 0; i < listaClientes.length; i++) {
        if (listaClientes[i].usuario === user && listaClientes[i].pass === pass) {
            saldoRestante = listaClientes[i].presupuesto;
            break;
        }
    }
    console.log("Tienes un saldo de: " + saldoRestante);
    return saldoRestante;
}

function recargarSaldo(){
	console.log("hola!");
}

function resetearSaldo(){
	console.log("hola!");
}

function quitarSaldo(){
	console.log("hola!");
}

function verGastos(user, pass){
	var gastoTotal = false;
    for (var i = 0; i < listaClientes.length; i++) {
        if (listaClientes[i].usuario === user && listaClientes[i].pass === pass) {
            gastoTotal = listaClientes[i].gasto;
            break;
        }
    }
    console.log("Llevas un gasto de: " + gastoTotal);
    return gastoTotal;
}

function agregarProducto(producto){
	if (!maquina.admin.producto.esProducto(producto.nombre)) {
        if (producto.id &&  producto.nombre && producto.coste && producto.stock) {
            listaProductos.push(producto);
            console.log("Producto agregado");
            return true;
        } else {
            console.log("Introduzca todos los datos");
            return false;
        }
    } else {
        console.log("El producto ya existe");
        return false;
    }
}

function eliminarProducto(nomProd){
	if (maquina.admin.producto.esProducto(nomProd)) {
        for (var i = 0; i < listaProductos.length; i++) {
            if (listaProductos[i].nombre === nomProd) {
                listaProductos.splice(i, 1);
                break;
            }
        }
        console.log("Producto eliminado");
        return true;

    } else {
        console.log("No existe el producto");
        return false;
    }
}

function consumirProducto(user, pass, nomProd){
    var logado = -1;
    var encontrado = -1;
    var stock = false;
    for (var i = 0; i < listaClientes.length; i++) {
        if (listaClientes[i].usuario === user && listaClientes[i].pass === pass) {
            console.log("Usuario logado correctamente");
            logado = i;
            break;
        }else{
            console.log("Usuario incorrecto");
            logado = -1;
            break;
        }
    }
    if(logado > -1){
        for (var i = 0; i < listaProductos.length; i++) {
            if (listaProductos[i].nombre === nomProd) {
                console.log("Producto encontrado");
                encontrado = i;
                break;
            }else{
                console.log("Producto no encontrado");
                encontrado = -1;
                break;
            }
        }
        if(encontrado > -1){
            if(listaProductos[encontrado].stock > 0){
                stock = true;
            }else{
                console.log("No hay stock de este producto");
                stock = false;
            }
        }
        if(stock === true){
            if(listaClientes[logado].presupuesto >= listaProductos[encontrado].coste && listaClientes[logado].presupuesto > 0){
                listaClientes[logado].presupuesto -= listaProductos[encontrado].coste;
                listaClientes[logado].gasto += listaProductos[encontrado].coste;
                if(listaProductos[encontrado].stock > 0){
                    listaProductos[encontrado].stock = listaProductos[encontrado].stock - 1;
                }
                console.log("Has comprado " + listaProductos[encontrado].nombre + " por " + listaProductos[encontrado].coste + " fondos. Fondos restantes: " + listaClientes[logado].presupuesto );
                console.log("En total llevas gastados " + listaClientes[logado].gasto + " fondos");
                console.log("Qudan " + listaProductos[encontrado].stock + " unidades de " + listaProductos[encontrado].nombre);
            }else{
                console.log("No tienes fondos suficientes para comprar este producto");
            }
        }
    }
}

function consultarStock(nomProd){
	for (var i = 0; i < listaProductos.length; i++) {
        if (listaProductos[i].nombre === nomProd) {
            if(listaProductos[i].stock > 0){
                console.log("Quedan " + listaProductos[i].stock + " unidades " + "de " + listaProductos[i].nombre);
            }else{
                console.log("No hay stock de este producto");
            }
            break;
        }else{
            console.log("Producto no encontrado");
            break;
        }
    }
}

function esProducto(nom){
	var bool = false;
    for (var i = 0; i < listaProductos.length; i++) {
        if (listaProductos[i].nombre === nom) {
            bool = true;
            break;
        }
    }
    return bool;
}