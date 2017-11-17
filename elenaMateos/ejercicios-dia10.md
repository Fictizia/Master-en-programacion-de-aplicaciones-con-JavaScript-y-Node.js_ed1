Ejercicios

###1 - Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.

 ```
 function tiraMoneda(){
  var resultado =  Math.floor(Math.random()*10);

 if (resultado>5) {
     console.log('Es cara');
 }else{
     console.log('Es cruz')
 }
}
```
###2 - Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.

```
function tiraMoneda(){
    var veces = 0;

    for (var i=0; i<=100; i++ ){

        var dado1 =  Math.floor(Math.random()*6)+1; // como patron entraría tb en una funcion
        var dado2 =  Math.floor(Math.random()*6)+1;
         if ((dado1 + dado2) === 10) {
            veces = veces + 1;
         }
        }
        return veces;
    }
    console.log(veces);
    ```

### 10 - Diseña un script que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

__Características:__
 * El usuario introduce tres números (día, mes, año) usando una función.
 * Validar la fecha. En caso de error incluir un mensaje informativo.
 * Después de validar, devolvemos la fecha en formato DD/MM/AAAA
 * Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
 *
var dia = promt('Dame un número');
parseInt(dia);

var mes = promt('Dame el mes');
parseInt(mes);

var anno = promt('Dame el año');
parseInt(anno);

alert(' La fecha es ' + dia +'/'+ mes + '/' + anno);

juuuu XD


var dia = promt('Dame un número');
parseInt(dia);

var mes = promt('Dame el mes');
parseInt(mes);

var anno = promt('Dame el año');
parseInt(anno);

function fecha(dia, mes, anno){


    if (dia < 1 && 31 < dia) {
        alert('Dame un día válido');
        return false;
    }
    if (mes < 0 && 11 < mes){
        alert('Dame un mes entre 0 y 11')
        return false
    }
    if (anno < 0 && anno === infinito)

    var fecha = newDate(anno, mes, dia);
};
