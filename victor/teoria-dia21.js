var url = "https://api.nytimes.com/svc/books/v3/lists.json?api-key=2b0fc35b474248939de2d3f42afdd5a3&list=hardcover-fiction";

function peticionAjax(url) {
    var xmlHttp = new XMLHttpRequest();
    
    if(!document.querySelector(".box-loader")) {
        document.querySelector("body").innerHTML += "<div class='box-loader'><img src='img/loader.svg' class='loader' /></div>";
    }

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            getData(JSON.parse(xmlHttp.responseText));
            
            setTimeout(function() {
                document.querySelector(".box-loader").remove();
            }, 2000);
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    };
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getData(json) {
    var bookList = json.results;
    var isbnBook = "";
    var imageUrl = "" + isbnBook + "";
    var html = "";
    
    bookList.forEach(function(e) {
        var bookDetails = e.book_details[0];
        
        html += "<div class='book'>" +
                    "<p class='book-title'>" + bookDetails.title + " #" + e.rank +"</p>" +
                    "<img src='https://s1.nyt.com/du/books/images/" + bookDetails.primary_isbn13 + ".jpg' class='book-image' />" +
                    "<p>" + bookDetails.description + "</p>" +
                    "<p>Semanas en lista: " + e.weeks_on_list + "</p>" +
                    "<p><a href='" + e.amazon_product_url + "' >Cómpralo</a></p>" +
                "</div>";
    });
    
    document.querySelector(".book-list").innerHTML = html;
}

peticionAjax(url);