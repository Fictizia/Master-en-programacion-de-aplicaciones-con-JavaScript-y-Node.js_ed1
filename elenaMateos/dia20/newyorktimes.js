// TOKEN:   8ffd1ba3a80c41e8bc7eaf0b17215c5a
var token = "217027b37588437fbc3efb9984aca1a6";
var url = "https://api.nytimes.com/svc/books/v3/lists.json?api-key="+token+"&list=hardcover-fiction&sort-order=ASC";

// var container = document.getElementById('container');
// var bookCard = document.getElementById('bookCard');
// var title = document.getElementById('title');
// var pic = document.getElementById('pic');
// var autor = document.getElementById('autor');
// var amazon = document.getElementById('amazon');
// var weeks = document.getElementById('weeks');
// var listNunmber = '';
// var i = 0;




function askForBooks() {

  var request = new XMLHttpRequest(); // XML tipo de request, http protocolo

  request.onreadystatechange = function(){
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 400) {
          var results = JSON.parse(request.responseText).results;

           pinta(results);
           return results;

        }else {
          console.log('Eror 404, el archivo no se encuentraaaaaaa');
        } return results;
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


askForBooks();


function pinta(results){
  for (var i = 0; i < 10; i++) { // results.length
container.innerHTML +='<ul class="book-card">' +
                      ' <li class="list-element">' +'#' + (i+1) + '. Título: ' + results[i].book_details[0].title + '</li>' +
                      ' <li class="list-element"><img src="' + 'https://s1.nyt.com/du/books/images/' + results[i].isbns[0].isbn13 + '.jpg"' + ' class="book-pic" alt="Book Image"></img ></li>'+
                      ' <li class="list-element">' + results[i].weeks_on_list + 'Weeks on List' + '</li>'+
                      ' <li class="list-element">AUTOR:'+ results[i].book_details[0].author + '</li>' +
                      ' <li><a id="amazon" class="list-element" href="' + results[i].amazon_product_url+ '">Comprar en Amazon...</a></li>' +
                      '</ul>';

    /*
    <ul class="book-card">
      <li  class="list-element"></li>
      <li id="" class="list-element"><img id="pic" src="" class="book-pic"></img ></li>
      <li id="weeks" class="list-element"></li>
      <li id="autor" class="list-element"></li>
      <li><a id="amazon" class="list-element" href="">Comprar en Amazon...</a></li>
    </ul>

    amazon.href = results[i].amazon_product_url;
    title.innerHTML = '#' + (i+1) + '. Título: ' + results[i].book_details[0].title;
    pic.src = 'https://s1.nyt.com/du/books/images/' + results[i].isbns[0].isbn13 + '.jpg';
    autor.innerHTML = results[i].book_details[0].author;
    weeks.innerHTML = results[i].weeks_on_list + 'Weeks on List';
    */
  }
}



/*
for (var i = 0, i<results.length; i++; ) {
    amazon.innerHTML.src = results[i].amazon_product_url;
}
*/
