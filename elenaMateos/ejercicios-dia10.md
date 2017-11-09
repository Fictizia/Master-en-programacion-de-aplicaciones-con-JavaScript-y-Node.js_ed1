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
        
        var dado1 =  Math.floor(Math.random()*6)+1;
        var dado2 =  Math.floor(Math.random()*6)+1;
         if ((dado1 + dado2) === 10) {
            veces = veces + 1;
         }
        }
        return veces;
    }
    console.log(veces);
    ````
