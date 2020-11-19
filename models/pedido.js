module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback(
        [
          {
            idUsuario: 1,
            idEndereco: 1,
            carrinho:[
              {
                idProduto:1, 
                preco: "17,20",
                quantidade:1
              },
              {
                idProduto:3,
                preco: "0,99",
                quantidade:1
              },
              {
                idProduto:4,
                preco: "0,99",
                quantidade:1
              },
              {
                idProduto:5,
                preco: "0,99",
                quantidade:1
              }
            ],
          frete: "2,99",
          total: "23,16"
          },
          {
            idUsuario: 2,
            idEndereco: 1,
            produto:[
              {
                idProduto:2, 
                preco: "11,50",
                quantidade:3
              },
              {
                idProduto:3,
                preco: "0,99",
                quantidade:3
              },
              {
                idProduto:4,
                preco: "0,99",
                quantidade:3
              },
              {
                idProduto:5,
                preco: "0,99",
                quantidade:3
              }
            ],
          frete: "2,99",
          total: "46,40"
          }
        ]
      )
    }
  }
  
};