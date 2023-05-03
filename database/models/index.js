// register models, set up associations between tables, and generate barrel file for the models;

//import 'Employee' and 'Task' models
const Task = require('./Task');
const Employee = require('./Employee');

//task can only have one employee 
//employee can have many tasks
Task.belongsTo(Employee);
Employee.hasMany(Task);



module.exports = {
  Task,
  Employee
};