# 注册用户

当用户未注册账号时，需要注册。

接口逻辑：接收客户端传输过来的数据，查找该数据用户名是否存在`var selectSql = "select * from userinfo where username = '"+ req.body.username + "'";`。如果用户名存在，则返回已存在提示。如果不存在，触发新增用户的方法，`var addSql = "INSERT INTO `userinfo` (`username`, `password`, `gender`, `age`) VALUES ('" + username + "', '"+ password +"', '" + gender + "', '" + age + "')"`;。

<hr>

### 注册代码如下：`addUser.js`

```js
var express = require('express');
var router = express.Router();
var db = require('./../utils/dbCommon');

router.post('/', function(req, res, next) {
  
  // 查找用户
  var selectSql = "select * from userinfo where username = '"+ req.body.username + "'";
  db.query(selectSql, function(err, rows, fields) {
   if (err) {
     return console.error(err);
   }
   
   if (rows.length > 0) {
     res.send({
       code: 500,
       status: 'error',
       message: '用户名已存在！',
     });
   } else {
     addUser(req, res);
   }
  });
});

/**
 * 新增用户
 * @param req
 * @param res
 */
function addUser(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var gender;
  req.body.gender ? gender = req.body.gender : gender = 0;
  var age = req.body.age;
  console.log('addd --')
  // 新增用户sql
  var addSql = "INSERT INTO `userinfo` (`username`, `password`, `gender`, `age`) VALUES ('" + username + "', '"+ password +"', '" + gender + "', '" + age + "')";

  db.query(addSql, function(err, rows, fields) {
    if (err) {
      res.send({
        code: 500,
        status: 'error',
        message: '添加失败！'
      });
    } else {
      res.send({
        code: 200,
        status: 'success',
        message: '添加成功！',
      });
    }
  });
}

module.exports = router;

```

### 在app.js中添加路由

```js
var addUser = require('./routes/addUser');
app.use('/addUser', addUser);
```

<hr>

### 注册界面

![](/assets/D@DV_7DO7673OI]05E50Q33.png)

<hr>

然后前端直接调用接口`http://localhost:4000/addUser`

