# Node.js模块系统

Node.js提供了简单的模块系统。

<hr>

#### 模块实现

* 一个对象封装到模块中

    ```js
    1、
    module.exports = function() {
      console.log('This is module');
    }
  
    2、
    function hello() {};

    module.exports = hello;
    ```
    
* 多个对象封装到模块中

    ```js
    // hello.js
    function say1(){}
    function say2(){}
    function say3(){}

    exports.say1 = say1;
    exports.say2 = say2;
    exports.say3 = say3;
  
    // app.js
    var hello = require('./hello.js');
    hello.say1();
    hello.say2();
    hello.say3();
    ```