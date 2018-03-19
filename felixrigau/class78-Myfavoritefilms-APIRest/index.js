const express = require("express");
const path = require("path");
const app = express();

app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: "Fav Films | Gestiona tus filmes favoritos" })
});

app.get('/films', (req, res) => {
    let films = [{
        name: "Band of Brother",
        year: 2014,
        director: 'Spilberg'
    }];
    res.render('films', { title: "Fav Films | Mis filmes", myFilms: films })
});

app.listen(process.env.PORT);
