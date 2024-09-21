//CommonJS规范
//计算工具类

const sum = function(a,b){
    return a+b
}

const sub = function(a,b){
    return a-b
}

const mul = function(a,b){
    return a*b
}

const di = function(a,b){
    return a/b
}

//导出模块
module.exports = {
    sum: sum,
    sub: sub,
    mul: mul,
    di: di,
}

//名字一样可以简写
// module.exports = {
//     sum,
//     sub,
//     mul,
//     di
// }