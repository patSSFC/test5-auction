const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BidSchema = new Schema({
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    _product: {type: Schema.Types.ObjectId, ref: 'Product'},
    amount: {type: Number, required: true}
});

var Bid = mongoose.model('Bid', BidSchema);
console.log('Loaded Bid model!');
