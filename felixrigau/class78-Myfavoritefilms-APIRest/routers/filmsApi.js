const express = require("express");
const filmModel = require("../models/filmModel.js")

const api = express.Router();

api.get('/films', (req, res) => {
  // let films = filmModel.getFilms() || { response: 'No hay datos' };
  let films = {};
  filmModel.getFilms().then((films) => {
    console.log('Films:', films);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(films));
  });
});

api.get('/films/add', (req, res) => {
  if (req.query.film) {
    let film = JSON.parse(req.query.film);
    filmModel.save(film)
    res.setHeader('Content-Type', 'application/json');
    res.send(req.query.film)
  }
});

module.exports = api;
