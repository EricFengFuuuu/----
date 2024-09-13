//导入模块
const http = require("http");

//创建服务器，监听端口8888
const server = http.createServer((req, res) => {
        //设置响应头
        res.writeHead(200, {
            "Content-Type": "text/html;charset=utf-8"
        });
        //设置响应体
        res.end("<h1>hello world</h1>");
    
}).listen(8888);

