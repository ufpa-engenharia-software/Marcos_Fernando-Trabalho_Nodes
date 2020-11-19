const bodyParser = require('body-parser')
module.exports = app => {
  const Pedido = app.models.pedido;
  app.get("/pedido", (req, res) => {
    Pedido.findAll(
      {}, (retorno) => 
          {
            res.json({pedido:retorno})
          }
    );
  });

  var jsonParser = bodyParser.json()
	app.post("/usuario", jsonParser, function(req, res) {
		
      var idUsuario = req.body.idUsuario
			var idEndereco = req.body.idEndereco
 			var carrinho = req.body.carrinho;

			res.json(
				{
					idUsuarioRecebido: idUsuario,
          idEnderecoRecebido: idEndereco,
          carrinhoRecebido: carrinho,
				}
			)
	});
};