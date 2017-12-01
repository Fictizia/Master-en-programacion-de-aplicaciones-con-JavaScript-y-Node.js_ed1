// TOKEN:   8ffd1ba3a80c41e8bc7eaf0b17215c5a
var token = "217027b37588437fbc3efb9984aca1a6";
var url = "https://api.nytimes.com/svc/books/v3/lists.json?api-key="+token+"&list=hardcover-fiction&sort-order=ASC";

var title = document.getElementById('title');
var pic = document.getElementById('pic');
var autor = document.getElementById('autor');
var amazon = document.getElementById('amazon');
var weeks = document.getElementById('weeks');

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

function pinta(results){

   console.log(results[0].amazon_product_url) ;
amazon.href = results[0].amazon_product_url;
title.innerHTML = results[0].book_details[0].title;
pic.src = 'https://s1.nyt.com/du/books/images/' + results[0].isbns[0].isbn13 + '.jpg';
//pic.src = https://s1.nyt.com/du/books/images/9780316273909.jpg

}


/*
for (var i = 0, i<results.length; i++; ) {
    amazon.innerHTML.src = results[i].amazon_product_url;
}
*/
