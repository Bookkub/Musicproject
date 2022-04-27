const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        album        =   require('../models/album'),
        middlewareObj   =   require('../middleware');
        // , middlewareObj.isLoggedIn
router.get("/:id", function(req, res){
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
                           res.render("song/song-id.ejs",{songinfo:foundsong,othersong:othersong});  
                        }
                    })
                }
            });
        }
    });
});

module.exports = router;