const Sequelize = require("sequelize");
module.exports = new Sequelize('DBNAME', 'USERNAME', 'PASSWORD', {
    host: 'localhost',
    dialect: 'postgres',
  });