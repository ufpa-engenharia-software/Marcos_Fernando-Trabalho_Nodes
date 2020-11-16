module.exports = app => {
  return {
    findAll: (params,callback) => {
      return callback(
        [
          {
            id:1, 
            nome: "Caderno 20 matérias",
            preco: "17,20"
          },
          {
            id:2,
            nome: "Caderno 10 matéiras",
            preco: "11,50"
          },
          {
            id:3,
            nome: "Caneta 0.7 - Azul",
            preco: "0,99"
          },
          {
            id:4,
            nome: "Caneta 0.7 - Vermelha",
            preco: "0,99"
          },
          {
            id:5,
            nome: "Caneta 0.7 - Preta",
            preco: "0,99"
          },
          {
            id:6,
            nome: "Lapis Bic",
            preco: "0,75"
          },
          {
            id:7,
            nome: "Lapis de Cor Fabri Castel - 12 unidades",
            preco: "24,99"
          },
          {
            id:8,
            nome: "Lapis de Cor Fabri Castel - 24 unidades",
            preco: "32,99"
          },
          {
            id:9,
            nome: "Borracha Branca",
            preco: "0,25"
          },
          {
            id:10,
            nome: "Borracha duas cores",
            preco: "0,45"
          },
          {
            id:11,
            nome: "Borracha Princesas",
            preco: "2,99"
          },
          {
            id:12,
            nome: "Borracha Carros",
            preco: "2,99"
          },
        ]
      )
    }
  }
};