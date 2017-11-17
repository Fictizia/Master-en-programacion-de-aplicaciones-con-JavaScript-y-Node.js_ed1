
    var veces = 0;
function tiraMoneda(){


    for (var i=0; i<=100; i++ ){

        var dado1 =  Math.floor(Math.random()*6)+1;
        var dado2 =  Math.floor(Math.random()*6)+1;
         if ((dado1 + dado2) === 10) {
            veces = veces + 1;
         }
        }
        console.log(veces);
    }
// Ejercicio 2
