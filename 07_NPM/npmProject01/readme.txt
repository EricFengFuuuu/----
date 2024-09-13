1, npm node package manager,node包管理器,类似于maven，yarn

作用:
1,快速构建npm项目
    执行:nmp init
    执行后会创建一个package.json文件,内容如下:
    {
        "name": "npmproject01",
        "version": "1.0.0",
        "description": "第一个npm项目",
        "main": "index.js",
        "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "fds",
        "license": "ISC"
    }

2,安装依赖
    执行:npm install 依赖名称
    例如:npm install mysql

    安装的模块会被保存在node_modules目录下，可以在package.json中查看
    "dependencies": {
        "http": "^0.0.1-security",
        "mysql": "^2.18.1",
        "redis": "^4.7.0"
    } 

    如果安装模块很慢怎么？
        npm install -g cnpm --registry=https://registry.npm.taobao.org
        cnpm install xxx
        cnpm i jquery vue
    如何运行？
        node xxxx,js运行过程，js是可以省去的终止的命令行：CTRL+C多次执行
    如何下载多个？
        npm install jquery vue redis mysql
        cnpm install jquery vue redis mysql
    下载指定的版本号
        npm instal1xxx@版本号
    具体的版本号：查看官方网址https://www.npmjs.com/package/redis

如何卸载模块呢
    npm uninstall vue jquery