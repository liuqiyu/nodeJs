# 创建目录

#### 语法

`fs.mkdir(path[, mode], callback)`

* 参数：
    * path: 文件
    * mode - 设置目录权限，默认为 0777。
    * callback： 回调，错误参数
    
* 实例
    ```js
    var fs = require('fs');
    
    fs.mkdir('./dd', function(error){
        if(error){
            return console.error(error);
        }
        console.log('目录创建成功！');
    });
    ```

