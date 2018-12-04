const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query
const connection = conexionbd.connection

function getPelicula(id){
  return new Promise(function(resolve,reject){
    connection.query(`select * from pelicula where id = ${id}`, function(error, results, fields){
      if(error){
        reject(error)
        return
      }
      resolve(results)
    })
  })
}

module.exports = {
  getPelicula
}
