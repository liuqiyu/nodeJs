/**
 * main2
 * create by lqy 2018/4/19
 */

var fs = require('fs');

var data = '菜鸟教程官网地址：www.runoob.com';


var data1 = fs.readFileSync('input.txt');

console.log(data1.toString());

var writerStream = fs.createWriteStream('input.txt');

// 使用 utf8 编码写入数据
writerStream.write(data,'UTF8');

// 标记文件末尾
writerStream.end();

// 处理流事件 --> data, end, and error
writerStream.on('finish', function() {
  console.log("写入完成。");
});

writerStream.on('error', function(err){
  console.log(err.stack);
});

console.log("程序执行完毕");