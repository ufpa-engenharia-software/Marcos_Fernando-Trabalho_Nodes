const express = require('express');
const consign = require('consign');

const app = express(); //inicializando o express

consign().include("models"). //acessando arquivos na pasta models
then("libs/middlewares").

then("routes").

then("libs/boot").

into(app);

//rodar na porta 3000
app.listen(3000, () =>{
  console.log('servidor inicializado');
});
