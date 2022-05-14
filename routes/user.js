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

router.get("/remove", function(req, res){
    user.find({}).exec(function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            res.render("user/remove.ejs",{foundUser:foundUser});
        }
    });
});

router.put("/:id/edit", upload.single('image'), function (req, res) {
    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let email = req.body.email;
    let image;
    if (req.file) {
        image = '/upload/' + req.file.filename;
    }
    let newUserinfo = { firstname: firstname, lastname:lastname, email:email , image: image };
    user.findByIdAndUpdate(req.params.id, newUserinfo, function(err, updateUser){
        if (err) {
            console.log(err);
        } else {
            req.flash('success', "User had been edit.");
            res.redirect('back');
        }
    });
});

router.get('/:id', function(req, res){
    user.findById(req.params.id).populate('song').exec(function(err, foundUser){
        if(err) {
            req.flash('error', 'There is something wrong');
            return res.redirect('/');
        } else {
            if(req.isAuthenticated()){
                user.findById(req.user._id).populate('song').exec(function(err, foundUsersong){
                   if(err){
                      console.log(err);
                   } else {
                    res.render('user/profile.ejs',{user: foundUser, usersong:foundUsersong.song});
                   }
                });
            } else {
                res.render('user/profile.ejs',{user: foundUser});
            }
        }
    });
});

router.delete('/:id', function(req,res){
    user.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
            res.redirect('back');
        } else {
            req.flash('success', "User had been remove.");
            res.redirect('/user/remove');
        }
    });
});

router.post('/favourite/:id', middlewareObj.isLoggedIn, function(req, res){
    song.findById(req.params.id, function(err, foundSong){
        if(err){
            console.log(err);
        } else {
            user.findByIdAndUpdate(req.user._id, {$push:{song:foundSong}} ,function(err){
                if(err) {
                    console.log(err);
                } else {
                    req.flash('success', "Add this song to your favourite.");
                    foundSong.favourite++;
                    foundSong.save();
                    res.redirect('back');
                }
            });
        }
    });
})
router.post('/unfavourite/:id', middlewareObj.isLoggedIn, function(req, res){
    song.findById(req.params.id, function(err, foundSong){
        if(err){
            console.log(err);
        } else {
            user.findById(req.user._id,function(err, foundUser){
                if(err) {
                    console.log(err);
                } else {
                    req.flash('success', "Remove this song from your favourite.");
                    foundUser.song.pull(foundSong); 
                    foundSong.favourite--;
                    foundUser.save();
                    foundSong.save();
                    res.redirect('back');
                }
            });
        }
    });
})
module.exports = router;