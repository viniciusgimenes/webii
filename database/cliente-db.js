//index.js
(async () => {
    const database = require('./dborm');
    const Cliente = require('./cliente');

    try {
        const resultado = await database.sync();
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
})();