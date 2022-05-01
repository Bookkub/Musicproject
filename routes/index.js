const   express     =   require('express'),
        router      =   express.Router(),
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
                            if(albumname){
                                song.albumcode = foundAlbum.albumcode;
                                song.albumcode = foundAlbum.albumcode;
                                song.album.id  = foundAlbum._id;
                                song.album.image = foundAlbum.image;
                                song.album.name = foundAlbum.name;
                            }
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

router.get("/register", function(req, res){
    res.render("register.ejs")
});

router.post('/register', function(req,res){
    let newUser = new user({username: req.body.username});
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
                if(newUser.isAdmin === true)
                {
                   x = 1;
                }
                else {
                    x = 0;
                }
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