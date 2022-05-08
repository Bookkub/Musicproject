const   express     =   require('express'),
        app         =   express(),
        bodyParser  =   require("body-parser"),
        mongoose    =   require('mongoose'),
        passport    =   require('passport'),
        LocalStrategy   =   require('passport-local'),
        flash       =   require('connect-flash'),
        methodOverride = require('method-override'),
        user        =   require('./models/user'),
        seedDB      =   require('./seeds.js');

const indexRoutes   =   require('./routes/index'),
      artistRoutes  =   require('./routes/artists'),
      albumRoutes   =   require('./routes/albums'),
      songRoutes    =   require('./routes/songs'),
      searchRoutes  =   require('./routes/search'),
      userRoutes    =   require('./routes/user');

mongoose.connect('mongodb://localhost/Lifemusic');
app.set("view engine","ejs");
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extened: true}));
app.use(methodOverride('_method'));
app.use(flash());
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
    res.locals.error = req.flash('error');
    res.locals.success = req.flash('success');
    next();
});

app.use('/', indexRoutes); 
app.use('/song', songRoutes);
app.use('/artist', artistRoutes);
app.use('/album', albumRoutes);
app.use('/search', searchRoutes);
app.use('/user', userRoutes);

app.listen(3000, function(){
    console.log("Activated");
});