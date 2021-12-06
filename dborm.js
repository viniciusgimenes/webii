//db-orm.js
const Sequelize = require('sequelize');
const {connect} = require("./dborm");
const sequelize = new Sequelize('webii', 'root', 'root', {dialect: 'mysql', host: 'localhost', port:3306});

async function connectORM(){
    //Confirma se está conecetado com a variavel global
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:root@localhost:3306/webii");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

module.exports = {connect}

module.exports = {sequelize}


