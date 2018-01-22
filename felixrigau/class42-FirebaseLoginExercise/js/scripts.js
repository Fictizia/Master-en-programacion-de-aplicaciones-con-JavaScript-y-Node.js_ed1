//Firebase
  /*global firebase*/
 var config = {
      apiKey: "AIzaSyBniihu3Yo0UJofX6E4C6ejczL5g8D9ZfE",
      authDomain: "logindemo-a463b.firebaseapp.com",
      databaseURL: "https://logindemo-a463b.firebaseio.com",
      projectId: "logindemo-a463b",
      storageBucket: "logindemo-a463b.appspot.com",
      messagingSenderId: "450796995221"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

// Empty JS for your own code to be here
function addBehaviorToLoginBUtton() {
  var loginButton = document.querySelector('.register');
  loginButton.addEventListener('click',loginUser)
}

function addUser(event) {
  var name = document.querySelector('.name').value;
  var email = document.querySelector('.email').value;
  var password = document.querySelector('.password').value;
  database.ref('users/' + Date.now()).set({
    username: name,
    email: email,
    password : password
  });
  document.querySelector('form').reset();
}



(function () {
  addBehaviorToLoginBUtton();
})();
