const   express     =   require('express'),
        router      =   express.Router({mergeParams: true}),
        song        =   require('../models/song'),
        artist      =   require('../models/artist'),
        album       =   require('../models/album'),
        middlewareObj   =   require('../middleware');

router.get("/", function(req, res){
    album.find({}).exec(function(err, album){
        if(err){
            console.log(err);
        } else {
            res.render("album/album.ejs",{album:album});
        }
    });
});

router.get("/:id", middlewareObj.isLoggedIn, function(req, res){
    album.findById(req.params.id).exec(function(err, album){
        if(err){
            console.log(err);
        } else {
            song.find({'albumcode': album.albumcode}).populate('album').exec(function(err, albumsong){
                if(err){
                    console.log(err);
                } else {
                    res.render("album/album-id.ejs",{album:album,albumsong:albumsong}); 
                }
            });
        }
    });
});
module.exports = router;