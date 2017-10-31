const express = require('express');
const app = express();

app.get('/',function (req,res) {
    res.sendfile('index.html');
})
app.listen( 3000,function () {
    console.log("ServerListen Port:3000....")
})