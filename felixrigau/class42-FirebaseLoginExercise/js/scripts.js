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
    APP.db.getAllUser();
    APP.behavior.addBehaviorToLoginBUtton();
    APP.behavior.addBehaviorToDeleteBUtton();
  },
  
  behavior:{
    addBehaviorToLoginBUtton:function () {
      var loginButton = document.querySelector('.register');
      loginButton.addEventListener('click',APP.db.addUser);
    },
    
    addBehaviorToDeleteBUtton:function () {
      var userList = document.querySelector('.user-list');
      userList.addEventListener('click',function (e) {
        if(e.target.nodeName == "I"){
          var id = e.target.parentNode.parentNode.getAttribute('data-user-id');
          APP.db.deleteUser(id);
        }
      });
    }
  },
  
  db:{
    addUser:function () {
      var name = document.querySelector('.name').value;
      var email = document.querySelector('.email').value;
      var password = document.querySelector('.password').value;
      if (!APP.db.userExist(email)) {
        database.ref('users/' + Date.now()).set({
          id:email,
          username: name,
          email: email,
          password : password
        });
      } else {
        console.log('User already exist.')
      }
      document.querySelector('form').reset();
    },
    
    userExist:function (email) {
      database.ref('/users').orderByChild("email").equalTo(email).once('value',function (snapshot) {
        if (snapshot.val()) {
          return true;
        } else {
          return false;
        }
      })
    },
    
    getAllUser:function () {
      database.ref('/users').on('value',function (snapshot) {
        APP.view.updateUserList(snapshot.val());
        if (!snapshot.val()) {
          console.log('There isn\'t datas to show');
        }
      })
    },
    
    deleteUser:function (id) {
      database.ref('/users').child(id).remove();
    }
  },
  
  view:{
    updateUserList:function (users) {
      var userList = document.querySelector('.user-list');
      userList.innerHTML = '';
      for(var key in users){
        userList.innerHTML += `<blockquote data-user-id="${key}">
  				<p>
  					${users[key].username}
  				</p> <small>${users[key].email}</small>
  				<div class="actions"><i class="delete fa fa-trash"></i></div>
  			</blockquote>`;
      }
    }
  }
}

APP.init();
