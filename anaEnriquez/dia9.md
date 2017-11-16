### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de bucles (Do...While, For, While )

**1 -**  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.

- Usando *for*

```javascript
    for(i=3;i>0;i--){
      var masterpass = pprompt("Introduce la contraseña");
      if(masterpass === "Fictizia mola mucho") {
        i=0;
        console.log("Acceso concedido, su silla ejectará en 10 segundos para llevarle a la guarida secreta...");
      } else {
        console.log("Acceso denegado, le quedan " + (i-1) + " intentos más antes de que la pasma vaya a su dirección IP");
      }
    }
```

- Usando *while* y *break*

```javascript
    var count = 3
    while(count>0) {
      var masterpass = pprompt("Introduce la contraseña");
      if(masterpass === "Fictizia mola mucho") {
        console.log("Acceso concedido, su silla ejectará en 10 segundos para llevarle a la guarida secreta...");
        break;
      } else {
        count --;
        console.log("Acceso denegado, le quedan " + count + " intentos más antes de que la pasma vaya a su dirección IP");
      }
    }
```

- Usando *Do...While*
```javascript
    // Tu solución
```


**2 -** Diseña un algoritmo que imprima los numeros del 1 al 100.

- Usando *for*

```javascript
    for(i=1;i<101;i++){
        console.log(i);
    }
```

- Usando *while*

```javascript
    var number = 1;
    while(number < 101) {
        console.log(number);
        number ++;
    }
```

- Usando *Do...While*

```javascript
    var i = 1;
    do {
      console.log(i);
      i++;
    } while (i < 101);
```


**3 -** Diseña un algoritmo que imprima los numeros del 100 al 0.

- Usando *for*

```javascript
    for(i=100;i>=0;i--){
        console.log(i);
    }
```

- Usando *while*

```javascript
    var number = 100;
    while(number >= 0) {
        console.log(number);
        number --;
    }
```

- Usando *Do...While*

```javascript
    var i = 100;
    do {
      console.log(i);
      i--;
    } while (i >= 0);
```


**4 -** Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

- Usando *for*

```javascript
    for(i=0;i<101;i++){
        if(i%2 === 0){
            console.log(i);    
        }
    }
```

- Usando *while*

```javascript
    var number = 0;
    while(number < 101) {
        if(i%2 === 0){
            console.log(i);    
        }
        number ++;
    }
```

- Usando *Do...While*

```javascript
    var i = 0;
    do {
        if(i%2 === 0){
            console.log(i);    
        }
      i++;
    } while (i < 101);
```

**5 -** Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

```javascript
    var number = pprompt("Introduce un número y te diremos los impares que hay durante 50 intentos");
    var control = 50;
    
    for(i=0;i<=control;i++){
      if(number%2 !== 0){
        console.log(number);    
      }
      number++;
    }
    
    while(control>0) {
      if(number%2 !== 0){
        console.log(number);    
      }
      number++;
      control--;
    }
    
    do {
      if(number%2 !== 0){
        console.log(number);    
      }
      number++;
      control--;
    } while (control>0);
```

**6 -** Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
- Usando *for*

```javascript
    var number = parseInt(pprompt("Dime un número y te sumo los 50 primeros pares y cuantos impares me he encontrado"));
    var sum = number;
    var oddCount = 0;
    
    for(i=0;i<=50;i++){
      number++;
      if(number%2) {
        oddCount++;
      }else {
        console.log(number);
        sum = sum + number;
      }
    }
    console.log ("La suma de todos los pares es " + sum + " y había " + oddCount + " impares");
```

- Usando *while*

```javascript
    var number = parseInt(pprompt("Dime un número y te sumo los 50 primeros pares y cuantos impares me he encontrado"));
    var sum = number;
    var oddCount = 0;
    
    i=0;
    while(i<=50){
      number++;
      if(number%2) {
        oddCount++;
      }else {
        console.log(number);
        sum = sum + number;
      }
      i++;
    }

    console.log ("La suma de todos los pares es " + sum + " y había " + oddCount + " impares");
```

- Usando *Do...While*

```javascript
    var number = parseInt(pprompt("Dime un número y te sumo los 50 primeros pares y cuantos impares me he encontrado"));
    var sum = number;
    var oddCount = 0;
    
    i=0;
    do{
      number++;
      if(number%2) {
        oddCount++;
      }else {
        console.log(number);
        sum = sum + number;
      }
      i++;
    }while(i<=50);
    
    console.log ("La suma de todos los pares es " + sum + " y había " + oddCount + " impares");
```

**7 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

- Usando *for*

```javascript
    function numberToRoman(number) {
      var numeral = [50,40,10,9,5,4,1];
      var roman = ["L","XL","X","IX","V","IV","I"];
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

- Usando *while*
```javascript
    // Tu solución
```

- Usando *Do...While*
```javascript
    // Tu solución
```