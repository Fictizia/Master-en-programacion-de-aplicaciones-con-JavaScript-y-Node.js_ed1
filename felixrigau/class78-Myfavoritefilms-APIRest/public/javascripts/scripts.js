let APP = {}

APP.urlApi = 'http://www.omdbapi.com/?apikey=b426c167&s=';

APP.start = () => {
  APP.behavior.search();
}

APP.behavior = {
  search: () => {
    document.querySelector('.search-input').addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        if (e.target.value != "" && e.target.value != null) {
          let filmName = e.target.value;
          APP.tools.makeRequest('GET', `${document.URL}getDataAPi/${filmName}`, true, APP.db.saveFilm);
        }
        else {
          console.log('Debes escribir el nombre de una película.')
        }
      }
    })
  }
}

APP.ui = {
  fillSelectFilm: (data) => {
    if (data) {
      if (Array.isArray(data.Search)) {
        data.Search.forEach((item) => {
          if (item.Poster.indexOf('amazon') !== -1) {

          }
          else {

          }
        })
      }
      else {

      }
    }
    else {

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
