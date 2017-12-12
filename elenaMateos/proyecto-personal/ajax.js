/* DISTRICT */
var city = document.getElementById('city');
var temperature = document.getElementById('temperature');
var rainProbability = document.getElementById('rainProbability');
var win = document.getElementById('win');
var district = document.getElementById('district');
var optionDistrict = document.getElementById('optionDistrict');
var values = document.getElementById('values');


/* PETICION AJAX */


var url = 'https://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/station';
// http://airemad.com/api/v1/pollution/S056 es la buena

var resultados = [];
var resultados2 = [];
var url1 = 'http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution';
// var url2 = 'http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution/' + distritoId;
var url2 = 'http://private-anon-bfc6c9db09-airemad.apiary-mock.com/api/v1/pollution/S004';



  function peticionAjax(url, callback) { // con callback lo que haces
    //es decirle q tiene otro parámetro que aun no se ha definido (se hace luego).

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
  console.log(resultados);
  pintaDistritos();

  return resultados;
});

/*

  pintaResultados();



console.log(resultadosFiltrados+'cuccccccccuuuuuuuuuuuuuu');
function pintaDistritos(){
  console.log('*************', resultados[0].CO.values.filter(function (item){
    console.log(item.estado, typeof item.estado);

    return item.estado !== 'Pendiente';
  }));
  */


function pintaDistritos(){
  for (var i = 0; i < resultados.length; i++) {

    var distritoId = resultados[i].id;
    var distritoNombre = resultados[i].name;

    optionDistrict.innerHTML += '<option id="' + distritoId + '" value="' + distritoId + '">' + distritoNombre + '</option>' ;
  };
};

function pintaResultados(){

  //for (var i = 0; i < resultados.length; i++) {// recorre el array q da la llamada con TODAS las estaciones para recoger el
              //

// solo muestra ultimo...
  values.innerHTML =  '<li class="values-element">' + resultados[0].NO.parameter + ': ' +resultados[0].NO.values[0].valor  + 'mg. </li>' ;
                      // '<li class="values-element">' + resultados[i].NO.values[i].parameter + ': ' +resultados[0].NO.values[i].valor  + 'mg. </li>' +
                      // '<li class="values-element">' + resultados[i].NO2.values[i].parameter + ': ' +resultados[0].NO2.values[i].valor  + 'mg. </li>' +
                      // '<li class="values-element">' + resultados[i].NOX.values[i].parameter + ': ' +resultados[0].NOX.values[i].valor  + 'mg. </li>' ;
                      // '<li class="values-element">' + resultados[0].SO2.values[i].parameter + ': ' +resultados[0].SO2.values[i].valor  + 'mg. </li>';
  //}
}


// Llamada a la estación completa con el id:

var distritoSeleccionado = 'S056';

peticionAjax(url2, function(data2){
  resultado2 = JSON.parse(data2);
  console.log(resultados2);
  return resultados2;
});


// Recorrer el ojeto según sea typeof = 'object' para recoger SOLO los datos de contaminación en el nuevo JSON

// ralcionar el id del input con el id de la estación a pedir en segunda llamada AJax.
