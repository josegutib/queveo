const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query

function getPelicula(id){
  return query( `select * from pelicula where id=${id}`)
}

module.exports = {
  getPelicula
}
