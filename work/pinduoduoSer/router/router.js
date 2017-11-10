var axios = require("axios")
var express = require("express")
var router = express()
var config = require("../../config.json")
console.log(config)
router.get("/api/kaiqiang", function (req, res) {
    axios
        .get(config.api.kaiqiang)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/nvzhuang", function (req, res) {
    axios
        .get(config.api.nvzhuang)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/xiezi", function (req, res) {
    axios
        .get(config.api.xiezi)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/yifu", function (req, res) {
    axios
        .get(config.api.yifu)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/riyongpin", function (req, res) {
    axios
        .get(config.api.riyongpin)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/dianxin", function (req, res) {
    axios
        .get(config.api.dianxin)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/dianqi", function (req, res) {
    axios
        .get(config.api.dianqi)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/chuangshangyongpin", function (req, res) {
    axios
        .get(config.api.chuangshangyongpin)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/shuiguoshipin", function (req, res) {
    axios
        .get(config.api.shuiguoshipin)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/tongzhuangErtongpingpin", function (req, res) {
    axios
        .get(config.api.tongzhuangErtongpingpin)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/jinkou", function (req, res) {
    axios
        .get(config.api.jinkou)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/mianbuhuli", function (req, res) {
    axios
        .get(config.api.mianbuhuli)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.get("/api/changjiazhixiaoJianjia", function (req, res) {
    axios
        .get(config.api.changjiazhixiaoJianjia)
        .then(function (data) {
            res.send(JSON.stringify(data.data))
        })
})
router.post("/api/huoquyanzhentupian", function (req, res) {
    var body = ""
    req.on("data", function (str) {
        body += str
    })
    req.on("end", function () {
        let axio = axios.create({ headers: { "Content-Type": "application/json; charset=UTF-8" } })
        var arr = body.split("&")
        var obj = {}
        arr.forEach((v, i) => {
            obj[v.split("=")[0]] = v.split("=")[1]
        })
        axio
            .post(config.api.huoquyanzhentupian, JSON.stringify(obj))
            .then(response => {
                res.send(response.data)
            })
    })
})
router.post("/api/fasongduanxinyanzhenma", function (req, res) {
    console.log(1)
    var body = ""
    req.on("data", function (str) {
        body += str
    })
    req.on("end", function () {
        let axio = axios.create({ headers: { "Content-Type": "application/json; charset=UTF-8" } })
        var arr = body.split("&")
        var obj = {}
        arr.forEach((v, i) => {
            obj[v.split("=")[0]] = v.split("=")[1]
        })
        console.log(obj)
        axio
            .post(config.api.fasongduanxinyanzhenma, JSON.stringify(obj))
            .then(response => {
                console.log(response)
                res.send(response.data)
            })
    })
})
module.exports.router = router