var axios = require("axios")
var express = require("express")
var router = require("./router/router.js")
var config = require("../config.json")
var app = express()
app.all("*",function(req,res,next){
    next()
})
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})
app.use(router.router)
app.listen(config.port,function(){
    console.log("localhost:"+config.port)
})