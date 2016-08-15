const mongoose = require('mongoose');
var Bid = mongoose.model('Bid');
var Product = mongoose.model('Product');

module.exports = {
    postBid : function(req, res) {
        console.log(req.body);
        var p_id = req.body.p_id;
        Product.findOne({_id : p_id}, function(err, product) {
            var bid = new Bid({
                amount : req.body.amount
            });
            // console.log(bid);
            bid._product = product._id;
            bid._user = req.body.u_id;
            console.log(bid);
            bid.save(function(err) {
                product._bids.push(bid);
                product.save(function(err) {
                    if(err) {
                        res.status(500).json(err);
                    } else {
                        res.status(200).json({message : 'Product updated with bid!'})
                    }
                })
            })
        })
    },
    deleteBids : function(req, res) {
        // Bid.remove({}).exec(function(err) {
        //     if(err) {
        //         res.status(500).json(err);
        //     } else {
        //         res.status(200).json({message : 'Bids deleted!'})
        //     }
        // });
        Bid.remove({}, function(err) {
            if(err) {
                res.status(500).json(err);
            } else {
                res.status(200).json({message : 'Bids deleted!'})
            }
        })
    }
}
