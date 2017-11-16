# Clase 5

### Ejercicios

**1 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

```
    function numberToRoman(number) {
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
    function leapYear(year){
        if((year % 4 == 0 && year % 100 != 0) || (year % 100 == 0 && year % 400 == 0)){
            console.log("El año " + year + " es bisiesto");
        } else console.log("El año " + year + " no es bisiesto")
    }
```

**3 -** Diseña un programa que imprima los numeros del 1 al 100.
```
    var number = 1;
    while(number < 101) {
        console.log(number);
        number ++;
    }
```

**4 -** Diseña un programa que imprima los numeros del 100 al 0.
```
    var number = 100;
    while(number > 0) {
        console.log(number);
        number --;
    }
```

**5 -** Diseña un programa que imprima los numeros pares entre 0 y 100.
```
    var number = 1;
    while(number < 101) {
        if(number%2 == 0){
            console.log(number);
        }
        number ++;
    }
```

**6 -** Diseña un programa que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.
```
    var number = prompt("Introduce un número");
    var iterations = 50;

    while(iterations >= 0){
      if(number%2){
        console.log(number)
      }
      number ++;
      iterations --;
    }
```

**7 -** Diseña un programa que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
```
    var number = promt("Introduce un número");
    var iterations = 50;
    var odd = 0;
    var sum = number;
    while(iterations >= 0){
      if(number%2 == 0){
        sum = sum +=  number;
        console.log(sum);
      } else {
        odd++;
        }
      number++;
      iterations --;
    }
    console.log("Hay " + odd + " números impares");
```

**8 -** Diseña un programa que cuente las veces que aparece una determinada letra en una frase que introduciremos por teclado.
```
    var string = prompt("Dime una frase y contaremos la ocurrencia de una letra");
    var letter = prompt("Ahora dime la letra que quieres contar");
    function letterCount() {
      var count = 0;
      for (i = 0; i < string.length; i++) {
        if (string[i] == letter) {
          count++;
        }
      } 
      console.log("La letra " + letter + " aparece " + count + " veces en la frase " + string);
    }
    letterCount();
```

**9 -** Diseña un programa que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
```
    function coinDrop() {
        console.log((Math.floor(Math.random()*2) === 0) ? "cara" : 'cruz');
    }
    coinDrop();
```

**10 -** Diseña un programa que  simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
```
    // Tu solución
```



https://www.youtube.com/watch?v=w2vHSjIBwVA&feature=youtu.be