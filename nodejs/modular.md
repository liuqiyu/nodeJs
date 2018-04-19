# Modular 模块

##### 入门实例1

```js
// main.js
var hello = require('./hello');
hello.world();

// hello.js
var hello = require('./hello');
hello.world();
```