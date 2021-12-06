const express = require('express');
const session = require('express-session');
//npm i express-session
const expressSession = require('express-session');
//npm install consign 
var consign = require('consign');

const app = express();
// toda vez será criado um código para a sessão
app.use(session({secret:'11111111111111111'}));

//mpn install body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')
var path = require('path');
app.set('views', path.join(__dirname ,'/view/usuario'));


consign().include('controller/routes').into(app);


app.listen(8081, function(){
    console.info("Servidor funcionando");
})


/*
//npm install consign 
var consign = require('consign');



//npm i --save body-parser
bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
var path = require('path');

app.set('views', path.join(__dirname ,'/view/usuario'));
//Embedded JavaScript templating (EJS) e é uma linguagem de modelagem     
//simples que permite gerar marcação HTML com JavaScript simples
app.set('view engine', 'ejs');
//faz o carregamento automático dos scripts do nosso projeto.
consign().include('controller/routes').into(app);





app.listen(8081, function(){
    console.info("Servidor funcionando");
})




/*   const usuario = require("./usuario-bd");
   console.log('Começou!');

   console.log('SELECT * FROM USUARIO');
   const usuarios = await usuario.selectUsuario();
   console.log(usuarios);

   console.log('INSERT INTO USUARIO');
   const result = await usuario.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
   console.log(result);

   console.log('DELETE FROM  usuario');
   const result3 = await usuario.deleteUsuario(2);
   console.log(result3);

   console.log('UPDATE USUARIO');
   const result2 = await usuario.updateUsuario(3, {nome: "Zé José", senha:"hhjdhjjhsd7368"});
   console.log(result2);*/


//index.js
/*(async () => {
    const database = require('./dborm');
    const Cliente = require('./cliente');
    const seguranca = require('./seguranca');

    console.log(seguranca.ocultarSenha(1001100));

  /*  console.log(' Criar tabela ==================================================');
    const resultado = await database.sequelize.sync();
    console.log(resultado);



    console.log(' Criar um registro ==================================================');
    const inserirCliente = await Cliente.create({
        nome: 'João da Silva',
        idade: 10,
        endereco: 'Rua Paulista, n 10000'
    })
    console.log(inserirCliente);


    console.log('buscar um registro ==================================================');
    const cliente = await Cliente.findByPk(1);
    console.log(cliente);


    console.log(' Alterar um registro ==================================================');
    const clienteAlterar = await Cliente.findByPk(1);
    clienteAlterar.nome = "Icaro Freitas"
    const resultadoSave = await clienteAlterar.save();
    console.log(resultadoSave);


    console.log('buscar todos os registros ==================================================');
    const clientes = await Cliente.findAll();
    console.log(clientes);


    console.log('Deletar o registro ==================================================');
    const clienteDelete = await Cliente.findByPk(1);
    clienteDelete.destroy();*/

/*})();*/





