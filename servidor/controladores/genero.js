const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query
const connection = conexionbd.connection

function getAllGeneros(){
  // return new Promise(function(resolve,reject){
  //   connection.query('select * from genero', function(error, results, fields){
  //     if (error) {
  //       reject(error)
  //       return
  //     }
  //     resolve(results)
  //   })
  //
  // })
  const statement = 'select * from genero';
  query(statement)
  .then(results => {
    console.log(results)
  })
}

module.exports = {
  getAllGeneros
}
