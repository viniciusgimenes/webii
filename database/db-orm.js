//db-orm.js
const Sequelize = require('sequelize');
// nome_do_banco, nome_do_usuario, senha_do_usuario
const sequelize = new Sequelize('webii', 'admin', 'root', {dialect: 'mysql', host: 'localhost', port: 3306});

module.exports = sequelize


