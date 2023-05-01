// register models, set up associations between tables, and generate barrel file for the models;

//delete these two
const Course  = require('./Course');
const Instructor  = require('./Instructor');

Course.belongsTo(Instructor);
Instructor.hasMany(Course);

//import 'Employee' and 'Task' models
const Task = require('./Task');
const Employee = require('./Employee');

//task can only have one employee 
//employee can have many tasks
Task.belongsTo(Employee);
Employee.hasMany(Task);



module.exports = {
  Course,
  Instructor,
  Task,
  Employee
};