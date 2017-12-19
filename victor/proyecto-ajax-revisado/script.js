(function() {
    const URL_ITUNES = "https://itunes.apple.com/search?entity=song&";
    
    var ajax = {
        request: function(url, callback) {
            var xmlHttp = new XMLHttpRequest();
            
            loader.load();
            
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    callback(JSON.parse(xmlHttp.responseText));
                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                    console.error("ERROR! 404");
                    console.info(JSON.parse(xmlHttp.responseText));
                }
            };
            xmlHttp.open("GET", url, true);
            xmlHttp.send();
        }
    }
    
    var itunes = {
        search: function() {
            document.querySelector(".search-button").addEventListener("click", function() {
                if(utils.validator()) {
                    // @Ulises: Unifica las busquedas con utils.validator()
                    var query = document.querySelector(".search-bar").value;
                    var limit = document.querySelector(".search-limit-bar").value;
                    
                    // Ulises: Whaaaaat .trim()??
                    if(limit.trim() === "") {
                        limit = limit.trim();
                    } else {
                        var auxLimit = parseInt(limit).toString();
                        limit = "&limit=" + auxLimit;
                        
                    }
                    
                    //@Ulises: setHTML es un nombre no muy recomendado...
                    ajax.request(URL_ITUNES + "term=" + query + limit, itunes.setHTML);
                }
            });
        },
        
        // @Ulises: No pasas un "json", pasas ya el objeto...
        setHTML: function(json) {
            // @Ulises: Simplificar con el IF-ELSE psoterior
            var html = "";
            document.querySelector(".music-container").innerHTML = "";
            
            if(json.resultCount === 0) {
                html += "<div class='color-white'><span>No se encontraron resultados.</span></div>";
            } else {
                html += "<div class='color-white'><span>Número de resultados: " + json.resultCount + "</span></div>";
                // @Ulises: e no recomendado, mejor "elemento" o "resultado"
                json.results.forEach(function(e, i) {
                    html += "<div class='music-box'>" +
                                "<div class='music-image'>" +
                                    "<img src='" + e.artworkUrl30 + "' />" +
                                "</div>" +
                                "<div class='track-name'>" +
                                    "<span>" + e.trackName + "</span>" +
                                "</div>"+
                                "<div class='track-time'>" +
                                    "<span>" + utils.setTime(e.trackTimeMillis) + "</span>" +
                                "</div>" +
                                "<div class='artist-link'>" +
                                    "<a href='" + e.artistViewUrl + "' title='Ver página del artista' target='_blank'>" + e.artistName + "</a>" +
                                "</div>" +
                                "<div class='links'>" +
                                    "<a href='" + e.trackViewUrl + "'title='Ver álbum' target='_blank'><img src='img/icon-eye.svg'/></a>" +
                                    "<img class='link-play' src='img/icon-play.svg' />" +
                                    "<img class='link-pause' src='img/icon-pause.svg' />" +
                                    "<audio><source src='" + e.previewUrl + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>" +
                                "</div>" +
                            "</div>";
                });
            }
            
            document.querySelector(".music-container").innerHTML = html;
                
            itunes.activeAudio();
            
            // @Ulises: Menos carga en el DOM. Ocultando clases que añadiendo y borrando
            loader.delete();
        },
        activeAudio: function() {
            var plays = document.querySelectorAll(".link-play");
            var pauses = document.querySelectorAll(".link-pause");
            var audios = document.querySelectorAll("audio");
            
            
            // @ulises: Utilizar delegacion de eventos. https://github.com/Fictizia/Master-en-programacion-de-aplicaciones-con-JavaScript-y-Node.js_ed1/blob/master/teoria/dia18.md
            if(plays.length > 0) {
                audios.forEach(function(e, i) {
                    e.onended = function() {
                         this.currentTime = 0;
                         e.parentNode.querySelector(".link-play").style.display = "inline";
                         e.parentNode.querySelector(".link-pause").style.display = "none";
                    };
                });
                
                plays.forEach(function(e, i) {
                    e.addEventListener("click", function() {
                        
                        audios.forEach(function(element, index) {
                            if(!element.paused) {
                                element.pause();
                                element.parentNode.querySelector(".link-play").style.display = "inline";
                                element.parentNode.querySelector(".link-pause").style.display = "none";
                            }
                        });
                        
                        this.style.display = "none";
                        this.parentNode.querySelector(".link-pause").style.display = "inline";
                        this.parentNode.querySelector("audio").play();
                    });
                });
                
                pauses.forEach(function(e, i) {
                    e.addEventListener("click", function() {
                        this.style.display = "none";
                        this.parentNode.querySelector(".link-play").style.display = "inline";
                        this.parentNode.querySelector("audio").pause();
                    });
                });
            }
        }
    }
    // @Ulises: Refactorizar como clases
    var loader = {
        load: function() {
            if(!document.querySelector(".loader")) {
                document.querySelector("body").innerHTML += '<div class="loader"><svg width="100" height="100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="lds-cube"><g transform="translate(25,25)"><rect x="-20" y="-20" width="40" height="40" fill="#999999"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1.5;1" keyTimes="0;1" dur="1s" keySplines="0 0.5 0.5 1" begin="-0.3s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(75,25)"><rect x="-20" y="-20" width="40" height="40" fill="#ebebeb"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1.5;1" keyTimes="0;1" dur="1s" keySplines="0 0.5 0.5 1" begin="-0.2s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(25,75)"><rect x="-20" y="-20" width="40" height="40" fill="#ebebeb"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1.5;1" keyTimes="0;1" dur="1s" keySplines="0 0.5 0.5 1" begin="0s" repeatCount="indefinite"></animateTransform></rect></g><g transform="translate(75,75)"><rect x="-20" y="-20" width="40" height="40" fill="#999999"><animateTransform attributeName="transform" type="scale" calcMode="spline" values="1.5;1" keyTimes="0;1" dur="1s" keySplines="0 0.5 0.5 1" begin="-0.1s" repeatCount="indefinite"></animateTransform></rect></g></svg><p><strong>Estamos cargando su contenido...</strong></p></div>';
                itunes.search();
            }
        },
        delete: function() {
            if(document.querySelector(".loader")) {
                setTimeout(function() {
                    document.querySelector(".loader").remove();
                }, 1500);
            }
        }
    }
    
    var utils = {
        validator: function() {
            var querySearchInput = "", queryLimitSearchInput = "";
            
            // --Inicio #1 @Ulises: Redundante! Sacar en funciones
            
            if(document.querySelector(".search-bar")) {
                querySearchInput = document.querySelector(".search-bar").value;
            } else {
                return false;
            }
            
            if(document.querySelector(".search-limit-bar")) {
                queryLimitSearchInput = document.querySelector(".search-limit-bar").value;
            } else {
                return false;
            }
            
            // @ulises: toString??
            querySearchInput = querySearchInput.trim().toString();
            queryLimitSearchInput = queryLimitSearchInput.trim().toString();
            // --FIN #1 
            
            if(querySearchInput === "") { 
                alert("El campo de búsqueda no debe estar vacío.");
                return false;
            }
            
            if(queryLimitSearchInput !== "" && isNaN(queryLimitSearchInput)) {
                alert("El campo límite solo acepta números");
                return false;
            }
            
            return true;
        },
        setTime: function(time) {
            var date = new Date(time);
            var minutes = "", seconds = "";
            
            minutes = date.getMinutes() <= 9 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
            seconds = date.getSeconds() <= 9 ? "0" + date.getSeconds().toString() : date.getSeconds().toString();
            
            return minutes + ":" + seconds;
        }
    }
    
    // @Ulises: Sacar el evento fuera y no inicializar ocn una función
    itunes.search();
})();