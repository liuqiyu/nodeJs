# stream流

`stream`是Node.js提供又一个仅在服务区端可用的模块，目的是支持'流'这种数据结构。

什么是流？流是一种抽象的数据结构。比如键盘侠敲键盘时，可以把每一个字符连起来，看成是字符流 -- 标准输入流(stdin)。如果把输入的字符显示在显示屏当中，就是 -- 标准输出流(stdout)。

流的特点是有序的，必须一次读取，一次写入。

* Stream有四种流类型
    * Readable - 可读操作
    * Writable - 可写操作
    * Duplex - 可读可写操作
    * Transform - 操作被写入数据，然后读出结果
    
* 所有的对象都是EventEmitter的实例。常用的事件有：
    * data - 有数据可读取时触发
    * end - 没有更多数据可读触发
    * error - 在接受和写入过程中发生错误时触发
    * finish - 所有数据已被写入道底层时触发

<hr/>

##### 文件流读取

*fs.createReadStream()*

```js
var fs = require('fs');

var data = '';

var readerStream = fs.createReadStream('sample.txt');

readerStream.setEncoding('UTF8');

readerStream.on('data', function(chunk) {
  data += chunk;
});

readerStream.on('end', function() {
  console.log(data);
});

readerStream.on('error', function(error) {
  console.log('error', error)
});

console.log('程序执行完毕！');

// 程序执行完毕！
// 123321
```

<hr/>



