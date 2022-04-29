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

router.get("/register", function(req, res){
    res.render("register.ejs")
});

router.post('/register', function(req,res){
    let newUser = new user({username: req.body.username});
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