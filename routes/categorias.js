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

  app.get("/categorias/:nome", (req, res) => {
	var nome = req.params.nome;
  var listacategorias = [];

      Categoria.findAll(
        {}, (retorno) =>
            {
              var newretorno = JSON.parse(JSON.stringify(retorno));
              for (var c = 0; c <newretorno.length; c++){
                if(newretorno[c].nome.toLowerCase().includes(nome.toLowerCase())){
                  listacategorias.push(newretorno[c].idproduto);
                  //listacategorias.push(newretorno[c].nomeproduto);
                }
              }
              res.json({categorias: listacategorias})
            }
      );
  });

  // create application/json parser
	var jsonParser = bodyParser.json()
	app.post("/categorias", jsonParser, function(req, res) {
		
			var nome = req.body.nome
 			var idproduto = req.body.idproduto;

			res.status(200).send('OK');
	});
};