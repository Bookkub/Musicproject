const   express     =   require('express'),
        router      =   express.Router({mergeParams: true});


router.get("/", function(req, res){
   res.render("/search.ejs");
});

module.exports = router;