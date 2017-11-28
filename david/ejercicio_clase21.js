function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();

        xmlHttp.onreadystatechange = function() {

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = JSON.parse(xmlHttp.responseText);
                imprimir(sacarDatos(datos));
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
}

peticionAjax("https://api.nytimes.com/svc/books/v3/lists.json?api-key=4f6641e4884e41c387cf36d7f535b0b7&list=hardcover-fiction&sort-order=ASC")

var objetoDatos = {
    urlAmazon: '',
    rankingPos: 0,
    titulo: '',
    semanas: 0,
    descricion: '',
    caratula: ''
}

var array = []

function sacarDatos(datos){
    var results = datos.results
    
    results.forEach(function(e){
        var objetito = new objetoDatos();
        objetito.urlAmazon = e.amazon_product_url
        objetito.rankingPos = e.rank
        objetito.titulo = e.book_deatils[0].title
        objetito.semanas = e.rank_last_week
        objetito.descricion = e.book_deatils[0].description
        objetito.caratula = e.isbns[0].isbn13
        
        return objetito;
    });
}


function imprimir(objeto){
    
}