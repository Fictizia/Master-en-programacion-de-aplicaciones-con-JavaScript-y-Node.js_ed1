### Ejercicios

**1 -** Realiza una pagina web que muestre la cuenta atrás para terminar el master en días, horas, minutos y segundos.
Objetivos Adicionales:
- Además debería de seguir actualizando la cuenta atrás de manera dinámica.
- Los datos horarios siempre deben mostrarse con dos dígitos, añadiendo un cero a la izquierda cuando sea necesario.

[Solucion](../OTROS/cuenta-atras.html)

```javascript

        var intervalo;
        
        function mostrar(){
            for (var i = 0; i < elementos.length; i++) {
                elementos[i].style.opacity = 1;
            }
        }
        
        function contador(){
            var finCurso = new Date(2018, 5, 26, 19, 00);
            //var finCurso = new Date(2017, 10, 24, 12, 16);
         	var hoy = new Date();
         	var diferencia = finCurso - hoy;
         	
        	var segundos = diferencia / 1000 ;
            var minutos = segundos / 60;
            var horas = minutos / 60;
            var dias = horas / 24;
            
            segundos = segundos % 60;
            minutos = minutos % 60;
            horas = horas % 24;
            
            dias = Math.floor(dias);
        	horas = Math.floor(horas);
        	minutos = Math.floor(minutos);
        	segundos = Math.floor(segundos);
        	
            if(horas < 10){
                horas = '0' + horas;
            }
            if(minutos < 10){
                minutos = '0' + minutos;
            }
            if(segundos < 10){
                segundos = '0' + segundos;
            }
            
        	document.getElementById("days").innerHTML = dias;
        	document.getElementById("hours").innerHTML = horas;
        	document.getElementById("minutes").innerHTML = minutos;
        	document.getElementById("seconds").innerHTML = segundos;
        	
        	barra();
        }
        document.addEventListener("DOMContentLoaded", function() {
            intervalo = setInterval(contador, 1000);
        });
```
