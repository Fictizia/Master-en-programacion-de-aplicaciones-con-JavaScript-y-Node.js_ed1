// 1 - Realiza una pagina web que muestre la cuenta atrás para terminar el master en días, horas, minutos y segundos. Objetivos Adicionales:
//
// Además debería de seguir actualizando la cuenta atrás de manera dinámica.
// Los datos horarios siempre deben mostrarse con dos dígitos, añadiendo un cero a la izquierda cuando sea necesario.
// Tu solución

function timeDiscount() {
  var today;
  window.setInterval(function () {
    today = new Date();
    console.log(today.toLocaleString("es-ES",{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit"}));
  },1000);
}

function diferenceBetweenTodayAndMasterEndDate(){
    var masterEndDate = new Date(2017,10,24,20).getTime();
    var today = new Date().getTime();
    var difference = masterEndDate - today;

    var seconds = (difference/1000).toFixed();
    var minutes = (seconds/60).toFixed();
    seconds = seconds%60;//Take the seconds rest
    var hours = (minutes/60).toFixed();
    minutes = minutes%60;//Take the seconds rest
    var days = (hours/24).toFixed();
    hours = hours%24;
    console.log("days: "+days+" / hours: "+hours+" / minutes: "+minutes+" / seconds: "+seconds);
    console.log();

    // var values = {
    //     "seconds":(difference/1000).toFixed(),
    //     "minutes":(difference/1000/60).toFixed(),
    //     "hours":(difference/1000/60/60).toFixed(),
    //     "days":(difference/1000/60/60/24).toFixed()
    // };

    // return values;
}

function timerDiscount() {

  var dateObject = diferenceBetweenTodayAndMasterEndDate(),
      seconds = 0,
      minutes = 0,
      hours = 0;
      days = 0;


  window.setInterval(function () {
    dateObject.seconds--;
    console.log(dateObject.seconds);
    seconds++;
    if (seconds == 60) {
      dateObject.seconds--;
      console.log(dateObject.seconds+">>"+dateObject.minutes);
      seconds = 0;
      dateObject.minutes--;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      dateObject.hours--;
      hours++;
    }
    if (hours == 24) {
      hours = 0;
      dateObject.days--;
    }
  },1000);
}


// Capturan días que falta para la fecha, así como las horas, los minutos y segundos
