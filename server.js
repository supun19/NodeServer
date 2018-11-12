const express = require('express');
const app = express();
const path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');
var privateKey  = fs.readFileSync('./key.pem', 'utf8');
var certificate = fs.readFileSync('./cert.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static("public"));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/',function (req,res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})
var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080);
httpsServer.listen(8443);
