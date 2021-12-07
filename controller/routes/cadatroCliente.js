const seguranca = require('../../model/components/seguranca');
const clienteBanco = require('../../model/repositories/cliente-bd');
var ClienteLogin = require("../../model/entities/Cliente");
module.exports = function (app) {

    app.post('/cadastro/cliente/salvar', (req, res) => {
        try {
            clienteBanco.insertCliente({nome: req.body.nome, senha: seguranca.ocultarSenha(req.body.senha)});
            res.render('Cadastro', {title: 'Cadastro', mensagem: 'Cliente Cadastrado com sucesso'});
        } catch (error) {
            res.render('Cadastro', {title: 'Cadastro', mensagem: 'Erro no cadastrado'});
        }

    });


    /* GET login page. */
    app.get('/cliente/cadastro', (req, res) => {
        res.render('cliente/index', {title: 'Cadastro', mensagem: null});
    });
}


/*const { response } = require("express");

const seguranca = require('../../model/components/seguranca');
const clienteBanco = require('../../model/repositories/cliente-bd');
module.exports = function(app){
    
  var HomeController = {
  index: function (req, res) {
    res.render('login');
},
login: function (req, res) {
    var email = req.body.cliente.email
        , nome = req.body.cliente.nome;
    if (email && nome) {
        var cliente = req.body.cliente;
        cliente['contatos'] = [];
        req.session.cliente = cliente;
        res.redirect('/contatos');
    } else {
        res.redirect('/');
    }
},
logout: function (req, res) {
    req.session.destroy();
    res.redirect('/');
}
};
return HomeController;
*/

/*app.get('/', function(req, res){
      res.send("bem vindo");
    });

    app.get('/login', function(req, res){
     res.render('login', {message: null});
      });

      app.post('/login/executar', function(req, res){
         console.log(req.body);
         console.log("oooooooo");
         console.info(req.body.nome);
           clienteBanco.insertCliente(req.params.nome,seguranca.ocultarSenha( req.params.senha) );
           res.send("Eba!!!");
         });
  }*/