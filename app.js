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

const indexRoutes   =   require('./routes/index'),
      artistRoutes   =   require('./routes/artists'),
      albumRoutes   =   require('./routes/albums'),
      songRoutes   =   require('./routes/songs'),
      searchRoutes   =   require('./routes/search');

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

// app.get("/profile", function(req, res){
//     res.render("profile/user.ejs");
// });


app.use('/', indexRoutes); 
app.use('/song', songRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);
app.use('/search', searchRoutes);

app.listen(3000, function(){
    console.log("Activated");
});