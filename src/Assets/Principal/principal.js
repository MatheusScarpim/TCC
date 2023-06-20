const express = require('express');
var  router = express.Router();
const bodyParser = require('body-parser');
var login = require("../Login/login")


router.get('/', (req, res) => {
    if(login.isAuthenticated(req))
    {
        res.send("Logado");
    }
    else{
        res.redirect("/logar");
    }
});

module.exports = router;