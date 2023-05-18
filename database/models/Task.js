const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  title: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priority: {
    type: Sequelize.STRING,
  },

  completion: {
    type: Sequelize.STRING
  },

  // isOpen: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: true
  // }

});

module.exports = Task;