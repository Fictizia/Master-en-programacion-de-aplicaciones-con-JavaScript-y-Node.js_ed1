const express = require("express");
const request = require("request");
const path = require("path");
const firebase = require("firebase");
const helmet = require("helmet");
const app = express();

const filmController = require("./controllers/filmController.js");
const filmModel = require("./models/filmModel.js");

app.use(helmet());

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: "Fav Films | Gestiona tus filmes favoritos" })
});

app.get('/getDataApi/:filmName', (req, res) => {
    if (req.params.filmName) {
        request('http://www.omdbapi.com/?apikey=b426c167&s=' + req.params.filmName, function(error, response, body) {
            if (!error) {
                console.log('statusCode:', response && response.statusCode);
                res.send(body);
            }
            else {
                console.log('statusCode:', response && response.statusCode);
                console.log('error:', error);
            }
        });
    }
    else {
        console.log('No se encuentr el parametro: :filmName', req.params.filmName)
    }
});

app.get('/films', (req, res) => {
    console.log('films', req.films)
    res.render('films', { title: "Fav Films | Mis filmes", films: req.films })
});


app.listen(process.env.PORT);
