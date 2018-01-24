function makeRequest(httpMethod, url, asynchronous, callback) {
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
}
