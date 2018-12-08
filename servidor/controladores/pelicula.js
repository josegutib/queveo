const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query

function getPelicula(id){
  return query( `select * from pelicula inner join genero on pelicula.genero_id = genero.id where pelicula.id=${id}`)
  .then( resultados => resultados[0] )
}

module.exports = {
  getPelicula
}
