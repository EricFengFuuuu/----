"use strict";

//转码前

var arr = [1, 2, 3, 4, 5];

arr = arr.map(function (item) {
  return item + 1;
});

console.log(arr);