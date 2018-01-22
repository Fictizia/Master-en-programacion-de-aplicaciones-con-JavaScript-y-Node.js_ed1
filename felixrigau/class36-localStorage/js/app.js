var app = {
  management:{
    addContact: function (contact) {
      if (contact && contact.name && contact.phone && contact.email) {
        localStorage.setItem(contact.email,JSON.stringify(contact));
        return true;
      }else {
        console.log("You must fill in all the data");
        return false;
      }
    },

     removeContact: function (key) {
       if (key) {
         localStorage.removeItem(key);
         return true;
       }else {
         console.log("You must enter the mail");
         return false;
       }
     },

     removeAllContacts(){
       localStorage.clear();
     },

     getContact:function (key) {
       if (key) {
         var contact = localStorage.getItem(key);
         if (contact) {
           return JSON.parse(contact);
         }else {
           console.log("The searched contact don't exist");
         }
       } else {
         console.log("You must enter the mail");
       }
     },

     listContact:function () {
       var contact;
       app.renderView.clearContactList();
       for (var key in localStorage) {
         if (localStorage.hasOwnProperty(key)) {
           contact = JSON.parse(localStorage.getItem(key));
           app.renderView.createContactLiItem(contact);
         }
       }
     }
  },

  renderView:{
    createContactLiItem:function (contact) {
      var contactListTag = document.querySelector('.contact-list');
      contactListTag.innerHTML += "<li class=\"contact-item\" data-id=\""+contact.email+"\">"+
        "<img src=\"https:\/\/api.adorable.io/avatars/285/"+contact.email+".png\">"+
        "<div class=\"datas\">"+
          "<p class=\"name\">"+contact.name+"</p>"+
          "<p class=\"phone\">"+contact.phone+"</p>"+
          "<p class=\"email\">"+contact.email+"</p>"+
        "</div>"+
        "<div class=\"actions\">"+
          "<span class=\"edit button\" data-action=\"edit\">edit</span>"+
          "<span class=\"remove button\" data-action=\"remove\">remove</span>"+
        "</div>"+
      "</li>";
    },

    clearContactList:function () {
      document.querySelector('.contact-list').innerHTML = '';
    },

    test:function (json) {
      if (json) {
        var container = document.querySelector('.general-container');
        container.innerText = json.toString();
      }
    }
  },

  events:{
    updateList: function () {
      window.addEventListener('storage', function(event){
        console.info("Se registran cambios en "+event.key+". El valor pasó de ser "+event.oldValue+" a "+event.newValue+".\nRecuerda que estas en "+event.url+" y usando el almacenamiento ", event.storageArea);
      });
    },

    addEListenerAddButton:function () {
      var addButton = document.querySelector('.add');
      addButton.addEventListener('click',function () {
        var name = document.querySelector('.inputName').value,
            phone = document.querySelector('.inputPhone').value,
            email = document.querySelector('.inputEmail').value;
        var contact = {
          'name':name,
          'phone':phone,
          'email':email,
          'image':'https://api.adorable.io/avatars/285/'+email+'.png'
        }
        if (app.management.addContact(contact)) {
          app.management.listContact();
        } else {

        }
      });
    },

    addEListenerClearButton:function () {
      var addButton = document.querySelector('.clear');
      addButton.addEventListener('click',function () {
        app.management.removeAllContacts();
      });
      app.renderView.clearContactList();
    },

    addEListenerContactList:function () {
      var contactListTag = document.querySelector('.contact-list');
      contactListTag.addEventListener('click',function (e) {
        if (e.target.nodeName === 'SPAN') {
          if (e.target.getAttribute('data-action') === 'remove') {
            if (app.management.removeContact(e.target.parentNode.parentNode.getAttribute('data-id'))) {
              app.management.listContact();
            }
          } else {

          }
        }
      });
    }
  },

  animation:{

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

    test: function () {
      app.tools.makeRequest('GET','https://restcountries.eu/rest/v2/all',true,app.tools.callbackTest);
    },

    callbackTest:function (json) {
      if (json) {
        console.log('THERE IS JSON!!!');
      }
    }
  }
};

(function () {
  app.events.addEListenerAddButton();
  app.events.addEListenerClearButton();
  app.events.addEListenerContactList();
  app.management.listContact();
})();


var contact = {
  name:"Felix",
  phone:"653789823",
  email:"felix@example.com"
}
