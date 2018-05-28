# 撸一个爬虫系统

<hr>

#### 简单爬虫 -- 电影列表

##### 技术栈

* cheerio: `npm install cheerio --save`
* iconv-lite: `npm install iconv-lite--save`

##### 开始

```js
var cheerio = require('cheerio');
var http = require('http');
var iconv = require('iconv-lite');

var url = 'http://www.ygdy8.net/html/gndy/dyzz/index.html';
```