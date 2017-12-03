var container = document.getElementById('container');

var token = "217027b37588437fbc3efb9984aca1a6";
var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key="+token;


function askForBooks() {

  var request = new XMLHttpRequest(); // XML tipo de request, http protocolo

  request.onreadystatechange = function(){
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 400) {

          var results = JSON.parse(request.responseText).results;
          // setTimeout(pinta(results), 4000);
          // setTimeout(eliminarElemento(), 4000);
          console.log(results);

        }else {
          console.log('Eror 404, el archivo no se encuentraaaaaaa!!!!!');
        }
    }else{
      console.log('oooh cargando!!!!');
    }
  };
  request.onerror = function() {
    alert('Error al tratar de conectarse con el servidor');
  };

  request.open('GET', url, true);
  request.send();
}
