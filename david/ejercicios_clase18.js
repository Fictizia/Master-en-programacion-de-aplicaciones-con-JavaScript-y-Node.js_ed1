var intervalo;
function fechasDif(){
    var fecha=new Date(2018,1,19,0,0)
    var hoy=new Date()
    var dias=0
    var horas=0
    var minutos=0
    var segundos=0

    var diferencia=(fecha-hoy)/1000
    
    if (diferencia <= 0){
        diferencia = 0;
        clearInterval(intervalo);
    }
    
    dias=Math.floor((diferencia/86400))
    diferencia=diferencia-(86400*dias)
    horas=Math.floor(diferencia/3600)
    diferencia=diferencia-(3600*horas)
    minutos=Math.floor(diferencia/60)
    diferencia=diferencia-(60*minutos)
    segundos=Math.floor(diferencia)
    
    if(horas <10 ){
        horas = "0" + horas;
    }
    if(minutos <10 ){
        minutos = "0" + minutos;
    }
    if(segundos <10 ){
        segundos = "0" + segundos;
    }
    document.getElementById("dias").innerHTML=dias;
    document.getElementById("horas").innerHTML=horas;
    document.getElementById("minutos").innerHTML=minutos;
    document.getElementById("segundos").innerHTML=segundos;
    
    
};
document.addEventListener("DOMContentLoaded", function() {
   intervalo = setInterval(fechasDif,1000);
});
