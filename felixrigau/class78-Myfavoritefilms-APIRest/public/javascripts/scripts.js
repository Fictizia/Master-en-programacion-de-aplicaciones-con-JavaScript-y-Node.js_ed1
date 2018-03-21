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
          APP.tools.makeRequest('GET', `http://${document.domain}/getDataAPi/${filmName}`, true, APP.ui.fillSelectFilm);
        }
        else {
          console.log('Debes escribir el nombre de una película.')
        }
      }
      else {
        if (e.target.value === "") {
          document.querySelector('.films-list-select').style.height = '0px'
        }
      }
    })
  },

  selectFilm: () => {
    document.querySelector('.films-list-select').addEventListener('click', (e) => {
      if (e.target.nodeName === 'IMG') {

      }
    })
  }
};

APP.ui = {
  fillSelectFilm: (data) => {
    let listFilms = document.querySelector('.films-list');
    let selectFilmSection = document.querySelector('.films-list-select');
    listFilms.innerHTML = '';
    if (data) {
      data.Search.forEach((item) => {
        if (item.Poster && item.Poster.indexOf('amazon') !== -1) {
          console.log(item.Title)
          listFilms.innerHTML += `<li class="films-list__item">
            <span><img class="films-list__item-image" src="${item.Poster}" /></span>
            <span class="films-list__item-title">${item.Title} (${item.Year})</span>
            <div class="films-list__item-mask"></div>
          </li>`;
        }
      });
      selectFilmSection.style.height = '332px';
    }
    else {
      console.log('No hay datos');
    }
  }
}

APP.tools = {
  makeRequest: function(httpMethod, url, asynchronous, callback) {
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
  }
}

APP.start();
