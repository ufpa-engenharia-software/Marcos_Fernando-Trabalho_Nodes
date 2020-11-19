const bodyParser = require('body-parser')
const rp = require('request-promise')
const req = require('request')
module.exports = app => {
	app.get('/endereco/:cep', (req, res) => {
		var cep = req.params.cep;	
		const getViaCep = {
           uri: 'https://viacep.com.br/ws/'+cep+'/json/',
           method: 'GET'            
      }
        
		rp(getViaCep).then(function (parsedBody) {
                res.send(parsedBody);
            }).catch(function (err) { 
                res.send("ERRO");
            });
	});
 
  const Endereco = app.models.endereco;
  app.get("/endereco", (req, res) => {
    res.status(200).send('OK')
    /*Endereco.findAll(
      {}, (retorno) => 
          {
            res.json({endereco:retorno})
          }
    );*/
  });

  var jsonParser = bodyParser.json()
	app.post("/endereco", jsonParser, function(req, res) {
		
           var idEndereco = req.body.idEndereco
           var logradouro = req.body.logradouro
           var numero = req.body.numero
           var complemento = req.body.complemento
           var bairro = req.body.bairro
           var estado = req.body.estado
           var moradia = req.body.moradia;

			res.json(
				{
					 idEnderecoRecebido: idEndereco,
           logradouroRecebido: logradouro,
           numeroRecebido: numero,
           complementoRecebido: complemento,
           bairroRecebido: bairro,
           estadoRecebido: estado,
           moradiaRecebido: moradia,
				}
			)
	});

};