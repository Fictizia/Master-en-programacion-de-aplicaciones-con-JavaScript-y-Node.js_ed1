# Ejercicio 1
var resp = "";

do{
var aleatorio =  Math.floor(Math.random()*2);
if(aleatorio === 0){
	console.log("Ha salido cara");
}else{
	console.log("Ha salido cruz");
}
resp = prompt("Desea continuar?");
}while(resp!=="no");


# Ejercicio 2
var contador= 0;
for(i=0; i<=100; i++){
	var dado1 = Math.floor(Math.random()*6+1);
	var dado2 = Math.floor(Math.random()*6+1);
	
	if(dado1+dado2 === 10){
		contador++;
	}
}
console.log(contador);


