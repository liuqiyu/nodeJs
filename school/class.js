var student = require('./student')
var teacther = require('./teacther')

// teacther.add('Lqy')

function add(teacherName, students) {
  teacher.add(teacherName)
  
  students.forEach(function(item, index) {
    student.add(item)
  })
}

exports.add = add