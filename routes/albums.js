const   express     =   require('express'),
        router      =   express.Router({mergeParams: true}),
        multer      =   require('multer'),
        path        =   require('path'),
        storage     =   multer.diskStorage({
                        destination: function(req, file, callback){
                            callback(null, './public/upload/');
                        },
                        filename: function(req, file, callback){
                            callback(null, file.fieldname + '-' + Date.now()+ path.extname(file.originalname));
                        }
        }),
        imageFilter = function(req, file, callback){
            if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/i)){
                return callback(new Error('Only jpg, jpeg, png and gif.'), false);
            }
            callback(null, true);
        },
        upload = multer({storage: storage, fileFilter: imageFilter}), 
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
            artist.find({}).exec(function(err, allArtist){
                if(err){
                    console.log(err);
                } else {
                    song.find({}).exec(function(err, allSong){
                        if(err){
                            console.log(err);
                        } else {
                            res.render("album/remove.ejs",{allAlbum:allAlbum,allArtist:allArtist,allSong:allSong});
                        }
                    });
                }
            });
        }
    });
});

router.put('/:id', upload.single('image'),function(req, res){
    let name = req.body.name;
    let artistname = req.body.artist;
    let image;
    if(req.file){
        image = '/upload/' + req.file.filename;
    }
    let newAlbuminfo = {name:name, artistname:artistname, image:image};
    artist.findOne().where('name').equals(artistname).exec(function(err, foundArtist){
        if(err)
        {
            console.log(err)
        } else {
            let readartist = {};
            readartist.id = foundArtist._id;
            readartist.name = foundArtist.name;
            readartist.image = foundArtist.image;
            newAlbuminfo.artist = readartist;
            album.findByIdAndUpdate(req.params.id, newAlbuminfo, function(err, updatealbum){
                if(err){
                    console.log(err);
                    res.redirect('back');
                } else {
                    req.flash('success', "Album had been edit.");
                    res.redirect('/album/remove');
                }
            });
        }
    });
});

router.delete('/:id', function(req,res){
    album.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            req.flash('success', "Album had been remove.");
            res.redirect('/album/remove');
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

router.post("/", upload.single('image') , function(req, res){
    let arrlength;
    let albumname = req.body.album;
    let image = '/upload/' + req.file.filename;
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
                                req.flash('success', "New album have already added.");
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