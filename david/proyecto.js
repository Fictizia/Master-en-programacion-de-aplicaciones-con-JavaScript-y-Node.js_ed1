function peticionAjax(url, callback) {
        var xmlHttp = new XMLHttpRequest();
        
        xmlHttp.onreadystatechange = function() {
            if(!document.querySelector('.loading')){
                document.querySelector('.container').innerHTML += "<div class='loading'>"+"<img src='loader1.svg'/>"+"</div>"
            }

            if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                var datos =  JSON.parse(xmlHttp.responseText);
                callback(datos);
            } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                console.error("ERROR! 404");
            }
        };
        xmlHttp.open("GET", url, true);
        xmlHttp.send();
}


var query = document.querySelector(".query").value;
document.getElementById('busqueda').addEventListener("click", function(e){
    document.querySelector('.container').innerHTML = ""
    validar(query);
});


function validar(query){
    console.log(query)
    if(query === ""){
        alert("Introduce un campo de búsqueda válido.")
    }else{
        peticionAjax("https://newsapi.org/v2/everything?q="+query+"&sortBy=popularity&apiKey=78e4e5060c7043e88f12b0407bb4a06c",pintar);        
    }
    
}

function pintar(datos){
    var results = datos.articles
    var html = '';
    
    results.forEach(function(e,i){
        setTimeout(function(){
            html = 
            "<div class='box-content'>"+
                "<div class='textos'>"+
                    "<h5 class='semanasLista'>"+e.publishedAt+" semanas en lista"+"</h5>"+
                    "<h2 class='titulo'>"+e.title+"</h2>"+
                    "<p class='autor'>"+e.author+"</p>"+
                    "<p>"+e.description+"</p>"+
                    "<a href="+e.url+" target='_blank'>"+e.source.name+"</a>"+
                "</div>"+
                "<div class='imagen'>"+
                    "<img src=" + e.urlToImage + "/>"
                +"</div>"
            +"</div>"
            document.querySelector(".container").innerHTML += html;
            if(i>=results.length-1){
                document.querySelector('.loading').remove();
            }
        }, i*600)
    });
    
}
