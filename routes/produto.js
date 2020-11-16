module.exports = app => {
  const Produto = app.models.produto;
  app.get("/produto", (req, res) => {
    Produto.findAll(
      {}, (retorno) => 
          {
            res.json({produto:retorno})
          }
    );
  });
};