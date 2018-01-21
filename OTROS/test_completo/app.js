// Código
    function calculosVarios(valor1, valor2){
        valor1 = typeof(valor1) !== "number" ? parseFloat(valor1): valor1;
        valor2 = typeof(valor2) !== "number" ? parseFloat(valor2): valor2;
        return {
            suma: valor1+valor2,
            resta: valor1-valor2,
            division: valor1/valor2 ,
            multiplicacion: valor1*valor2
        };
    }

    function porcentajeAlumnos(totalHombres, totalMujeres){
        totalHombres = parseFloat(totalHombres);
        totalMujeres = parseFloat(totalMujeres);
        totalAlumnos = totalHombres + totalMujeres;

        return {
            totalAlumnos: totalAlumnos,
            porcentajeMujeres: (totalMujeres*100)/totalAlumnos,
            porcentajeHombres: (totalHombres*100)/totalAlumnos
        };
    }

    function compararNumeros (valor1, valor2) {

        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);

        if (valor1 > valor2) {

            return valor1 + " es mayor";

        } else if (valor1 < valor2){

            return valor2 + " es mayor";

        } else {

            return "Son iguales";

        }
    }

    function compararVariosNumeros (valor1, valor2, valor3) {

        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
        valor3 = parseFloat(valor3);

        if ((valor1 > valor2) && (valor1 > valor3)) {
            return valor1 + " es mayor";
        } else if (valor1 === valor2 && valor2 === valor3) {
            return "Son iguales";
        } else {
            if(valor2 > valor3){
                return valor2 + " es mayor";
            } else {
                return valor3 + " es mayor";
            }
        }
    }

   function jugandoConNumeros (valor1, valor2, valor3) {

        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
        valor3 = parseFloat(valor3);

        if (valor1 < 0) {
            return "El resultado de la suma es " + (valor2 + valor3);
        } else {
            return "El resutlado de la multiplicacion es " + (valor1 * valor2 * valor3);
        }
    }

    function calcularDescuento (mes, diaSemana, precio) {


        if (typeof mes === 'string'){

            switch (mes){
                case '12':
                    mes = "Diciembre";
                    break;
                case '1':
                    mes = "Enero";
                    break;
                case '2':
                    mes = "Febrero";
                    break;
            }
        } else {
            mes = parseInt(mes);

            switch (mes){
                case 12:
                    mes = "Diciembre";
                    break;
                case 1:
                    mes = "Enero";
                    break;
                case 2:
                    mes = "Febrero";
                    break;
            }
        }

        if (typeof diaSemana === 'string'){

            switch (diaSemana){
                case '5':
                    diaSemana = "Viernes";
                    break;
                case '6':
                    diaSemana = "Sabado";
                    break;
                case '7':
                    diaSemana = "Domingo";
                    break;
            }
        } else {

            diaSemana = parseInt(diaSemana);

            switch (diaSemana){
                case 5:
                    diaSemana = "Viernes";
                    break;
                case 6:
                    diaSemana = "Sabado";
                    break;
                case 7:
                    diaSemana = "Domingo";
                    break;
            }

        }


        precio = parseFloat(precio);

        var descuento = 25*precio/100;
        var precioConDescuento = precio - descuento;

        if (precio > 0){
            if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {

                if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Sábado" || diaSemana === "Domingo"){
                    return "No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar " + precio;
                } else {
                    return "BINGO! Has acertado de mes y días. Debes pagar solamente " + precioConDescuento;
                }

            } else {
                return "No se aplica descuento.. ven en invierno mejor!. Debes pagar " + precio;
            }

        } else {
            return "Precio incorrecto!";
        }

    }


    function esPositivo(numero) {

        numero = parseFloat(numero);

        if(numero < 0){
            return false;
        } else {
            return true;
        }

    }


    function esPar(numero) {

        numero = parseFloat(numero);

        if(numero %2 === 0 ){
            return true;
        } else {
            return false;
        }

    }


    var contador = 0;
    function eureka (secreto) {
        var clave = "Fictizia mola mucho";

            if (secreto === clave) {

                return true;

            } else {

                return false;
            }
    }


    function verificadorDeFechas(day, month, year) {

        day = parseInt(day);
        month = parseInt(month);
        year = parseInt(year);

        if(day <= 31 && day > 0 && month <=12 && month > 0 && year >= 1970){

            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
            var fecha = new Date(year, month-1, day);

            var opciones = { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            };

            return {
                fecha: fecha.toLocaleDateString('es-ES'),
                fechaCompleta: fecha.toLocaleDateString('es-ES', opciones)
            };

        } else {
            return "Error! los datos no son correctos!";
        }

    }

    function esBisiesto(year) {

        year = parseInt(year);

        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 && year % 100 === 0)) {

            return true;

        } else {

            return false;

        }
    }

    function contadorPositivo() {

        var cuenta = [];

        for (var i = 1; i <= 100; i++) {
            cuenta.push(i);
        }

        return cuenta;

    }


    function contadorNegativo() {

        var cuenta = [];

        for (var i = 100; i >= 0; i--) {
            cuenta.push(i);
        }

        return cuenta;

    }

    function contadorPares() {

        var cuenta = [];

        for (var i = 0; i <= 100; i += 2) {
            cuenta.push(i);
        }

        return cuenta;

    }

    function contador50Impares (numero) {

        var cuenta = [];
        numero = parseInt(numero);

        for (var i = 1; i <= 50; i++) {

            if (numero % 2 !== 0){
                cuenta.push(numero);
                numero++;
            } else {
                numero++;
            }

        }

        return cuenta;

    }

    function contadorEspecial (numero) {

        var totalImpares = 0;
        var totalPares = 0;
        numero = parseInt(numero);

        for (var i = 1; i <= 50; i++) {

            if (numero % 2 !== 0){
                totalImpares += numero;
                numero++;
            } else {
                totalPares += numero;
                numero++;
            }

        }

        return {
            totalImpares: totalImpares,
            totalPares: totalPares
        };
    }


    function cuantasVeces(letra, texto) {

        if (typeof letra === 'string' && typeof texto === 'string') {

            var totalVeces = 0;
            var seleccionTexto = texto.split("");

            for (var i = 0; i <= seleccionTexto.length; i++) {

                if (seleccionTexto[i] === letra){
                    totalVeces++;
                }

            }

            return totalVeces;

        } else {
            return false;
        }
    }

    function conversionRomana(numero) {

        numero = parseInt(numero);

        var numeroOriginal = numero;


        if (numero <= 50 && numero > 0){

        var numeroRomano = "";

            while(numero > 0){

                if(numero === 50){
                    numeroRomano = "L";
                    numero = 0;
                } else if (numero >= 40 && numero < 50){
                    numeroRomano += "XL";
                    numero -= 40;
                } else if (numero >= 10 && numero < 40){
                    numeroRomano += "X";
                    numero -= 10;
                } else if(numero === 9){
                    numeroRomano += "IX";
                    numero -= 9;
                } else if(numero === 8){
                    numeroRomano += "VIII";
                    numero -= 8;
                } else if (numero === 7){
                    numeroRomano += "VII";
                    numero -= 7;
                } else if (numero === 6){
                    numeroRomano += "VI";
                    numero -= 6;
                } else if (numero === 5) {
                    numeroRomano += "V";
                    numero -= 5;
                } else if (numero === 4){
                    numeroRomano += "IV";
                    numero -= 4;                
                } else if(numero <= 3 && numero > 0){
                    numeroRomano += "I";
                    numero -= 1;
                }

            }

            return numeroRomano;

        } else {

            return false;

      }

    }