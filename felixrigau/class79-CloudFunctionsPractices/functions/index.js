const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addLog = functions.https.onRequest((req, res) => {
  var text = req.query.text || 'default text';
  var ip = req.ip;
  var datas = { text, ip };
  var timestand = Date.now();
  admin.database().ref('/logs/' + timestand).set(datas).then(snapshot => {
    res.send(datas);
  });
});

exports.addUser = functions.database.ref('/logs/{logId}').onWrite(event => {
  const log = event.data.val();
  console.log('Datos', event.params.pushId, log);
});






// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
