//Libros de una categoria
var bookListUrl = "https://api.nytimes.com/svc/books/v3/lists.json";

//Todas las categorías
var categoryListUrl = "https://api.nytimes.com/svc/books/v3/lists/names.json";

var buttonBack = document.querySelector('.back');
buttonBack.addEventListener('click',function () {
 init();
},true);

function setEventClickToBCategories() {
  var links = document.querySelectorAll('.link');
  for (var i=0; i < links.length; i++){
    links[i].addEventListener('click',function (even) {
      var url = event.target.getAttribute('name');
      makeRequest('GET',url,true,showBookList);
    }, true);
  }
}

(function () {
    init();
})();

function init() {
    showElement(".back",false);
    var url = getUrl(categoryListUrl);
    makeRequest('GET', url, true, showBookCategoryList);
}

function showBookCategoryList(categoryList) {

    var categories = document.querySelector('.elements'),
        li,
        element,
        title,
        oldest,
        newest,
        update,
        urlBooks;

    clearElements(categories);

    for (var i = 0; i < categoryList.length; i++) {

        element = categoryList[i];
        title = element.display_name;
        oldest = element.oldest_published_date;
        newest = element.newest_published_date;
        update = element.updated;
        urlBooks = getUrl(bookListUrl,element.list_name_encoded);


        li = "<li class=\"category\">" +
                "<h3 class=\"title\">"+title+"</h3>" +
                "<p class=\"oldest\">Oldest: "+oldest+"</p>" +
                 "<p class=\"newdest\">NewDest: "+newest+"</p>" +
                "<p class=\"update\">"+"Update:"+update+"</p>" +
                "<p class=\"link\" name=\""+urlBooks+"\" >READ MORE!<span class=\"arrow\">\></spam></p>" +
             "</li>";

        categories.innerHTML += li;

    }
    showElement(".loader",false);
    setEventClickToBCategories()
}

function showBookList(booksList) {

    var titleCategory = document.querySelector(".title-category");
    titleCategory.innerText = "Top "+booksList[0].list_name;

    var books = document.querySelector('.elements'),
        li,
        element,
        title,
        rank,
        urlImage,
        week,
        description,
        urlBuy;

    clearElements(books);

    for (var i = 0; i < booksList.length; i++) {

        element = booksList[i];
        title = element.book_details[0].title;
        rank = element.rank.toString();
        if(element.isbns[0].isbn13){
            urlImage = element.isbns[0].isbn13;
        }else{
            urlImage = element.isbns[1].isbn13;
        }
        week = element.weeks_on_list;
        description = element.book_details[0].description;
        urlBuy = element.amazon_product_url;

        li = "<li class=\"book\">" +
                "<h3 class=\"title-book\">"+"#"+rank.toUpperCase()+" "+title.toUpperCase()+"</h3>" +
                "<img src=\"https://s1.nyt.com/du/books/images/"+urlImage+".jpg\" "+"class=\"image\">" +
                "<p class=\"weeks\">Weeks on list: "+week+"</p>" +
                "<p class=\"description\">"+description+"</p>" +
                "<a class=\"amazon\" href=\""+urlBuy+"\">BUY AT AMAZON</a>" +
             "</li>";

        books.innerHTML += li;

    }
    showElement(".loader",false);
    showElement(".back",true);
}

function clearElements(element) {
  while(element.hasChildNodes()){
	   element.removeChild(element.firstChild);
  }
}

function showElement(cssClass,show) {
    var element = document.querySelector(cssClass);
    if (show) {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
}

function makeRequest(httpMethod, url, asynchronous, callback) {

    showElement(".loader",true);
    var request = new XMLHttpRequest();
    request.open(httpMethod,url, asynchronous);
    request.onreadystatechange = function () {

      if (request.readyState == 4 && request.status >= 200 && request.status < 300 && request.responseText ) {
          var json = JSON.parse(request.responseText);
          var results = json.results;
          callback(results);
          return true;
      }else{
          return false;
      }
    };
    request.send(null);

}

function getUrl(url, nameList) {
    var params;
    if(nameList){
        params = {
          'api-key': "5b4c3f4bf57b49729ed543e0755a05b8",
          'list': nameList
        };
    }else{
        params = {
          'api-key': "5b4c3f4bf57b49729ed543e0755a05b8"
        };
    }
    url += '?';
    for (var prop in params) {
        url += prop+"="+params[prop]+"&";
    }
    url = url.substring(0, url.length-1);
    return url;
}
