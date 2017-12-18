/* DISTRICT */
var city = document.getElementById('city');
var temperature = document.getElementById('temperature');
var rainProbability = document.getElementById('rainProbability');
var wind = document.getElementById('wind');
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

/**
* con callback lo que haceses decirle q tiene otro parámetro que aun no se ha definido (se hace luego).
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
/*

  pintaResultados();



console.log(resultadosFiltrados+'cuccccccccuuuuuuuuuuuuuu');
function pintaDistritos(){
  console.log('*************', resultados[0].CO.values.filter(function (item){
    console.log(item.estado, typeof item.estado);

    return item.estado !== 'Pendiente';
  }));
  */
/**
* Con la función pintaDistritos se rellenan los campos del imput
* que luego se pueden seleccionar para elegir un distrito determinado.
* distritoId registra el id para el elemento HTML,
* distritoNombre muestra el nombre del distrito en el HTML.
*/

function pintaDistritos(){
  for (var i = 0; i < resultados.length; i++) {

    var distritoId = resultados[i].id;
    var distritoNombre = resultados[i].name;

    optionDistrict.innerHTML += '<option id="' + distritoId + '" value="' + distritoId + '">' + distritoNombre + '</option>' ;
  };
};
//
// function pintaResultados(){
//
//   //for (var i = 0; i < resultados.length; i++) {// recorre el array q da la llamada con TODAS las estaciones para recoger el
//               //
//
// // solo muestra ultimo...
//   values.innerHTML =  '<li class="values-element">' + resultados[0].NO.parameter + ': ' +resultados[0].NO.values[0].valor  + 'mg. </li>' ;
//                       // '<li class="values-element">' + resultados[i].NO.values[i].parameter + ': ' +resultados[0].NO.values[i].valor  + 'mg. </li>' +
//                       // '<li class="values-element">' + resultados[i].NO2.values[i].parameter + ': ' +resultados[0].NO2.values[i].valor  + 'mg. </li>' +
//                       // '<li class="values-element">' + resultados[i].NOX.values[i].parameter + ': ' +resultados[0].NOX.values[i].valor  + 'mg. </li>' ;
//                       // '<li class="values-element">' + resultados[0].SO2.values[i].parameter + ': ' +resultados[0].SO2.values[i].valor  + 'mg. </li>';
//   //}
// }


// Llamada a la estación completa con el id:

//
//
// var distritoSeleccionado = 'S056';
// var medida = '';
// peticionAjax(url2, function(data2){
//   resultado2 = JSON.parse(data2);
//   console.log(resultados2);
//   pintaDatos(resultados2);
//   return resultados2;
// });






setTimeout("peticionAjax(url2,)", 60000);
// Recorrer el ojeto según sea typeof = 'object' para recoger SOLO los datos de contaminación en el nuevo JSON
function pintaDatos(resultados2){
    for (var element in resultados2) {
      if (typeof(resultados2[element]) === 'object'){
          container.innerHTML += '<li class="values-element">' + resultados2[element].parameter + ' (' + resultados2[element].abrebiation + '): ' + 'MEDIDAVAR' + 'Medido por <i>' + resultados2[element].technique + '</i> </li>';
          // encontrar la medida de cada elemento
          if (resultados2[element].values.estado === 'Pendiente') {
            medida = resultados2[element].values.estado
          }
      };
  }
}
// relacionar el id del input con el id de la estación a pedir en segunda llamada AJax.





/**   OBJETO DE UNO DE LOS DISTRITOS:
{
"id": "S056",
"name": "Pza. Fdez. Ladreda",
"CO": {
"parameter": "Monóxido de Cabono",
"abrebiation": "CO",
"date": "2018-01-14T00:00:00.000Z",
"technique": "Absorción Infrarroja",
"period": "datos por hora",
"values": [
{
"valor": 0.3,
"estado": "Pasado",
"date": "2018-01-14T00:00:00.000Z"
},
{
"valor": 0.3,
"estado": "Pasado",
"date": "2018-01-14T01:00:00.000Z"
},
{
"valor": 0.3,
"estado": "Pasado",
"date": "2018-01-14T02:00:00.000Z"
},
{
"valor": 0.2,
"estado": "Pasado",
"date": "2018-01-14T03:00:00.000Z"
},
{
"valor": 0.2,
"estado": "Pasado",
"date": "2018-01-14T04:00:00.000Z"
},
{
"valor": 0.2,
"estado": "Pasado",
"date": "2018-01-14T05:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T06:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T07:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T08:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T09:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T10:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T11:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T12:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T13:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T14:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T15:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T16:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T17:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T18:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T19:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T20:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T21:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T22:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T23:00:00.000Z"
}
]
},
"NO": {
"parameter": "Monóxido de Nitrógeno",
"abrebiation": "NO",
"date": "2018-01-14T00:00:00.000Z",
"technique": "Quimioluminiscencia",
"period": "datos por hora",
"values": [
{
"valor": 25,
"estado": "Pasado",
"date": "2018-01-14T00:00:00.000Z"
},
{
"valor": 27,
"estado": "Pasado",
"date": "2018-01-14T01:00:00.000Z"
},
{
"valor": 14,
"estado": "Pasado",
"date": "2018-01-14T02:00:00.000Z"
},
{
"valor": 12,
"estado": "Pasado",
"date": "2018-01-14T03:00:00.000Z"
},
{
"valor": 9,
"estado": "Pasado",
"date": "2018-01-14T04:00:00.000Z"
},
{
"valor": 13,
"estado": "Pasado",
"date": "2018-01-14T05:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T06:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T07:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T08:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T09:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T10:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T11:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T12:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T13:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T14:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T15:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T16:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T17:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T18:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T19:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T20:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T21:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T22:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T23:00:00.000Z"
}
]
},
"NO2": {
"parameter": "Dióxido de Nitrógeno",
"abrebiation": "NO2",
"date": "2018-01-14T00:00:00.000Z",
"technique": "Quimioluminiscencia",
"period": "datos por hora",
"values": [
{
"valor": 54,
"estado": "Pasado",
"date": "2018-01-14T00:00:00.000Z"
},
{
"valor": 57,
"estado": "Pasado",
"date": "2018-01-14T01:00:00.000Z"
},
{
"valor": 35,
"estado": "Pasado",
"date": "2018-01-14T02:00:00.000Z"
},
{
"valor": 30,
"estado": "Pasado",
"date": "2018-01-14T03:00:00.000Z"
},
{
"valor": 14,
"estado": "Pasado",
"date": "2018-01-14T04:00:00.000Z"
},
{
"valor": 16,
"estado": "Pasado",
"date": "2018-01-14T05:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T06:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T07:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T08:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T09:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T10:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T11:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T12:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T13:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T14:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T15:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T16:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T17:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T18:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T19:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T20:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T21:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T22:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T23:00:00.000Z"
}
]
},
"NOX": {
"parameter": "Óxidos de Nitrógeno totales",
"abrebiation": "NOX",
"date": "2018-01-14T00:00:00.000Z",
"technique": "Quimioluminiscencia",
"period": "datos por hora",
"values": [
{
"valor": 93,
"estado": "Pasado",
"date": "2018-01-14T00:00:00.000Z"
},
{
"valor": 99,
"estado": "Pasado",
"date": "2018-01-14T01:00:00.000Z"
},
{
"valor": 57,
"estado": "Pasado",
"date": "2018-01-14T02:00:00.000Z"
},
{
"valor": 48,
"estado": "Pasado",
"date": "2018-01-14T03:00:00.000Z"
},
{
"valor": 27,
"estado": "Pasado",
"date": "2018-01-14T04:00:00.000Z"
},
{
"valor": 37,
"estado": "Pasado",
"date": "2018-01-14T05:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T06:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T07:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T08:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T09:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T10:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T11:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T12:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T13:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T14:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T15:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T16:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T17:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T18:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T19:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T20:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T21:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T22:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T23:00:00.000Z"
}
]
},
"O3": {
"parameter": "Ozono",
"abrebiation": "O3",
"date": "2018-01-14T00:00:00.000Z",
"technique": "Absorción Ultravioleta",
"period": "datos por hora",
"values": [
{
"valor": 16,
"estado": "Pasado",
"date": "2018-01-14T00:00:00.000Z"
},
{
"valor": 9,
"estado": "Pasado",
"date": "2018-01-14T01:00:00.000Z"
},
{
"valor": 22,
"estado": "Pasado",
"date": "2018-01-14T02:00:00.000Z"
},
{
"valor": 27,
"estado": "Pasado",
"date": "2018-01-14T03:00:00.000Z"
},
{
"valor": 41,
"estado": "Pasado",
"date": "2018-01-14T04:00:00.000Z"
},
{
"valor": 42,
"estado": "Pasado",
"date": "2018-01-14T05:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T06:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T07:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T08:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T09:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T10:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T11:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T12:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T13:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T14:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T15:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T16:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T17:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T18:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T19:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T20:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T21:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T22:00:00.000Z"
},
{
"valor": 0,
"estado": "Pendiente",
"date": "2018-01-14T23:00:00.000Z"
}
]
}
}*/
