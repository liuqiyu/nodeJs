# stream流

`stream`是Node.js提供又一个仅在服务区端可用的模块，目的是支持'流'这种数据结构。

什么是流？流是一种抽象的数据结构。比如键盘侠敲键盘时，可以把每一个字符连起来，看成是字符流 -- 标准输入流(stdin)。如果把输入的字符显示在显示屏当中，就是 -- 标准输出流(stdout)。

流的特点是有序的，必须一次读取，一次写入。

* Stream有四种流类型
    * Readable - 可读操作
    * Writable - 可写操作
    * Duplex - 可读可写操作
    * Transform - 操作被写入数据，然后读出结果,比如`zlib.createDeflate()`（数据压缩/解压）。
    
* 所有的对象都是EventEmitter的实例。常用的事件有：
    * data - 有数据可读取时触发
    * end - 没有更多数据可读触发
    * error - 在接受和写入过程中发生错误时触发
    * finish - 所有数据已被写入道底层时触发

<hr/>

### 一、文件流读取

**fs.createReadStream()**

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

### 二、文件流写入

**fs.createWriteStream()**

```js
var fs = require('fs');

var data = '我是你的版本';

var writerStream = fs.createWriteStream('sample.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function() {
  console.log('写入完成！')
});

writerStream.on('error', function(error) {
  console.log('error', error)
});

console.log('程序执行完毕');

// 程序执行完毕
// 写入完成！
```

<hr/>

### 三、管道与链式流

#### 1、压缩文件

```js
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream('input.txt.gz'));

console.log('文件压缩完成')

// 生成`input.txt.gz`压缩文件
```

#### 2、解压文件

```js
var fs = require('fs');

var zlib = require('zlib');

fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
      .pipe(fs.createWriteStream('input2.txt'));

console.log('文件解压完成')

// 生成`input2.txt`文件
```









