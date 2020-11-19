module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback(
        [
          {
            idEndereco: 1,
            logradouro: "Rua 25 de março",
            numero: "232",
            complemento: "Proximo a lanchonete Gosto Bom",
            bairro: "Aguas Lindas",
            estado: "Pará",
            moradia: "casa"
          },
          {
            idEndereco: 2,
            logradouro: "Rua 3 de setembro",
            numero: "41",
            complemento: "Ao lado da igreja",
            bairro: "Canutama",
            estado: "Pará",
            moradia: "vila"
          },
          {
            idEndereco: 3,
            logradouro: "Avenida Governador Magalhães Barata",
            numero: "899",
            complemento: "Doca",
            bairro: "Nazaré",
            estado: "Pará",
            moradia: "Apt"
          }
        ]
      )
    }
  }
  
};