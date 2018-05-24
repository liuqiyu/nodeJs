# 操作目录


## 创建目录

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



## 读取目录

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
    
    
## 删除目录

#### 语法

`fs.readdir(path, callback)`
不可删除不为空目录

* 参数：
    * path: 文件
    * callback： 回调 -> 错误参数
    
* 实例
    ```js
    var fs = require('fs');
    
    fs.rmdir('./../demo1', function(error, files){
        if(error){
            return console.error(error);
        }
        console.log('目录删除完成');
    })
    ```

    
    

