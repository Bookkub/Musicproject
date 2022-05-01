const   express     =   require('express'),
        router      =   express.Router({mergeParams: true}),
        song        =   require('../models/song'),
        artist      =   require('../models/artist'),
        album       =   require('../models/album'),
        middlewareObj   =   require('../middleware');

router.get("/new", function(req, res){
    artist.find({}).exec(function(err, artist){
        if(err) {
            console.log(err)
        } else {
            res.render("album/new.ejs",{artist:artist});
        }
    })
});

router.get("/remove", function(req, res){
    album.find({}).exec(function(err, allAlbum){
        if(err) {
            console.log(err);
        } else {
            res.render("album/remove.ejs",{allAlbum:allAlbum});
        }
    });
});

router.get("/", function(req, res){
    album.find({}).exec(function(err, album){
        if(err){
            console.log(err);
        } else {
            res.render("album/album.ejs",{album:album});
        }
    });
});

router.post("/", function(req, res){
    let arrlength;
    let albumname = req.body.album;
    let image = req.body.image;
    let artistname = req.body.artist;
    let x = 1;
    let newalbum;
    let oldalbum;
    let newAlbum = {name:albumname, image:image};
    album.find({}).sort({artistcode:1}).exec(function(err, allAlbum){
        if(err) {
            console.log(err);
        } else {
            artist.findOne().where('name').equals(artistname).exec(function(err, foundArtist){
                if(err)
                {
                    console.log(err)
                } else {
                    newalbum = albumname.toUpperCase().replace(/\s/g, '');
                    for(let i=0; i < allAlbum.length; i++)
                    {
                        oldalbum = allAlbum[i].name.toUpperCase().replace(/\s/g, ''); 
                        if(oldalbum === newalbum){
                            x = 0;
                            break;
                        }
                    }   
                    if(x === 0) {
                        req.flash('error', "This album name already exists.");
                        res.redirect("back");
                    }
                    else if(x === 1){
                        arrlength = allAlbum.length - 1;
                        newAlbum.albumcode = (parseInt(allAlbum[arrlength].albumcode) + 1).toString();
                        album.create(newAlbum, function(err, album){
                            if(err){
                                console.log(err);
                            } else{
                                album.artistcode = foundArtist.artistcode;
                                album.artist.id  = foundArtist._id;
                                album.artist.image = foundArtist.image;
                                album.artist.name = foundArtist.name;
                                album.save();
                                res.redirect("/");
                            }
                        });
                    } 
                }
            });
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