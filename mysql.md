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

#### 查询数据

```js
// 更换上面sql语句

var sql = 'select * from user';
```

#### 插入语句

```js
var sql = xampp\htdocs\Node\mysql>node app
The solution is:  OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }

```