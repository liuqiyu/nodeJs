/**
 * main5
 * create by lqy 2018/4/19
 */

var events = require('events');

var eventEmitter = new events.EventEmitter();

function listen1 () {
  console.log('listen 1')
}

function listen2 () {
  console.log('listen 2')
}

eventEmitter.on('connect', listen1)
eventEmitter.addListener('connect', listen2)
eventEmitter.addListener('bbb', listen2)


var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
console.log(eventListeners + " 个监听器监听连接事件。");


eventEmitter.emit('connect');


// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connect', listen2);
console.log("listen2 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connect');
console.log(eventListeners + " 个监听器监听连接事件。");

eventEmitter.removeAllListeners('connect')
eventEmitter.emit('bbb');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'bbb// 绑定 connection 事件，处理函数为 listener1 \n' +
  'eventEmitter.addListener(\'connection\', listener1);\n' +
  '\n' +
  '// 绑定 connection 事件，处理函数为 listener2\n' +
  'eventEmitter.on(\'connection\', listener2);');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");