function countdown(id){
            var fecha=new Date(2018,5,26)
            var hoy=new Date()
            var dias=0
            var horas=0
            var minutos=0
            var segundos=0

            var diferencia=(fecha-hoy)/1000
            dias=Math.floor((diferencia/86400))
            diferencia=diferencia-(86400*dias)
            horas=Math.floor(diferencia/3600)
            diferencia=diferencia-(3600*horas)
            minutos=Math.floor(diferencia/60)
            diferencia=diferencia-(60*minutos)
            segundos=Math.floor(diferencia)

            document.getElementById(id).innerHTML='Quedan ' + dias + ' Dias, ' + horas + ' Horas, ' + minutos + ' Minutos, ' + segundos + ' Segundos'

            if (dias>0 || horas>0 || minutos>0 || segundos>0){
                    setTimeout("countdown(\"" + id + "\")",1000)
            }
            
        }