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
        album      =   require('../models/album'),
        user        =   require('../models/user'),
        passport    =   require('passport'),
        middlewareObj   =   require('../middleware');

router.get("/", function(req, res){
    song.find({}).populate('artist').exec(function(err, allSong){
        if(err){
            console.log(err);
        } else{
            allSong.sort((x,y) => (x.favourite > y.favourite) ? -1 : ((y.favourite > x.favourite) ? 1 : 0))
            artist.find({}).exec(function(err, artist){
                if(err){
                    console.log(err);
                } else {
                    album.find({}).populate('artist').exec(function(err, album){
                        if(err){
                            console.log(err);
                        } else {
                             res.render("home.ejs",{recommend:allSong,artist:artist,album:album});
                        }
                    });
                }
            });
          
        }
    });
});

router.post("/", upload.single('image') ,function(req, res){
    let name = req.body.name;
    let lyric = req.body.lyric;
    let artistname = req.body.artist;
    let albumname = req.body.album;
    let image = '/upload/' + req.file.filename;
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
                            if(albumname){
                                song.albumcode = foundAlbum.albumcode;
                                song.albumcode = foundAlbum.albumcode;
                                song.album.id  = foundAlbum._id;
                                song.album.image = foundAlbum.image;
                                song.album.name = foundAlbum.name;
                            }
                            song.save();
                            req.flash('success', "New song have already added.");
                            res.redirect("back");
                        }
                    });            
                }
            });
        }
    });
});

router.get("/register", function(req, res){
    res.render("register.ejs")
});

router.post('/register', upload.single('image'), function(req,res){
    req.body.image = '/upload/'+req.file.filename;
    let newUser = new user({username: req.body.username,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        image: req.body.image
});
    if(req.body.adminCode === 'topsecret'){
        newUser.isAdmin = true;
    }
    user.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash('error', err.message);
            return res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, function(){
                req.flash('success', user.username + ', Welcome to new Life');
                res.redirect('/');
            });
        }
    })
})

router.get("/login", function(req, res){
    res.render("login.ejs")
});

router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login',
        successFlash: true,
        failureFlash: true,
        successFlash: 'Successfully login',
        failureFlash: 'Invalid username or password'
    }), function(req,res){
});

router.get('/logout', function(req,res){
    req.logOut();
    req.flash('success','Log out successfully');
    res.redirect('/');
});



module.exports = router;