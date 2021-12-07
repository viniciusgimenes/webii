const seguranca = require('../../model/components/seguranca');
const clienteBanco = require('../../model/repositories/cliente-bd');
module.exports = function (app) {
    app.post('/cadastro/cliente/salvar', async (req, res) => {
        clienteBanco
            .insertCliente({nome: req.body.nome, senha: seguranca.ocultarSenha(req.body.senha)})
            .then(() => {
                console.log('Sucesso')
                res.render('Cadastro', {title: 'Cadastro', mensagem: 'Cliente Cadastrado com sucesso'});
            })
            .catch(() => {
                console.log('Erro')
                res.render('Cadastro', {title: 'Cadastro', mensagem: 'Erro no cadastrado'});
            });
    });

    app.get('/produto/cadastro', (req, res) => {
        res.render('produto/index', {title: 'Cadastro', mensagem: null});
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