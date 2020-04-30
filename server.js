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
        console.log('conference create', req.body)
        const data = req.body
        res.status(200);
        res.send(JSON.stringify({
            'id': 364758328,
            'name': data.name,
            'mail_owner': 'nipuna@moderator.jitsimeet.meetrix.io',
            'start_time': data.start_time,
            'duration': 90
        }));
    } else {
        res.status(409);
        res.send(JSON.stringify({
            'conflict_id': 364758328
        }));
    }

})
app.delete('/conference/:id', function (req, res) {
    console.log('conference delete', req.params.id)
    res.status(200);
    res.send().end();

})
app.listen(3000, function () {
    console.log("ServerListen Port:3000....")
})
