简介:
    ES6的某些高级语法在浏览器环境甚至是Node.js环境中无法执行。
    Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行执行。
    这意味着，你可以现在就用 ES6 编写程序，而不用担心现有环境是否支持。

安装Babel:
    npm install -g babel-cli
    查看版本
    babel --version

配置.babelrc
    presets:字段设定转码规则
    plugins:字段设定转换器
    {
        "presets": ["es2015"],
        "plugins": []
    }

安装转换器
    npm install --save-dev babel-preset-es2015


转码指定文件输出到指定目录
    mkdir dist

    babel src/example.js -o dist/example.js


整个目录转码
    mkdir dist2
    babel src -d dist2

自定义脚本
    
  "scripts": {
    "build": "babel src -d dist"
  },

执行转码
    mkdir dist
    npm run build