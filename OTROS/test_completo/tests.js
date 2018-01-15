

// Test
    QUnit.module( "Módulo de calculosVarios(valor1, valor2)", function(){

        var condicion = {suma: 50, resta: -30, division: 0.25, multiplicacion: 400};
        var condicion2 = {suma: 30, resta: 50, division: -4, multiplicacion: -400};

        QUnit.test( "calculosVarios(10, 40) con números", function( assert ) {
            propEqual(condicion, calculosVarios(10, 40), "calculosVarios(10, 40) es igual a condicion");
            propEqual(condicion2, calculosVarios(40, -10), "calculosVarios(40, -10) es igual a condicion2");
        });


        QUnit.test( "calculosVarios(\"10\", \"40\") con cadenas", function( assert ) {
            propEqual(condicion, calculosVarios("10", "40"), "calculosVarios(\"10\", \"40\") es igual a condicion");
            propEqual(condicion2, calculosVarios("40", "-10"), "calculosVarios(\"40\", \"-10\") es igual a condicion2");
        });

    });

    QUnit.module( "Módulo de porcentajeAlumnos()", function(){

        var condicion = {totalAlumnos: 10, porcentajeMujeres: 80, porcentajeHombres: 20};
        var condicion2 = {totalAlumnos: 10, porcentajeMujeres: 40, porcentajeHombres: 60};

        QUnit.test( "con números", function( assert ) {
            propEqual(condicion, porcentajeAlumnos(2,8), "porcentajeAlumnos(2,8) es igual a la condición");
            propEqual(condicion2, porcentajeAlumnos(6,4), "porcentajeAlumnos(6,4) es igual a la condición2");
        });

        QUnit.test( "con cadenas", function( assert ) {
            propEqual(condicion, porcentajeAlumnos("2", "8"), "porcentajeAlumnos(\"2\", \"8\") es igual a la condición");
            propEqual(condicion2, porcentajeAlumnos("6", "4"), "porcentajeAlumnos(\"6\", \"4\") es igual a la condición2");
        });

    });

    QUnit.module( "Módulo de compararNumeros()", function(){

        var condicion = "2 es mayor";
        var condicion2 = "Son iguales";

        QUnit.test("con números", function() {
            deepEqual(compararNumeros(1,2), condicion, "1 vs. 2 (es el mayor)");
            deepEqual(compararNumeros(2,1), condicion, "1 vs. 2 (es el mayor)");
            deepEqual(compararNumeros(1,1), condicion2, "1 y 1 son iguales");
        }); 

        QUnit.test("con cadenas", function() {
            deepEqual(compararNumeros("1","2"), condicion, "\"1\" vs. \"2\" (es el mayor)");
            deepEqual(compararNumeros("2","1"), condicion, "\"1\" vs. \"2\" (es el mayor)");
            deepEqual(compararNumeros("1","1"), condicion2, "\"1\" y \"1\" son iguales");
        }); 
    });


    QUnit.module( "Módulo de compararVariosNumeros()", function(){

        var condicion = "3 es mayor";
        var condicion2 = "Son iguales";

        QUnit.test("con números", function() {
            deepEqual(compararVariosNumeros(2,1,3), condicion, "compararVariosNumeros(2,1,3) 3 es el mayor");
            deepEqual(compararVariosNumeros(1,3,2), condicion, "compararVariosNumeros(1,3,2) 3 es el mayor");
            deepEqual(compararVariosNumeros(3,2,1), condicion, "compararVariosNumeros(3,2,1) 3 es el mayor");
            deepEqual(compararVariosNumeros(3,3,3), condicion2, "compararVariosNumeros(3,3,3) son iguales");
        }); 

        QUnit.test("con cadenas", function() {
            deepEqual(compararVariosNumeros("2","1","3"), condicion, "compararVariosNumeros(\"2\",\"1\",\"3\") 3 es el mayor");
            deepEqual(compararVariosNumeros("1","3","2"), condicion, "compararVariosNumeros(\"1\",\"3\",\"2\") 3 es el mayor");
            deepEqual(compararVariosNumeros("3","2","1"), condicion, "compararVariosNumeros(\"3\",\"2\",\"1\") 3 es el mayor");
            deepEqual(compararVariosNumeros("3","3","3"), condicion2, "compararVariosNumeros(\"3\",\"3\",\"3\") son iguales");
        }); 
    });

	QUnit.module( "Módulo de jugandoConNumeros()", function(){

        var condicion = "El resutlado de la multiplicacion es 6";
        var condicion2 = "El resutlado de la multiplicacion es 27";
        var condicion3 = "El resultado de la suma es 5";

        QUnit.test("con números", function() {
            deepEqual(jugandoConNumeros(2,1,3), condicion, "2 x 1 x 3 = 6");
            deepEqual(jugandoConNumeros(3,3,3), condicion2, "3 x 3 x 3 = 27");
            deepEqual(jugandoConNumeros(-1,3,2), condicion3, "3 + 2 = 5");
        }); 

        QUnit.test("con cadenas", function() {
            deepEqual(jugandoConNumeros("2","1","3"), condicion, "\"2\" x \"1\" x \"3\" = 6");
            deepEqual(jugandoConNumeros("3","3","3"), condicion2, "\"3\" x \"3\" x \"3\" = 27");
            deepEqual(jugandoConNumeros("-1","3","2"), condicion3, "\"3\" + \"2\" = 5");
        }); 
    });

    QUnit.module( "Módulo de calcularDescuento()", function(){

        var condicion = "BINGO! Has acertado de mes y días. Debes pagar solamente 375";
        var condicion1 = "Precio incorrecto!";
        var condicion2 = "No se aplica descuento.. ven en invierno mejor!. Debes pagar 500";
        var condicion3 = "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar 500";


        QUnit.test("Precios", function() {
            deepEqual(calcularDescuento (1, 1, -500), condicion1, "-500");
            deepEqual(calcularDescuento (1, 1, 0), condicion1, "0");
            deepEqual(calcularDescuento (1, 1, 500), condicion, "500");
            deepEqual(calcularDescuento (1, 1, "500"), condicion, "\"500\"");
        }); 

        QUnit.test("Días de la semana", function() {
            deepEqual(calcularDescuento (1, 1, 500), condicion, "(1) - Lunes");
            deepEqual(calcularDescuento (1, "1", 500), condicion, "(\"1\") - Lunes");
            deepEqual(calcularDescuento (1, "Lunes", 500), condicion, "(\"Lunes\") - Lunes");
            deepEqual(calcularDescuento (1, 2, 500), condicion, "(2) - Martes");
            deepEqual(calcularDescuento (1, "2", 500), condicion, "(\"2\") - Martes");
            deepEqual(calcularDescuento (1, "Martes", 500), condicion, "(\"Martes\") - Martes");
            deepEqual(calcularDescuento (1, 3, 500), condicion, "(3) - Miércoles");
            deepEqual(calcularDescuento (1, "3", 500), condicion, "(\"3\") - Miércoles");
            deepEqual(calcularDescuento (1, "Miercoles", 500), condicion, "(\"Miercoles\") - Miércoles");
            deepEqual(calcularDescuento (1, 4, 500), condicion, "(4) - Jueves");
            deepEqual(calcularDescuento (1, "4", 500), condicion, "(\"4\") - Jueves");
            deepEqual(calcularDescuento (1, "Jueves", 500), condicion, "(\"Jueves\") - Jueves");
            deepEqual(calcularDescuento (1, 5, 500), condicion3, "(5) - Viernes");
            deepEqual(calcularDescuento (1, "5", 500), condicion3, "(\"5\") - Viernes");
            deepEqual(calcularDescuento (1, "Viernes", 500), condicion3, "(\"Viernes\") - Viernes");
            deepEqual(calcularDescuento (1, 6, 500), condicion3, "(6) - Sábado");
            deepEqual(calcularDescuento (1, "6", 500), condicion3, "(\"6\") - Sábado");
            deepEqual(calcularDescuento (1, "Sabado", 500), condicion3, "(\"Sabado\") - Sábado");
            deepEqual(calcularDescuento (1, "Sábado", 500), condicion3, "(\"Sábado\") - Sábado");
            deepEqual(calcularDescuento (1, 7, 500), condicion3, "(7) - Domingo");
            deepEqual(calcularDescuento (1, "7", 500), condicion3, "(\"7\") - Domingo");
            deepEqual(calcularDescuento (1, "Domingo", 500), condicion3, "(\"Domingo\") - Domingo");
        });

        QUnit.test("Meses del año", function() {
            deepEqual(calcularDescuento (1, 1, 500), condicion, "(1) - Enero");
            deepEqual(calcularDescuento ("1", 1, 500), condicion, "(\"1\") - Enero");
            deepEqual(calcularDescuento ("Enero", 1, 500), condicion, "(\"Enero\") - Enero");
            deepEqual(calcularDescuento (2, 1, 500), condicion, "(2) - Febrero");
            deepEqual(calcularDescuento ("2", 1, 500), condicion, "(\"2\") - Febrero");
            deepEqual(calcularDescuento ("Febrero", 1, 500), condicion, "(\"Febrero\") - Febrero");
            deepEqual(calcularDescuento (3, 1, 500), condicion2, "(3) - Marzo");
            deepEqual(calcularDescuento ("3", 1, 500), condicion2, "(\"3\") - Marzo");
            deepEqual(calcularDescuento ("Marzo", 1, 500), condicion2, "(\"Marzo\") - Marzo");          
            deepEqual(calcularDescuento (4, 1, 500), condicion2, "(4) - Abril");
            deepEqual(calcularDescuento ("4", 1, 500), condicion2, "(\"4\") - Abril");
            deepEqual(calcularDescuento ("Abril", 1, 500), condicion2, "(\"Abril\") - Abril");
            deepEqual(calcularDescuento (5, 1, 500), condicion2, "(5) - Mayo");
            deepEqual(calcularDescuento ("5", 1, 500), condicion2, "(\"5\") - Mayo");
            deepEqual(calcularDescuento ("Mayo", 1, 500), condicion2, "(\"Mayo\") - Mayo");
            deepEqual(calcularDescuento (6, 1, 500), condicion2, "(6) - Junio");
            deepEqual(calcularDescuento ("6", 1, 500), condicion2, "(\"6\") - Junio");
            deepEqual(calcularDescuento ("Junio", 1, 500), condicion2, "(\"Junio\") - Junio");
            deepEqual(calcularDescuento (7, 1, 500), condicion2, "(7) - Julio");
            deepEqual(calcularDescuento ("7", 1, 500), condicion2, "(\"7\") - Julio");
            deepEqual(calcularDescuento ("Julio", 1, 500), condicion2, "(\"Julio\") - Julio");
            deepEqual(calcularDescuento (8, 1, 500), condicion2, "(8) - Agosto");
            deepEqual(calcularDescuento ("8", 1, 500), condicion2, "(\"8\") - Agosto");
            deepEqual(calcularDescuento ("Agosto", 1, 500), condicion2, "(\"Agosto\") - Agosto");
            deepEqual(calcularDescuento (9, 1, 500), condicion2, "(9) - Septiembre");
            deepEqual(calcularDescuento ("9", 1, 500), condicion2, "(\"9\") - Septiembre");
            deepEqual(calcularDescuento ("Septiembre", 1, 500), condicion2, "(\"Septiembre\") - Septiembre");
            deepEqual(calcularDescuento (10, 1, 500), condicion2, "(10) - Octubre");
            deepEqual(calcularDescuento ("10", 1, 500), condicion2, "(\"10\") - Octubre");
            deepEqual(calcularDescuento ("Octubre", 1, 500), condicion2, "(\"Octubre\") - Octubre");
            deepEqual(calcularDescuento (11, 1, 500), condicion2, "(11) - Noviembre");
            deepEqual(calcularDescuento ("11", 1, 500), condicion2, "(\"11\") - Noviembre");
            deepEqual(calcularDescuento ("Noviembre", 1, 500), condicion2, "(\"Noviembre\") - Noviembre");
            deepEqual(calcularDescuento (12, 1, 500), condicion, "(12) - Diciembre");
            deepEqual(calcularDescuento ("12", 1, 500), condicion, "(\"12\") - Diciembre");
            deepEqual(calcularDescuento ("Diciembre", 1, 500), condicion, "(\"Diciembre\") - Diciembre");
        });

    });

	QUnit.module( "Módulo de esPositivo()", function(){

        QUnit.test("Multiples tipos", function() {
            notOk(esPositivo(-1), "-1" );
            notOk(esPositivo("-1"), "\"-1\"");
            ok(esPositivo(1), "1");
            ok(esPositivo("1"), "\"1\"");
            ok(esPositivo(), "Vacio");
            ok(esPositivo(""), "Cadena vacia");
            ok(esPositivo(undefined), "undefined");
            ok(esPositivo(null), "null");
            ok(esPositivo(NaN), "NaN");
        }); 

    });

    QUnit.module( "Módulo de esPar()", function(){

        QUnit.test("Multiples tipos", function() {
            ok(esPar(2), "2");
            ok(esPar("2"), "\"2\"");
            ok(esPar(-2), "-2");
            ok(esPar("-2"), "\"-2\"");
            notOk(esPar(1), "1" );
            notOk(esPar("1"), "\"1\"");
            notOk(esPar(-1), "-1" );
            notOk(esPar("-1"), "\"-1\"");      
            notOk(esPar(), "Vacío (sin parámetros)");
            notOk(esPar(""), "Cadena vacia");
            notOk(esPar(undefined), "undefined");
            notOk(esPar(null), "null");
            notOk(esPar(NaN), "NaN");
        }); 

    });

    QUnit.module( "Módulo de eureka()", function(){

        QUnit.config.reorder = false;

        QUnit.test("intentos...", function() {
            ok(eureka("Fictizia mola mucho"), "pass: \"Fictizia mola mucho\"");
            notOk(eureka("hola"), "pass: \"hola\"");
            notOk(eureka(true), "pass: true");
            notOk(eureka(-1), "pass: -1" );
        }); 

    });

    QUnit.module( "Módulo de verificadorDeFechas()", function(){

        var condicion = "Error! los datos no son correctos!";
        var condicion2 = {fecha: "24/3/2016", fechaCompleta: "jueves, 24 de marzo de 2016"};

        QUnit.test("Entrada de datos", function() {
            deepEqual(verificadorDeFechas(24,3,2016), condicion2, "(24/03/2016) Fecha completa");
            deepEqual(verificadorDeFechas("24","3","2016"), condicion2, "(24/03/2016) Fecha completa (string)");
            deepEqual(verificadorDeFechas(-1, 1, 1980), condicion, "(-1) Día fuera de rango");
            deepEqual(verificadorDeFechas(32, 1, 1980), condicion, "(32) Día fuera de rango");
            deepEqual(verificadorDeFechas("hola", 1, 1980), condicion, "(\"hola\") Día no válido");
            deepEqual(verificadorDeFechas(1, -1, 1980), condicion, "(-1) Mes fuera de rango");
            deepEqual(verificadorDeFechas(1, 13, 1980), condicion, "(13) Mes fuera de rango");
            deepEqual(verificadorDeFechas(1, "hola", 1980), condicion, "(\"hola\") Mes no válido");
            deepEqual(verificadorDeFechas(1, 1, 1969), condicion, "(1969) Mes fuera de rango");
            deepEqual(verificadorDeFechas(1, 1, "hola"), condicion, "(\"hola\") Mes no válido");
        }); 

    });

    QUnit.module( "Módulo de esBisiesto()", function(){

        QUnit.test("Entrada de datos", function() {
            ok(esBisiesto("-4"), "(\"-4\") es bisiesto");
            ok(esBisiesto(1904), "(1904) es bisiesto");
            notOk(esBisiesto(), "() parámetro vacío");
            notOk(esBisiesto(-1), "(-1) NO es bisiesto");
            notOk(esBisiesto("1905"), "(\"1905\") NO es bisiesto");
        }); 

    });

    QUnit.module( "Módulo de contadorPositivo()", function(){

        var condicion = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

        QUnit.test("Verificar resultados", function() {
            deepEqual(contadorPositivo(), condicion, "Array [1-100]");
        }); 

    });

    QUnit.module( "Módulo de contadorNegativo()", function(){

        var condicion = [100, 99, 98, 97, 96, 95, 94, 93, 92, 91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73, 72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54, 53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

        QUnit.test("Verificar resultados", function() {
            deepEqual(contadorNegativo(), condicion, "Array [100-0]");
        }); 

    });

    QUnit.module( "Módulo de contadorPares()", function(){

        var condicion = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100];

        QUnit.test("Verificar resultados", function() {
            deepEqual(contadorPares(), condicion, "Array [0-100 (Pares)]");
        }); 

    });

    QUnit.module( "Módulo de contador50Impares()", function(){

        var condicion = [-5, -3, -1, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43];
        var condicion2 = [7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55];

        QUnit.test("Verificar resultados", function() {
            deepEqual(contador50Impares(-5.6), condicion, "Array [-5.6 -> (n50) (Impares)]");
            deepEqual(contador50Impares(-5), condicion, "Array [-5 -> (n50) (Impares)]");
            deepEqual(contador50Impares("-5"), condicion, "Array [\"-5\" -> (n50) (Impares)]");
            deepEqual(contador50Impares(6), condicion2, "Array [6 -> (n50) (Impares)]");
            deepEqual(contador50Impares(6.6), condicion2, "Array [6.6 -> (n50) (Impares)]");
            deepEqual(contador50Impares("6"), condicion2, "Array [\"6\" -> (n50) (Impares)]");
        }); 

    });

    QUnit.module( "Módulo de contadorEspecial()", function(){

        var condicion = {totalImpares: 475, totalPares: 500};
        var condicion2 = {totalImpares: 775, totalPares: 750};

        QUnit.test("Verificar resultados", function() {
            deepEqual(contadorEspecial(-5.6), condicion, "(-5.6) -> Objeto {totalPares, totalImpares}");
            deepEqual(contadorEspecial(-5), condicion, "(-5) -> Objeto {totalPares, totalImpares}");
            deepEqual(contadorEspecial("-5"), condicion, "(\"-5\") -> Objeto {totalPares, totalImpares}");
            deepEqual(contadorEspecial(6.6), condicion2, "(6.6) -> Objeto {totalPares, totalImpares}");
            deepEqual(contadorEspecial(6), condicion2, "(6) -> Objeto {totalPares, totalImpares}");
            deepEqual(contadorEspecial("6"), condicion2, "(\"6\") -> Objeto {totalPares, totalImpares}");
        }); 

    });

    QUnit.module( "Módulo de cuantasVeces()", function(){

        QUnit.test("Verificar resultados", function() {
            deepEqual(cuantasVeces("a", "amigas, amigos, y demas... gentes"), 4, "(a) 4 veces en \"amigas, amigos, y demas... gentes\"");
            deepEqual(cuantasVeces("x", "amigas, amigos, y demas... gentes"), 0, "(x) 0 veces en \"amigas, amigos, y demas... gentes\"");
            notOk(cuantasVeces(), "false, sin parámetros");
            notOk(cuantasVeces(1, 1123), "false, usando números");
            notOk(cuantasVeces({letra:"a"}, {texto:"hola"}), "false, usando objetos");
        }); 

    });

    QUnit.module( "Módulo de conversionRomana()", function(){

        QUnit.test("Verificar números", function() {
            deepEqual(conversionRomana(1), "I", "1 = I");
            deepEqual(conversionRomana(4), "IV", "4 = IV");
            deepEqual(conversionRomana(5), "V", "5 = V");
            deepEqual(conversionRomana(6), "VI", "6 = VI");
            deepEqual(conversionRomana(7), "VII", "7 = VII");
            deepEqual(conversionRomana(8), "VIII", "8 = VIII");
            deepEqual(conversionRomana(9), "IX", "9 = IX");
            deepEqual(conversionRomana(10), "X", "10 = X");
            deepEqual(conversionRomana(12), "XII", "12 = XII");
            deepEqual(conversionRomana(23), "XXIII", "23 = XXIII");
            deepEqual(conversionRomana(34), "XXXIV", "23 = XXIII");
            deepEqual(conversionRomana(45), "XLV", "45 = XLV");
            deepEqual(conversionRomana(50), "L", "50 = L");
        }); 

        QUnit.test("Verificar cadenas", function() {
            deepEqual(conversionRomana("1"), "I", "\"1\" = I");
            deepEqual(conversionRomana("4"), "IV", "\"4\" = IV");
            deepEqual(conversionRomana("5"), "V", "\"5\" = V");
            deepEqual(conversionRomana("6"), "VI", "\"6\" = VI");
            deepEqual(conversionRomana("7"), "VII", "\"7\" = VII");
            deepEqual(conversionRomana("8"), "VIII", "\"8\" = VIII");
            deepEqual(conversionRomana("9"), "IX", "\"9\" = IX");
            deepEqual(conversionRomana("10"), "X", "\"10\" = X");
            deepEqual(conversionRomana("12"), "XII", "\"12\" = XII");
            deepEqual(conversionRomana("23"), "XXIII", "\"23\" = XXIII");
            deepEqual(conversionRomana("34"), "XXXIV", "\"23\" = XXIII");
            deepEqual(conversionRomana("45"), "XLV", "\"45\" = XLV");
            deepEqual(conversionRomana("50"), "L", "\"50\" = L");
        });

        QUnit.test("Verificar otros", function() {
            notOk(conversionRomana(51), "51 - fuera de rango");
            notOk(conversionRomana(-1), "-1 - fuera de rango");
        }); 
    });