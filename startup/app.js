//const fs = require('fs'); //NS photos
const express = require('express');
const app = express();
const path = require('path');

// routes
const home = require('../routes/home');
const homeInfo = require('../routes/homeInfo');
const photos = require('../routes/photos');

app.set('../views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/static', express.static(path.join(__dirname, 'uploads'))); //NS photos

app.use('/', home);
app.use('/home', home);
app.use('/homeInfo', homeInfo);
app.use('/photos', photos);

module.exports = app;
