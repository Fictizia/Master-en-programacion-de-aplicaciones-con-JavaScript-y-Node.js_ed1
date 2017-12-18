var optionDistrict = document.getElementById('optionDistrict');
var refreshButton = document.getElementById('refresh');

var idLista = [];
var idSeleccionado = '';

/* PETICION AJAX   http://airemad.com/api/v1/pollution/S056 es la buena*/
refreshButton.addEventListener ('click', llamandoApi);

function peticionAjax(url, callback) { // Con callback lo que haces es decirle q tiene otro parámetro que aun no se ha definido (se hace luego).

      var peticion = new XMLHttpRequest();
      peticion.open('GET', url);
      peticion.onreadystatechange = function () {
          if (this.readyState === 4) {

            callback(this.responseText); // dentro de callback paso this.responseText
          } else {
            //  funcion cargando o error
          }
        };
      peticion.send();
}

peticionAjax('http://airemad.com/api/v1/pollution', function(data){ // Aki definimos callback!!!
    pintaDistritos(JSON.parse(data));
});


/*@ulises: No usar variable global resultados*/
//var resultados = [];
///var url = ;

//function llamandoApi(){
/*
peticionAjax('http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution', function(data){ // Aki definimos callback!!!
    //resultados= JSON.parse(data);
    pintaDistritos(JSON.parse(data));
    //return resultados;
});
*/
//  return resultados;
//}
//llamandoApi();
/* FUNCION PARA PINTAR DISTRITOS DENTRO DEL INPUT */


function pintaDistritos(resultados){
  for (var i = 0; i < resultados.length; i++) {

    var distritoId = resultados[i].id;
    var distritoNombre = resultados[i].name;
    optionDistrict.innerHTML += '<option class="menu_Element" id="' + distritoId + '" value="' + distritoId + '" name="distrito">' + distritoNombre + '</option>' ;
    // Relleno array de id's:
    idLista.push(distritoId);
  }
}
/**  Tenemos el id del distrito
* 1. pasar el id a resultados para obtener los datos de una estación concreta:
* 2. Renderizar los datos de la estación
* 3. Renderizar los datos concretos
*/

function giveId(){
  idSeleccionado = optionDistrict.value;
  pintaDatos(resultados); // Llamada a rellenar la lista cuando cambia el distrito seleccionado.
  return idSeleccionado;
}

function pintaDatos(resultados){
  // Limpio la lista de datos:
  var container = document.getElementById('values');
  var fc = container.firstChild;

  while( fc ) {
      container.removeChild( fc );
      fc = container.firstChild;
  };

  var datoContaminante = '';
  for (var i = 0; i < resultados.length; i++) {

    if (resultados[i].id == idSeleccionado) {
      // En caso de que el id seleccionado en el select coincida con el id de algún resultado continúa trabajando
      // Almaceno el registro en cuestion en una variable
      var estacion = resultados[i];

      for (var element in estacion) {
        if (typeof(estacion[element]) === 'object'){

            for (var j = 0; j < estacion[element].values.length; j++) {

              if (estacion[element].values[j].estado == 'Pendiente') {
                // Declaro la variable que almacena los datos de cada contaminante en la última medición disponible
                var medidaVar = estacion[element].values[j - 1].valor;
                break;
              }
            }
            //Renderizo en la lista los elementos
            container.innerHTML += '<li class="values-element">' + estacion[element].parameter + ' (' + estacion[element].abrebiation + '): ' + medidaVar + '  μg/m3 .</li>' ;
       };
     };
       break;
    };
  };
};
