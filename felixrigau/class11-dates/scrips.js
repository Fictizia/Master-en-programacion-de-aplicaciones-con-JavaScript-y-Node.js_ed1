// 1 - ¿Que fecha será dentro de 30 días?

function dateInXDays(days) {
    var date = new Date();
    date.setDate(date.getDate() + days);
    console.log("Dentro de 30 días será: "+ date.toLocaleString("es-ES",{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'}));
}

// 2 - ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?


//Devuelve la diferencia en milisegundos entre dos fechas
function diferenceBetweenTowDates(date1, date2){
    date1 = date1.getTime();
    date2 = date2.getTime();
    var difference;
    if(date1 > date2){
      difference = date1 - date2;
    }else {
      difference = date2 - date1;
    }
    return difference;
}

//Devuelve un objeto con la cantidad de secundos, minutos, horas, días.
function getObjectDate(miliseconds) {
    var date = {
        "seconds":(miliseconds/1000).toFixed(),
        "minutes":(miliseconds/1000/60).toFixed(),
        "hours":(miliseconds/1000/60/60).toFixed(),
        "days":(miliseconds/1000/60/60/24).toFixed()
    };
    return date;
}

//Solution

function dateFromStartMaster() {

  var startMaster = new Date(2017,9,25,17);
  var today = new Date();
  var miliseconds = diferenceBetweenTowDates(startMaster, today);
  var objectDate = getObjectDate(miliseconds);
  console.log("Desde que comenzó el master han transcurrido:\n"+"Horas:"+objectDate.hours+"\n"+"Días:"+objectDate.days);

}

// 3 - ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?

function howLongForEndMaster(endDate) {
  var today = new Date();
  endDate = new Date(2018,5,25,19);
  var miliseconds = diferenceBetweenTowDates(endDate, today);
  var objectDate = getObjectDate(miliseconds);
  console.log("Para finalizar el master faltan:\n"+miliseconds+" milisegundos"+"\n"+objectDate.hours+" horas"+"\n"+objectDate.days+" días");
}


// 4 - ¿Que fecha será dentro de un año y 10 horas más?

//Recibe por parámetros [opcionalmente] la cantidad de años, meses, días, horas y minutos que se quieran contar a partir de la fecha actual
//whatDateWillBe(years[,months,days,hours,minutes,seconds])
function whatDateWillBe() {
    var args = Array.prototype.slice.call(arguments);
    var today = new Date();

    if (args.length != 0) {
        var textToShow = "La fecha dentro de ";
        var years = args[0];
        today.setFullYear(today.getFullYear()+years);
        textToShow = textToShow.concat(years, " años");

        if (args[1]){
            var month = args[1];
            today.setMonth(today.getMonth()+month);
            textToShow = textToShow.concat(", ",month, " meses");
        }
        if (args[2]){
            var days = args[2];
            today.setDate(today.getDate()+days);
            textToShow = textToShow.concat(", ",days, " días");
        }
        if (args[3]){
            var hours = args[3];
            today.setHours(today.getHours()+hours);
            textToShow = textToShow.concat(", ",hours, " horas");
        }
        if (args[4]){
            var minutes = args[4];
            today.setMinutes(today.getMinutes()+minutes);
            textToShow = textToShow.concat(", ",minutes, " minutos");
        }
        if (args[5]){
            var seconds = args[5];
            today.setSeconds(today.getSeconds()+seconds);
            textToShow = textToShow.concat(", ",seconds, " segundos");
        }

        console.log(textToShow+" será el:\n\n"+today.toLocaleString("es-ES",{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'}));

    } else {
        console.log("Pásame algo!!!");
    }
}


// 5 - Imprimir por consola la fecha completa (formato texto) en koreano, japones.

function todayInJapanese() {
    var today = new Date();
    console.log(today.toLocaleString("ja-JP",{month:"long",weekday:"long"}));
}

function todayInKorean() {
    var today = new Date();
    console.log(today.toLocaleString("ko-KR",{month:"long",weekday:"long"}));
}
