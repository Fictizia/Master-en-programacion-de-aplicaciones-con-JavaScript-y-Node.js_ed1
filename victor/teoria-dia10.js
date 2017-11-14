

function lanzarMoneda() {
    var ale = Math.floor(Math.random() * (2 - 0) + 0);

    console.log(ale === 1 ? "Cruz" : "Cara");
}

function simularTiradas() {
    var cont = 0;

    for(var i = 0; i < 100; i++) {
    	var sum = Math.floor(Math.random() * (7 - 1) + 1) + Math.floor(Math.random() * (7 - 1) + 1);
    	
    	if(sum === 10) cont++;
    }
    
    console.log("Número de veces que las tiradas han sumado 10: ", cont);
}
