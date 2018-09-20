const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post('/conference',function (req,res) {
    console.log("confernce",req.body)
    res.send(JSON.stringify({
        'id': 364758328,
        'name': '1234',
        'mail_owner': 'nipuna@moderator.jitsimeet.meetrix.io',
        'start_time': '2018-09-20T09:10:40.421Z',
        'duration': 900000
    }));
})
app.listen( 3000,function () {
    console.log("ServerListen Port:3000....")
})
