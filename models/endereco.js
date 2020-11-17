module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback(
        [
          {
            cep: 0
          }
        ]
      )
    }
  }
  
};