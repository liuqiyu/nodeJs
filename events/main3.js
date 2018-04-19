/**
 * main3
 * create by lqy 2018/4/19
 */

var fs = require('fs');

fs.readFile('input.txt', function(err, data){
  console.log(err)
  console.log(data.toString())
})

console.log("程序执行完毕");