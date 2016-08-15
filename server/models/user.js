const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {type: String, required: true, minlength: 1}
});

var User = mongoose.model('User', UserSchema);

console.log("loaded User model!");
