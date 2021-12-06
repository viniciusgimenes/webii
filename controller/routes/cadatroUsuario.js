const seguranca = require('../../model/components/seguranca');
const usuarioBanco = require('../../model/repositories/usuario-bd');
var UsuarioLogin = require("../../model/entities/Usuario");
module.exports = function(app){

app.post('/cadastro/usuario/salvar', (req, res) => {
   try {
    usuarioBanco.insertUsuario({nome: req.body.nome , 
      senha: seguranca.ocultarSenha( req.body.senha)});
    res.render('Cadastro', { title: 'Cadastro', mensagem: 'Usuário Cadastrado com sucesso' });
   } catch (error) {
     console.log(error);
    res.render('Cadastro', { title: 'Cadastro', mensagem: 'Erro no cadastrado' });
   }
  
  });

/* GET login page. */
app.get('/cadastro', (req, res) => {
  res.render('Cadastro', { title: 'Cadastro', mensagem: null });
});
}










/*const { response } = require("express");

const seguranca = require('../../model/components/seguranca');
const usuarioBanco = require('../../model/repositories/usuario-bd');
module.exports = function(app){
    
  var HomeController = {
  index: function (req, res) {
    res.render('login');
},
login: function (req, res) {
    var email = req.body.usuario.email
        , nome = req.body.usuario.nome;
    if (email && nome) {
        var usuario = req.body.usuario;
        usuario['contatos'] = [];
        req.session.usuario = usuario;
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
           usuarioBanco.insertUsuario(req.params.nome,seguranca.ocultarSenha( req.params.senha) );
           res.send("Eba!!!");
         });
  }*/