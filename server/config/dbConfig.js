var mongoose = require('mongoose');
var path = require('path');
var fs = require('fs');
console.log('Loaded DB connection');

var models_dir = path.join(__dirname, '../models');

mongoose.connect("mongodb://localhost/test5");

fs.readdirSync(models_dir).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
         // require the file (this runs the model file which registers the schema)
        require(models_dir + '/' + file);
    }
});
