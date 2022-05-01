const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        artist      =   require('../models/artist'),
        album        =   require('../models/album'),
        middlewareObj   =   require('../middleware');
        // , middlewareObj.isLoggedIn

router.get("/remove", function(req, res){
    song.find({}).exec(function(err, allSong){  
        if(err){
            console.log(err);
        } else {
            res.render('song/remove.ejs',{allSong:allSong});
        }
    });
});

router.get("/:id", middlewareObj.isLoggedIn, function(req, res){
    song.findById(req.params.id).populate('artist').exec(function(err, foundsong){
        if(err){
            console.log(err);
        } else { 
            song.find({}).populate('artist').exec(function(err, allSong){
                if(err){
                    console.log(err);
                } else {
                    song.aggregate( [ { $sample: { size: 3 } } ]).exec(function(err,othersong){
                        if(err){
                            console.log(err);
                        } else {
                            artist.aggregate( [ { $sample: { size: 3 } } ]).exec(function(err,otherartist){
                                if(err){
                                    console.log(err);
                                } else {
                                    res.render("song/song-id.ejs",{songinfo:foundsong,othersong:othersong,otherartist:otherartist});
                                }
                            });
                        }
                    })
                }
            });
        }
    });
});

module.exports = router;