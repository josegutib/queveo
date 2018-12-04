const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query

function getAllGeneros(){
  return query('select * from genero')
  .then(results => {
    console.log(results)
  })
}

module.exports = {
  getAllGeneros
}
