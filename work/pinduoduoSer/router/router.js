var axios = require("axios")
var express = require("express")
var router = express()
var config = require("../../config.json")
console.log(config)
router.get("/api/kaiqiang", function (req, res) {
    axios
        .get(config.api.kaiqiang)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/nvzhuang", function (req, res) {
    axios
        .get(config.api.nvzhuang)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/xiezi", function (req, res) {
    axios
        .get(config.api.xiezi)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/yifu", function (req, res) {
    axios
        .get(config.api.yifu)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/riyongpin", function (req, res) {
    axios
        .get(config.api.riyongpin)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/dianxin", function (req, res) {
    axios
        .get(config.api.dianxin)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/dianqi", function (req, res) {
    axios
        .get(config.api.dianqi)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/chuangshangyongpin", function (req, res) {
    axios
        .get(config.api.chuangshangyongpin)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/shuiguoshipin", function (req, res) {
    axios
        .get(config.api.shuiguoshipin)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/tongzhuangErtongpingpin", function (req, res) {
    axios
        .get(config.api.tongzhuangErtongpingpin)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/jinkou", function (req, res) {
    axios
        .get(config.api.jinkou)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/mianbuhuli", function (req, res) {
    axios
        .get(config.api.mianbuhuli)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/changjiazhixiaoJianjia", function (req, res) {
    axios
        .get(config.api.changjiazhixiaoJianjia)
        .then(function(data){
            res.send(JSON.stringify(data.data))
        })
})
module.exports.router = router