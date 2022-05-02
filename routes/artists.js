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

router.post("/", upload.single('image') , function(req, res){
    let arrlength;
    let artistname = req.body.artistname;
    let image = '/upload/' + req.file.filename;
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