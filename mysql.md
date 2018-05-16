# 操作数据库

### 安装

`cnpm install mysql`

### 连接数据库

```js
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    darabase: 'test'
});

conection.connect();
```