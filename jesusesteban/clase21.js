function peticionAjax(url, callback) {
            var xmlHttp = new XMLHttpRequest();
            
            xmlHttp.onreadystatechange = function() {
                if(!document.querySelector('.loading')){
                    document.querySelector('body').innerHTML += "<div class='loading'>"+"<img src='loader.svg'/>"+"</div>"
                }
    
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    var datos = JSON.parse(xmlHttp.responseText);
                    callback(datos);
                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                    console.error("ERROR! 404");
                }
            };
            xmlHttp.open("GET", url, true);
            xmlHttp.send();
    }
    
    function pintarLibros(datos){
        var results = datos.results
        var html = '';
        document.querySelector(".container").innerHTML = "<div><button id='atras' class='botonazo'>Atrás</button></div>";
        
        results.forEach(function(e,i){
            setTimeout(function(){
                html = 
                "<div class='box-content'>"+
                    "<div class='textos'>"+
                        "<h5 class='semanasLista'>"+e.weeks_on_list+" semanas en lista"+"</h5>"+
                        "<h2 class='titulo'>"+"#"+e.rank+" ---- "+e.book_details[0].title+"</h2>"+
                        "<p>"+e.book_details[0].description+"</p>"+
                        "<a href="+e.amazon_product_url+" target='_blank'>Amazon</a>"+
                    "</div>"+
                    "<div class='imagen'>"+
                        "<img src='https://s1.nyt.com/du/books/images/" + e.book_details[0].primary_isbn13 + ".jpg'/>"
                    +"</div>"
                +"</div>"
                document.querySelector(".container").innerHTML += html;
                if(i>=results.length-1){
                    document.querySelector('.loading').remove();
                    document.getElementById('atras').addEventListener("click", function(e){
                    peticionAjax("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=4f6641e4884e41c387cf36d7f535b0b7",sacarListasCategory);
                });
                }
            }, i*600)
        });
        
    }
    
    function sacarListasCategory(datos){
        var results = datos.results
        var els;
        document.querySelector(".container").innerHTML = '';
        results.forEach(function(e,i){
                var html = 
                "<ul class='lista'>"+
                    "<li>"+
                        "<h3>"+e.list_name+"</h3>"+
                        "<h6>"+"Publicación más reciente: "+e.newest_published_date+"</h6>"+
                        "<h6>"+"Publicación más antigua: "+e.oldest_published_date+"</h6>"+
                        "<h6>"+"Frecuencia Actualización: "+e.updated+"</h6>"+
                        "<button class='botones' value='"+e.list_name_encoded+"'>IR</button>"+
                    "</li>"
                +"</ul>"
                document.querySelector(".container").innerHTML += html;
                if(i>=results.length-1){
                    document.querySelector('.loading').remove();
                }
        });
        els = document.getElementsByTagName('button');
            for(var j=0; j< els.length; j++){
               els[j].addEventListener("click", function(e){
                    peticionAjax("https://api.nytimes.com/svc/books/v3/lists.json?api-key=4f6641e4884e41c387cf36d7f535b0b7&list="+this.value+"&sort-order=ASC",pintarLibros)
                }); 
            }
    }
    
    peticionAjax("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=4f6641e4884e41c387cf36d7f535b0b7",sacarListasCategory);
