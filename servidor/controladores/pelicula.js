const connection = require('../lib/conexionbd');

function getPelicula(){
  return new Promise(function(resolve,reject){
    // const peliculaId = req.params.id;
    connection.query(`select titulo from pelicula where id = ${peliculaId}`, function(error, results, fields){
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
