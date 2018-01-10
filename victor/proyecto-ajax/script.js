(function() {
    const URL_ITUNES = "https://itunes.apple.com/search?entity=song&";
    
    var ajax = {
        request: function(url, callback) {
            var xmlHttp = new XMLHttpRequest();
            
            loader.show();
            
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    callback(JSON.parse(xmlHttp.responseText));
                    loader.hide();
                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                    alert("Ups, algo fue mal");
                    console.info(JSON.parse(xmlHttp.responseText));
                    loader.hide();
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
                    var query = document.querySelector(".search-bar").value;
                    var limit = document.querySelector(".search-limit-bar").value.trim();
                    
                    if(limit !== "" && parseInt(limit) >= 0) {
                        limit = "&limit=" + limit;
                    }
                    
                    ajax.request(URL_ITUNES + "term=" + query + limit, itunes.setHTML);
                }
            });
        },
        setHTML: function(data) {
            document.querySelector(".music-container").innerHTML = "";
            
            if(data.resultCount === 0) {
                var html = "<div class='color-white'><span>No se encontraron resultados.</span></div>";
            } else {
                var html = "<div class='color-white'><span>Número de resultados: " + data.resultCount + "</span></div>";
                data.results.forEach(function(element, i) {
                    html += "<div class='music-box'>" +
                                "<div class='music-image'>" +
                                    "<img src='" + element.artworkUrl30 + "' />" +
                                "</div>" +
                                "<div class='track-name'>" +
                                    "<span>" + element.trackName + "</span>" +
                                "</div>"+
                                "<div class='track-time'>" +
                                    "<span>" + utils.setTime(element.trackTimeMillis) + "</span>" +
                                "</div>" +
                                "<div class='artist-link'>" +
                                    "<a href='" + element.artistViewUrl + "' title='Ver página del artista' target='_blank'>" + element.artistName + "</a>" +
                                "</div>" +
                                "<div class='links'>" +
                                    "<a href='" + element.trackViewUrl + "'title='Ver álbum' target='_blank'><img src='img/icon-eye.svg'/></a>" +
                                    "<img class='link-play' src='img/icon-play.svg' />" +
                                    "<img class='link-pause' src='img/icon-pause.svg' />" +
                                    "<audio><source src='" + element.previewUrl + "' type='audio/mpeg'>Your browser does not support the audio element.</audio>" +
                                "</div>" +
                            "</div>";
                });
            }
            
            document.querySelector(".music-container").innerHTML = html;
                
            itunes.activeAudio();
        },
        activeAudio: function() {
            var plays = document.querySelectorAll(".link-play");
            var pauses = document.querySelectorAll(".link-pause");
            var audios = document.querySelectorAll("audio");
            
            if(plays.length > 0) {
                audios.forEach(function(audioElement, i) {
                    audioElement.onended = function() {
                         this.currentTime = 0;
                         audioElement.parentNode.querySelector(".link-play").style.display = "inline";
                         audioElement.parentNode.querySelector(".link-pause").style.display = "none";
                    };
                });
                
                plays.forEach(function(playElement, i) {
                    playElement.addEventListener("click", function() {
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
                
                pauses.forEach(function(pauseElement, i) {
                    pauseElement.addEventListener("click", function() {
                        this.style.display = "none";
                        this.parentNode.querySelector(".link-play").style.display = "inline";
                        this.parentNode.querySelector("audio").pause();
                    });
                });
            }
        }
    }

    var loader = {
        show: function() {
            document.querySelector(".loader").style.display = "flex";
            itunes.search();
        },
        hide: function() {
            setTimeout(function() {
                document.querySelector(".loader").style.display = "none";
            }, 1500);
        }
    }
    
    var utils = {
        validator: function() {
            var querySearchInput = document.querySelector(".search-bar").value.trim();
            var queryLimitSearchInput = document.querySelector(".search-limit-bar").value.trim();
            
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
            
            var minutes = date.getMinutes() <= 9 ? "0" + date.getMinutes().toString() : date.getMinutes().toString();
            var seconds = date.getSeconds() <= 9 ? "0" + date.getSeconds().toString() : date.getSeconds().toString();
            
            return minutes + ":" + seconds;
        }
    }
    
    itunes.search();
})();