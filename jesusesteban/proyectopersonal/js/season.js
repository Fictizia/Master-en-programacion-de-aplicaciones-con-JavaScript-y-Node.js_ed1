/* SEASON YEAR */        


/* Season Array */
var listSeason = [];

/* LINK api SEASONF1*/
var urlSeason = 'https://ergast.com/api/f1/seasons.json?limit=100';


/* AJAX Request */
var season = [];

function peticionAjax(url, callback) { 
    var peticion = new XMLHttpRequest();
    
    peticion.open('GET', urlSeason);
    peticion.onreadystatechange = function () {
        if (this.readyState === 4) {
          callback(this.responseText); 
        }
      };
    peticion.send();
}


/* Callback */
peticionAjax(url, function(data){ 
  season= JSON.parse(data);
  printSeason();
  return season;
});


/* Show Season in select*/
function printSeason(){
  var resultSeason = season.MRData.SeasonTable.Seasons;
  for (var i = 0; i < resultSeason.length; i++) {
    var showSeason = resultSeason[i].season;
    selectSeason.innerHTML += '<option id="' + showSeason + '" value="' + showSeason + '" name="season">' + showSeason +'</option>' ;
  }
}


/* api YEARS F1*/
document.getElementById("selectSeason").addEventListener("change", myFunction);
function myFunction() {
  var  selectYear = document.getElementById ('selectSeason');
  var  selectedYear = selectYear.options [selectYear.selectedIndex] .text;
  var urlYear = 'https://ergast.com/api/f1/' + selectedYear + '/results' + '.json' + '?limit=1000';
  //console.log(urlYear);
  
  
  
}











