const mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = {
    login : function(req, res) {
        // console.log(req);
        User.findOne({name: req.body.username}, function(err, user) {
            if(err) {
                res.status(500).json(err);
            } else {
                if(user){
                    res.status(200).json({user : user, message: "You already have a user account!"});
                }else{
                    var user = new User({
                        name : req.body.username
                    });
                    user.save(function(err) {
                        if(err) {
                            res.status(500).json(err);
                        } else {
                            res.status(200).json({user : user, message: "Your account was created!"});
                        }
                    })
                }
            }
        });
    }
}
