![shieldsIO](https://img.shields.io/github/issues/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/forks/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)
![shieldsIO](https://img.shields.io/github/stars/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1.svg)

![WideImg](http://fictizia.com/img/github/Fictizia-plan-estudios-github.jpg)

# Master en Programación de Aplicaciones con JavaScript y Node.js
### JS, Node.js, Frontend, Express, Patrones, IoT, HTML5_APIs, Asincronía, Websockets, ECMA6, ECMA7



## Día 3

### Práctica de Github

![logo](https://c2.staticflickr.com/6/5547/12317670703_bc38a3ec49_b.jpg)

### Pseudocódigo

> El pseudocódigo (o falso lenguaje) es una descripción de alto nivel compacta e informal del principio operativo de un programa informático u otro algoritmo.

> Utiliza las convenciones estructurales de un lenguaje de programación real, pero está diseñado para la lectura humana en lugar de la lectura mediante máquina, y con independencia de cualquier otro lenguaje de programación. Normalmente, el pseudocódigo omite detalles que no son esenciales para la comprensión humana del algoritmo, tales como declaraciones de variables, código específico del sistema y algunas subrutinas. *Fuente: [Wikiwand](http://www.wikiwand.com/es/Pseudoc%C3%B3digo)*

**Partes:**
- Definición del Problema:
 - Entrada (Datos de Entrada)
 - Proceso (Modificaciones)
 - Salida (Datos finales)
- Cabecera:
 - Variables, Constantes, etc...
- Cuerpo:
 - Inicio, Instrucciones, Fin


**Ginger Code**

![logo](https://raw.githubusercontent.com/GingerCode/Art/master/Logo/Logo%20-%20formato%20horizontal%402x.png)

- [@gingerCode en Github](https://github.com/GingerCode)
- [Demo](gingercode.org)
- [Especificación](https://github.com/GingerCode/gingercode.org/wiki/Especificaci%C3%B3n)


**PSeInt:**

![PSeInt_logo](http://pseint.sourceforge.net/logo-header.png)

> ...una invitación a entrar en el maravilloso mundo de la programación...

- [Descargar](http://pseint.sourceforge.net/descargas.php)
- [Noticias](http://pseint.sourceforge.net/index.php?page=noticias.php)
- [Documentacion](http://pseint.sourceforge.net/index.php?page=documentacion.php)
- [Exportar](http://pseint.sourceforge.net/index.php?page=psexport.html)


**Trabajando con PSeInt**

- No utilizaremos:
  - Arreglos
  - Objetos
  - Definición explícita
  - Expresiones coloquiales
  - Exportaciones

**Variables:**
- Numéricos
 - Enteros
 ```
  -123, 12, 0...
 ```
 - Reales
 ```
  1.75, 3.1415...
 ```

- Carácter (cadenas)
```
	'texto', "más textos..."
```
- Lógico (Boleanos)
```
	VERDADERO o FALSO
```

**Expresiones:**
- Operadores
- Funciones


**Acciones Secuenciales:**
-  Asignación
```
	(variable)<-(expresion);
	
	// Otra opción
	(variable) = (expresión); 
```
-  Lectura (asignacion desde el ambiente)
```
	Leer (variable)
```
-  Escritura (muestra en el ambiente)
```
	Escribir (variable)
```
-  Otras
```
	// Limpiar ventana
	Borrar Pantalla; 
	// Simulacion evento tecla
	Esperar tecla; 
	// Parar temporalmente
	Esperar (numero) Segundos; 
```

**Estructuras de control:**
- Condicionales:
  - Simple (if)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	Fin Si
  ```
  - Valor por defecto (if... else)
  ```
	Si (expresion_logica) Entonces
		(acciones_por_verdadero)
	Sino
		(acciones_por_falso)
	Fin Si
  ``` 
  - Casos (Switch)
  ```
	Segun (variable_numerica) Hacer
		(opcion_1):
			(secuencia_de_acciones_1)
		(opcion_2):
			(secuencia_de_acciones_2)
		(opcion_3):
			secuencia_de_acciones_3)
		De Otro Modo:
			(secuencia_de_acciones_dom)
	Fin Segun 
  ```
- Bucles:
  - Mientras (while)
  Solo si se cumple la condicion se ejecutará
  ```
	Mientras (expresion_logica) Hacer
		(secuencia_de_acciones)
	Fin Mientras
  ```
  - Para (for)
  Se ejecutará un número limitado de veces.
  ```
	Para (variable_numerica)<-(valor_inicial) Hasta (valor_final) Con (Paso) paso Hacer
		(secuencia_de_acciones)
	Fin Para
  ```
  - Repetir (Do... While)
  Se ejecuta una vez al menos.
  ```
	Repetir
		(secuencia_de_acciones)
	Hasta Que (expresion_logica)
  ```


### Diagramas de flujo

> El diagrama de flujo o diagrama de actividades es la representación gráfica del algoritmo o proceso. Se utiliza en disciplinas como programación, economía, procesos industriales y psicología cognitiva.

> Estos diagramas utilizan símbolos con significados definidos que representan los pasos del algoritmo, y representan el flujo de ejecución mediante flechas que conectan los puntos de inicio y de fin del proceso. *Fuente: [Wikiwand](https://www.wikiwand.com/es/Diagrama_de_flujo)*


- **Teoría**
![img_simbolos](https://image.jimcdn.com/app/cms/image/transf/dimension=480x10000:format=jpg/path/s37cc796afdd27ec2/image/ib9531583fa25cd50/version/1367814535/image.jpg)


- **Ejemplo**
![img_diagrama](https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/DiagramaFlujoLampara.svg/440px-DiagramaFlujoLampara.svg.png) 


- *Herramientas*
    - [Draw.io](https://www.draw.io/)
    - [Draw de LibreOffice](http://www.libreoffice.org/discover/draw/)
    - [lucidchart](https://www.lucidchart.com/pages/es)


**Demostración:**
- Problema:
 - Objetivo: Calcular el área de un triángulo
 - Fórmula: (base*altura)/2

- Solución:
 - Pseudocódigo (Ginger Code)
 ```
 @altura = 4
 @base = 6
 @resultado = (@base * @altura) / 2
 mostrar "El resultado es " + @resultado
 ```
 - Pseudocódigo (pesInt):
 ```
 Proceso areaTriangulo
 	altura<-4
 	base<-6
 	resultado<-(base*altura)/2
 	Escribir "El resultado es ", resultado
 FinProceso
 ``` 
 - Código:
 ```javascript
 	var altura = 4;
 	var base = 6;
 	var resultado = (base*altura)/2;
 	console.log("El resultado es ", resultado);
 ```
