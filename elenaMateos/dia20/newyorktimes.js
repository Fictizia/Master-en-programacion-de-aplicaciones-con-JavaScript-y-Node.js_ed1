// TOKEN:   8ffd1ba3a80c41e8bc7eaf0b17215c5a
var token = "217027b37588437fbc3efb9984aca1a6";
var url = "https://api.nytimes.com/svc/books/v3/lists.json?api-key="+token+"&list=hardcover-fiction&sort-order=ASC";

var container = document.getElementById('container');
var title = document.getElementById('title');
var pic = document.getElementById('pic');
var autor = document.getElementById('autor');
var amazon = document.getElementById('amazon');
var weeks = document.getElementById('weeks');
var listNunmber = '';
var i = 0;

function askForBooks() {

  var request = new XMLHttpRequest(); // XML tipo de request, http protocolo

  //

  request.onreadystatechange = function(){
    if (request.readyState === 4) {
        if (request.status >= 200 && request.status < 400) {
          var results = JSON.parse(request.responseText).results;

           pinta(results);

        }else {
          console.log('Eror 404, el archivo no se encuentraaaaaaa');
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

askForBooks();

for (var i = 0; i < 10; i++) { // results.length
  
  function pinta(results){
  amazon.href = results[i].amazon_product_url;
  title.innerHTML = '#' + (i+1) + '. Título: ' + results[i].book_details[0].title;
  pic.src = 'https://s1.nyt.com/du/books/images/' + results[i].isbns[0].isbn13 + '.jpg';
  autor.innerHTML = results[i].book_details[0].author;
  weeks.innerHTML = results[i].weeks_on_list + 'Weeks on List';
  }
}




/*
for (var i = 0, i<results.length; i++; ) {
    amazon.innerHTML.src = results[i].amazon_product_url;
}
*/
