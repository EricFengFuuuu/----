"use strict";

//CommonJS规范
//计算工具类

var sum = function sum(a, b) {
    return a + b;
};

var sub = function sub(a, b) {
    return a - b;
};

var mul = function mul(a, b) {
    return a * b;
};

var di = function di(a, b) {
    return a / b;
};

//导出模块
module.exports = {
    sum: sum,
    sub: sub,
    mul: mul,
    di: di

    //名字一样可以简写
    // module.exports = {
    //     sum,
    //     sub,
    //     mul,
    //     di
    // }

};