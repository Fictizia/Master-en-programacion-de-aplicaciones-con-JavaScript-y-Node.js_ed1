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
var APP = {
  init:function () {
    APP.behavior.addBehaviorToLoginBUtton();
    APP.db.getAllUser();
  },
  
  behavior:{
    addBehaviorToLoginBUtton:function () {
      var loginButton = document.querySelector('.register');
      loginButton.addEventListener('click',APP.db.addUser);
    }
  },
  
  db:{
    addUser:function () {
      var name = document.querySelector('.name').value;
      var email = document.querySelector('.email').value;
      var password = document.querySelector('.password').value;
      database.ref('users/' + Date.now()).set({
        username: name,
        email: email,
        password : password
      });
      document.querySelector('form').reset();
    },
    
    getAllUser:function () {
      database.ref('users/').on('value',function (snapshot) {
        if (snapshot.val()) {
          APP.view.updateUserList(snapshot.val());
        } else {
          console.log('There isn\'t datas to show');
        }
      })
    }
  },
  
  view:{
    updateUserList:function (users) {
      var userList = document.querySelector('.user-list');
      userList.innerHTML = '';
      for(var key in users){
        userList.innerHTML += `<blockquote>
  				<p>
  					${users[key].username}
  				</p> <small>${users[key].email}<cite>${key}</cite></small>
  			</blockquote>`;
      }
    }
  }
}

APP.init();
