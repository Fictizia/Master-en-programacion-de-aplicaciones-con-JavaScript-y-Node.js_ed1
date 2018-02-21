![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Clase 14

## Eventos: OSW este sábado!

![](https://i0.wp.com/eoodescubre.com/lahoramaker/wp-content/uploads/sites/5/2017/02/Reuni%C3%B3n-Open-Source-Weekends.jpg?fit=1600%2C1200)

**[Detalles](https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/issues/22)**

### Objetos

- [MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [w3schools Objects](http://www.w3schools.com/js/js_objects.asp)

**Objetos Literales**

- Propiedades:
    ```javascript
	var miObjeto = {
	    cadena: 'esto es una cadena',
	    numero: 2,
	    booleano: false
	};
	```


- Métodos:
    ```javascript
	var miObjeto = {
	    saludar: function(){
			console.log("hola!");
		}
	};
	```
	
- Trabajando con espacios y caracteres especiales:
    ```javascript
	var miObjeto = {
		nombre: "objeto",
	    "año": 2015,
	    "estado del sistema": "correcto"
	};
	
	console.log(miObjeto["año"]);
	miObjeto["estado del sistema"] = "fuera de servicio";
	console.log(miObjeto["estado del sistema"]);
	```

- Acortar objetos:

    ```javascript
	var objetoAbreviado = objeto.muy.muy.largo.que.tiene.muchos["metodos y propiedades"];
	
	objetoAbreviado.propiedad1;
	objetoAbreviado.metodo1();

	```

**Métodos**

- .defineProperties() *Define nuevas o modifica propiedades existentes directamente en el objeto, returnando el objeto.*:
    ```javascript
    	var miObjeto = {propiedad: "Propiedad original..."}
	Object.defineProperties(miObjeto, {
	  "propiedad1": {
	    value: true,
	    writable: true
	  },
	  "propiedad2": {
	    value: "Cadena de texto",
	    writable: false
	  }
	});
	console.info(miObjeto);
	miObjeto.propiedad = "Propiedad original Modificada";
	console.info(miObjeto.propiedad);
	miObjeto.propiedad2 = "Cadena de texto... ¿modificada?";
	console.info(miObjeto.propiedad2);
    ```

- .getOwnPropertyDescriptor() *Devuelve las detalles de los objetos y métodos del objeto. Undefined en caso de no existir*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};

	console.info(Object.getOwnPropertyDescriptor(miObjeto, 'propiedad1'));
	// Object {value: "Datos", writable: true, enumerable: true, configurable: true}
	
	console.info(Object.getOwnPropertyDescriptor(miObjeto, 'inventado'));
	// undefined
    ```

- .getOwnPropertyNames() *Devuelve un array con todos los nombres de las propiedades y métodos del objeto*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log(Object.getOwnPropertyNames(miObjeto));
	// ["metodo", "propiedad1"]
    ```

- .isExtensible() *Determina si un objeto es extensible*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
	
	var sellado = Object.seal(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(sellado));
	
	var congelado = Object.freeze(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(congelado));
	
	Object.preventExtensions(miObjeto);
	console.log("¿Se puede extender?", Object.isExtensible(miObjeto));
    ```


- .hasOwnProperty() *Devuelve true o false si l apropiedad existe o no*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Tiene la propiedad \"propiedad1\"?", miObjeto.hasOwnProperty('propiedad1'));
	console.log("¿Tiene la propiedad \"propiedad2\"?", miObjeto.hasOwnProperty('propiedad2'));
    ```


- .propertyIsEnumerable() *Devuelve true o false si la propiedad es especificada es enumerable.*:
    ```javascript
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos"
	};
	
	console.log("¿Es enumerable \"propiedad1\"?", miObjeto.propertyIsEnumerable('propiedad1'));
	console.log("¿Es enumerable \"metodo\"?", miObjeto.propertyIsEnumerable('propiedad2'));
    ```

- .toLocaleString() *Retorna como string (configuración regional) todas las propiedades*:
    ```javascript
	var fecha = new Date();
	
	var miObjeto = {
	  metodo: function() {
	  	console.log(miObjeto.propiedad1)
	  },
	  propiedad1: "Datos",
	  fecha: fecha
	};
	
	miObjeto.toLocaleString()
	console.log("La fecha es ", miObjeto.fecha);
    ```

**For... in**

Itera sobre todas las propiedades de un objeto, en un orden arbitriario.
```javascript
	var objeto1 = {
		propiedad1: "hola",
		propiedad2: 2,
		propiedad3: false,
		propiedad4: [true,2,5, "..."],
		propiedad5: {
			dato: "más datos..."
		},
		metodo: function(){
			console.log("hola");
		}
	}
	function mostrar_propiedades(objeto, nombreObjeto) {
	   var resultado = "";
	   for (var i in objeto) {
	      resultado += nombreObjeto + "." + i + " = " + objeto[i] + "\n";
	   }
	   return resultado;
	}
	
	mostrar_propiedades(objeto1, "objeto1");
```

### Funciones

- Propiedad *name*:
```javascript
	function miFuncion (){
		// vacia
	};

	console.log(miFuncion.name);
```


- Declaración y ejecución:
```javascript
	function dameTrue (){
		return true
	};

	function dameFalse () {
		return false
	};

	dameTrue();
	dameFalse();
```

- Argumentos:
	- El exceso de argumentos no es un problema
	- La falta de argumento crea un valor indefinido
    - El Objeto Arguments no es un Array, solo es similar.
    ```javascript    
	
	function pruebaArguemntos () {
	console.log(arguments);
	console.info(arguments[0]);
	console.info(arguments[1]);
	}
	
	pruebaArguemntos (1, "vale", true);
	
	```

- Sumar cuadrados.
```javascript
	function sumaCuadrados (a, b) {
		return (a*a) + (b*b);
	};
```

### Ejercicios

![img](http://s7d2.scene7.com/is/image/samsclub/0040617419099_A?wid=1500&hei=1500&fmt=jpg&qlt=80)

**Práctica 1** - Diseña un script para gestionar por consola una máquina expendedora

Características:
- Solo los usuarios registrados pueden usar la máquina
- El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
- Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna.
- La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
- Para agilizar la reposición de lo consumido... la maquina debe controlar en stock

**Paso 1** - Creamos los primeros objetos básicos:
- Maquina Expendedora (Objeto)
- Productos (Array)
- Clientes (Array)

```javascript
	// Máquina expendedora:
	var maquinaExpendedora = {};
	
	// Demo Producto:
	var productos = [];
	
	// Demo Cliente:
	var clientes = [];
```

**Paso 2** - Creamos los primeros perfiles en el Array de clientes:
- Propiedades:
    - Nombre
    - Usuario
    - Contraseña
    - Tipo usuario
    - Presupuesto

```javascript
    // Máquina expendedora:
    var maquinaExpendedora = {};
    
    // Demo Producto:
    var productos = [];
    
    // Demo Cliente:

    var clientes = [{
        // admin
        nombre: "Ulises Gascón",
        usuario: "ulises",
        contraseña: "pass",
        tipo: "admin",
        presupuesto: "1000",
        gasto: []
    }, {
        nombre: "Carlos Perez",
        usuario: "cPerez",
        contraseña: "pass2",
        tipo: "usuario",
        presupuesto: "100",
        gasto: []
    }];
```

**Paso 3** - Creamos varios métodos para gestionar a los clientes y sus necesidades

- Metodos:
    - Consultar saldo de un cliente
        - Devolverá el saldo existente o *-1* en caso de error
        - Comprobaremos la contraseña y el usuario
    - Consultar gastos de un cliente
        - Devolverá un array o *false* en caso de error
        - Comprobaremos la contraseña y el usuario
    - Agregar un cliente
    - Eliminar un cliente

- Caracteristicas:
    - Evitaremos que se registren usuarios que ya existan
    - Evitaremos eliminar usuarios que no existan
    - Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
    - Protegeremos las funciones de gestión de usuarios con la contraseña *ficticiaMola*

```javascript
    // Máquina expendedora:
    var maquinaExpendedora = {
        admin: {
            secreto: "ficticiaMola"
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
            }
        },
        gestionClientes: {
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
    var productos = [];
    
    // Demo Cliente:
    var clientes = [{
        // admin
        nombre: "Ulises Gascón",
        usuario: "ulises",
        pass: "pass",
        tipo: "admin",
        presupuesto: 1000,
        gasto: []
    }, {
        nombre: "Carlos Perez",
        usuario: "cPerez",
        pass: "pass2",
        tipo: "usuario",
        presupuesto: 100,
        gasto: []
    }];
    
    // Testeando esUsuario:
    maquinaExpendedora.herramientas.esUsuario("ulises"); // true
    maquinaExpendedora.herramientas.esUsuario("yo mismo"); // false
    
    // Testeando agregar:
    maquinaExpendedora.gestionClientes.agregar(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregar("hola"); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
        usuario: "ulises"
    }); // ERROR - El usuario ya existe!
    maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
        usuario: "ulises2",
        presupuesto: 1000
    }); // ERROR - Faltan datos! 
    maquinaExpendedora.gestionClientes.agregar("ficticiaMola", {
        usuario: "ulises2",
        presupuesto: 1000,
        tipo: "admin",
        pass: "pass2",
        nombre: "Ulises2"
    }); // usuario Agregado con exito
    
    // Testeando borrar:
    maquinaExpendedora.gestionClientes.eliminar(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.eliminar("ficticiaMola"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.eliminar("ficticiaMola", "Yo mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.eliminar("ficticiaMola", "ulises2"); // Usuario Eliminado con exito
    
    // Testeando Saldo:
    maquinaExpendedora.gestionClientes.saldoTotal(); // -1
    maquinaExpendedora.gestionClientes.saldoTotal("pass", "ulises"); // 1000
    
    // Testrando Gasto:
    maquinaExpendedora.gestionClientes.gastoTotal(); // false
    maquinaExpendedora.gestionClientes.gastoTotal("pass", "ulises"); // []
```

**Paso 4** - Creamos varios métodos para gestionar a los productos y sus necesidades

- Creamos 5 productos que estarán disponibles a la venta 

- Métodos:
    - Consumir un producto (cliente)
        - Comprobaremos la contraseña y el usuario
        - Devolverá el producto o *-1* en caso de no existir o estar agotado
        - Actualizaremos el stock
        - Actualizaremos el saldo del cliente
    - Agregar un producto a la máquina (administración)
    - Eliminar un prodcutos de la máquina (administración)

- Caracteristicas:
    - Evitaremos agregar productos que ya existan
    - Evitaremos eliminar productos que no existan
    - Evitaremos agregar productos que no esten debidamente cumplimentados
    - Protegeremos las funciones de agregar y eliminar productos con la contraseña *ficticiaMola*

```javascript
// Máquina expendedora:
var maquinaExpendedora = {
    admin: {
        secreto: "fictiziaMola"
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
        esProducto: function(datos) {
            if (datos) {
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
        agregar: function(clave, objeto) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (!maquinaExpendedora.herramientas.esProducto({
                        producto: objeto.nombre
                    })) {
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
        eliminar: function(clave, objeto) {
            if (clave === maquinaExpendedora.admin.secreto) {
                if (maquinaExpendedora.herramientas.esProducto({
                        producto: objeto.nombre
                    })) {
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
        comprar: function(clave, usuario, codigo) {
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

                if (usuarioVerificado) {

                    for (var i = 0; i < productos.length; i++) {
                        if (productos[i].codigo === codigo) {
                            productoID = i;
                            productoNombre = productos[i].nombre;
                            break;
                        }
                    }
                    if (productoID != undefined) {
                        // Verificar stock del producto
                        if (productos[productoID].stock <= 0) {
                            maquinaExpendedora.gestionProducto.eliminar(maquinaExpendedora.admin.secreto, productoNombre);
                        }

                        if (productos[productoID].disponibilidad) {
                            if (clientes[clienteID].presupuesto >= productos[productoID].precio) {
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
}, {
    nombre: "KitKat",
    codigo: "C2",
    stock: 4,
    disponibilidad: true,
    precio: 2
}, {
    nombre: "Chicles Orbit",
    codigo: "C3",
    stock: 6,
    disponibilidad: true,
    precio: 3
}, {
    nombre: "Pipas Solero",
    codigo: "C4",
    stock: 1,
    disponibilidad: true,
    precio: 4
}, {
    nombre: "Demonios de Fresa",
    codigo: "C5",
    stock: 10,
    disponibilidad: true,
    precio: 5
}];

// Demo Cliente:
var clientes = [{
    // admin
    nombre: "Ulises Gascón",
    usuario: "ulises",
    pass: "pass",
    tipo: "admin",
    presupuesto: 1000,
    gasto: []
}, {
    nombre: "Carlos Perez",
    usuario: "cPerez",
    pass: "pass2",
    tipo: "usuario",
    presupuesto: 100,
    gasto: []
}];

// Acortadores:

var comprar = maquinaExpendedora.gestionClientes.comprar;
var saldo = maquinaExpendedora.gestionClientes.saldoTotal;

// Testeando esUsuario:
maquinaExpendedora.herramientas.esUsuario("ulises"); // true
maquinaExpendedora.herramientas.esUsuario("yo mismo"); // false

// Testeando agregar:
maquinaExpendedora.gestionClientes.agregar(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.agregar("hola"); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
    usuario: "ulises"
}); // ERROR - El usuario ya existe!
maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
    usuario: "ulises2",
    presupuesto: 1000
}); // ERROR - Faltan datos! 
maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
    usuario: "ulises2",
    presupuesto: 1000,
    tipo: "admin",
    pass: "pass2",
    nombre: "Ulises2"
}); // usuario Agregado con exito

// Testeando borrar:
maquinaExpendedora.gestionClientes.eliminar(); // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionClientes.eliminar("fictiziaMola"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.eliminar("fictiziaMola", "Yo mismo"); // ERROR - El usuario no existe!
maquinaExpendedora.gestionClientes.eliminar("fictiziaMola", "ulises2"); // Usuario Eliminado con exito

// Testeando Saldo:
maquinaExpendedora.gestionClientes.saldoTotal(); // -1
maquinaExpendedora.gestionClientes.saldoTotal("pass", "ulises"); // 1000

// Testeando Gasto:
maquinaExpendedora.gestionClientes.gastoTotal(); // false
maquinaExpendedora.gestionClientes.gastoTotal("pass", "ulises"); // []


// Testeando esProducto:
maquinaExpendedora.herramientas.esProducto() // -1
maquinaExpendedora.herramientas.esProducto({
        codigo: "C10"
    }) // false
maquinaExpendedora.herramientas.esProducto({
        codigo: "C2"
    }) // true
maquinaExpendedora.herramientas.esProducto({
        producto: "Inventado"
    }) // false
maquinaExpendedora.herramientas.esProducto({
        producto: "Risketos"
    }) // true

// Testeando agregar producto:
maquinaExpendedora.gestionProducto.agregar() // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionProducto.agregar("fictiziaMola", {
        nombre: "Chetos"
    }) // ERROR - Faltan datos!
maquinaExpendedora.gestionProducto.agregar("fictiziaMola", {
        nombre: "Chetos",
        codigo: "C6",
        precio: 6,
        stock: 5,
        disponibilidad: true
    }) // Producto Agregado con exito


// Testrando eliminar producto:
maquinaExpendedora.gestionProducto.eliminar() // ERROR - Contraseña Erronea!
maquinaExpendedora.gestionProducto.eliminar("fictiziaMola", {
        nombre: "inventado"
    }) // ERROR - El producto no existe!
maquinaExpendedora.gestionProducto.eliminar("fictiziaMola", {
    nombre: "Chetos"
}); // Producto Eliminado con exito


// Testeando Comprar producto:
comprar() // ERROR - Contraseña Errónea!
comprar("pass", "Eduardo"); // ERROR - El usuario no existe!
comprar("pass6", "ulises"); // ERROR - Contraseña Incorrecta!
comprar("pass", "ulises", "A1"); // El producto no existe!
comprar("pass", "ulises", "C1");
// Saldo Restante: 999
// Gracias por comprar... que tenga un buen día!
```

**Paso 5** - Ahora podemos agregar los métodos para agregar, retirar y resetear saldo de los usuarios.

- Importante:
	- Los saldos jamas pueden ser negativos.

```javascript
    // Máquina expendedora:
    var maquinaExpendedora = {
        admin: {
            secreto: "fictiziaMola"
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
        nombre: "Ulises Gascón",
        usuario: "ulises",
        pass: "pass",
        tipo: "admin",
        presupuesto: 1000,
        gasto: []
    }, {
        nombre: "Carlos Perez",
        usuario: "cPerez",
        pass: "pass2",
        tipo: "usuario",
        presupuesto: 100,
        gasto: []
    }];
    
    // Acortadores:
    
    var comprar = maquinaExpendedora.gestionClientes.comprar;
    var saldo = maquinaExpendedora.gestionClientes.saldoTotal;
    
    // Testeando esUsuario:
    maquinaExpendedora.herramientas.esUsuario("ulises"); // true
    maquinaExpendedora.herramientas.esUsuario("yo mismo"); // false
    
    // Testeando agregar:
    maquinaExpendedora.gestionClientes.agregar(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregar("hola"); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
        usuario: "ulises"
    }); // ERROR - El usuario ya existe!
    maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
        usuario: "ulises2",
        presupuesto: 1000
    }); // ERROR - Faltan datos! 
    maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
        usuario: "ulises2",
        presupuesto: 1000,
        tipo: "admin",
        pass: "pass2",
        nombre: "Ulises2"
    }); // usuario Agregado con exito
    
    // Testeando borrar:
    maquinaExpendedora.gestionClientes.eliminar(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.eliminar("fictiziaMola"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.eliminar("fictiziaMola", "Yo mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.eliminar("fictiziaMola", "ulises2"); // Usuario Eliminado con exito
    
    // Testeando Saldo:
    maquinaExpendedora.gestionClientes.saldoTotal(); // -1
    maquinaExpendedora.gestionClientes.saldoTotal("pass", "ulises"); // 1000
    
    // Testeando Gasto:
    maquinaExpendedora.gestionClientes.gastoTotal(); // false
    maquinaExpendedora.gestionClientes.gastoTotal("pass", "ulises"); // []
    
    
    // Testeando esProducto:
    maquinaExpendedora.herramientas.esProducto() // -1
    maquinaExpendedora.herramientas.esProducto({codigo: "C10"}) // false
    maquinaExpendedora.herramientas.esProducto({codigo: "C2"}) // true
    maquinaExpendedora.herramientas.esProducto({producto: "Inventado"}) // false
    maquinaExpendedora.herramientas.esProducto({producto: "Risketos"}) // true
    
    // Testeando agregar producto:
    maquinaExpendedora.gestionProducto.agregar() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionProducto.agregar("fictiziaMola", {nombre: "Chetos"}) // ERROR - Faltan datos!
    maquinaExpendedora.gestionProducto.agregar("fictiziaMola", {nombre: "Chetos", codigo: "C6", precio: 6, stock: 5, disponibilidad: true}) // Producto Agregado con exito
    
    
    // Testrando eliminar producto:
    maquinaExpendedora.gestionProducto.eliminar() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionProducto.eliminar("fictiziaMola", {nombre: "inventado"}) // ERROR - El producto no existe!
    maquinaExpendedora.gestionProducto.eliminar("fictiziaMola", {nombre: "Chetos"}); // Producto Eliminado con exito
    
    
    // Testeando Comprar producto:
    comprar() // ERROR - Contraseña Errónea!
    comprar("pass", "Eduardo"); // ERROR - El usuario no existe!
    comprar("pass6", "ulises"); // ERROR - Contraseña Incorrecta!
    comprar("pass", "ulises", "A1"); // El producto no existe!
    comprar("pass", "ulises", "C1"); 
    // Saldo Restante: 999
    // Gracias por comprar... que tenga un buen día!
    
    // Testeando Retirar dinero de un usuario:
    maquinaExpendedora.gestionClientes.retirarSaldo(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "Yo Mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "ulises", 100000); /* 
    ERROR - Saldo insuficiente
    Diferencia:  -99001
    */
    
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "ulises");/* 
    Usuario actualizado con exito
    Saldo actual de ulises es de 999
    */
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "ulises", 10);/* 
    Usuario actualizado con exito
    Saldo actual de ulises es de 989
    */
    
    // Testeando Resetear el dinero de un usuario:
    maquinaExpendedora.gestionClientes.resetearSaldo(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.resetearSaldo("fictiziaMola"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.resetearSaldo("fictiziaMola", "ulises"); /* 
    Usuario actualizado con exito
    Saldo actual de ulises es de 0
    */
    
    // Testeando Añadir dinero a un usuario:
    maquinaExpendedora.gestionClientes.agregarSaldo() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregarSaldo("fictiziaMola", "Yo Mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.agregarSaldo("fictiziaMola", "ulises"); /*
    Usuario actualizado con exito
     Saldo actual de ulises es de 0
     */
    
    maquinaExpendedora.gestionClientes.agregarSaldo("fictiziaMola", "ulises", 1000); /*
    Usuario actualizado con exito
    Saldo actual de ulises es de 1000
     */
```

**Paso 6** - Ahora podemos agregar el método para saber la disponibilidad de stock

- Importante:
	- Es necesaria clave (adminsitrador)
	- Debemos saber las existencias
	- Debemos saber que productos estan disponibles y cuales no.
	- Debemos incluir el código y el nombre
	- Cuando se imprima el informe... es necesario incluir la fecha.

```javascript
    // Máquina expendedora:
    var maquinaExpendedora = {
        admin: {
            secreto: "fictiziaMola"
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
        nombre: "Ulises Gascón",
        usuario: "ulises",
        pass: "pass",
        tipo: "admin",
        presupuesto: 1000,
        gasto: []
    }, {
        nombre: "Carlos Perez",
        usuario: "cPerez",
        pass: "pass2",
        tipo: "usuario",
        presupuesto: 100,
        gasto: []
    }];
    
    // Acortadores:
    
    var comprar = maquinaExpendedora.gestionClientes.comprar;
    var saldo = maquinaExpendedora.gestionClientes.saldoTotal;
    
    // Testeando esUsuario:
    maquinaExpendedora.herramientas.esUsuario("ulises"); // true
    maquinaExpendedora.herramientas.esUsuario("yo mismo"); // false
    
    // Testeando agregar:
    maquinaExpendedora.gestionClientes.agregar(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregar("hola"); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
        usuario: "ulises"
    }); // ERROR - El usuario ya existe!
    maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
        usuario: "ulises2",
        presupuesto: 1000
    }); // ERROR - Faltan datos! 
    maquinaExpendedora.gestionClientes.agregar("fictiziaMola", {
        usuario: "ulises2",
        presupuesto: 1000,
        tipo: "admin",
        pass: "pass2",
        nombre: "Ulises2"
    }); // usuario Agregado con exito
    
    // Testeando borrar:
    maquinaExpendedora.gestionClientes.eliminar(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.eliminar("fictiziaMola"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.eliminar("fictiziaMola", "Yo mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.eliminar("fictiziaMola", "ulises2"); // Usuario Eliminado con exito
    
    // Testeando Saldo:
    maquinaExpendedora.gestionClientes.saldoTotal(); // -1
    maquinaExpendedora.gestionClientes.saldoTotal("pass", "ulises"); // 1000
    
    // Testeando Gasto:
    maquinaExpendedora.gestionClientes.gastoTotal(); // false
    maquinaExpendedora.gestionClientes.gastoTotal("pass", "ulises"); // []
    
    
    // Testeando esProducto:
    maquinaExpendedora.herramientas.esProducto() // -1
    maquinaExpendedora.herramientas.esProducto({codigo: "C10"}) // false
    maquinaExpendedora.herramientas.esProducto({codigo: "C2"}) // true
    maquinaExpendedora.herramientas.esProducto({producto: "Inventado"}) // false
    maquinaExpendedora.herramientas.esProducto({producto: "Risketos"}) // true
    
    // Testeando agregar producto:
    maquinaExpendedora.gestionProducto.agregar() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionProducto.agregar("fictiziaMola", {nombre: "Chetos"}) // ERROR - Faltan datos!
    maquinaExpendedora.gestionProducto.agregar("fictiziaMola", {nombre: "Chetos", codigo: "C6", precio: 6, stock: 5, disponibilidad: true}) // Producto Agregado con exito
    
    
    // Testrando eliminar producto:
    maquinaExpendedora.gestionProducto.eliminar() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionProducto.eliminar("fictiziaMola", {nombre: "inventado"}) // ERROR - El producto no existe!
    maquinaExpendedora.gestionProducto.eliminar("fictiziaMola", {nombre: "Chetos"}); // Producto Eliminado con exito
    
    
    // Testeando Comprar producto:
    comprar() // ERROR - Contraseña Errónea!
    comprar("pass", "Eduardo"); // ERROR - El usuario no existe!
    comprar("pass6", "ulises"); // ERROR - Contraseña Incorrecta!
    comprar("pass", "ulises", "A1"); // El producto no existe!
    comprar("pass", "ulises", "C1"); 
    // Saldo Restante: 999
    // Gracias por comprar... que tenga un buen día!
    
    // Testeando Retirar dinero de un usuario:
    maquinaExpendedora.gestionClientes.retirarSaldo(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "Yo Mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "ulises", 100000); /* 
    ERROR - Saldo insuficiente
    Diferencia:  -99001
    */
    
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "ulises");/* 
    Usuario actualizado con exito
    Saldo actual de ulises es de 999
    */
    maquinaExpendedora.gestionClientes.retirarSaldo("fictiziaMola", "ulises", 10);/* 
    Usuario actualizado con exito
    Saldo actual de ulises es de 989
    */
    
    // Testeando Resetear el dinero de un usuario:
    maquinaExpendedora.gestionClientes.resetearSaldo(); // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.resetearSaldo("fictiziaMola"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.resetearSaldo("fictiziaMola", "ulises"); /* 
    Usuario actualizado con exito
    Saldo actual de ulises es de 0
    */
    
    // Testeando Añadir dinero a un usuario:
    maquinaExpendedora.gestionClientes.agregarSaldo() // ERROR - Contraseña Erronea!
    maquinaExpendedora.gestionClientes.agregarSaldo("fictiziaMola", "Yo Mismo"); // ERROR - El usuario no existe!
    maquinaExpendedora.gestionClientes.agregarSaldo("fictiziaMola", "ulises"); /*
    Usuario actualizado con exito
     Saldo actual de ulises es de 0
     */
    
    maquinaExpendedora.gestionClientes.agregarSaldo("fictiziaMola", "ulises", 1000); /*
    Usuario actualizado con exito
    Saldo actual de ulises es de 1000
     */
    
    maquinaExpendedora.gestionProducto.controlStock();  // ERROR - Contraseña Erronea! 
    maquinaExpendedora.gestionProducto.controlStock("fictiziaMola");
    /*
    
    ************************
    En total tenemos 6 productos
    ----------------------------
    Nombre: Risketos
    Código: C1
    Stock: 100
    Disponibilidad: true
    ----------------------------
    Nombre: KitKat
    Código: C2
    Stock: 4
    Disponibilidad: true
    ----------------------------
    Nombre: Chicles Orbit
    Código: C3
    Stock: 6
    Disponibilidad: true
    ----------------------------
    Nombre: Pipas Solero
    Código: C4
    Stock: 1
    Disponibilidad: true
    ----------------------------
    Nombre: Demonios de Fresa
    Código: C5
    Stock: 10
    Disponibilidad: true
    ----------------------------
    Nombre: Chetos
    Código: C6
    Stock: 5
    Disponibilidad: true
    ************************
    
     */
    
    productos = [];
    maquinaExpendedora.gestionProducto.controlStock("fictiziaMola");
    /*
    ************************
    En total tenemos 0 productos
    --- no hay productos en la maquina ---
    ************************
    */

```

### Tiempo para proyecto personal

![img_promo](https://sinsip.com/medium/ts.png)
