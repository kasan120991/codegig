const Sequelize = require('sequelize');

module.exports = new Sequelize('codegigs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});