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
     port: '3306',
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
var sql = 'INSERT INTO `user` (`id`, `name`, `gender`, `age`, `province`, `city`, `area`, `address`) VALUES ('2', 'sad', '2', '32', '打打', '3123', '3213', '1')';
```

#### 更新数据

...

#### 删除数据

```js
var delSql = 'DELETE FROM userwhere id=2';
```







