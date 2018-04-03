let APP = {};

APP.start = () => {
  APP.behavior.search();
  APP.behavior.selectFilm();
  APP.behavior.deleteFilm();
};

APP.behavior = {
  search: () => {
    document.querySelector('.search-input').addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        if (e.target.value != "" && e.target.value != null) {
          let filmName = e.target.value;
          APP.tools.ajax('GET', `https://${document.domain}/getDataAPi/${filmName}`, true, APP.ui.fillSelectFilm);
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
    if (document.querySelector('.films-list-select')) {
      document.querySelector('.films-list-select').addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-film')) {
          let film = e.target.getAttribute('data-film');
          film = JSON.parse(e.target.getAttribute('data-film'));
          APP.tools.ajax('POST', `https://${document.domain}/api/v1/films?film=${JSON.stringify(film)}`, true, APP.ui.responseAddFilmApi);
        }
      });
    }
  },

  deleteFilm: () => {
    if (document.querySelector('.cards-list__container')) {
      document.querySelector('.cards-list__container').addEventListener('click', (e) => {
        if (e.target.parentNode.hasAttribute('data-action')) {
          let action = e.target.parentNode.getAttribute('data-action');
          let id = e.target.parentNode.getAttribute('data-film-id');
          if (action === 'delete') {
            APP.tools.ajax('DELETE', `https://${document.domain}/api/v1/films/${id}`, true, APP.ui.responseDeleteFilmApi);
          }
          else {}
        }
      });
    }
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

  responseAddFilmApi: function(datas) {
    if (typeof(datas) === 'object' && datas.Title) {
      APP.ui.addFilm(datas);
      APP.ui.triggerNotification('success', 'El filme se ha insertado satisfactoriamente.', 3000);
    }
    else {
      APP.ui.triggerNotification('error', 'Upps, ha ocurrido un error al intentar insertar el filme en la base de datos.', 3000);
    }
  },

  responseDeleteFilmApi: function(datas) {
    if (typeof(datas) === 'object' && datas.filmId) {
      APP.ui.deleteFilm(datas.filmId);
      APP.ui.triggerNotification('success', 'El filme se ha eliminado satisfactoriamente.', 3000);
    }
    else {
      APP.ui.triggerNotification('error', 'Upps, ha ocurrido un error al intentar eliminar el filme en la base de datos.', 3000);
    }
  },

  addFilm: (film) => {
    if (document.querySelector('.cards-list__container')) {

      let filmListContainer = document.querySelector('.cards-list__container');
      let filmTemplate = `
      <div id="${film.imdbID}" class="cards-list__item">
        <div class="cards-list__content">
          <img class="cards-list__image" src="${film.Poster}">
          <div class="cards-list__datas">
            <div class="title">${film.Title}</div>
            <div class="year">${film.Year}</div>
          </div>
        </div>
        <div class="cards-list__actions">
          <span data-action="delete" data-film-id="${film.imdbID}">
            <i class="far fa-trash-alt"></i>
          </span>
          <span data-action="update" data-film-id="${film.imdbID}">
            <i class="far fa-edit"></i>
          </span>
        </div>
      </div>`;
      if (filmListContainer.querySelectorAll('.cards-list__item').length > 0) {
        filmListContainer.innerHTML += filmTemplate;
      }
      else {
        filmListContainer.innerHTML = filmTemplate;
      }
    }
    else {
      return false;
    }
  },

  deleteFilm: (id) => {
    let film = document.getElementById(id);
    film.remove();
  }
}

APP.tools = {
  ajax: (httpMethod, url, asynchronous, callback) => {
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
[x] Maquetar listado de películas favoritas del usuario
[x] Mostrar el listado de películas favoritas del usuario
[x] Insertar peliculas una vez guardada
[x] Eliminar un filme a través de la API (BUG!)
[ ] Editar un filme a través de la API
[ ] Editar un filme desde el cliente
[ ] Cambiar visualizacion del componente de notificaciones
[ ] Guardar imágenes de las películas en local

*/

//Dudas
/*
[ ] Cual es el estandar mas utilizado para crear los endpoint de una API
*/
