# 手摸手撸一个后台用户系统


着手做一个用户管理系统。使用`node.js`开发后台，提供接口,前台使用`vue`。闲话少说，就是干...

### 目录

* 技术栈
* 安装`express-generator`express应用生成器

<hr>

### 技术栈

* 前端: `vue`
* 后端：`node.js`

<hr>

### 安装`express-generator`express应用生成器

```
npm install express-generator -g

express

npm install 

npm start
```

默认安装后，可以在浏览器访问`http://localhost:3000`


### 使用`sql`,并封装方法

* 安装 `npm install mysql --save`

* 封装方法: `dbCommon.js`
```js
/**
 * 封装 `mysql`连接
 * @type {{}}
 */
 
 var db = {};
 var mysql = require('mysql');
 var pool = mysql.createPool({
   connectionLimit : 10,
   host            : 'localhost',
   user            : 'root',
   password        : '',
   database        : 'test'
 });
 
 db.query = function(sql, callback) {
   if (!sql) {
     callback();
     return;
   }
   
   pool.query(sql, function(err, rows, fields) {
     if (err) {
       console.log(err);
      callback(err, null);
      return;
     }
   })
 }
```





