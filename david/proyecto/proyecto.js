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


var query = "";
var idioma = "";
var miSelect = document.querySelector('.idioma');
miSelect.addEventListener("change", function(e){
    idioma = miSelect.options[miSelect.selectedIndex].value;
    console.log(idioma);
});
document.getElementById('busqueda').addEventListener("click", function(e){
    query = document.querySelector(".query").value;
    document.querySelector('.container').innerHTML = ""
    validar(query,idioma);
});


function validar(query,idioma){
    if(query === "" || !isNaN(query)){
        alert("Introduce un campo de búsqueda válido.")
    }else{
        if(idioma === "defecto"){
            alert("Debe seleccionar un idioma!")
        }else{
            peticionAjax("https://newsapi.org/v2/everything?language="+idioma+"&q="+query+"&apiKey=78e4e5060c7043e88f12b0407bb4a06c",pintar);        
        }
        
    }
    
}

function pintar(datos){
    var results = datos.articles
    var html = '';
    
    if(results.length === 0){
        setTimeout(function(){
            alert("No se encontró el resultado.")
            document.querySelector('.loading').remove();
            document.querySelector('.container').innerHTML = "<img src='http://www.easingtoncollieryclub.co.uk/ESW/Images/News.png'></img>"
        },1000);
    }else{
        results.forEach(function(element, i){
            
            if(element.urlToImage === "" || element.urlToImage === "undifined" || element.urlToImage === null){
                element.urlToImage = "http://jimmoranbroker.com/wp-content/uploads/2015/03/news2.png";
            }
            
                html = 
                "<div class='box-content'>"+
                    "<div class='textos'>"+
                        "<h2 class='titulo'>"+"<a href="+element.url+" target='_blank' title="+element.source.name+">"+element.title+"</a>"+"</h2>"+
                        "<p class='autor'>"+element.publishedAt+" || "+element.author+"</p>"+
                        "<p>"+element.description+"</p>"+
                    "</div>"+
                    "<div class='imagen'>"+
                        "<img src=" + element.urlToImage + ">"
                    +"</div>"
                +"</div>"
                document.querySelector(".container").innerHTML += html;
                if(i>=results.length-1){
                    setTimeout(function(){
                        document.querySelector('.loading').remove();
                    },1000);
                    
                }
        });
    }
    
    
}
