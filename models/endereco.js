module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback(
        [
          {
            id: 1,
            logradouro: "Rua 25 de março",
            numero: "232",
            complemento: "Proximo a lanchonete Gosto Bom",
            bairro: "Aguas Lindas",
            estado: "Pará",
            moradia: "casa"
          }
        ]
      )
    }
  }
  
};