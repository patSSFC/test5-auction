const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = new Schema({
    name: {type: String, minlength: 1, required: true},
    _bids: [{type: Schema.Types.ObjectId, ref: 'Bid'}]
});

var Product = mongoose.model('Product', ProductSchema);

console.log('Loaded Product model!');
