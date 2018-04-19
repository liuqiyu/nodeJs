# Events 事件循环

Node.js `是单进程单线程应用程序`，但是通过事件和回调支持并发，所以性能非常高。

Node.js 的每一个 API 都是`异步`的，并作为一个`独立线程运行`，使用`异步函数`调用，并处理并发。

Node.js 基本上所有的事件机制都是用`设计模式中观察者模式`实现。

Node.js 单线程类似进入一个while(true)的事件循环，直到没有事件观察者退出，每个异步事件都生成一个事件观察者，如果有事件发生就调用该回调函数.

### 实例

```js
var events = require('events');

var eventEmitter = new events.EventEmitter();

var connect = function func(){
    console.log('开始连接');
    eventEmitter.emit('connect2');
}

var connect2 = function func1() {
    console.log('连接中。。。');
}

eventEmitter.on('connent1', connect);
eventEmitter.on('connect2', connect2);

eventEmitter.emit('connent1');

console.log('连接结束');



```