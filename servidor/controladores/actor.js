const { query } = require('../lib/conexionbd')

function getActores(peliculaId){
  return query(`select actor.nombre from actor_pelicula inner join actor on actor.id = actor_pelicula.actor_id where actor_pelicula.pelicula_id = ${peliculaId}`)
}


module.exports = {
  getActores
}
