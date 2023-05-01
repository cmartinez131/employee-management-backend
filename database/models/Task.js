const Sequelize = require('sequelize');
const db = require('../db');

const Task = db.define("task", {

  userAssigned: {
    type: Sequelize.INTEGER,
    allowNull: true
  },

  description: {
    type: Sequelize.STRING,
    allowNull: false
  },

  priorityLevel: {
    type: Sequelize.STRING,
    allowNull: false
  },

  completedStatus: {
    type: Sequelize.BOOLEAN
  },
});

module.exports = Task;