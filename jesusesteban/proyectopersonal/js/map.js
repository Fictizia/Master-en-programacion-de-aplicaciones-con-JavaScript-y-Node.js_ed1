var map;
var lastMarker;

/* collect data from the localstorage */
var latCarto = localStorage.getItem("Latitud");
var longCarto = localStorage.getItem("Longitud");

/* Init Map */
function loadMap(lat, long){
cartodb.createVis('map', 'https://jesusesteban.carto.com/api/v2/viz/fd0e0301-6727-4ac3-8672-0dfee7ed2deb/viz.json', {
           shareable: false,
           title: false,
           description: false,
           search: false,
           tiles_loader: false,
           center_lat: latCarto,
           center_lon: longCarto,
           zoom: 3
           }).done(function(vis, layers) {
         map = vis.getNativeMap();
         lastMarker = L.marker([latCarto, longCarto]).addTo(map);
       })
}

window.onload = loadMap(1, 1);


/* Init Map */
function addMarker (locationLat, locationLong){

 map.removeLayer(lastMarker);



 
 
 lastMarker = L.marker([locationLat, locationLong]).addTo(map);

 var latLng = new L.LatLng(locationLat, locationLong);

 
 map.panTo(latLng);


}
 