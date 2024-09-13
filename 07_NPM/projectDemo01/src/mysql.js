//导入mysql模块
const mysql = require("mysql");

//创建连接配置
var connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "fds941014",
    database: "test"
})

//创建mysql连接
connection.connect();

//执行sql语句
connection.query("select * from user", function(err, result) {
    if (err) {
        console.log("查询失败");
    } else {
        console.log(result[0]);
    }
});
//关闭连接
connection.end();