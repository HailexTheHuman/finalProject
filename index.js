const express = require('express');

const progressiveLabURL = "http://localhost:5000";

const PORT = 5000;
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/interests', (req, res) => {
    res.render('interests');
});

app.get('/aboutMe', (req, res) => {
    res.render('about-me');
});

app.get('/plans', (req, res) => {
    res.render('plans');
});

app.get('/skills', (req, res) => {
    res.render('skills');
});

app.get('/projects', (req, res) => {
    res.render('projects');
});

app.listen(PORT, (req, res) => {
    console.log(`express listening at: http://localhost:${PORT}`);
});