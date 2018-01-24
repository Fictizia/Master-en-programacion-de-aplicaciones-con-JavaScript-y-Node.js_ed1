var button = document.getElementById('button');
button.addEventListener('click', function() {
  makeRequest();
});

function test() {

}

function loadDatas() {

}

function makeRequest() {

    var request = new XMLHttpRequest();
    var url = "x";
    request.open("GET",'https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=10', false);
    request.send();


    if (request.readyState == 4 && request.status >= 200 && request.status < 300 && request.responseText ) {
        var json = JSON.parse(request.response);
        console.table(json);
    }else{
        return false;
    }

}

//Factorial
function factorial(number) {
  if (number == 0) {
    return 1;
  }
  if(number == 1){
    return 1;
  }else {
    return number*factorial(--number);
  }
}

//Callback
function suma(a,b,callback) {
  return callback(a+b);
}
