"use strict";

var _userApi = require("./es6/userApi.js");

var _userApi2 = require("./es6/userApi2.js");

var _userApi3 = _interopRequireDefault(_userApi2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//引入模块-ES6

(0, _userApi.getUser)();
(0, _userApi.saveUser)();

_userApi3.default.getUser();
_userApi3.default.saveUser();