var container = document.getElementById('values');



/* PETICION AJAX */


var url = 'https://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/station';
// http://airemad.com/api/v1/pollution/S056 es la buena

var resultados = [];
var url1 = 'http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution';
// var url2 = 'http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution/' + distritoId;
//var url2 = 'http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution/S004';

/**
* con callback lo que haces es decirle q tiene otro parámetro que aun no se ha definido (se hace luego).
*/

function peticionAjax(url, callback) {
    var peticion = new XMLHttpRequest();
    peticion.open('GET', url);
    peticion.onreadystatechange = function () {
        if (this.readyState === 4) {
          callback(this.responseText); // dentro de callback paso this.responseText
        }
      };
    peticion.send();
};

peticionAjax(url1, function(data){ // Aki definimos callback!!!
  resultados= JSON.parse(data);
  // console.log(resultados);
  pintaDistritos();

  return resultados;
});
console.log(resultados);



/**
Función para pintar los distritos dentro del input:
*/
function pintaDistritos(){
  for (var i = 0; i < resultados.length; i++) {

    var distritoId = resultados[i].id;
    var distritoNombre = resultados[i].name;
    // id="' + distritoId + '" sacado por innecesario???????
    optionDistrict.innerHTML += '<option value="' + distritoId + '">' + distritoNombre + '</option>' ;
  };
};


/**
Funciones para pintar los resultados dentro de la lista:
*/


//Función para determinar el elemento del input elegido:
//info sacada de "https://www.lawebdelprogramador.com/codigo/JavaScript/3605-Mostrar-el-texto-del-select-seleccionado-en-un-input-type-text.html"

/**
	 * Función que recibe el objeto seleccionado
	 *
	 * objeto.value contiene el value del elemento seleccionado
	 * objeto[value].innerHTML contiene el texto del valor seleccionado
	 */

	// function mostrar(objeto)
	// {
	// 	if(objeto.value==0)
	// 	{
	// 		document.getElementById("idSeleccionado").value="0";
	// 		document.getElementById("textoSeleccionado").value="Default";
	// 	}else{
	// 		document.getElementById("idSeleccionado").value=objeto.value;
	// 		document.getElementById("textoSeleccionado").value=objeto[objeto.value].innerHTML;
	// 	}
	// }

// Función determinar el estado para saber que elemnto pintar:

// Pintar los datos

var datoContaminacion = new Object();
var medidaDato;
function pintaDatos(resultados){
  // Recorrer el array resultados
  // Por cada resultado comprobar si es un objeto
  for (var i = 0; i < resultados.length; i++) {
    //Comprovación del NOMBRE DE LA ESTACION
    // console.log('valor de '+ resultados[i].name +'  ' +typeof(datoContaminacion));
    //recorremos el objeto resultados[i] (cada uno de los objetos del array resultados)


    for (var element in resultados[i]) {

      if (typeof(resultados[i][element]) === 'object'){

        // Creo una variable para almacenar cada uno de los datos y abrebiar en el código
        var datoContaminacion = resultados[i][element];

        //console.log(datoContaminacion.values[0]); RULAAAAAAAAAAAAAAAAAAAAAAA
        for (var i = 0; i < datoContaminacion.values.length; i++) {

          console.log('valor de '+resultados[i].name +'  ' +typeof(datoContaminacion));
            //container.innerHTML += '<li class="values-element">' + datoContaminacion.parameter + ' (' + datoContaminacion.abrebiation + '): ' + 'MEDIDAVAR' + ' Medido por <i>' + datoContaminacion.technique + '</i> </li>';
            // encontrar la medida de cada elemento
            // if (resultados[element].values.estado === 'Pasado') {
            //   medida = resultados[element].values.estado
            // }
            };
      }

    }

}
}
setTimeout('pintaDatos(resultados)', 6000);


/* para el TIEMPO

/*

var estacion = "S024";

       function horaEstimada() {
           var hora = new Date();
           var horaCalculada = hora.getHours() - 2;
           return "hora" + horaCalculada;
       }
       // Gestión de peticiones AJAX
       function peticionAjax(url) {
           var xmlHttp = new XMLHttpRequest();
           xmlHttp.onreadystatechange = function() {
               if (xmlHttp.readyState === 4) {
                   if (xmlHttp.status >= 100 && xmlHttp.status <= 300) {
                       var datosCrudos = JSON.parse(xmlHttp.responseText);

                       var datos = datosCrudos.list;
                       for (var i = 0, x = 1; i < datos.length; i += 8, x++) {
                           if (x !== 1 && x <= 5) {
                               var y = x - 1;
                               var hora = datos[i].dt_txt;
                               var contenido = '<div><h6><strong>' + diaSemana(y) + ' (' + hora.substring(11, 16) + ')</strong></h6>';
                               contenido += '<i class="owf owf-' + datos[i].weather[0].id + ' owf-5x owf-pull-left owf-border"></i>';
                               contenido += '<strong>' + capitalizeIt(datos[i].weather[0].description) + '</strong><br>';
                               contenido += 'Temp ' + datos[i].main.temp + '°C<br>';
                               contenido += 'Min ' + datos[i].main.temp_min + '°C Max ' + datos[i].main.temp_max + '°C<br>';
                               contenido += 'H ' + datos[i].main.humidity + '% - ' + datos[i].main.pressure + ' psi</div>';
                               document.getElementById("col" + y).innerHTML = contenido;
                           } else {
                               var hora = datos[i].dt_txt;
                               var contenido = '<div><i class="owf owf-' + datos[i].weather[0].id + ' owf-12x owf-pull-left azul-madrid"></i>'
                               contenido += datos[i].main.temp + '°C<br>';
                               contenido += 'Min ' + datos[i].main.temp_min + '°C | Max ' + datos[i].main.temp_max + '°C<br>';
                               contenido += 'Hum ' + datos[i].main.humidity + '% | Pres ' + datos[i].main.pressure + ' psi<br>';
                               contenido += 'Viento ' + datos[i].wind.deg + '° | ' + datos[i].wind.speed + ' km/h</div><br>';
                               document.getElementById("colAhora").innerHTML = contenido;
                           }
                       }
                   } else if (xmlHttp.status >= 400 && xmlHttp.status <= 600) {
                       errorDatos(JSON.parse(xmlHttp.responseText));
                   }
               }
           };
           xmlHttp.open("GET", url, true);
           xmlHttp.send();
       }
       function errorDatos(error) {
           document.getElementById("cargando").style.display = 'none';
           document.getElementById("error-ajax").style.display = 'block';
           document.getElementById("row-contenido").innerHTML = '<img src="http://www.404notfound.fr/assets/images/pages/img/androiddev101.jpg">';
           console.error("ERROR! 404", error);
       }
       // Arrancando
       peticionAjax("http://airemad.com/api/v1/weather/"+estacion);
*/
