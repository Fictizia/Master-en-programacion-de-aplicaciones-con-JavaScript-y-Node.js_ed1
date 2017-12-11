var config = {
    apiKey: "2b0fc35b474248939de2d3f42afdd5a3",
    urlCategories: "https://api.nytimes.com/svc/books/v3/lists/names.json",
    urlBooks: "https://api.nytimes.com/svc/books/v3/lists.json"
}
var jsonCategories = "";

function ajaxRequest(url, callback) {
    var xmlHttp = new XMLHttpRequest();
    
    utils.showLoader();

    xmlHttp.onreadystatechange = function() {

        if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
            console.log("JSON: ", JSON.parse(xmlHttp.responseText));
            callback(JSON.parse(xmlHttp.responseText), utils.hideLoader());
        } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
            console.error("ERROR! 404");
            console.info(JSON.parse(xmlHttp.responseText));
        }
    }
    xmlHttp.open("GET", url, true);
    xmlHttp.send();
}

function getBookCategoryList(categories, callback) {
    var arrayLinks = [];
    
    if(arguments.length === 0 && jsonCategories === "") {
        console.log("No se han recogido categorías.");
        return false;
    } else if(arguments.length >= 1 && typeof categories === "object") {
        jsonCategories = categories.results;
    }
    
    if(arguments.length >= 1 && typeof arguments[1] === "function") {
        utils.showLoader();
    }
    
    document.querySelector("body").innerHTML = "<div class='book-categories'></div>";
    
    jsonCategories.forEach(function(e, i) {
        var html =  "<div class='category'>" +
                        "<p class='category-title'><strong>" + e.list_name.trim() + "</strong></p>" +
                        "<div>" +
                            "<span>Fecha libro más antiguo: " + utils.setFormatDate(e.oldest_published_date.trim()) + "</span>" +
                            "<span>Fecha libro más nuevo: " + utils.setFormatDate(e.newest_published_date.trim()) + "</span>" +
                            "<span>Frecuencia de actualización: " + e.updated.trim() + "</span>" +
                        "</div>" +
                        "<p><span class='link-book'>Ver lista de libros</span></p>" +
                    "</div>";
        arrayLinks.push(e.list_name_encoded.trim());
        document.querySelector(".book-categories").innerHTML += html;
    });
    
    document.querySelectorAll(".link-book").forEach(function(e, i) {
        e.addEventListener("click", function() {
            ajaxRequest(config.urlBooks + "?api-key=" + config.apiKey + "&list=" + arrayLinks[i], getBookList);
        });
    });
    
    if(arguments.length >= 1 && typeof arguments[1] === "function") {
        callback();
    }
}

function getBookList(books, callback) {
    var jsonBooks = books.results;
    
    document.querySelector("body").innerHTML = "<div class='back'><span class='back-button'>< Volver atrás</span></div><div class='book-list'></div>";
    
    jsonBooks.forEach(function(e, i) {
        var bookDetails = e.book_details[0];
        var nomImg = "";
        e.isbns.forEach(function(element, index) {
            if(nomImg === "") {
                nomImg = element.isbn13;
            }
        });
        
        var html = "<div class='book'>" +
                    "<p class='book-title'>" + bookDetails.title + " #" + e.rank +"</p>" +
                    "<img src='https://s1.nyt.com/du/books/images/" + nomImg + ".jpg' class='book-image' onerror='this.src=\"https://s1.nyt.com/du/books/images/" + bookDetails.primary_isbn13 + ".jpg\";' />" +
                    "<p>" + bookDetails.description + "</p>" +
                    "<p>Semanas en lista: " + e.weeks_on_list + "</p>" +
                    "<p><a href='" + e.amazon_product_url + "' target='_blank'>Cómpralo</a></p>" +
                "</div>";
        document.querySelector(".book-list").innerHTML += html;
    });
    
    document.getElementsByClassName("back-button")[0].addEventListener("click", function() {
        getBookCategoryList("", utils.hideLoader());
    });
    
    if(arguments.length >= 1 && typeof arguments[1] === "function") {
        callback();
    }
}

var utils = {
    setFormatDate: function(date) {
        var formatDate = new Date(date);
        var day = formatDate.getDate() < 10 ? "0" + formatDate.getDate().toString() : formatDate.getDate().toString();
        var month = formatDate.getMonth() < 10 ? "0" + formatDate.getMonth().toString() : formatDate.getMonth().toString();
        return day + "/" + month + "/" + formatDate.getFullYear();
    },
    showLoader: function() {
        if(document.querySelectorAll(".box-loader").length === 0) {
            document.querySelector("body").innerHTML += "<div class='box-loader'><img src='img/loader.svg' class='loader' /></div>";
        }
    },
    hideLoader: function() {
        if(document.querySelectorAll(".box-loader").length > 0) {
            document.querySelector(".box-loader").remove();
        }
    }
}

ajaxRequest(config.urlCategories + "?api-key=" + config.apiKey, getBookCategoryList);