const express = require('express');
const session = require('express-session');
var  router = express.Router();
const bodyParser = require('body-parser');


router.use(bodyParser.urlencoded({ extended: true }));


router.get('/logar', (req, res) => {
	res.render(__dirname + '/index.ejs');
});

function isAuthenticated(req) {
  if(req.session.login)
  {
    return true
  }
  else{
    return false
  }  ;
}

function isAdm(req) {
  if(req.session.login)
  {
    return true;
  }
}

  
    
router.use(session({
  secret: 'portabeta123', 
  resave: false, 
  saveUninitialized: true,
  cookie: {
    maxAge: 30000000 
  } 
}));

router.post('/entrar', (req, res) => {
   let username = req.body.usermail;
   let password = req.body.password;

   
   if (username === 'adm@adm' && password === 'adm') {
       req.session.login = username;
       res.redirect('/');
   } else {
       res.redirect('/logar');
   }
});

module.exports = router;
module.exports.isAuthenticated = isAuthenticated;
module.exports.isAdm = isAdm;