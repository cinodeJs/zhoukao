var express = require('express')

var mysql = require('mysql')

var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))

var Pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"ci991227",
    database:"kecheng",
    port:3306
})

app.post('/',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    Pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err)
            return
        }
        var sql = 'select * from ke'

        connection.query(sql,function(err,data){
            if (err) {
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
    
})

app.post('/add',function(req,res){
    res.setHeader('Access-Control-Allow-Origin', '*')
    Pool.getConnection(function (err,connection) {
        if (err) {
            console.log(err)
            return
        }
        var sql = `INSERT INTO ke (kecheng,shijian,riqi) VALUES ('${req.body.kecheng }','${req.body.shijian}','1')`

        connection.query(sql,function(err,data){
            if (err) {
                console.log(err)
                return
            }
            res.send(data)
            connection.end()
        })
    })
    
})

app.listen(8000,function(){
    console.log('ok')
})