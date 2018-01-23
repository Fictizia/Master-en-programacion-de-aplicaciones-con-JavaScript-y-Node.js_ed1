// Initialize Firebase
/*global firebase
  var config = {
    apiKey: "AIzaSyCuyhD-WepVZyPb5OwmEAnarSn5MvD3Xvc",
    authDomain: "myfilms-6b0bc.firebaseapp.com",
    databaseURL: "https://myfilms-6b0bc.firebaseio.com",
    projectId: "myfilms-6b0bc",
    storageBucket: "",
    messagingSenderId: "645761269047"
  };
  firebase.initializeApp(config);*/

var APP = {
    init:function () {
        
    },
    
    db:{
        test:function (name) {
            APP.tools.makeRequest('GET','http://www.omdbapi.com/?apikey=b426c167&t='+name,true,APP.db.testJSON);
        },
        
        testJSON:function (json) {
            console.log(json)
        }
    },
    
    tools:{
        makeRequest: function (httpMethod, url, asynchronous, callback) {
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
        },
    }
};

APP.init();

//http://www.omdbapi.com/?apikey=b426c167&t=terminator
