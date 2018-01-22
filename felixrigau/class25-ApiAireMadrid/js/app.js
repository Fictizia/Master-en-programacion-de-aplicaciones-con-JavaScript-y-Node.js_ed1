var app = {
  stationManagement:{
    allStation: function () {
      app.tools.makeRequest('GET', 'http://airemad.com/api/v1/station', true, app.renderView.allStations);
    },
    pollution: function (id) {
      app.tools.makeRequest('GET', 'http://airemad.com/api/v1/pollution/'+id, true, app.renderView.dataPollution);
    },
    weather:function (id) {
      app.tools.makeRequest('GET', 'http://airemad.com/api/v1/weather/'+id, true, app.renderView.dataWeather);
    }
  },

  renderView:{
    allStations:function (json) {
      if(json){
        var countriesCombo = document.querySelector('.stations');
        for (var i = 0; i < json.length; i++) {
          countriesCombo.innerHTML += '<option class=\'item\' value=\"'+json[i].id+'\">Estación de '+json[i].nombre_estacion+' ('+json[i].direccion+')</option>';
        }
        app.events.setOnChangeEvent();
      }
    },
    dataPollution:function (json) {
      var tag = document.querySelector('.pollution .subtitle-page');
      var parameterList = document.querySelector('.parameter-list');
      if (json && json !== 500) {
        parameterList = document.querySelector('.parameter-list');
        parameterList.innerHTML = "";
        for (var variable in json) {
          if (json.hasOwnProperty(variable)) {
            if (typeof json[variable]  === "object") {
              parameter = json[variable].parameter;
              abrebiation = json[variable].abrebiation;
              value = app.tools.getLastValue(json[variable].values);
              technique = json[variable].technique;
              parameterList.innerHTML += "<li>"+
                "<p class=\"parameter\">"+parameter+" ("+abrebiation+"): </p>"+
                "<p class=\"value\"> "+value.toFixed(1)+"μp/m3</p>"+
                "<p class=\"details\">medido por "+technique+"</p>"+
              "</li>";
            }
          }
        }
        app.renderView.showHideElement(false, tag);
      }else {
        parameterList.innerHTML = "";
        app.renderView.showHideElement(true, tag);
      }
    },
    dataWeather:function (json) {
      if (json) {

        var dayInfoContainer = document.querySelector('.weather-container .day-info-container'),
        currentWeather = json.list[0],
        urlCurrentWeather = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+currentWeather.weather[0].icon+".png";

        dayInfoContainer.innerHTML = "";
        dayInfoContainer.innerHTML += app.renderView.createElement(urlCurrentWeather, currentWeather);

        lenght = json.list.length;
        if (lenght === 40) {
          lenght = lenght-1;

          var daysPredictionContainer = document.querySelector('.days');
          daysPredictionContainer.innerHTML = "";
          for (var i = 8; i <= lenght; i=i+8) {
            var element = json.list[i],
                day = app.tools.getFormatedDate(element.dt_txt,"es-ES",{weekday: 'long'}),
                hour = app.tools.getFormatedDate(element.dt_txt,"es-ES",{hour: '2-digit',minute: '2-digit'}),
                url = "https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/"+element.weather[0].icon+".png";
                daysPredictionContainer = document.querySelector('.days');
                daysPredictionContainer.innerHTML+=
                  "<li class=\"day\">"+
                    "<p class=\"title\">"+day+" ("+hour+")</p>"+
                    "<div class=\"day-info-container\">"+
                      app.renderView.createElement(url, element)+
                    "</div>"+
                  "</li>";
          }
        }
      }
      var tag = document.querySelector('.loader');
      app.renderView.showHideElement(false, tag);
      tag = document.querySelector('.info-container');
      app.renderView.showHideElement(true, tag);
    },
    createElement: function (url, element) {
      var tagContent = "<div class=\"icon\">"+
        "<img src="+url+">"+
      "</div>"+
      "<div class=\"day-info\">"+
        "<h3 class=\"weather\">"+element.weather[0].description+"</h3>"+
        "<p class=\"temperature\">Temperatura: "+element.main.temp.toFixed(1)+" °C</p>"+
        "<p>"+
          "<span class=\"min\">Min: "+element.main.temp_min.toFixed(1)+" °C</span>"+
          "<span class=\"separator\"> | </span>"+
          "<span class=\"max\">Max: "+element.main.temp_max.toFixed(1)+" °C</span>"+
        "</p>"+
        "<p>"+
          "<span class=\"hum\">Hum: "+element.main.humidity+" %</span>"+
          "<span class=\"separator\"> | </span>"+
          "<span class=\"press\">Press: "+element.main.pressure+" psi</span>"+
        "</p>"+
        "<p class=\"wind\">Viento: "+element.wind.deg.toFixed(0)+"° | "+element.wind.speed+" Km/h</p>"+
      "</div>";
      return tagContent;
    },

    showHideElement:function (show, element) {
      if (show) {
        element.classList.remove('hidden');
      }else {
        element.classList.add('hidden');
      }
    },

    test:function (json) {
      if (json) {
        var container = document.querySelector('.general-container');
        container.innerText = json.toString();
      }
    }
  },

  events:{
    setOnChangeEvent:function () {
      var selectItems = document.querySelector('.stations');
      selectItems.addEventListener('change',function () {
        if(event.target.value){
          var tag = document.querySelector('.loader');
          app.renderView.showHideElement(true, tag);
          codeStation = event.target.value;
          app.stationManagement.pollution(codeStation);
          app.stationManagement.weather(codeStation);
        }
      }, false);
    }
  },

  animation:{

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
      request.send(null);
    },

    init:function () {
      app.stationManagement.allStation();
    },

    getLastValue: function (array) {
      if (array) {
        for (var i = array.length-1; i < array.length; i--) {
          if (array[i].estado === "Pasado") {
            if(array[i].valor){
              return array[i].valor;
            }else{
              return -1;
            }
          }
        }
      }
    },
    /** TODO
    *var options = {
    *  weekday: 'long',
    *  year: 'numeric',
    *  month: 'long',
    *  day: 'numeric'
    * };
    * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    */
    getFormatedDate:function(date, lenguage, options){
      date = new Date(date);
      return date.toLocaleString(lenguage, options);
    },

    test: function () {
      app.tools.makeRequest('GET','https://restcountries.eu/rest/v2/all',true,app.tools.callbackTest);
    },

    callbackTest:function (json) {
      if (json) {
        console.log('THERE IS JSON!!!');
      }
    }
  }
};

(function () {
  app.tools.init();
})();
