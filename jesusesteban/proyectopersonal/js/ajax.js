/* Contents ID*/
var circuitName = document.getElementById('circuitName');
var linkUrl = document.getElementById('url');
var locality = document.getElementById('locality');
var country = document.getElementById('country');


/* Circuit Array */
var listCircuit = [];

/* LINK to api F1*/
var url = 'https://ergast.com/api/f1/circuits.json?limit=100';

/* AJAX Request */
var resultados = [];

function peticionAjax(url, callback) { 
    var peticion = new XMLHttpRequest();
    
    peticion.open('GET', url);
    peticion.onreadystatechange = function () {
        if (this.readyState === 4) {
          callback(this.responseText); 
        }
      };
    peticion.send();
}


/* Callback */
peticionAjax(url, function(data){ 
  resultados= JSON.parse(data);
  //console.log(resultados);
  printRace();
  return resultados;
});


function printRace(){
  
  var resultApi = resultados.MRData.CircuitTable.Circuits;
  for (var i = 0; i < resultApi.length; i++) {
    
    var showCircuitId = resultApi[i].circuitId;
    var showCircuit = resultApi[i].circuitName;

    //console.log(showCircuit);
    selectCircuit.innerHTML += '<option id="' + showCircuitId + '" value="' + showCircuitId + '" name="circuit">' + showCircuit +'</option>' ;
  
  }
}


function recoveryId(select){
  document.getElementById("list-data").style.display = "block";  

  var recoveryCircuitId = select.options[select.selectedIndex].value;
  
  //console.log(recoveryCircuitId);
  

  var resultApi = resultados.MRData.CircuitTable.Circuits;
  for (var i = 0; i < resultApi.length; i++) {
    
    var showCircuitId = resultApi[i].circuitId;
    var showCircuit = resultApi[i].circuitName;
    var showLinkUrl = resultApi[i].url;
    var showLocality = resultApi[i].Location.locality;
    var showCountry = resultApi[i].Location.country;
    
    //Lat & Long Circuit
    var locationLat = resultApi[i].Location.lat;
    var locationLong = resultApi[i].Location.long;

    
    if(recoveryCircuitId === showCircuitId){
      circuitName.textContent = showCircuit;
      locality.textContent = showLocality;
      country.textContent = showCountry;
      document.getElementById('linkUrl').href = showLinkUrl;

      //Lat & Long Circuit
      addMarker(locationLat, locationLong);  
      break;
    }
    
  
  }


}
