/* Contents ID*/
var circuitName = document.getElementById('circuitName');
var linkUrl = document.getElementById('url');
var locality = document.getElementById('locality');
var country = document.getElementById('country');


/* Circuit Array */
var listCircuit = [];

/* LINK api Circuits F1*/
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
  printRace();
  return resultados;
});


/* Show circuits in select*/
function printRace(){
  var resultApi = resultados.MRData.CircuitTable.Circuits;
  for (var i = 0; i < resultApi.length; i++) {
    var showCircuitId = resultApi[i].circuitId;
    var showCircuit = resultApi[i].circuitName;
    selectCircuit.innerHTML += '<option id="' + showCircuitId + '" value="' + showCircuitId + '" name="circuit">' + showCircuit +'</option>' ;
  }
}


/* Show results in HTML*/
function recoveryId(select){
  /* Show list in HTML*/
  document.getElementById("list-data").style.display = "block";  
  var recoveryCircuitId = select.options[select.selectedIndex].value;
  var resultApi = resultados.MRData.CircuitTable.Circuits;
  for (var i = 0; i < resultApi.length; i++) {
    var showCircuitId = resultApi[i].circuitId;
    var showCircuit = resultApi[i].circuitName;
    var showLinkUrl = resultApi[i].url;
    var showLocality = resultApi[i].Location.locality;
    var showCountry = resultApi[i].Location.country;
    /* Lat & Long Circuit */
    var locationLat = resultApi[i].Location.lat;
    var locationLong = resultApi[i].Location.long;

    /* Print name, locality, country & wiki link*/
    if(recoveryCircuitId === showCircuitId){
      circuitName.textContent = showCircuit;
      locality.textContent = showLocality;
      country.textContent = showCountry;
      document.getElementById('linkUrl').href = showLinkUrl;

      /* Add position in marker map */
      
       map.setZoom(16);
      
  // setInterval(function(){
  //       map.setZoom(3);
  //       setTimeout(function(){
  //           map.setZoom(16);
  //       });
  //   }, 500);      

      addMarker(locationLat, locationLong);  


      break;
    }
    
  
  }


}


