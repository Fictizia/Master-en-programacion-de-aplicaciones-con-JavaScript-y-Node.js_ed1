//Firebase 
const firebase = require("firebase");
const http = require("http")
const request = require("request")
const fs = require("fs")


var config = {
  apiKey: "AIzaSyCuyhD-WepVZyPb5OwmEAnarSn5MvD3Xvc",
  authDomain: "myfilms-6b0bc.firebaseapp.com",
  databaseURL: "https://myfilms-6b0bc.firebaseio.com",
  projectId: "myfilms-6b0bc",
  storageBucket: "myfilms-6b0bc.appspot.com",
  messagingSenderId: "645761269047"
};
firebase.initializeApp(config);

const database = firebase.database();


exports.all = () => {
  return new Promise((resolve, reject) => {
    database.ref('/films').once('value', function(snapshot) {
      resolve(snapshot.val());
    });
  });
};

exports.save = (film) => {
  return database.ref('/films/' + film.imdbID).set(film);
};

exports.delete = (id) => {
  return database.ref('/films').child(id).remove();
};

exports.update = (id, object) => {
  return database.ref('/films/' + id).update(object);
};

exports.downloadImage = (src, fileName) => {
  let dest = './public/images/films/' + fileName + '.jpg';
  let file = fs.createWriteStream(dest);
  request(src).pipe(file);
};

exports.exist = (id) => {
  return new Promise((resolve, reject) => {
    database.ref('/films').child(id).once('value', function(snapshot) {
      if (snapshot.val()) {
        resolve(true);
      }
      else {
        resolve(false);
      }
    });
  });
}
