const   express     =   require('express'),
        router      =   express.Router(),
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
        album        =   require('../models/album'),
        middlewareObj   =   require('../middleware');
        // , middlewareObj.isLoggedIn

router.get("/remove", function(req, res){
    song.find({}).populate('artist').exec(function(err, allSong){  
        if(err){
            console.log(err);
        } else {
            artist.find({}).exec(function(err, allArtist){
                if(err){
                    console.log(err);
                } else {
                    album.find({}).exec(function(err, allAlbum){
                        if(err){
                            console.log(err);
                        } else {
                            res.render('song/remove.ejs',{allSong:allSong,allArtist:allArtist,allAlbum:allAlbum});
                        }
                    });
                }
            })
        }
    });
});

router.put('/:id', upload.single('image'),function(req, res){
        let name = req.body.name;
        let lyric = req.body.lyric;
        let artistname = req.body.artist;
        let albumname = req.body.album;
        let image;
        if(req.file){
            image = '/upload/' + req.file.filename;
        }
        let newSonginfo = {name:name, lyric:lyric, artistname:artistname, albumname:albumname, image:image};
        artist.findOne().where('name').equals(artistname).exec(function(err, foundArtist){
            if(err)
            {
                console.log(err)
            } else {
                let readartist = {};
                readartist.id = foundArtist._id;
                readartist.name = foundArtist.name;
                readartist.image = foundArtist.image;
                newSonginfo.artist = readartist;
                if(albumname){
                    album.findOne().where('name').equals(albumname).exec(function(err, foundAlbum){
                        if(err)
                        {
                            console.log(err)
                        } else {
                            let readalbum = {};
                            readalbum.id = foundAlbum._id;
                            readalbum.name = foundAlbum.name;
                            readalbum.image = foundAlbum.image;
                            newSonginfo.album = readalbum;
                            song.findByIdAndUpdate(req.params.id, newSonginfo, function(err, updateSong){
                                if(err){
                                    console.log(err);
                                    res.redirect('back');
                                } else {
                                    console.log(newSonginfo);
                                    res.redirect('/song/remove');
                                }
                            });
                        }
                    });
                }
            }
        });
});

router.delete('/:id', function(req,res){
    song.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            res.redirect('/song/remove');
        }
    });
});
// router.get("/:id/edit", function(req, res){
//     song.findById(req.params.id, function(err, foundsong){
//         if(err) {
//             console.log(err);
//         } else {
//             res.render('song/edit.ejs',{foundsong:foundsong});
//         }
//     });
// });

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