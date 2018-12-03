const connection = require('../lib/conexionbd');

function getAllGeneros(){
  return new Promise(function(resolve,reject){
    connection.query('select * from genero', function(error, results, fields){
      if (error) {
        reject(error)
        return
      }
      resolve(results)
    })

  })
}

module.exports = {
  getAllGeneros
}
