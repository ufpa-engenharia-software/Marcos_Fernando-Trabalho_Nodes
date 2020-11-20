const bodyParser = require('body-parser')
module.exports = app => {
  const Usuario = app.models.usuario;
  app.get("/usuario", (req, res) => {
    res.status(200).send('OK')
    /*Usuario.findAll(
      {}, (retorno) => 
          {
            res.json({usuario:retorno})
          }
    );*/
  });

  var jsonParser = bodyParser.json()
	app.post("/usuario", jsonParser, function(req, res) {
		
			var idUsuario = req.body.idUsuario
			var nomeUsuario = req.body.nomeUsuario
			var data = req.body.data_de_nascimento
			var email = req.body.email
			var login = req.body.login
			var senha = req.body.senha;

			res.status(200).send('OK');			
	});

};