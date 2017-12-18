(function() {
    const ID_STATION = "S024";
    const URL_STATIONS_AIREMAD = "http://airemad.com/api/v1/station/" + ID_STATION;
    const URL_POLLUTION_AIREMAD = "http://airemad.org/api/v1/pollution/" + ID_STATION;
    
    var ajax = {
        request: function(url, callback) {
            var xmlHttp = new XMLHttpRequest();
            
            xmlHttp.onreadystatechange = function() {
                if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
                    //callback(JSON.parse(xmlHttp.responseText));
                    console.log(JSON.parse(xmlHttp.responseText));
                } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
                    console.error("ERROR! 404");
                    console.info(JSON.parse(xmlHttp.responseText));
                }
            };
            xmlHttp.open("GET", url, true);
            xmlHttp.send();
        }
    }
    
    ajax.request(URL_STATIONS_AIREMAD);
})();