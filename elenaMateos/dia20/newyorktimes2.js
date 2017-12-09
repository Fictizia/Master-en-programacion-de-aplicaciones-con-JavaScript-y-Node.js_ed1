var container = document.getElementById('container');

var listInfo = document.getElementById('listInfo');

var token = "217027b37588437fbc3efb9984aca1a6";
var url = "https://api.nytimes.com/svc/books/v3/lists/names.json?api-key="+token;


function askForBooks() {

  var request = new XMLHttpRequest(); // XML tipo de request, http protocolo

  request.onreadystatechange = function(){
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 400) {

          var results = JSON.parse(request.responseText).results;
          muestraResultados(results)
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
};
askForBooks();

function muestraResultados(results){
  for (var i = 0; i < results.length; i++) {
    container.innerHTML +='<ul class="book-card">' +
                            '<li class="list-element">'+ results[i].list_name +'</li>'+
                            '<li class="list-element">First publication: ' + results[i].oldest_published_date + '</li>'+
                            '<li class="list-element">Last publication' + results[i].newest_published_date + '</li>'+
                            '<li class="list-element"> ' + results[i].updated + '</li>'+
                            '<button id="' + results[i].list_name_encoded + '" class="button"> View info</button>' + // dar id results[i]
                          '</ul>';
    var id = results[i].list_name_encoded;
    var button = document.getElementById(id);
    button.addEventListener('click', openInfo());


    /*

    function asignarEventos(){
	if (document.readyState == 'complete') {
		//var datos = document.getElementById("teclado").getElementsByTagName("button");
		//console.log(datos[2]);
		for(var i=0;i<10;i++){
			/*genero un bucle para realizar un evento para cada elemento*/
/*			var numero= document.getElementById("n"+i);
			//console.log(numero);
			numero.addEventListener("click", resalta);
		}
  }
  */
  /*function resalta(elEvento){
  var evento = elEvento || window.event;
	//console.log("eeeeee");
	if(evento.type=='click'){}*/
  }//<a href="https://api.nytimes.com/svc/books/v3/lists.json?api-key=' + token+ '&' + results[i].list_name_encoded + '&sort-order=ASC">'  '</a>

}
function openInfo(){
  var modal = document.getElementById('modal');

  modal.classList.toggle('hidden');
  modal.innerHTML += '<ul class="book-card">' +
                          '<li class="list-element"> METER INFO</li>'+

                        '</ul>';

}
