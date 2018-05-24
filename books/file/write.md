# 写入文件

#### 语法

`fs.writeFile(file, data[, options], callback)`

* 参数：
    * file: 文件名
    * data: 写入的数据
    * callback: 回调函数，只包含错误信息的参数，写入失败时返回。
    
* 实例
    ```js
    var fs = require('fs');
    
    fs.writeFile('input.txt', '我是写入！', function(error){
        if(error) {
            return console.error(error);
        }
        
        console.log();
    });
    ```

