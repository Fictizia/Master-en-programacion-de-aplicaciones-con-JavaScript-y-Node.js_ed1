const express = require("express");
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.render('index')
})

app.get('/contacto', function(req, res) {
  res.render('contacto')
})

app.get('/quienes-somos', function(req, res) {
  res.render('quienes_somos')
})

app.listen(process.env.PORT);
