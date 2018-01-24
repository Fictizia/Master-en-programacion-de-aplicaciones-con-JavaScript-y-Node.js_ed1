// Initialize Firebase
/*global firebase*/

var config = {
    apiKey: "AIzaSyCuyhD-WepVZyPb5OwmEAnarSn5MvD3Xvc",
    authDomain: "myfilms-6b0bc.firebaseapp.com",
    databaseURL: "https://myfilms-6b0bc.firebaseio.com",
    projectId: "myfilms-6b0bc",
    storageBucket: "",
    messagingSenderId: "645761269047"
};
firebase.initializeApp(config);
    
var APP = {
    urlApi:'http://www.omdbapi.com/?apikey=b426c167&t=',
    
    init:function () {
        APP.behavior.search();
    },
    
    datas:{
        saveFilm:function (film) {
            if (film.Title) {
                
            } else {
                console.log('La película no existe o no escribió el nombre correctamente.');
            }
        }
    },
    
    behavior:{
        search:function () {
            var searchInput = document.querySelector('.searh');
            searchInput.addEventListener('keyup',function (e) {
                if(e.keyCode === 13){
                    if (e.target.value != "" && e.target.value != null) {
                        APP.tools.makeRequest('GET', APP.urlApi+e.target.value, true, APP.datas.saveFilm);
                    } else {
                        console.log('Debes escribir el nombre de una película.')
                    }
                }
            })
        }
    },
    
    view:{
        renderFilmList:function (films) {
            var filmsUL = document.querySelector('.film-list');
            filmsUL.innerHTML = '';
            for(var key in films){
                filmsUL.innerHTML += `
                    <li class="film">
                        <span class="title">${films[key].Title}</span>
                        <span class="delete">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </span>
                        <span class="view">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </span>
                    </li>
                `;
            }
        }
    },
    
    tools:{
        makeRequest: function (httpMethod, url, asynchronous, callback) {
            var request = new XMLHttpRequest();
            request.open(httpMethod,url, asynchronous);
            request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200 && request.responseText ) {
                var json = JSON.parse(request.responseText);
                callback(json);
                return true;
            }else{
                return false;
            }
            };
            request.send();
        },
    }
};

APP.init();

//http://www.omdbapi.com/?apikey=b426c167&t=terminator
