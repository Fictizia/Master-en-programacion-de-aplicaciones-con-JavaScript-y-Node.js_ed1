// HTML CONTAINER
var container = document.getElementById('container');




var request = new XMLHttpRequest();
var url = 'http://airemad.com/api/v1/pollution/S056';
var datos = [];
request.open('GET', url);

request.onreadystatechange = function () {

  if (this.readyState === 4) {
    //console.log('Status:', this.status);
   // console.log('Headers:', this.getAllResponseHeaders());
   // console.log('Body:', this.responseText);
    datos = JSON.parse(this.responseText);
    pintaDatos(datos)
  }
};

request.send();
//console.log(datos);


/**
 * YUJUUUUU
 */

 /**
  * function pintaResultados(){
  var id = 0;
  for (var i = 0; i < resultados.length; i++) {
    id = i;

// solo muestra ultimo...
  values.innerHTML =  '<li class="values-element">' +resultados[id].datos_disponibles.pollution[0]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[1]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[2]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[3]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[4]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[5]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[6]  + ' </li>' +
                      '<li class="values-element">' +resultados[id].datos_disponibles.pollution[7]  + ' </li>' ;
  }
}
  console.log(resultados);
  */

  function pintaDatos(datos){
      for (var element in datos) {
    if (typeof(datos[element]) === 'object'){
        container.innerHTML += '<li class="values-element">' + datos[element].parameter + ' (' + datos[element].abrebiation + '): ' + 'MEDIDAVAR' + 'Medido por <i>' + datos[element].technique + '</i> </li>' ;
    };
    }
  }
