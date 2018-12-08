//paquetes necesarios para el proyecto
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllGeneros } = require("./controladores/genero");
const { getPelicula, getPeliculas } = require("./controladores/pelicula");
const { getActores } = require('./controladores/actor');

const app = express();
//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
const PUERTO = '8080';

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.get('/status', function(req,res){
  const respuesta = {
    status: "ok"
  }
  res.json(respuesta)
})

app.get('/peliculas/:id', function(req,res){
  const peliculaId = req.params.id;
  Promise.all([
    getPelicula(peliculaId),
    getActores(peliculaId)
  ])
  .then( array => {
    const respuesta = {
      pelicula: array[0],
      actores: array[1]
    }
    res.json(respuesta)
  })


})

app.get('/generos', function(req,res){
  getAllGeneros()
  .then(generos => {
    const respuesta = {
      generos: generos
    }
    res.json(respuesta)
  })
})


app.get('/peliculas',function(req,res){
  const pagina = parseInt(req.query.pagina)
  const titulo = req.query.titulo
  const genero = req.query.genero
  const anio = parseInt(req.query.anio)
  const cantidad = parseInt(req.query.cantidad)
  const columna_orden = req.query.columna_orden
  const tipo_orden = req.query.tipo_orden

  const filtros = {
    pagina,
    genero,
    anio,
    cantidad,
    columna_orden,
    tipo_orden
  }

  getPeliculas(filtros)
  .then( peliculas => {
    const respuesta = {
      peliculas,
      total: peliculas.length
    }
    res.json(respuesta)
  })


})


app.listen(PUERTO, function () {
  console.log( "Escuchando en el puerto " + PUERTO );
});
