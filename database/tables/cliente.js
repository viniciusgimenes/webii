//cliente.js
const Sequelize = require('sequelize');
const database = require('../db-orm');

const Cliente = database.define('cliente', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: Sequelize.INTEGER
    },
    endereco: Sequelize.STRING
});

(async () => {
    try {
        await database.sync();
        console.log("Tabela de clientes criada");
    } catch (error) {
        console.log("Erro ao criar tabela de clientes criada");
    }
})()

module.exports = Cliente;
