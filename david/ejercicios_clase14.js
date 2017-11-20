var maquinaExpendedora = {
        admin: {
            secreto: "claseFictizia"
        },
        herramientas: {
            esUsuario: function(usuario) {
                var existe = false;
                for (var i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuario === usuario) {
                        existe = true;
                        break;
                    }
                }
                return existe;
            },
            esProducto: function(datos){
                if(datos){
                    datos.producto = datos.producto || "N/A";
                    datos.codigo = datos.codigo || "N/A"
                    var existe = false;
                    for (var i = 0; i < productos.length; i++) {
                        if (productos[i].nombre === datos.producto || productos[i].codigo === datos.codigo) {
                            existe = true;
                            break;
                        }
                    };
                    return existe;
                } else {
                    return -1
                }
            }
        },
        gestionProducto: {
            controlStock: function(clave){
                if (clave === maquinaExpendedora.admin.secreto) {
                    var mensaje = "************************\n";
                    mensaje += "En total tenemos "+productos.length+" productos\n"
                    if (productos.length > 0){
    
                        for (var i = 0; i < productos.length; i++) {
                            mensaje += "----------------------------\n";
                            mensaje += "Nombre: "+productos[i].nombre + "\n";
                            mensaje += "Código: "+productos[i].codigo + "\n";
                            mensaje += "Stock: "+productos[i].stock + "\n";
                            mensaje += "Disponibilidad: "+productos[i].disponibilidad + "\n";
                        };  
    
                    } else {
                        mensaje += "--- no hay productos en la maquina ---\n";
                    }
    
                    mensaje += "************************";
                    console.info(mensaje); 
    
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }            
            },
            agregar: function(clave, objeto){
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (!maquinaExpendedora.herramientas.esProducto({producto: objeto.nombre})) {
                        if (objeto.nombre && objeto.codigo && objeto.precio && objeto.disponibilidad && objeto.stock) {
                            productos.push(objeto);
                            console.info("Producto Agregado con exito");
                            return true;
                        } else {
                            console.warn("ERROR - Faltan datos!");
                            return false;
                        }
                    } else {
                        console.warn("ERROR - El Producto ya existe!");
                        return false;
                    }                
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
    
            },
            eliminar: function(clave, objeto){
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (maquinaExpendedora.herramientas.esProducto({producto: objeto.nombre})) {
                        for (var i = 0; i < productos.length; i++) {
                            if (productos[i].nombre === objeto.nombre) {
                                productos.disponibilidad = false;
                                break;
                            }
                        }
                        console.info("Producto Eliminado con exito");
                        return true;
    
                    } else {
                        console.warn("ERROR - El producto no existe!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
            }
        },
        gestionClientes: {
            agregarSaldo: function (clave, usuario, cantidad) {
                
                cantidad = cantidad || 0;
                cantidad = parseInt(cantidad);
    
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                        var clienteID;
                        for (var i = 0; i < clientes.length; i++) {
                            if (clientes[i].usuario === usuario) {
                                clienteID = i;
                                clientes[i].presupuesto += cantidad;
                                break;
                            }
                        }
                        console.info("Usuario actualizado con exito");
                        console.info("Saldo actual de "+clientes[clienteID].usuario+ " es de " + clientes[clienteID].presupuesto);
                        return true;
    
                    } else {
                        console.warn("ERROR - El usuario no existe!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
            },
            retirarSaldo: function (clave, usuario, cantidad) {
                
                cantidad = cantidad || 0;
                cantidad = parseInt(cantidad);
    
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                    
                            var clienteID;
                            for (var i = 0; i < clientes.length; i++) {
                                if (clientes[i].usuario === usuario) {
                                    clienteID = i;
                                    break;
                                }
                            }    
                        if(cantidad <= clientes[clienteID].presupuesto){
                            clientes[clienteID].presupuesto -= cantidad;
                            console.info("Usuario actualizado con exito");
                            console.info("Saldo actual de "+clientes[clienteID].usuario+ " es de " + clientes[clienteID].presupuesto);
                            return true;                        
                        } else {
                            console.warn("ERROR - Saldo insuficiente");
                            console.info("Diferencia: ", clientes[clienteID].presupuesto - cantidad);
                            return false; 
                        }
    
    
    
                    } else {
                        console.warn("ERROR - El usuario no existe!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
            },
            resetearSaldo:  function (clave, usuario) {
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                        var clienteID;
                        for (var i = 0; i < clientes.length; i++) {
                            if (clientes[i].usuario === usuario) {
                                clienteID = i;
                                clientes[i].presupuesto = 0;
                                break;
                            }
                        }
                        console.info("Usuario actualizado con exito");
                        console.info("Saldo actual de "+clientes[clienteID].usuario+ " es de " + clientes[clienteID].presupuesto);
                        return true;
    
                    } else {
                        console.warn("ERROR - El usuario no existe!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
            },
            comprar: function(clave, usuario, codigo){
                    if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                        
                        var clienteID;
                        var productoID;
                        var productoNombre;
                        var usuarioVerificado = false;
    
                        for (var i = 0; i < clientes.length; i++) {
                            if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                                clienteID = i;
                                usuarioVerificado = true;
                                break;
                            }
                        }
    
                        if(usuarioVerificado){
    
                            for (var i = 0; i < productos.length; i++) {
                                if (productos[i].codigo === codigo) {
                                    productoID = i;
                                    productoNombre = productos[i].nombre;
                                    break;
                                }
                            }
                            if (productoID != undefined){
                                // Verificar stock del producto
                                if (productos[productoID].stock <= 0) {
                                    maquinaExpendedora.gestionProducto.eliminar(maquinaExpendedora.admin.secreto, productoNombre);
                                }
    
                                if (productos[productoID].disponibilidad){
                                    if (clientes[clienteID].presupuesto >= productos[productoID].precio){
                                        var momento = new Date()
                                        
                                        clientes[clienteID].gasto.push({
                                            producto: productoNombre,
                                            precio: productos[productoID].precio,
                                            fecha: momento
                                        });
    
                                        clientes[clienteID].presupuesto -= productos[productoID].precio;
                                        
                                        console.info("Saldo Restante:", clientes[clienteID].presupuesto);
                                        console.info("Gracias por comprar... que tenga un buen día!");
                                        return true;
                                    } else {
                                        console.warn("ERROR - El usuario no tiene suficientes fondos!");
                                        return false;
                                    };                        
                                } else {
                                    console.warn("ERROR - El producto no esta disponible!");
                                    return false;
                                }
    
                            } else {
                                console.warn("El producto no existe!");
                                return false;
                            }
    
                        } else {
                            console.warn("ERROR - Contraseña Incorrecta!")
                            return false;
                        }
    
                    } else {
                        console.warn("ERROR - El usuario no existe!");
                        return false;
                    }           
            },
            agregar: function(clave, objeto) {
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (!maquinaExpendedora.herramientas.esUsuario(objeto.usuario)) {
                        if (objeto.nombre && objeto.pass && objeto.tipo && objeto.presupuesto) {
                            clientes.push(objeto);
                            console.info("usuario Agregado con exito");
                            return true;
                        } else {
                            console.warn("ERROR - Faltan datos!");
                            return false;
                        }
                    } else {
                        console.warn("ERROR - El usuario ya existe!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
            },
            eliminar: function(clave, usuario) {
                if (clave === maquinaExpendedora.admin.secreto) {
                    if (maquinaExpendedora.herramientas.esUsuario(usuario)) {
                        for (var i = 0; i < clientes.length; i++) {
                            if (clientes[i].usuario === usuario) {
                                clientes.splice(i, 1);
                                break;
                            }
                        }
                        console.info("Usuario Eliminado con exito");
                        return true;
    
                    } else {
                        console.warn("ERROR - El usuario no existe!");
                        return false;
                    }
                } else {
                    console.warn("ERROR - Contraseña Erronea!");
                    return false;
                }
            },
            saldoTotal: function(clave, usuario) {
                var saldoDisponible = -1;
                for (var i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                        saldoDisponible = clientes[i].presupuesto;
                        break;
                    }
                }
                return saldoDisponible;
            },
            gastoTotal: function(clave, usuario) {
                var gastoAcumulado = false;
                for (var i = 0; i < clientes.length; i++) {
                    if (clientes[i].usuario === usuario && clientes[i].pass === clave) {
                        gastoAcumulado = clientes[i].gasto;
                        break;
                    }
                }
                return gastoAcumulado;
            }
        }
    };
    
    // Demo Producto:
    var productos = [{
            nombre: "Risketos",
            codigo: "C1",
            stock: 100,
            disponibilidad: true,
            precio: 1
        },{
            nombre: "KitKat",
            codigo: "C2",
            stock: 4,
            disponibilidad: true,
            precio: 2
        },{
            nombre: "Chicles Orbit",
            codigo: "C3",
            stock: 6,
            disponibilidad: true,
            precio: 3
        },{
            nombre: "Pipas Solero",
            codigo: "C4",
            stock: 1,
            disponibilidad: true,
            precio: 4
        },{
            nombre: "Demonios de Fresa",
            codigo: "C5",
            stock: 10,
            disponibilidad: true,
            precio: 5
        }];
    
    // Demo Cliente:
    var clientes = [{
        // admin
        nombre: "David Salazar",
        usuario: "david",
        pass: "pass",
        tipo: "admin",
        presupuesto: 1000,
        gasto: []
    }];
    
    // Acortadores:
    
    var comprar = maquinaExpendedora.gestionClientes.comprar;
    var saldo = maquinaExpendedora.gestionClientes.saldoTotal;
    
    
    maquinaExpendedora.herramientas.esUsuario("david"); // true
    
    //Agregar:
    
    maquinaExpendedora.gestionClientes.agregar("claseFictizia", {
        usuario: "user2",
        presupuesto: 1000,
        tipo: "admin",
        pass: "pass2",
        nombre: "OtroUser"
    }); // usuario Agregado con exito
    
    // Borrar:
    maquinaExpendedora.gestionClientes.eliminar("pass2", "user2"); // Usuario Eliminado con exito
    
    // Consulta Saldo:
    maquinaExpendedora.gestionClientes.saldoTotal("pass", "david"); // 1000
    
    // Consulta Gasto:
    maquinaExpendedora.gestionClientes.gastoTotal("pass", "david"); // []
    
    
    // Testeando esProducto:
    maquinaExpendedora.herramientas.esProducto() // -1
    maquinaExpendedora.herramientas.esProducto({codigo: "C10"}) // false
    maquinaExpendedora.herramientas.esProducto({codigo: "C2"}) // true
    maquinaExpendedora.herramientas.esProducto({producto: "Inventado"}) // false
    maquinaExpendedora.herramientas.esProducto({producto: "Risketos"}) // true
    
    // Testeando agregar producto:
    maquinaExpendedora.gestionProducto.agregar() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionProducto.agregar("claseFictizia", {nombre: "Chetos"}) // ERROR - Faltan datos!
    maquinaExpendedora.gestionProducto.agregar("claseFictizia", {nombre: "Chetos", codigo: "C6", precio: 6, stock: 5, disponibilidad: true}) // Producto Agregado con exito
    
    
    // Testrando eliminar producto:
    maquinaExpendedora.gestionProducto.eliminar() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionProducto.eliminar("claseFictizia", {nombre: "inventado"}) // ERROR - El producto no existe!
    maquinaExpendedora.gestionProducto.eliminar("claseFictizia", {nombre: "Chetos"}); // Producto Eliminado con exito
    
    
    // Testeando Comprar producto:
    comprar("pass", "david", "C1"); 
   
    maquinaExpendedora.gestionClientes.retirarSaldo("claseFictizia", "david", 100000);
  
    maquinaExpendedora.gestionClientes.retirarSaldo("claseFictizia", "ulises"); 
  
    maquinaExpendedora.gestionClientes.retirarSaldo("claseFictizia", "ulises", 10); 
  
    
    // Testeando Resetear el dinero de un usuario:
    maquinaExpendedora.gestionClientes.resetearSaldo("claseFictizia", "david");
    
    // Testeando Añadir dinero a un usuario:
    maquinaExpendedora.gestionClientes.agregarSaldo("claseFictizia", "david");
    maquinaExpendedora.gestionClientes.agregarSaldo("claseFictizia", "david", 1000); 
    
    maquinaExpendedora.gestionProducto.controlStock("claseFictizia");
   
    productos = [];
    maquinaExpendedora.gestionProducto.controlStock("claseFictizia");