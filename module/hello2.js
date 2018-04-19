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