// @giphy: http://giphy.com/gifs/3ohze2apsm6Qpb281y
// @codepen: https://codepen.io/ulisesgascon/pen/JWRMbG
// @see: https://bl.ocks.org/npedrini/6030317
// @converter: https://blockchain.info/es/api/exchange_rates_api

var  coinList = document.getElementById('coinList');
var url = 'https://blockchain.info/es/ticker?cors=true';


var bitcoinsAmount = 0;
var exchangeRates = false;
var targetAmount = document.getElementById("amount");
//var targetExchange = document.getElementById("exchange");


/*---- AJAX CALL----*/


var xmlHttp = new XMLHttpRequest();

xmlHttp.onreadystatechange = function() {

  if (xmlHttp.readyState === 4) {
    if (xmlHttp.status >= 100 && xmlHttp.status < 300) {
      exchangeRates = JSON.parse(xmlHttp.responseText);
      console.log(exchangeRates)
    } else {
      exchangeRates = false;
      console.error("ERROR! AJAX!", xmlHttp.status);
      console.info(JSON.parse(xmlHttp.responseText));
    }
  }
};

xmlHttp.open("GET", "https://blockchain.info/es/ticker?cors=true", true);
xmlHttp.send();
//https://blockchain.info/es/ticker

/*---- WEBSOCKETS ----*/
var blockchain = new WebSocket('wss://ws.blockchain.info/inv');

blockchain.onerror = function(error) {
  console.log('connection.onerror', error);
};

blockchain.onopen = function() {
  blockchain.send(JSON.stringify({
    "op": "unconfirmed_sub"
  })); //	subscribe to uncofirmed activity
  blockchain.send(JSON.stringify({
    "op": "blocks_sub"
  })); //	subscribe to new blocks
};

blockchain.onmessage = function(message) {
  var response = JSON.parse(message.data);
  if (response.op == "utx") {
    var amount = 0;
    for (var i = 0; i < response.x.out.length; i++) {
      amount += response.x.out[i].value;
    }
    //	amount is in satoshi
    //	1 BTC = 100,000,000 Satoshi (https://en.bitcoin.it/wiki/activity)
    response.amount = amount / 100000000;
    bitcoinsAmount += response.amount
    var contentAmount = "";

    if(exchangeRates) {
      var contentExchange = "";
      var sellExchange = "";
      for(var coin in exchangeRates){
       contentExchange += "<strong>"+coin+":</strong> "+ (bitcoinsAmount+exchangeRates[coin]["sell"]).toFixed(2)+ exchangeRates[coin]["symbol"]+" | "
       sellExchange += "<strong>"+coin+" (S):</strong> "+exchangeRates[coin]["sell"]+exchangeRates[coin]["symbol"] + " | "
       sellExchange += "<strong>"+coin+" (B):</strong> "+exchangeRates[coin]["buy"]+exchangeRates[coin]["symbol"] + " | "
      }
      document.getElementById("sell").innerHTML = sellExchange;
      document.getElementById("exchange").innerHTML = contentExchange;
    }
      contentAmount = "<p id='btc'><strong>BTC:</strong> " + bitcoinsAmount.toFixed(6) + "</p>";

    targetAmount.innerHTML = contentAmount;
    
  }
}
