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


// 输出
开始连接
连接中。。。
连接结束
```

### api

* addListener(event, listener)
为指定事件添加一个监听器到监听器数组的尾部。

* on(event, listener)
为指定事件注册一个监听器，接受一个字符串 event 和一个回调函数。

* once(event, listener)
单次监听

* removeListener(event, listener)
移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。

* removeAllListeners([event])
移除所有的监听器，如果指定事件，则移除指定事件的所有监听器。

* setMaxListeners(n)
默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。

* emit(event)
按参数的顺序执行每个监听器，如果事件有注册监听返回 true，否则返回 false。

---

* listenerCount(emitter, event)
返回指定事件的监听器数量。

```js
var events = require('events');
var eventEmitter = new events.EventEmitter();

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
```

