const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        album        =   require('../models/album'),
        artist      =   require('../models/artist'),
        middlewareObj   =   require('../middleware');

router.get("/new", function(req, res){
    res.render("artist/new.ejs"); 
});

router.get("/", function(req, res){
    artist.find({}).exec(function(err, artist){
        if(err){
            console.log(err);
        } else {
            res.render("artist/artist.ejs",{artist,artist});
        }
    });
});

// router.post("/", function(req, res){
//     let artistname = req.body.artistname;
//     let image = req.body.image;
//     let newArtist = {name:artistname, image:image};
//     artist.create(newArtist, function(err, req){
//         if(err){
//             console.log(err);
//         } else {
           
//         }
//     });
// });

router.get("/:id", middlewareObj.isLoggedIn, function(req, res){
    artist.findById(req.params.id).exec(function(err, artists){
        if(err){
            console.log(err);
        } else {
            song.find({"artistcode":artists.artistcode.toString()}).populate('artist').exec(function(err, artistsong){
            if(err){
                console.log(err);
                } else {
                    album.find({"artistcode":artists.artistcode.toString()}).exec(function(err, album){
                        if(err){
                            console.log(err);
                        } else {
                             res.render("artist/artist-id.ejs",{artist:artists,artistsong:artistsong,album:album}); 
                        }
                    });
                }
            });
        }
    });
});

// artist.aggregate( [ { $sample: { size: 3 } } ]).exec(function(err,otherartist){
//     if(err){
//         console.log(err);
//     } else {
//         res.render("artist/artist-id.ejs",{artist:artists,artistsong:artistsong,otherartist:otherartist}); 
//     }
// })
module.exports = router;