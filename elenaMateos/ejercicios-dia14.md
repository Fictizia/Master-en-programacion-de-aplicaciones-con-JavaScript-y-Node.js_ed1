### Práctica 1 - Diseña un script para gestionar por consola una máquina expendedora

**Características:**

* Solo los usuarios registrados pueden usar la máquina
* El sistema funciona sin dinero real, en su lugar se usa un sistema de puntos
* Los usuarios disponen de unos puntos para gastar en la máquina que el departamento de personal asigna.
* La maquina no concederá creditos, solo trabaja en base a los puntos disponibles.
* Para agilizar la reposición de lo consumido... la maquina debe controlar en stock

**Paso 1 - Creamos los primeros objetos básicos:**

* Maquina Expendedora (Objeto)
* Productos (Array)
* Clientes (Array)

  ```javascript

  var maquina = {};
  var productos = [];
  var clientes = [];

  ```


**Paso 2 - Creamos los primeros perfiles en el Array de clientes:**

* Propiedades:
  * Nombre
  * Usuario
  * Contraseña
  * Tipo usuario
  * Presupuesto


    ```javascript

    var maquina = {}
    var verSaldo = function(){};
    clientes = [
        {
          nombre:'Arturo',
          usuario: 'rito',
          contraseña:'Fictizia mola!',
          presupuesto: '80',
          tipoUsuario: 'user',
          saldo: 80
        },
        {nombre:'Ana',
        usuario: 'anita',
        contraseña:'Fictizia mola!',
        presupuesto: '100',
        tipoUsuario: 'user',
        saldo: 100},
        {
          nombre:'Cucu',
          usuario: 'cuc',
          contraseña:'Fictizia mola!',
          presupuesto: '140',
          tipoUsuario: 'user',
          saldo: 140
        },

      ];
  verSaldo = function (clientes){
    if (clientes.saldo === 0 || clientes.saldo === NaN ) {

          console.log("No tienes saldo! Contacta con RRHH para que recarguen tu saldo ^.^");
    }else {
          console.log(clientes.saldo);
    }
  }
    ```
**Paso 3 - Creamos varios métodos para gestionar a los clientes y sus necesidades**

*Metodos*:

* Consultar saldo de un cliente
* Devolverá el saldo existente o -1 en caso de error
* Comprobaremos la contraseña y el usuario
* Consultar gastos de un cliente
* Devolverá un array o false en caso de error
* Comprobaremos la contraseña y el usuario
* Agregar un cliente
* Eliminar un cliente
* Caracteristicas:
  * Evitaremos que se registren usuarios que ya existan
  * Evitaremos eliminar usuarios que no existan
  * Evitaremos dar de alta usuarios que no esten debidamente cumplimentados
  * Protegeremos las funciones de gestión de usuarios con la contraseña ficticiaMola
  ```javascript

  var maquina = {
    productos : [],

    clientes: [
      {
        nombre:"",
        usuario: "",
        contrasena:"",
        presupuesto: "",
        tipoUsuario: "",
        saldo: 0,
        verSaldo:  function(){

      if (this.saldo === 0 || this.saldo === NaN ) {

            console.log("No tienes saldo! Contacta con RRHH para que recarguen tu saldo ^.^");
      }else {
            console.log(this.saldo);
      }
    }
      }
    ],
}
  ```






Paso 4 - Creamos varios métodos para gestionar a los productos y sus necesidades

Creamos 5 productos que estarán disponibles a la venta

Métodos:

Consumir un producto (cliente)
Comprobaremos la contraseña y el usuario
Devolverá el producto o -1 en caso de no existir o estar agotado
Actualizaremos el stock
Actualizaremos el saldo del cliente
Agregar un producto a la máquina (administración)
Eliminar un prodcutos de la máquina (administración)
Caracteristicas:

Evitaremos agregar productos que ya existan
Evitaremos eliminar productos que no existan
Evitaremos agregar productos que no esten debidamente cumplimentados
Protegeremos las funciones de agregar y eliminar productos con la contraseña ficticiaMola
	// Tu solución
Paso 5 - Ahora podemos agregar los métodos para agregar, retirar y resetear saldo de los usuarios.

Importante:
Los saldos jamas pueden ser negativos.
	// Tu solución
Paso 6 - Ahora podemos agregar el método para saber la disponibilidad de stock

Importante:
Es necesaria clave (adminsitrador)
Debemos saber las existencias
Debemos saber que productos estan disponibles y cuales no.
Debemos incluir el código y el nombre
Cuando se imprima el informe... es necesario incluir la fecha.
	// Tu solución
