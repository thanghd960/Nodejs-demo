// var express = require('express');
// var router = express.Router();
// router.get('/', function(res, req, next){
//     res.send('INDEX PAGE');
    
// });

// module.exports = router;
var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    // res.send('INDEX');
    res.render('index.html')
});

module.exports = router;