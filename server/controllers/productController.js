const mongoose = require('mongoose');
var Product = mongoose.model('Product');
var User = mongoose.model('User');
module.exports = {
    getProducts : function(req, res) {
        // Product.find({})
        //     .populate('_bids')
        //     .exec(function(err, products) {
        //         if(err) {
        //            res.status(500).json(err);
        //         } else {
        //            res.status(200).json(products);
        //         }
        //     })
        Product.find({})
            .populate({
                path: '_bids',
                populate: {
                    path: '_user',
                    model: 'User'
                }
            })
            .exec(function(err, products) {
                if(err) {
                    res.status(500).json(err);
                } else {
                    res.status(200).json(products);
                }
            })
    }
}
