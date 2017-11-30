function peticionAjax(url) {
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.onreadystatechange = function() {
            if(!document.querySelector('.loading')){
                document.querySelector('body').innerHTML += "<div class='loading'>"+"<img src='loader.svg'/>"+"</div>"
            }

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos = JSON.parse(xmlHttp.responseText);
                    sacarDatos(datos);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
}

peticionAjax("https://api.nytimes.com/svc/books/v3/lists.json?api-key=4f6641e4884e41c387cf36d7f535b0b7&list=hardcover-fiction&sort-order=ASC")

function sacarDatos(datos){
    var results = datos.results
    var html = '';
    
    results.forEach(function(e,i){
        setTimeout(function(){
            html += 
            "<div class='box-content'>"+
                "<div class='textos'>"+
                    "<h3 class='semanasLista'>"+e.weeks_on_list+" semanas en lista"+"</h3>"+
                    "<h2 class='titulo'>"+"#"+e.rank+" ---- "+e.book_details[0].title+"</h2>"+
                    "<p>"+e.book_details[0].description+"</p>"+
                    "<a href="+e.amazon_product_url+" target='_blank'>Amazon</a>"+
                "</div>"+
                "<div class='imagen'>"+
                    "<img src='https://s1.nyt.com/du/books/images/" + e.book_details[0].primary_isbn13 + ".jpg'/>"
                +"</div>"
            +"</div>"
            document.querySelector(".container").innerHTML = html;
            if(i>=results.length-1){
                document.querySelector('.loading').remove();
            }
        }, i*1000)
        /*setTimeout(function(){
            document.querySelector('.loading').remove();
        },results.length*1000);*/
    });
}