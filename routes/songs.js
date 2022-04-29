const   express     =   require('express'),
        router      =   express.Router(),
        song        =   require('../models/song'),
        artist      =   require('../models/artist'),
        album        =   require('../models/album'),
        middlewareObj   =   require('../middleware');
        // , middlewareObj.isLoggedIn

router.get("/new", function(req, res){
    artist.find({}).exec(function(err, allartist){
        if(err){
            console.log(err);
        } else {
            album.find({}).exec(function(err, allalbum){
                if(err){
                    console.log(err);
                } else {
                   res.render("song/new.ejs",{allartist:allartist,allalbum:allalbum});  
                }
            });
        }
    });
    
});

router.post("/", function(req, res){
    let name = req.body.songname;
    let lyric = req.body.lyric;
    let artistname = req.body.artist;
    let albumname = req.body.album;
    let image = req.body.image;
    let newSong = {name:name, lyric:lyric, image:image};
    artist.findOne().where('name').equals(artistname).exec(function(err, foundArtist){
        if(err)
        {
            console.log(err)
            
        } else {
            album.findOne().where('name').equals(albumname).exec(function(err, foundAlbum){
                if(err)
                {
                    console.log(err)
                    
                } else {
                    song.create(newSong, function(err, song){
                        if(err){
                            console.log(err);
                        } else {
                            song.artistcode = foundArtist.artistcode;
                            song.artist.id  = foundArtist._id;
                            song.artist.image = foundArtist.image;
                            song.artist.name = foundArtist.name;
                            song.albumcode = foundAlbum.albumcode;
                            song.album.id  = foundAlbum._id;
                            song.album.image = foundAlbum.image;
                            song.album.name = foundAlbum.name;
                            song.save();
                            console.log("New Song Added");
                            res.redirect("back");
                        }
                    });            
                }
            });
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