const express = require('express');
const http = require('http');
const app = express();
const ejs = require('ejs');
const bodyParser = require('body-parser');

const path = require('path');
var userRoute = require('../API/API');
var userLogin = require('../Assets/Login/login.js');
var userPrincipal = require('../Assets/Principal/principal.js')
var userLuan = require('../Assets/Luan/luan')


app.use('/', userRoute);
app.use('/', userLogin);
app.use('/', userPrincipal);
app.use('/', userLuan);

app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname + "/public")));
app.use(bodyParser.urlencoded({ extended: true }));


const port = process.env.PORT || 21062;
const server = http.createServer(app);


server.listen(port, function () {
  console.log('O app está rodando ' + port);
});

module.exports = userRoute;
module.exports = userLogin;
module.exports = userPrincipal;
module.exports = userLuan;