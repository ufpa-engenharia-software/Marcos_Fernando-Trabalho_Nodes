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
};