1,什么是Webpack
Webpack 是一个前端资源加载/打包工具。
它将根据模块的依赖关系进行静态分析，然后将这些模块按照指定的规则生成对应的静态资源。

从图中我们可以看出，Webpack 可以将多种静态资源 js、css、less 转换成一个静态文件，减少了页面的请求。

2,安装Webpack
npm install -g webpack webpack-cli
webpack -v

3,js打包
webpack目录下创建配置文件webpack.config.js
