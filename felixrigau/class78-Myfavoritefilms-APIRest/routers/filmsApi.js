const express = require("express");
const filmModel = require("./models/filmModel.js")

const api = express.Router();

api.get('/films', (req, res) => {

});

api.get('/films/add', (req, res) => {
  if (req.query.film) {
    let film = JSON.parse(req.query.film);
    filmModel.save(film)
    res.send(req.query.film)
  }
});
