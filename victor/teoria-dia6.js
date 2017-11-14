/********** TEORIA CLASE 6 *********/
/* Ejercicio 1 */
var nombre = prompt("Introduce un nombre");

console.assert(nombre != "victor", "Se encontró una coincidencia con tu nombre.");

/* Ejercicio 2 */
console.time("Tiempo de juego");
console.log("Victor");
console.info("Victor");
console.warn("Victor");
console.timeEnd("Tiempo de juego");

/* Ejercicio 3 */
console.time("Tiempo de juego");
console.log("%c Victor", "background: #fff; color: #333; font-size: 26px;");
console.info("%c Victor", "background: #33b2ff; color: #fff; font-size: 16px;");
console.warn("%c Victor", "background: #e60000; color: #fff; font-size: 40px;");
console.timeEnd("Tiempo de juego");

/* Ejercicio 4 */
console.time("Tiempo grupo log");
console.group("Grupo log");
console.log("Mensajes ");
console.log(" tipo ");
console.log(" log");
console.groupEnd();
console.timeEnd("Tiempo grupo log");

console.time("Tiempo grupo info");
console.group("Grupo info");
console.info("Mensajes ");
console.info(" tipo ");
console.info(" info");
console.groupEnd();
console.timeEnd("Tiempo grupo info");

/* Ejercicio 4 */
var personajes = [ {nombre: "Iñigo", puesto: "payaso"}, {nombre: "David", puesto: "parguelas"}, {nombre: "Víctor", puesto: "no comments"} ];

console.table(personajes);
