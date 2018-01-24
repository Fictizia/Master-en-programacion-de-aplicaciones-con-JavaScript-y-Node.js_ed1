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
var database = firebase.database();
    
var APP = {
    urlApi:'http://www.omdbapi.com/?apikey=b426c167&t=',
    
    init:function () {
        APP.behavior.search();
        APP.db.getAllFilm();
    },
    
    db:{
        getAllFilm:function () {
            database.ref('/films/').on('value',function (snapshot) {
                if (snapshot.val()) {
                    APP.view.updateFilmList(snapshot.val())
                } else {
                    console.log('No hay películas en la base de datos.')
                }
            })
        },
        
        saveFilm:function (film) {
            if (film.Title) {
                var exist = APP.db.filmExist(film.imdbID);
                if(!exist){
                    database.ref('/films/'+film.imdbID).set(film);
                }else{
                    console.log('La película ya está registrada en la base de datos.')
                }
                
            } else {
                console.log('La película no existe o no escribió el nombre correctamente.');
            }
        },
        
        filmExist:function (id) {
            database.ref('/films/'+id).once('value', function (snapshot) {
                if (snapshot.val()) {
                    return true;
                } else {
                    return false;
                }
            })
        }
    },
    
    behavior:{
        search:function () {
            var searchInput = document.querySelector('.searh');
            searchInput.addEventListener('keyup',function (e) {
                if(e.keyCode === 13){
                    if (e.target.value != "" && e.target.value != null) {
                        APP.tools.makeRequest('GET', APP.urlApi+e.target.value, true, APP.db.saveFilm);
                    } else {
                        console.log('Debes escribir el nombre de una película.')
                    }
                }
            })
        }
    },
    
    view:{
        updateFilmList:function (films) {
            var filmsUL = document.querySelector('.film-list');
            filmsUL.innerHTML = '';
            for(var key in films){
                filmsUL.innerHTML += `
                    <li class="film">
                        <span class="title">${films[key].Title}</span>
                        <span class="delete" data-id-film="${films[key]}">
                            <i class="fa fa-trash" aria-hidden="true"></i>
                        </span>
                        <span class="view" data-id-film="${films[key]}">
                            <i class="fa fa-eye" aria-hidden="true"></i>
                        </span>
                    </li>
                `;
            }
        },
        
        updateDetailsFilm:function (film) {
            var detailsContainer = document.querySelector('.details-container');
            detailsContainer.innerHTML = `
                <div class="details">
                    <span>${film.Title}</span> 
                    <span>${film.Year}</span> 
                    <span>${film.Director}</span> 
                    <span>${film.Genre}</span> 
                </div>
            `;
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
