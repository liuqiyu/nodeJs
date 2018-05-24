# 读取目录文件

#### 语法

`fs.readdir(path, callback)`

* 参数：
    * path: 文件
    * callback： 回调 -> 错误参数, files -> 文件列表
    
* 实例
    ```js
    var fs = require('fs');
    
    fs.readdir('input.txt', function(error, files){
        if(error){
            return console.error(error);
        }
        
        files.forEach(function(file){
            console.log(file);
        })
    })
    ```

