const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var app = express();
var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./server/config/dbConfig.js');
var routes = require('./server/config/routes.js')(app);

app.listen(port, function() {
    console.log('Listening on ' + port);
})
