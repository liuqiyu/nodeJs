# 操作数据库

### 安装

`cnpm install mysql`

### 连接数据库

```js
// app.js
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    darabase: 'test'
});

conection.connect(); // 创建连接

var sql = '---------';
connection.query(sql, function(eror, results, fields) {
    if (error) throw error;
    console.log(result);
})

// node app.js
```