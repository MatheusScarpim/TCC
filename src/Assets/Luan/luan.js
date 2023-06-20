const express = require('express');
var  router = express.Router();
const bodyParser = require('body-parser');
var login = require("../Login/login")

router.get('/luan', (req, res) => {
     res.render(__dirname +"/index.html");
});


module.exports = router;