module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback(
        [
          {
            idUsuario: 1,
            idEndereco: 1,
            produto:[
              {
                id:1, 
                preco: "17,20",
                quantidade:1
              },
              {
                id:3,
                preco: "0,99",
                quantidade:1
              },
              {
                id:4,
                preco: "0,99",
                quantidade:1
              },
              {
                id:5,
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
                id:2, 
                preco: "11,50",
                quantidade:3
              },
              {
                id:3,
                preco: "0,99",
                quantidade:3
              },
              {
                id:4,
                preco: "0,99",
                quantidade:3
              },
              {
                id:5,
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