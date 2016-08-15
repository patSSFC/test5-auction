console.log('Loaded routes!');
var user = require('../controllers/userController.js');
var product = require('../controllers/productController.js');
var bid = require('../controllers/bidController.js');
module.exports = function(app){
    app.post('/login', function(req, res) {
        console.log('Inside POST /login route!');
        user.login(req, res);
    });
    app.get('/products', function(req, res) {
        console.log('Inside GET /products route!');
        product.getProducts(req, res);
    });
    app.post('/bids', function(req, res) {
        console.log('Inside POST /bids route!');
        bid.postBid(req, res);
    });
    app.delete('/bids', function(req, res) {
        console.log('Inside DELETE /bids route!');
        bid.deleteBids(req, res);
    });
}
