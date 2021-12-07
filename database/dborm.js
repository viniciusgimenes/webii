//db-orm.js
const Sequelize = require('sequelize');
const sequelize = new Sequelize('webii', 'admin', 'root', {dialect: 'mysql', host: 'localhost', port: 3306});

module.exports = sequelize


