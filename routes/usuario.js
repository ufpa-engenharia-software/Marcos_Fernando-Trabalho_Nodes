module.exports = app => {
  const Usuario = app.models.usuario;
  app.get("/usuario", (req, res) => {
    Usuario.findAll(
      {}, (retorno) => 
          {
            res.json({usuario:retorno})
          }
    );
  });
};