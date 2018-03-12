 var map;
 var lastMarker;
 
 function loadMap(lat, long){
 cartodb.createVis('map', 'https://jesusesteban.carto.com/api/v2/viz/fd0e0301-6727-4ac3-8672-0dfee7ed2deb/viz.json', {
            shareable: false,
            title: false,
            description: false,
            search: false,
            tiles_loader: false,
            center_lat: 0,
            center_lon: 0,
            zoom: 3
            }).done(function(vis, layers) {
          map = vis.getNativeMap();
          lastMarker = L.marker([lat, long]).addTo(map);
        })  
        
        
 }
 

 
 
 window.onload = loadMap(1, 1);
 
 function addMarker (locationLat, locationLong){
  map.removeLayer(lastMarker);
  lastMarker = L.marker([locationLat, locationLong]).addTo(map);
  
  var latLng = new L.LatLng(locationLat, locationLong);
  
  map.panTo(latLng);
  
  
 }
 
 
 
 