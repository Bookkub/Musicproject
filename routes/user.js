const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        artist      =   require('../models/artist'),
        album      =   require('../models/album'),
        user        =   require('../models/user'),
        passport    =   require('passport'),
        middlewareObj   =   require('../middleware');

router.get("/", function(req, res){
    res.render("user/profile.ejs");
});

router.get("/remove", function(req, res){
    res.render("user/remove.ejs");
});

module.exports = router;