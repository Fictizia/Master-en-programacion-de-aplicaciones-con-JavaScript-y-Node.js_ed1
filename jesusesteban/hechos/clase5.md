# Clase 5

### Ejercicios

**1 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
    // Tu solución
    function numberRoman(number) {
        var numeral = [50,40,10,9,5,4,1];
        var roman = ["L","XL","X","IX",V","IV","I"];
        var result = "";
        for(i=0;i<numeral.length;i++) {
            while(number%numeral[i]<number) {
                result+=roman[i];
                number-=numeral[i];
            }
        }
        return result;
    }    
    
```

**2 -** Diseña un programa que nos confirme si un [año es bisiesto](https://es.wikipedia.org/wiki/A%C3%B1o_bisiesto) o no.
- Caracteristicas de un año bisiesto:
	- Tiene que ser divisible entre 4 y no tiene que ser divisible entre 100
	- O puede ser divisble entre 100 y entre 400
```
    // Tu solución
    function bisiesto(year){
        if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)){
            console.log("Este año " + year + " es bisiesto");
        } else console.log("Este año " + year + " no es bisiesto")
    }
    
```

**3 -** Diseña un programa que imprima los numeros del 1 al 100.
```
    // Tu solución
    var numero = 1;
    while(numero < 101) {
        console.log(numero);
        numero ++;
    }    
```

**4 -** Diseña un programa que imprima los numeros del 100 al 0.
```
    // Tu solución
    var numero = 100;
    while(numero > 0) {
        console.log(numero);
        numero ++;
    }     
```

**5 -** Diseña un programa que imprima los numeros pares entre 0 y 100.
```
    // Tu solución
    var numero = 1;
    while(numero < 101) {
        if(numero%2 == 0){
            console.log(numero);
        }
        numero ++;
    }    
```

**6 -** Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
```
    // Tu solución
    var numero = prompt("Introduce tu número");
    var interacciones = 50;

    while(interacciones >= 0){
      if(numero%2){
        console.log(numero);
      }
      numero ++;
      interacciones --;
    }    
```

**7 -** Diseña un programa que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
```
    // Tu solución
    var numero = promt("Introduce tu número");
    var interacciones = 50;
    var onadir = 0;
    var sumar = numero;
    while(interacciones >= 0){
      if(numero%2 == 0){
        sumar = sumar +=  numero;
        console.log(sumar);
      } else {
        anadir++;
        }
      numero++;
      interacciones --;
    }
    console.log("Estos son " + odd + " los impares");    
```

**8 -** Diseña un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.
```
    // Tu solución
    var frase = prompt("Tu frase");
    var letra = prompt("Tu letra");
    function contadorLetra() {
      var contador = 0;
      for (i = 0; i < frase.length; i++) {
        if (frase[i] == letra) {
          count++;
        }
      } 
      console.log("Esta letra " + letra + " se muestra " + contador + " en la frase " + frase);
    }
    contadorLetra();    
```

**9 -** Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```
    // Tu solución
    function lanzaMoneda() {
        console.log((Math.floor(Math.random()*2) === 0) ? "cara" : 'cruz');
    }
    lanzaMoneda();    
```

**10 -** Diseña un programa que  simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```
    // Tu solución
```
