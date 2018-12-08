let APP = {};

APP.start = () => {
  APP.behavior.search();
  APP.behavior.selectFilm();
  APP.behavior.actionsFilm();
};

APP.behavior = {
  search: () => {
    document.querySelector('.search-input').addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        if (e.target.value != "" && e.target.value != null) {
          let filmName = e.target.value;
          APP.tools.ajax('GET', `https://${document.domain}/getDataAPi/${filmName}`, false, APP.ui.fillSelectFilm);
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

    document.querySelector('.search-input').addEventListener('blur', (e) => {
      document.querySelector('.films-list-select').style.height = '0px';
    });

  },

  selectFilm: () => {
    if (document.querySelector('.films-list-select')) {
      document.querySelector('.films-list-select').addEventListener('click', (e) => {
        if (e.target.hasAttribute('data-film')) {
          let film = e.target.getAttribute('data-film');
          var formData = new FormData();
          formData.append('film', film)
          APP.tools.ajax('POST', `https://${document.domain}/api/v1/films`, formData, APP.ui.responseAddFilmApi);
        }
      });
    }
  },

  actionsFilm: () => {
    if (document.querySelector('.cards-list__container')) {
      document.querySelector('.cards-list__container').addEventListener('click', (e) => {
        if (e.target.parentNode.hasAttribute('data-action')) {
          let action = e.target.parentNode.getAttribute('data-action');
          let id = e.target.parentNode.getAttribute('data-film-id');
          if (action === 'delete') {
            APP.tools.ajax('DELETE', `https://${document.domain}/api/v1/films/${id}`, false, APP.ui.responseDeleteFilmApi);
          }
          else if (action === 'update') {
            APP.behavior.updateAction(id);
          }
          else if (action === 'accept') {
            APP.behavior.acceptAction(id)
          }
          else {
            APP.behavior.cancelAction(id)
          }
        }
      });
    }
  },

  updateAction: (id) => {
    let currentCard = document.getElementById(id),
      mainActions = currentCard.querySelector('.cards-list__main-actions'),
      secondaryActions = currentCard.querySelector('.cards-list__secondary-actions'),
      title = currentCard.querySelector('.cards-list__title'),
      year = currentCard.querySelector('.cards-list__year');

    mainActions.classList.add('cards-list__main-actions--move');
    secondaryActions.classList.add('cards-list__secondary-actions--move');
    title.classList.add('cards-list__title--editable');
    title.setAttribute('contenteditable', true);
    year.classList.add('cards-list__year--editable');
    year.setAttribute('contenteditable', true);
  },

  acceptAction: (id) => {
    let currentCard = document.getElementById(id),
      imdbID = id,
      Title = currentCard.querySelector('.cards-list__title').innerText,
      Year = currentCard.querySelector('.cards-list__year').innerText;

    let object = { imdbID, Title, Year };
    var formData = new FormData();
    formData.append('film', JSON.stringify(object));
    APP.tools.ajax('PUT', `https://${document.domain}/api/v1/films/${id}`, formData, APP.ui.responseUpdateFilmApi);
  },

  cancelAction: (id) => {
    let currentCard = document.getElementById(id),
      mainActions = currentCard.querySelector('.cards-list__main-actions'),
      secondaryActions = currentCard.querySelector('.cards-list__secondary-actions'),
      title = currentCard.querySelector('.cards-list__title'),
      year = currentCard.querySelector('.cards-list__year');

    mainActions.classList.remove('cards-list__main-actions--move');
    secondaryActions.classList.remove('cards-list__secondary-actions--move');
    title.innerText = title.getAttribute('data-content');
    title.classList.remove('cards-list__title--editable');
    title.setAttribute('contenteditable', false);
    year.innerText = year.getAttribute('data-content');
    year.classList.remove('cards-list__year--editable');
    year.setAttribute('contenteditable', false);
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
    notifications.innerHTML += `<div class="notification notification--${type}">
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
    if (typeof(datas) === 'boolean' && datas === false) {
      APP.ui.triggerNotification('info', 'Ya tienes este filme como favorito...', 3000);
    }
    else if (typeof(datas) === 'object' && datas.Title) {
      APP.ui.addFilm(datas);
      APP.ui.triggerNotification('success', 'El filme se ha insertado satisfactoriamente.', 3000);
    }
    else {
      APP.ui.triggerNotification('error', 'Upps, ha ocurrido un error al intentar insertar el filme en la base de datos.', 3000);
    }
  },

  responseUpdateFilmApi: function(datas) {
    if (datas && typeof(datas) === 'object') {
      APP.ui.triggerNotification('info', `El filme: ${datas.Title} se ha actualizado satisfactoriamente.`, 3000);

      let currentCard = document.getElementById(datas.imdbID),
        mainActions = currentCard.querySelector('.cards-list__main-actions'),
        secondaryActions = currentCard.querySelector('.cards-list__secondary-actions'),
        title = currentCard.querySelector('.cards-list__title'),
        year = currentCard.querySelector('.cards-list__year');

      mainActions.classList.remove('cards-list__main-actions--move');
      secondaryActions.classList.remove('cards-list__secondary-actions--move');
      title.setAttribute('data-content', title.innerText);
      title.setAttribute('contenteditable', false);
      title.classList.remove('cards-list__title--editable');
      year.setAttribute('data-content', year.innerText);
      year.setAttribute('contenteditable', false);
      year.classList.remove('cards-list__year--editable');
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
        <div class="cards-list__item" id="${film.imdbID}">
          <div class="cards-list__content"><img class="cards-list__image" src="images/films/${film.imdbID}.jpg">
            <div class="cards-list__datas">
              <div class="cards-list__title" data-content="${film.Title}" contenteditable="false">${film.Title}</div>
              <div class="cards-list__year" data-content="${film.Year}" contenteditable="false">${film.Year}</div>
            </div>
          </div>
          <div class="cards-list__actions" data-film-id="${film.imdbID}">
            <div class="cards-list__main-actions">
              <span data-film-id="${film.imdbID}" data-action="delete"><i class="far fa-trash-alt"></i></span>
              <span data-film-id="${film.imdbID}" data-action="update"><i class="far fa-edit"></i></span>
            </div>
            <div class="cards-list__secondary-actions">
              <span data-film-id="${film.imdbID}" data-action="accept"><i class="fas fa-check"></i></span>
              <span data-film-id="${film.imdbID}" data-action="cancel"><i class="fas fa-times"></i></span>
            </div>
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
  ajax: (httpMethod, url, formData, callback) => {
    var request = new XMLHttpRequest();
    request.open(httpMethod, url, true);
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

    if (formData) {
      request.send(formData);
    }
    else {
      request.send();
    }
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
[x] Eliminar un filme a través de la API
[x] Enviar datos en el cuerpo de la petición utilizando formDatas para insertar una película
[x] Verificar si un filme ya existe en la base de datos
[x] Editar un filme a través de la API
[x] Editar un filme desde el cliente
[x] Guardar imágenes de las películas en local
[ ] Eliminar imágenes de las películas en local
[ ] Cambiar visualizacion del componente de notificaciones
[ ] Agregar loader gif
*/

//Dudas
/*
[x] Cual es el estandar mas utilizado para crear los endpoint de una API
*/
