const express = require('express');
const app = express();

app.get('/',function (req,res) {
    res.send(JSON.stringify([
        {
            "id": "1005@158.85.187.61",
            "name": "1234",
            "type": "videosipgw"
        },
        {
            "id": "address2@sip.domain.com",
            "name": "Some room name2",
            "type": "videosipgw"
        }
    ]));
})
app.listen( 3000,function () {
    console.log("ServerListen Port:3000....")
})