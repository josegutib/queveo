const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query

function getPelicula(id){
  // return new Promise(function(resolve,reject){
  //   connection.query(`select * from pelicula where id = ${id}`, function(error, results, fields){
  //     if(error){
  //       reject(error)
  //       return
  //     }
  //     resolve(results)
  //   })
  // })
  const statement = `select * from pelicula where id=${id}`;
  return query(statement)
  .then(resultados => {
    console.log(resultados)
  })
}

module.exports = {
  getPelicula
}
