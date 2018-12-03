//paquetes necesarios para el proyecto
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllGeneros } = require("./controladores/genero");
const { getPelicula } = require("./controladores/pelicula");

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
  getPelicula(peliculaId)
  .then(pelicula => {
    const respuesta = pelicula[0]
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
  const respuesta = {
    peliculas:[
      {
        poster:"http://tr.web.img4.acsta.net/c_215_290/pictures/bzp/01/15308.jpg",
        trama:"Misión imposible es una serie de películas de acción estadounidense basada en la serie televisiva del mismo nombre. La serie es coproducida y protagonizada por Tom Cruise como Ethan Hunt",
        titulo:"mision imposible",
        id:"1"
      }
    ],
    total:1
  }
  res.json(respuesta)
})


app.listen(PUERTO, function () {
  console.log( "Escuchando en el puerto " + PUERTO );
});
