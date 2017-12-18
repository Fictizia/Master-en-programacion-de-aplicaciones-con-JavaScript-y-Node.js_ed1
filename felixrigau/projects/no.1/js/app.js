var app = {
  countryManagement:{
    all: function () {
      app.tools.makeRequest('GET', 'https://restcountries.eu/rest/v2/all', true, app.renderView.fillCountries);
    },
    details: function (code) {
      app.tools.makeRequest('GET', 'https://restcountries.eu/rest/v2/alpha/'+code, true, app.renderView.fillCountryDetails);
    }
  },

  renderView:{
    fillCountries: function (json) {
      if(json){
        var countriesCombo = document.querySelector('.countries');
        for (var i = 0; i < json.length; i++) {
          name = app.tools.removeParenthesesContent(json[i].name);
          countriesCombo.innerHTML += '<option class=\'item\' value=\"'+json[i].alpha2Code+'\">'+name+'</option>';
        }
        app.events.setOnChangeEvent();
        var element = document.querySelector('.loader');
        app.renderView.showHideElement(false,element);
      }
    },

    fillCountryDetails:function (json) {
      if (json) {
        var flag = document.querySelector('.flag');
        var name = document.querySelector('.name');
        var capital = document.querySelector('.capital span');
        var region = document.querySelector('.region span');
        var codeCall = document.querySelector('.codeCall span');
        var population = document.querySelector('.population span');

        flag.src = json.flag;
        name.innerText = app.tools.removeParenthesesContent(json.name);
        capital.innerText = " "+ json.capital;
        region.innerText = " "+ json.subregion;
        codeCall.innerText = " +"+ json.callingCodes[0];
        population.innerText = " "+ json.population + " habitantes";

        app.renderView.maps.initCountryMap(json.name);
        app.animation.showCountryDetailsPanel(true);
        var element = document.querySelector('.loader');
        app.renderView.showHideElement(false,element);
      }
    },

    maps:{
      initCountryMap:function (address) {
        if (address) {
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 17,
            zoomControl: true,
            mapTypeControl: false,
            scaleControl: false,
            streetViewControl: false,
            rotateControl: false,
            fullscreenControl: false
          });
          var geocoder = new google.maps.Geocoder;
          geocoder.geocode({'address': address}, function(results, status) {
            if (status === 'OK') {
              console.log(results);
              map.setCenter(results[0].geometry.location);
              map.fitBounds(results[0].geometry.bounds);
            } else {
              console.log('Geocode was not successful for the following reason: ' + status);
            }
          });
        }else {
          var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 33.8003164, lng: 5.065498},
          zoom: 3,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: false
        });
        }
      }
    },

    showHideElement:function (show, element) {
      if (show) {
        element.classList.remove('hidden');
      }else {
        element.classList.add('hidden');
      }
    }
  },

  events:{
    setOnChangeEvent:function () {
      var selectItems = document.querySelector('.countries');
      selectItems.addEventListener('change',function () {
        if(event.target.value){
          var element = document.querySelector('.loader');
          app.renderView.showHideElement(true,element);
          codeCountry = event.target.value;
          app.countryManagement.details(codeCountry);
        }
      }, false);
    },

    addToggleButton: function () {
      var button = document.querySelector('.button');
      button.addEventListener('click',function() {
        app.animation.toggle();
      },true);
    }
  },

  animation:{
    showCountryDetailsPanel:function (boolean) {
      var element = document.querySelector('.country-container');
      var existClass = false;
      if (boolean) {
        for (var i = 0; i < element.classList.length; i++) {
          if (element.classList[i] === "hidden") {
            existClass = true;
          }
        }
        if (existClass) {
          element.classList.remove('hidden');
        }
      }else {
        element.classList.add('hidden');
      }
    },

    toggle:function () {
      var element = document.querySelector('.country-container');
      var exist = false;
        for (var i = 0; i < element.classList.length; i++) {
          if (element.classList[i] === "hidden") {
            exist = true;
          }
        }
        if (exist) {
          element.classList.remove('hidden');
        }else {
          element.classList.add('hidden');
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
      request.send(null);
    },

    removeParenthesesContent:function (text){
      var start = text.indexOf("(");
      var end = text.indexOf(")");
      if (start !== -1 && end !== -1) {
        parentheses = text.slice(start, end+1);
        text = text.replace(parentheses,"");
        text = text.replace("  ","");
        return text;
      }else {
        return text;
      }
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
  var element = document.querySelector('.loader');
  app.renderView.showHideElement(true,element);
  app.countryManagement.all();
  app.events.addToggleButton();
})();
