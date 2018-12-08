const conexionbd = require('../lib/conexionbd');
const query = conexionbd.query

function getPelicula(id){
  return query( `select * from pelicula inner join genero on pelicula.genero_id = genero.id where pelicula.id=${id}`)
  .then( resultados => resultados[0] )
}

function buildWhere(conditions){
  const keys = Object.keys(conditions).filter( (key) => {
      if(conditions[key]){
        return true
      }
      return false
  })

  if(keys.length === 0){
    return ''
  }

  const array = keys.map( (key) => {
    return `${key} = ${conditions[key]}`
  })

  const arrayAnd = array.join(' and ')

  const whereStatement = `where ${arrayAnd}`

  return whereStatement
}


function getPeliculas(filters){
  if(!filters.pagina){
    throw new Error('getPeliculas necesita pagina')
  }
  if(!filters.cantidad){
    throw new Error('getPeliculas necesita cantidad')
  }
  if(!filters.columna_orden){
    throw new Error('getPeliculas necesita columna_orden')
  }
  if(!filters.tipo_orden){
    throw new Error('getPeliculas necesita tipo_orden')
  }

  const whereStatement = buildWhere({
    anio: filters.anio,
    genero_id: filters.genero
  })

  const orderByStatement = `order by ${filters.columna_orden} ${filters.tipo_orden}`

  const skip = (filters.cantidad * filters.pagina) - filters.cantidad
  const limitStatement = `limit ${skip}, ${filters.cantidad}`

  const finalStatement = `select * from pelicula ${whereStatement} ${orderByStatement} ${limitStatement}`

  return query(finalStatement)

}

// getPeliculas({
//   pagina: 10,
//   cantidad: 5,
//   columna_orden: 'anio',
//   tipo_orden: 'DESC',
//   anio:2016,
//   genero: 'Action',
// })

module.exports = {
  getPelicula,
  getPeliculas
}
