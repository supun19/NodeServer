const express = require('express');
const app = express();
const path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.post('/conference', function (req, res) {
    const validUser = true
    if (validUser) {
        res.status(200);
        res.send(JSON.stringify({
            'id': 364758328,
            'name': '1234',
            'mail_owner': 'nipuna@moderator.jitsimeet.meetrix.io',
            'start_time': '2020-04-28T09:10:40.421Z',
            'duration': 90000000
        }));
    } else {
        res.status(409);
        res.send(JSON.stringify({
            'conflict_id': 364758328
        }));
    }

})
app.delete('/conference/:id', function (req, res) {
    res.status(200);
    res.send().end();

})
app.listen(3000, function () {
    console.log("ServerListen Port:3000....")
})
