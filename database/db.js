require('dotenv').config();
const Sequelize = require('sequelize');

// Use the provided URL from ElephantSQL
const connectionString = 'postgres://vgpngwfm:xK8zbgiryneYLEUZnIyqqmFLWXH2zjJ8@otto.db.elephantsql.com/vgpngwfm';

// Confirmation message (limit these in production);
console.log('Opening database connection');

// This is our entry point, we instantiate the Sequelize instance accordingly;
const db = new Sequelize(connectionString, {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: false, // Disable logging if you prefer
});

// Export our instance of Sequelize, which will be modified with models;
module.exports = db;