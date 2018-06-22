# http

Node.js自带的`http`模块完成了处理`TCP`连接、解析`HTTP`。

* `request`对象封装了HTTP请求，我们调用`request`对象的属性和方法就可以拿到所有HTTP请求的信息。
* `request`对象封装了HTTP响应，我们操作`response`对象的方法，就可以把`HTTP响应`返回给浏览器。

<hr/>

#### 文件服务器

解析`URL`地址，使用`url`模块。

```js
var url = require('url');

console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

// 解析如下
Url {
  protocol: 'http:',
  slashes: true,
  auth: 'user:pass',
  host: 'host.com:8080',
  port: '8080',
  hostname: 'host.com',
  hash: '#hash',
  search: '?query=string',
  query: 'query=string',
  pathname: '/path/to/file',
  path: '/path/to/file?query=string',
  href: 'http://user:pass@host.com:8080/path/to/file?query=string#hash' }

```