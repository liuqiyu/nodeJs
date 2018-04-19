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