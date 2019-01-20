var express = require("express");
var app = express();
var bodyParser = require("body-parser")
var port = 5000;
var API_KEY = "1ea91a6d69e150db9a3378e254a22349"

const con = require("./controllers/controllers")
app.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}/weather/:city/:country`,(req,res))
app.listen(port,()=>console.log(`Listening on ${port}`))