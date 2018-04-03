const express = require("express");
const request = require("request");
const path = require("path");
const firebase = require("firebase");
const helmet = require("helmet");
const app = express();

const filmModel = require("./models/filmModel.js");
const api = require("./routers/filmsApi.js");

app.use(helmet());

app.use('/api/v1', api);

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: "Fav Films | Gestiona tus filmes favoritos" });
});

app.get('/films', (req, res) => {
    filmModel.all().then((allFilms) => {
        allFilms = allFilms !== null ? allFilms : {};
        res.render('films', { title: "Fav Films | Mis filmes", films: allFilms });
    });
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

app.listen(process.env.PORT);
