var express = require('express');
var router = express.Router();

var user = require('../db/db').user;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(reg,res){
    res.render('login',{title:'login'});
});

router.post('/ucenter',function(req,res){
    var query = {name:req.body.name,password:req.body.password};
    
    (function(){
        user.count(query,function(err,doc){
            if(doc==1)
            {
               console.log(query.name+":登录成功"+new Date());
               res.render('ucenter',{title:'ucenter',q:query});
            }
            else 
            {
                console.log(query.name+":登录失败"+new Date());
                res.redirect('/');
            }
        });
    })(query);
});

module.exports = router;
