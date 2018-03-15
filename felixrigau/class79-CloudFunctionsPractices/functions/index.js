const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addMessage = functions.https.onRequest((req, res) => {
  const text = req.query.text || 'default text';
  const ip = req.ip;
  var datas = { text, ip };
  admin.database().ref('/messages').push(datas).then(snapshot => {
    console.log(datas);
    res.send(datas);
  });
});





// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
