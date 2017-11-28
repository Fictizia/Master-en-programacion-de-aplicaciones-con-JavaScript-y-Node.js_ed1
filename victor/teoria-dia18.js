/* Ejercicios dia 18 */
//Ejercicio 1

setInterval(function(){
    var actualDate = new Date();
    var finalDate = new Date(2018,5,26);
    var difDates = finalDate - actualDate;
    var days = 0, hours = 0, minutes = 0, seconds = 0;
    
    seconds = difDates / 1000;
    minutes = seconds / 60;
    hours = minutes / 60;
    days = hours / 24;
    
    seconds = Math.floor(seconds % 60);
    minutes = Math.floor(minutes % 60);
    hours = Math.floor(hours % 24);
    days = Math.floor(days);
    
    seconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    minutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    hours = hours < 10 ? "0" + hours.toString() : hours;
    days = days < 10 ? "0" + days.toString() : days;
    
    document.querySelector(".days").innerText = days;
    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = minutes;
    document.querySelector(".seconds").innerText = seconds;
    
    if(parseInt(days) === 0 && parseInt(hours) === 0 && parseInt(minutes) === 0 && parseInt(seconds) === 0) {
        clearInterval();
    }
    
}, 1000);