const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        album        =   require('../models/album'),
        artist      =   require('../models/artist'),
        middlewareObj   =   require('../middleware');

router.get("/new", function(req, res){
    res.render("artist/new.ejs"); 
});

router.get("/remove", function(req, res){
    artist.find({}).exec(function(err,allArtist){
        if(err) {
            console.log(err);
        } else {
            res.render("artist/remove.ejs",{allArtist:allArtist}); 
        }
    });
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

router.post("/", function(req, res){
    let arrlength;
    let artistname = req.body.artistname;
    let image = req.body.image;
    let x = 1;
    let newartist;
    let oldartist;
    let newArtist = {name:artistname, image:image};
    artist.find({}).sort({artistcode:1}).exec(function(err, allArtist){
        if(err){
            console.log(err);
        } else {
            newartist = artistname.toUpperCase().replace(/\s/g, '');
            for(let i=0; i < allArtist.length; i++)
            {
                oldartist = allArtist[i].name.toUpperCase().replace(/\s/g, ''); 
                if(oldartist === newartist){
                    x = 0;
                    break;
                }
            }    
            if(x === 0) {
                req.flash('error', "This artist name already exists.");
                res.redirect("back");
            }
            else if(x === 1){
                arrlength = allArtist.length - 1;
                newArtist.artistcode = (parseInt(allArtist[arrlength].artistcode) + 1).toString();
                artist.create(newArtist, function(err){
                    if(err){
                        console.log(err);
                    } else{
                        res.redirect("/");
                    }
                });
            }
        }
    });
});

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