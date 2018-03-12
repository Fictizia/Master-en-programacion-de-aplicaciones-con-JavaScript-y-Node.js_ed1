//Geolocation
(function(){
     navigator.geolocation.getCurrentPosition(function(position) {
      
     var myLat = position.coords.latitude.toFixed(4);
     var myLong = position.coords.longitude.toFixed(4);
     //console.log(MyLat, MyLong);
     
     localStorage.setItem("Latitud",myLat);
     localStorage.setItem("Longitud",myLong);
    });
    
})();

