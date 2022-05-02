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
         res.render("search.ejs",{searchsong:searchsong});
      }
   });
}); 

router.post("/", function(req, res, next){
   const keyword = req.body.keyword;
   res.redirect("/search/" + keyword);
   console.log(keyword);
});

// router.post('/', function(req,res){
//    let newUser = new user({username: req.body.username});
//    user.register(newUser, req.body.password, function(err, user){
//        if(err){
//            console.log(err);
//        } else {
         
//        }
//    })
// })



module.exports = router;