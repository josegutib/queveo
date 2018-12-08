const conexionbd = require('./lib/conexionbd');
const query = conexionbd.query

const statement1 = 'select * from pelicula limit 5';
const statement2 = 'select id, titulo from pelicula where id = 10';
const statement3 = 'select id, titulo, director from pelicula limit 6,3';
const statement4 = 'select count(*) from pelicula';

query(statement2)
.then(resultados => {
  console.log(resultados[0])
})
