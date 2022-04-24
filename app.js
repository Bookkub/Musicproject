const   express     =   require('express'),
        app         =   express(),
        bodyParser  =   require("body-parser"),
        mongoose    =   require('mongoose'),
        passport    =   require('passport'),
        LocalStrategy   =   require('passport-local'),
        song        =   require('./models/song'),
        artist      =   require('./models/artist'),
        album       =   require('./models/album'),
        user        =   require('./models/user'),
        seedDB      =   require('./seeds.js');

// function findsong(artistcode) {
//     song.find({"code":artistcode.toString()}).populate('artist').exec(function(err, artistsong){
//         if(err){
//             console.log(err);
//         } else {
//             return artistsong; 
//         }
//     });
// }
mongoose.connect('mongodb://localhost/Lifemusic');
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extened: true}));
// seedDB();

app.use(require('express-session')({
    secret: 'secret word',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    next();
});

app.get("/", function(req, res){
    song.find({}).populate('artist').exec(function(err, allSong){
        if(err){
            console.log(err);
        } else{
            allSong.sort((x,y) => (x.favourite > y.favourite) ? -1 : ((y.favourite > x.favourite) ? 1 : 0))
            artist.find({}).exec(function(err, artist){
                if(err){
                    console.log(err);
                } else {
                    res.render("home.ejs",{recommend:allSong,artist,artist});
                }
            });
          
        }
    });
});

app.get("/register", function(req, res){
    res.render("register.ejs")
});

app.post('/register', function(req,res){
    let newUser = new user({username: req.body.username});
    user.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect('/register');
        } else {
            passport.authenticate('local')(req, res, function(){
                res.redirect('/');
            });
        }
    })
})

app.get("/login", function(req, res){
    res.render("login.ejs")
});

app.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login'
    }), function(req,res){
});

app.get('/logout', function(req,res){
    req.logOut();
    res.redirect('/');
});

app.get("/artist", function(req, res){
    artist.find({}).exec(function(err, artist){
        if(err){
            console.log(err);
        } else {
            res.render("artist/artist.ejs",{artist,artist});
        }
    });
});

app.get("/favourite", function(req, res){
    res.render("favourite/fav&user.ejs");
});

app.get("/album", function(req, res){
    album.find({}).exec(function(err, album){
        if(err){
            console.log(err);
        } else {
            res.render("album/album.ejs",{album:album});
        }
    });
});
app.get("/artist/:id", function(req, res){
    artist.findById(req.params.id).exec(function(err, artists){
        if(err){
            console.log(err);
        } else {
            song.find({"code":artists.code.toString()}).populate('artist').exec(function(err, artistsong){
            if(err){
                console.log(err);
                } else {
                    artist.aggregate( [ { $sample: { size: 3 } } ]).exec(function(err,otherartist){
                        if(err){
                            console.log(err);
                        } else {
                            res.render("artist/artist-id.ejs",{artist:artists,artistsong:artistsong,otherartist:otherartist}); 
                        }
                    })
                }
            });
        }
    });
});

app.get("/song/:id", function(req, res){
    song.findById(req.params.id).populate('artist').exec(function(err, foundsong){
        if(err){
            console.log(err);
        } else { 
            res.render("song/song-id.ejs",{songinfo:foundsong}); 
        }
    });
});

app.listen(3000, function(){
    console.log("Activated");
});