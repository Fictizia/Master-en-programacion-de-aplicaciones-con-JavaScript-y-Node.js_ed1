//*************************** HOW TO PULL DATAS FROM AN API - JAVASCRIPT *****************************

//https://www.codecademy.com/en/tracks/parse - Como consumir un API
//https://jsonplaceholder.typicode.com/ API de ejemplo para consumir json

(function () {
  var request = new XMLHttpRequest();
  request.open("GET","test.txt", true); //true or false, for the asynchronous mode
  request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200 && request.response) {
        console.log("The datas are here!!!\n");
        var json = JSON.parse(request.response);
        console.log("Summary JSON's data ");
        console.table(json);
    }
  };
  request.send(null);

  console.log("I don't wait for the response... ");
})();
