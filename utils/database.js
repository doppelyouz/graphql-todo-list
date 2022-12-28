const Sequelive = require('sequelize');

const DB_NAME = 'node-todo';
const USER_NAME = 'doppel';
const PASSWORD = '12345678';

const sequelize = new Sequelive(DB_NAME, USER_NAME, PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize;