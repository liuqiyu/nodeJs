# 删除文件

#### 语法

`fs.unlink(path, callback)`

* 参数：
    * path: 文件
    * callback： 回调，错误参数
    
* 实例
    ```js
    var fs = require('fs');
    
    fs.unlink('input.txt', function(error){
        if(error){
            return console.error(error);
        }
        
        console.log('文件查出成功！');
    })
    ```

