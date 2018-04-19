// 引入events模块
var events = require('events');
// 创建eventEmitter对象
var eventEmitter = new events.EventEmitter();

// 绑定事件及事件的处理程序
eventEmitter.on('console', consoleLog);

// 处罚事件
eventEmitter.emit('console');

function consoleLog() {
  console.log(321);
}