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
      var contrasena = prompt("Introduce la contraseña");
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
    
    var count = 0

    while(count <3) {
      var contrasena = prompt("Introduce la contraseña");
      if(contrasena === "Fictizia mola mucho") {
        console.log("Correcto");
        break;
      } else {
        console.log("No es correcto ");
      }
      count++;
    }
    if(count >=3){
        console.log("Ya no te quedan más intentos");
    }
    
    
    
```

- Usando *Do...While*
```javascript
    // Tu solución
    var count = 0
    var acierto = false;

    do{
        var contrasena = prompt("Introduce la contraseña");
        if(contrasena === "Fictizia mola mucho") {
            acierto = true;
            console.log("Correcto");
        }else{
            console.log("No es correcto");
        }
    }while (count <3 & acierto === false);
    
    if(count > 3){
        console.log("Ya no te quedan más intentos");
    }


    
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
    while(numero < 100) {
        console.log(numero);
        numero ++;
    }    
```

- Usando *Do...While*
```javascript
    // Tu solución
    var numero = 1;
    do {
      console.log(numero);
      numero++;
    } while (numero < 100);    
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
        numero --;
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
    while(numero <= 100) {
        console.log(numero);    
        numero += 2;
    }
    
```

- Usando *Do...While*
```javascript
    // Tu solución
    var numero = 0;
    do {
        console.log(numero);    
        numero += 2;
    } while (numero < 100);
    
```

**5 -** Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números.

- Usando *for* (desestructurado)
```javascript
    // Tu solución
		var impar = 0;
		
		console.info("Empieza la cuenta!");

		for ( ; impar <= 50 ; ) {
			
			if (numero % 2 !== 0){
				console.log(numero);
				impar++

			}

        numero++
			
		};

		console.info("Terminó la cuenta mágica...");

```    
- Usando *while*
```javascript 
		console.info("Empieza la cuenta!");
		
		var i = 1
		while (i <= 50) {
			if (numero % 2 !== 0){
				console.log(numero);	
			}
			numero++
			i++;
		};

		console.info("Terminó la cuenta mágica...");
```

- Usando *Do...While*
```javascript

		console.info("Empieza la cuenta!");
		
		var i = 1
		do {
			if (numero % 2 !== 0){
				console.log(numero);
				numero++
			} else (
				numero++
			)
			i ++;
		} while (i <= 50);

		console.info("Terminó la cuenta mágica...");
    
```


**6 -** Diseña un algoritmo que imprima la suma de los 50 primeros numeros pares y el total de números impares partiendo de un número dado por el usuario
- Usando *for*
```javascript
    // Tu solución
		var totalImpares = 0;
		var totalPares = 0;

		console.info("Empieza la cuenta!");

		for (var i = 1; i <= 50; i++) {
			
			if (numero % 2 !== 0){
				totalImpares += numero;
				numero++;
			} else {
				totalPares += numero;
				numero++;
			}
			
		};

		console.info("Total de suma de pares ", totalPares);
		console.info("Total de suma de impares ", totalImpares);
		console.info("Terminó la cuenta mágica...");
    
```

- Usando *while*
```javascript
    // Tu solución
		var totalImpares = 0;
		var totalPares = 0;

		console.info("Empieza la cuenta!");
		
		var i = 1
		while (i <= 50) {
			if (numero % 2 !== 0){
				totalImpares += numero;
				numero++;
			} else {
				totalPares += numero;
				numero++;
			}
			i++;
		};

		console.info("Total de suma de pares ", totalPares);
		console.info("Total de suma de impares ", totalImpares);
		console.info("Terminó la cuenta mágica...");
```

- Usando *Do...While*
```javascript
    // Tu solución
		var totalImpares = 0;
		var totalPares = 0;

		console.info("Empieza la cuenta!");
		
		var i = 1
		do {
			if (numero % 2 !== 0){
				totalImpares += numero;
				numero++;
			} else {
				totalPares += numero;
				numero++;
			}
			i ++;
		} while (i <= 50);

		console.info("Total de suma de pares ", totalPares);
		console.info("Total de suma de impares ", totalImpares);
		console.info("Terminó la cuenta mágica...");    
```

**7 -** Diseña un algoritmo introducido un numero y pasarlo a número romanos.
- Esperamos que el número sea menor de 50

![numeros_romanos](https://eloviparo.files.wordpress.com/2009/09/numeros-romans.jpg?w=466&h=172)

- Usando *for*
```javascript
    // Tu solución
		var numeroOriginal = numero;
	  

		if (numero <= 50 && numero > 0){

	    var numeroRomano = "";
	    
			for(; numero > 0 ;){
				
				if(numero === 50){
					numeroRomano = "L";
					numero = 0;
				} else if (numero >= 40 && numero < 50){
					numeroRomano += "XL";
					numero -= 40;
				} else if (numero >= 10 && numero < 40){
					numeroRomano += "X";
					numero -= 10;
				} else if(numero === 9){
					numeroRomano += "IX";
					numero -= 9;
				} else if(numero === 8){
					numeroRomano += "VIII";
					numero -= 8;
				} else if (numero === 7){
					numeroRomano += "VII";
					numero -= 7;
				} else if (numero === 6){
					numeroRomano += "VI";
					numero -= 6;
				} else if (numero === 5) {
					numeroRomano += "V";
					numero -= 5;
				} else if (numero === 4){
					numeroRomano += "IV";
					numero -= 4;				
				} else if(numero <= 3 && numero > 0){
					numeroRomano += "I";
					numero -= 1;
				}
	      
			}

			console.info(numeroOriginal + " en números romanos es " + numeroRomano);

		} else {
	    
			console.warn(numeroOriginal + "NO es un número valido (0-50)");
		
	  	}    
    
```

- Usando *while*
```javascript
    // Tu solución
		var numeroOriginal = numero;
	  

		if (numero <= 50 && numero > 0){

	    var numeroRomano = "";
	    
			while(numero > 0){
				
				if(numero === 50){
					numeroRomano = "L";
					numero = 0;
				} else if (numero >= 40 && numero < 50){
					numeroRomano += "XL";
					numero -= 40;
				} else if (numero >= 10 && numero < 40){
					numeroRomano += "X";
					numero -= 10;
				} else if(numero === 9){
					numeroRomano += "IX";
					numero -= 9;
				} else if(numero === 8){
					numeroRomano += "VIII";
					numero -= 8;
				} else if (numero === 7){
					numeroRomano += "VII";
					numero -= 7;
				} else if (numero === 6){
					numeroRomano += "VI";
					numero -= 6;
				} else if (numero === 5) {
					numeroRomano += "V";
					numero -= 5;
				} else if (numero === 4){
					numeroRomano += "IV";
					numero -= 4;				
				} else if(numero <= 3 && numero > 0){
					numeroRomano += "I";
					numero -= 1;
				}
	      
			}

			console.info(numeroOriginal + " en números romanos es " + numeroRomano);

		} else {
	    
			console.warn(numeroOriginal + "NO es un número valido (0-50)");
		
	  }    
```

- Usando *Do...While*
```javascript
    // Tu solución
		var numeroOriginal = numero;
	  

		if (numero <= 50 && numero > 0){

	    var numeroRomano = "";
	    
			do{
				
				if(numero === 50){
					numeroRomano = "L";
					numero = 0;
				} else if (numero >= 40 && numero < 50){
					numeroRomano += "XL";
					numero -= 40;
				} else if (numero >= 10 && numero < 40){
					numeroRomano += "X";
					numero -= 10;
				} else if(numero === 9){
					numeroRomano += "IX";
					numero -= 9;
				} else if(numero === 8){
					numeroRomano += "VIII";
					numero -= 8;
				} else if (numero === 7){
					numeroRomano += "VII";
					numero -= 7;
				} else if (numero === 6){
					numeroRomano += "VI";
					numero -= 6;
				} else if (numero === 5) {
					numeroRomano += "V";
					numero -= 5;
				} else if (numero === 4){
					numeroRomano += "IV";
					numero -= 4;				
				} else if(numero <= 3 && numero > 0){
					numeroRomano += "I";
					numero -= 1;
				}
	      
			} while (numero > 0)

			console.info(numeroOriginal + " en números romanos es " + numeroRomano);

		} else {
	    
			console.warn(numeroOriginal + "NO es un número valido (0-50)");
			
	  	}    
```