# Modular 模块

##### 入门实例1

```js
// main.js
var hello = require('./hello');
hello.world();

// hello.js
exports.world = function() {
  console.log('hello world')
}
node main
// hello world
```

Node.js提供了exports和require两个对象，其中exports是模块公开的接口。require用于从外部获取的一个模块的接口。即获取模块的exports对象。

##### 入门实例2

```js
// hello2.js
function hello2() {
  var name;
  
  this.setName = function(thyName) {
    name = thyName
  };
  
  this.sayHello  = function() {
    console.log('Hello ' + name);
  };
}

module.exports = hello2

// main2.js
var hello2 = require('./hello2');

var hello = new hello2();
console.log(hello)
hello.setName('刘岂宇')
hello.sayHello()
```

