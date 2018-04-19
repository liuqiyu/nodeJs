# My First Server

### 开启第一个服务

* 步骤一、引入 required 模块

我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http，实例如下:

`var http = require("http");`

* 步骤二、创建服务器

接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 3000端口。 函数通过 request, response 参数来接收和响应数据。

```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```