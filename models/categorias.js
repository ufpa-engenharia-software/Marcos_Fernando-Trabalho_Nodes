module.exports = app => {
  return {
    findAll: (params,callback) => {
      return callback(
        [
          {
            nome: "Caderno",
            idproduto: 1
          },
          {
            nome: "Caderno",
            idproduto: 2
          },
          {
            nome: "Caneta",
            idproduto: 3
          },
          {
            nome: "Caneta",
            idproduto: 4
          },
          {
            nome: "Caneta",
            idproduto: 5
          },
          {
            nome: "Lapis",
            idproduto: 6
          },
          {
            nome: "Lapis",
            idproduto: 7
          },
          {
            nome: "Lapis",
            idproduto: 8
          },
          {
            nome: "Borracha",
            idproduto: 9
          },
          {
            nome: "Borracha",
            idproduto: 10
          },
          {
            nome: "Borracha",
            idproduto: 11
          },
          {
            nome: "Borracha",
            idproduto: 12
          },
        ]
      )
    }
  }
};