const bodyParser = require('body-parser')
module.exports = app => {
  const Categoria = app.models.categorias;
  app.get("/categorias", (req, res) => {
    Categoria.findAll(
      {}, (retorno) => 
          {
            res.json({categorias:retorno})
          }
    );
  });

  // create application/json parser
	var jsonParser = bodyParser.json()
	app.post("/categorias", jsonParser, function(req, res) {
		
			var nome = req.body.nome
 			var idproduto = req.body.idproduto;

			res.json(
				{
					nomeRecebido: nome,
					idRecebido: idproduto,
				}
			)
	});
};