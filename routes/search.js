const   express     =   require('express'),
        router      =   express.Router({mergeParams: true}),
        bodyParser  =   require("body-parser");

router.use(bodyParser.urlencoded({extended: true}));

router.get("/", function(req, res){
   res.render("search.ejs");
});
// router.post("/", function(req, res, next){
//    const keyword = req.body.keyword;
//    console.log(keyword);
// });

// function updateResult(query) {
//    console.log(query);
// }

// function filter_pictures() {
//    var $i = 0;

//    //Get the text we use to filter
//    var $filter = document.getElementById('filter').value;

//    //Get all images
//    var $imgsCollection = document.getElementsByClassName('filtered');

//    //For every image check if url has filter in it and hide/show as needed.
//     for ($i = 0; $i < $imgsCollection.length; $i++) {
//        if ($imgsCollection[$i].getAttribute('src').indexOf($filter) > -1) {
//            $imgsCollection[$i].style.display = 'block';
//        } else {
//            $imgsCollection[$i].style.display = 'none';
//        }
//     }
// }

// router.post('/', function(req,res){
//    let newUser = new user({username: req.body.username});
//    user.register(newUser, req.body.password, function(err, user){
//        if(err){
//            console.log(err);
//        } else {
         
//        }
//    })
// })

   //  $(document).ready(function(){
   //    $(".navbar--search__size").keypress(function(){
   //      $(this).hide();
   //    });
   //  });


module.exports = router;