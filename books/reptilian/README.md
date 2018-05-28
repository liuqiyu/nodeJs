# 撸一个爬虫系统

<hr>

#### 1、简单爬虫 -- 电影列表

##### 技术栈

* cheerio: `npm install cheerio --save`
  * Node.js 版的jQuery
* iconv-lite: `npm install iconv-lite--save`
  * 解决爬取gb2312网页出现乱码

##### 开始

```js
var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');

var url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html';

http.get(url, function(res) {
  var chunks = [];
  
  res.on('data', function(chunk) {
    chunks.push(chunk);
  });
  
  res.on('end', function() {
    var titles = [];
  
    var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
    var $ = cheerio.load(html, {decodeEntities: false});
    $('.ulink').each(function (idx, element) {
      var $element = $(element);
      titles.push({
        title: $element.text()
      })
    })
    console.log(titles);
  });
})
```