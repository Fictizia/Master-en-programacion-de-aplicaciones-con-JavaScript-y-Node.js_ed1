# Clase 9


### Ejercicios

Realiza los siguientes ejercicios usando en cada uno los tres tipos de bucles (Do...While, For, While )

**1 -**  Diseña un algoritmo para identificar a los clientes autorizados a entrar a nuestro sistema.
- Características:
	- La palabra clave es "Fictizia mola mucho"
	- Solo existen tres intentos
	- Si se pasan los tres intentos. Se despliega un mensaje informativo.

- Usando *for*
```javascript
    // Tu solución
    
    for(i=3;i>0;i--){
      var contrasena = pprompt("Introduce la contraseña");
      if(contrasena === "Fictizia mola mucho") {
        i=0;
        console.log("Correcto");
      } else {
        console.log("Denegado, te quedan " + (i-1));
      }
    }
    
```

- Usando *while* y *break*
```javascript
    // Tu solución
    
    
    var count = 3
    while(count>0) {
      var contrasena = pprompt("Introduce la contraseña");
      if(contrasena === "Fictizia mola mucho") {
        console.log("Correcto");
        break;
      } else {
        count --;
        console.log("Denegado, te quedan " + (i-1));
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
    // Tu solución
    for(i=1;i<101;i++){
        console.log(i);
    }    
```

- Usando *while*
```javascript
    // Tu solución
    var numero = 1;
    while(numero < 101) {
        console.log(numero);
        number ++;
    }    
```

- Usando *Do...While*
```javascript
    // Tu solución
    var numero = 1;
    do {
      console.log(numero);
      numero++;
    } while (numero < 101);    
```


**3 -** Diseña un algoritmo que imprima los numeros del 100 al 0.

- Usando *for*
```javascript
    // Tu solución
    for(i=100;i>=0;i--){
        console.log(i);
    }
    
```

- Usando *while*
```javascript
    // Tu solución
    var numero = 100;
    while(numero >= 0) {
        console.log(numero);
        number --;
    }    
```

- Usando *Do...While*
```javascript
    // Tu solución
    var numero = 100;
    do {
      console.log(numero);
      numero--;
    } while (numero >= 0);
    
```


**4 -** Diseña un algoritmo que imprima los numeros pares entre 0 y 100.

- Usando *for*
```javascript
    // Tu solución
    for(i=0;i<101;i++){
        if(i%2 === 0){
            console.log(i);    
        }
    }
```

- Usando *while*
```javascript
    // Tu solución
    var numero = 0;
    while(numero < 101) {
        if(i%2 === 0){
            console.log(i);    
        }
        numero ++;
    }
    
```

- Usando *Do...While*
```javascript
    // Tu solución
    var numero = 0;
    do {
        if(numero%2 === 0){
            console.log(numero);    
        }
      numero++;
    } while (numero < 101);
    
```

**5 -** Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

- Usando *for* (desestructurado)
```javascript
    // Tu solución
    var numero = prompt("Itroduce un numero y te diré los impares hasta 50 intentos");
    var controlador = 50;
    
    for(i=0;i<=controlador;i++){
      if(numero%2 !== 0){
        console.log(numero);    
      }
      numero++;
    }

```    
- Usando *while*
```javascript 
    var numero = prompt("Itroduce un numero y te diré los impares hasta 50 intentos");
    var controlador = 50;
    while(control>0) {
      if(numero%2 !== 0){
        console.log(numero);    
      }
      numero++;
      controlador--;
    }
```

- Usando *Do...While*
```javascript

    do {
      if(numero%2 !== 0){
        console.log(numero);    
      }
      numero++;
      controlador--;
    } while (controlador>0);
    
```


**6 -** Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
- Usando *for*
```javascript
    // Tu solución
    var numero = parseInt(pprompt("Introduce un numero y sumamos los 50 pares y contamos los impares que hemos encontrado"));
    var suma = numero;
    var contador = 0;
    
    for(i=0;i<=50;i++){
      numero++;
      if(numero%2) {
        contador++;
      }else {
        console.log(numero);
        suma = suma + numero;
      }
    }
    console.log ("La suma de tus pares es " + suma + " y hemos encontrado " + contador + " impares");
    
```

- Usando *while*
```javascript
    // Tu solución
    var numero = parseInt(pprompt("Introduce un numero y sumamos los 50 pares y contamos los impares que hemos encontrado"));
    var suma = numero;
    var contador = 0;
    
    i=0;
    while(i<=50){
      numero++;
      if(numero%2) {
        contador++;
      }else {
        console.log(numero);
        suma = suma + numero;
      }
      i++;
    }

    console.log ("La suma de tus pares es " + suma + " y hemos encontrado " + contador + " impares");
```

- Usando *Do...While*
```javascript
    // Tu solución
```

**7 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

- Usando *for*
```javascript
    // Tu solución
    
```

- Usando *while*
```javascript
    // Tu solución
```

- Usando *Do...While*
```javascript
    // Tu solución
```