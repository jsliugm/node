var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://192.168.50.5:27017/runoob";
MongoClient.connect(url,{useNewUrlParse:true},function (err,db) {
    if(err) throw err;
    console.log("数据库已创建！");
    db.close();
});