const express = require("express");
const filmModel = require("../models/filmModel.js")

const api = express.Router();

//Middleware para habilitar CORS
function enableCORS(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
}

api.get('/films', enableCORS, (req, res) => {
  // let films = filmModel.getFilms() || { response: 'No hay datos' };
  let films = {};
  filmModel.all().then((films) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(films));
  });
});

api.post('/films', enableCORS, (req, res) => {
  if (req.query.film) {
    let film = JSON.parse(req.query.film);
    filmModel.save(film)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.query.film)
  }
});

api.put('/films/:id', enableCORS, (req, res) => {
  if (req.params.id && req.query.film) {
    let film = JSON.parse(req.query.film);
    filmModel.update(req.params.id, film)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.query.film)
  }
});

api.delete('/films/:id', enableCORS, (req, res) => {
  console.log('Llegue aki, con el id:', req.params.id)
  if (req.params.id) {
    filmModel.delete(req.params.id)
    res.setHeader('Content-Type', 'application/json');
    res.send({ action: 'delete', actionStatus: true, message: 'The film has been removed successfully.' })
  }
  else {
    res.send({ action: 'delete', actionStatus: false, message: 'You must pass an id by url' })
  }
});

module.exports = api;
