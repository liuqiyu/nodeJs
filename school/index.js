var Klass = require('./class')



exports.add = function(klasses) {
  klasses.forEach(function(item, index) {
    var _klass = item
    var teacherName = item.teacherName
    var students = item.students
  
    Klass.add(teacherName, students)
  })
}