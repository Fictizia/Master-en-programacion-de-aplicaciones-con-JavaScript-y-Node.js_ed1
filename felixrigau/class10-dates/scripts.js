// 1 - Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

// Características:
// El usuario introduce tres números (día, mes, año) usando una función.
// Validar la fecha. En caso de error incluir un mensaje informativo.
// Después de validar, devolvemos la fecha en formato DD/MM/AAAA
// Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)

function validateDate() {
    var day = parseInt(prompt("Por favor, introduzca el día"));
    var month = parseInt(prompt("Por favor, introduzca el mes"));
    var year = parseInt(prompt("Por favor, introduzca el año"));
    var today = new Date();
    var valide = 0;
    
    //CSe verifica si dia, mes y año son válidos, sino se incrementa un contador
    if (day < 1 || day > 31){
        valide++;
    }
    if(month < 1 || month > 12 ){
        valide++;
    }
    //Se asume como fecha válida un año hasta el 2017
    if(year > today.getFullYear()) {
        valide++;
    }
    // si el contador es distinto de cero, quiere decir que alguna de los datos no son válidos
    if(valide != 0){
        window.alert("La fecha no es válida.");
        return null;
    }else{
        var date = new Date(year,month,day);
        console.log(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
        console.log(date.getDate()+" de "+date.toLocaleString('es-ES',{month:'long'})+" de "+date.getFullYear());
    }

}