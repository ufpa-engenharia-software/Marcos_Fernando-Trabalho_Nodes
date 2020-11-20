const bodyParser = require('body-parser')
module.exports = app => {
  const Produto = app.models.produto;
  app.get("/produto", (req, res) => {
	var nome = req.params.nome;
    Produto.findAll(
      {}, (retorno) => 
          {
            res.json({produto:retorno})
          }
    );
  });

  app.get("/produto/:nome", (req, res) => {
	var nome = req.params.nome;
  var listadeProdutos = [];

      Produto.findAll(
        {}, (retorno) =>
            {
              var retorno2 = JSON.parse(JSON.stringify(retorno));
              //toLowerCase transforma tudo em "minusculo" para realizar a pesquisa sem erro
              //verificar se o produto passada pertence a lista de busca, entao retorna
              for (var p = 0; p <retorno2.length; p++){
                if(retorno2[p].nome.toLowerCase().includes(nome.toLowerCase())){
                  listadeProdutos.push(retorno2[p]);
                }
              }
              res.json({produto: listadeProdutos})
            }
      );
  });
  
};