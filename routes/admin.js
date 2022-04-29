const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        album        =   require('../models/album'),
        middlewareObj   =   require('../middleware');

router.get("/", function(req, res){
    res.render("admin/adminpage.ejs");
});

module.exports = router;