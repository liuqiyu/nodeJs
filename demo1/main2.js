var fs = require('fs');

fs.readFile('input.txt', function(err, data){
  console.log(err)
  console.log(data)
  if (err) {
    return console.error(err);
    console.log(data.toString() + '12');
  } else {
    console.log(data.toString() + '31');
  }
});

console.log("程序执行结束!");