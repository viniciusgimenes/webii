const db = require("../services/db");
const Cliente = require("../entities/Cliente");

async function insertCliente(cliente) {
    const conn = await db.connect();
    const sql = 'INSERT INTO cliente(nome,senha) VALUES (?,?);';
    const values = [cliente.nome, cliente.senha];
    return await conn.query(sql, values);
}

async function selectCliente() {
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM cliente;');
    return rows;
}

async function deleteCliente(id) {
    const conn = await db.connect();
    const sql = 'DELETE FROM cliente where id=?;';
    return await conn.query(sql, [id]);
}

async function updateCliente(id, cliente) {
    const conn = await db.connect();
    const sql = 'UPDATE cliente SET nome=?, senha=? WHERE id=?';
    const values = [cliente.nome, cliente.senha, id];
    return await conn.query(sql, values);
}

module.exports = {selectCliente, insertCliente, deleteCliente, updateCliente}


async function login(cliente) {

    const conn = await db.connect();
    const sql = 'SELECT * FROM cliente WHERE nome =? and senha=?';
    const values = [cliente.nome, cliente.senha];
    const [rows] = await Promise.apply(conn.query(sql, values));

    if (rows.length > 0)
        return rows[0];
    else return null;
}
function isEmptyObject(obj) {
    const teste =!Object.keys(obj).length;
        return teste;

  }