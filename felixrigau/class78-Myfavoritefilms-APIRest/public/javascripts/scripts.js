let APP = {}

APP.urlApi = 'http://www.omdbapi.com/?apikey=b426c167&s=';

APP.start = () => {
  APP.behavior.search();
  APP.behavior.selectFilm();
}

APP.behavior = {
  search: () => {
    document.querySelector('.search-input').addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        if (e.target.value != "" && e.target.value != null) {
          let filmName = e.target.value;
          APP.tools.makeRequest('GET', `https://${document.domain}/getDataAPi/${filmName}`, true, APP.ui.fillSelectFilm);
        }
        else {
          APP.ui.triggerNotification('info', 'Debes escribir el nombre de una película.', 3000)
        }
      }
      else {
        if (e.target.value === "") {
          document.querySelector('.films-list-select').style.height = '0px';
        }
      }
    });
  },

  selectFilm: () => {
    document.querySelector('.films-list-select').addEventListener('click', (e) => {
      if (e.target.hasAttribute('data-film')) {
        let film = e.target.getAttribute('data-film');
        film = JSON.parse(e.target.getAttribute('data-film'));
        APP.tools.makeRequest('GET', `https://${document.domain}/api/v1/films/add?film=${JSON.stringify(film)}`, true, APP.ui.test);
      }
    });
  }
};

APP.ui = {
  fillSelectFilm: (data) => {
    let listFilms = document.querySelector('.films-list');
    let selectFilmSection = document.querySelector('.films-list-select');
    listFilms.innerHTML = '';
    if (data.Response !== "False") {
      data.Search.forEach((item) => {
        if (item.Poster && item.Poster.indexOf('amazon') !== -1) {
          listFilms.innerHTML += `<li class="films-list__item">
            <span><img class="films-list__item-image" src='${item.Poster}'' /></span>
            <span class="films-list__item-title">${item.Title} (${item.Year})</span>
            <div class="films-list__item-mask" data-film='${JSON.stringify(item)}'></div>
          </li>`;
        }
      });
      selectFilmSection.style.height = '332px';
    }
    else {
      APP.ui.triggerNotification('info', 'No se han encontrado películas con ese título.', 3000)
    }
  },

  triggerNotification: (type, text, time) => {
    var notifications = document.querySelector('.notification-wrapper');
    notifications.innerHTML = `<div class="notification notification--${type}">
            <p>${text}</p>
        </div>`;

    window.setTimeout(function() {
      notifications.childNodes[0].classList.add('notification--in');
    }, 500, notifications);

    window.setTimeout(function() {
      notifications.childNodes[0].classList.add('notification--out');
    }, time, notifications);

    window.setTimeout(function() {
      notifications.innerHTML = '';
    }, time + 500, notifications);
  },

  test: function() {

  }
}

APP.tools = {
  makeRequest: (httpMethod, url, asynchronous, callback) => {
    var request = new XMLHttpRequest();
    request.open(httpMethod, url, asynchronous);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200 && request.responseText) {
        var json = JSON.parse(request.responseText);
        callback(json);
        return true;
      }
      else {
        return false;
      }
    };
    request.send();
  },

  buildRestApiParameters: (object) => {
    let params = '';
    if (typeof(object) === 'object') {
      for (var key in object) {
        if (object[key].indexOf('http') !== -1) {
          object[key] = window.encodeURI(object[key])
        }
        params += `/${key.toLowerCase()}/${object[key]}`
      }
    }
    return params;
  }
}

APP.start();

//TODO
/*
[x] Traerme los film de la base de datos por una consulta a la API. EndPoint: api/v1/films
[x] Habilitar CORS
[ ] Maquetar listado de películas favoritas del usuario
[ ] Guardar imágenes de las películas en local
[ ] 

*/
