//1 - ¿Que fecha será dentro de 30 días?

		var hoy = new Date();

		hoy.setDate(hoy.getDate() + 30);  
		console.log(hoy.toLocaleString());


//2 - ¿Cuantas horas han pasado desde que emepezó este curso? y... ¿en días?

		var inicioCurso = new Date(2017, 9, 25);
		console.log(inicioCurso.toLocaleString());

		var hoy = new Date();
		var diferencia = hoy - inicioCurso
		var horas = diferencia / 1000 / 60 / 60;
		var dias = diferencia / 1000 / 60 / 60 / 24;
		console.log("Han pasado " + (horas).toPrecision(3) + " horas desde que empezó el curso");
		console.log("Han pasado " + dias.toPrecision(2) + " dias desde que empezó el curso");

//3 - ¿Cuantos milisengundos quedan para terminar el curso? y... ¿en horas o días?

		var finCurso = new Date(2018, 5, 26);
		console.log(finCurso.toLocaleString());

		var hoy = new Date();
		var diferencia = finCurso - hoy
		var horas = diferencia / 1000 / 60 / 60;
		var dias = diferencia / 1000 / 60 / 60 / 24;
		console.log("Quedan " + diferencia + " milisengundos para que acabe el curso");
		console.log("Quedan " + horas.toPrecision(4) + " horas para que acabe el curso");
		console.log("Quedan " + dias.toPrecision(3) + " dias para que acabe  el curso");


   
//4 - ¿Que fecha será dentro de un año y 10 horas más?

		var hoy = new Date();
		hoy.setFullYear(hoy.getFullYear() + 1); 
		hoy.setHours(hoy.getHours() + 10);  
		console.log(hoy.toLocaleString());


    
//5 - Imprimir por consola la fecha completa (formato texto) en koreano, japones.
    
        var hoy = new Date();
		console.log("La fecha en Koreano es: " + hoy.toLocaleString("ko-KR"));
		console.log("La fecha en Japones es: " + hoy.toLocaleString("ja-JP-u-ca-japanese"));