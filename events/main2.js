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