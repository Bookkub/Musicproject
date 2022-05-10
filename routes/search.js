const user = require('../models/user');

const   express     =   require('express'),
        song        =   require('../models/song'),
        artist      =   require('../models/artist'),
        album        =   require('../models/album'),
        router      =   express.Router({mergeParams: true}),
        bodyParser  =   require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));

router.get("/:keyword", function(req, res){
   let keyword = req.params.keyword;
   song.find({name: {$regex : keyword,$options:"i"}}).exec(function(err, searchsong){
      if(err) {
         console.log(err);
      } else {
         artist.find({name: {$regex : keyword,$options:"i"}}).exec(function(err, searchartist){
            if(err) {
               console.log(err);
            } else {
               album.find({name: {$regex : keyword,$options:"i"}}).exec(function(err, searchalbum){
                  if(err) {
                     console.log(err);
                  } else {
                     if(req.isAuthenticated()){
                        user.findById(req.user._id, function(err, foundUser){
                           if(err){
                              console.log(err);
                           } else {
                              res.render('search.ejs',{keyword:keyword,searchsong:searchsong,searchartist:searchartist,searchalbum:searchalbum, usersong:foundUser.song});
                           }
                        });
                    } else {
                        res.render('search.ejs',{keyword:keyword,searchsong:searchsong,searchartist:searchartist,searchalbum:searchalbum});
                    }
                  }
               });
            }
         });
      }
   });
}); 

router.get("/song/:keyword", function(req, res){
   let keyword = req.params.keyword;
   song.find({name:{$regex : keyword,$options:"i"}}).exec(function(err, searchsong){
      if(err) {
         console.log(err);
      } else {
         if(req.isAuthenticated()){
            user.findById(req.user._id, function(err, foundUser){
               if(err){
                  console.log(err);
               } else {
                  res.render('song/search.ejs',{keyword:keyword,searchsong:searchsong, usersong:foundUser.song});
               }
            });
        } else {
         res.render('song/search.ejs',{keyword:keyword,searchsong:searchsong});
        }
      }
   });
});

router.get("/artist/:keyword", function(req, res){
   let keyword = req.params.keyword;
   artist.find({name:{$regex : keyword,$options:"i"}}).exec(function(err, searchartist){
      if(err) {
         console.log(err);
      } else {
         res.render('artist/search.ejs',{keyword:keyword,searchartist:searchartist});
      }
   });
});

router.get("/album/:keyword", function(req, res){
   let keyword = req.params.keyword;
   album.find({name:{$regex : keyword,$options:"i"}}).exec(function(err, searchalbum){
      if(err) {
         console.log(err);
      } else {
         res.render('album/search.ejs',{keyword:keyword,searchalbum:searchalbum});
      }
   });
});

router.post("/",function(req, res){
   let keyword = req.body.keyword;
   res.redirect("/search/" + keyword);
});

module.exports = router;