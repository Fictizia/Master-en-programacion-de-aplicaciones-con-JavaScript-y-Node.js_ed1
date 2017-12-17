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
