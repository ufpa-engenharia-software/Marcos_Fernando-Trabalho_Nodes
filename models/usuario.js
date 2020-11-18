module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback(
        [
          {
            id:1,
            nome: "Marcos Fernando",
            data_de_nascimento: "29/12/1997",
            email: "marcos@ufpa.com",
            login: "marcosfernando",
            senha: "engenheiro123"
          },
          {
            id:2,
            nome: "Marlon Fernando",
            data_de_nascimento: "11/08/2006",
            email: "marlon@gmail.com",
            login: "marlon123",
            senha: "fernando123"
          },
        ]
      )
    }
  }
  
};