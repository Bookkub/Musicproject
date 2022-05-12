const e = require('connect-flash');
const { redirect } = require('express/lib/response');

const   express     =   require('express'),
        router      =   express.Router(),
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

router.get('/:id', function(req, res){
    user.findById(req.params.id).populate('song').exec(function(err, foundUser){
        if(err) {
            req.flash('error', 'There is something wrong');
            return res.redirect('/');
        } else {
            if(req.isAuthenticated()){
                user.findById(req.user._id).populate('song').exec(function(err, foundUser){
                   if(err){
                      console.log(err);
                   } else {
                    res.render('user/profile.ejs',{user: foundUser, usersong:foundUser.song});
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