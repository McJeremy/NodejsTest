var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.render('index',{title:'<h1>express</h1>'
                        ,users:[
                                {username:'Wilson'},
                                {username:'Wilson Zhone'},
                                {username:'Xuzz'}]
                      });
});

module.exports = router;
