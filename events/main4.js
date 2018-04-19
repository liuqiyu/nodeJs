/**
 * main4
 * create by lqy 2018/4/19
 */

var events = require('events');

var eventEmitter = new events.EventEmitter();

eventEmitter.on('aa', func);

function func() {
  console.log(123)
}

setTimeout(function(){
  eventEmitter.emit('aa')
}, 5000)