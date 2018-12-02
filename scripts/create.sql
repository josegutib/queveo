CREATE DATABASE `peliculasdb`;


USE `peliculasdb`;


CREATE TABLE `genero` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(25) NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE `pelicula` (

  `id` int(11) NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(100) NOT NULL,
  `duracion` INT(10) NOT NULL,
  `director` VARCHAR(400) NOT NULL,
  `anio` INT(10) NOT NULL,
  `fecha_lanzamiento` DATE NOT NULL,
  `puntuacion` INT(2) NOT NULL,
  `poster` VARCHAR(200) NOT NULL,
  `trama` VARCHAR(400) NOT NULL,
  `genero_id` INT,
  PRIMARY KEY (`id`),
  FOREIGN KEY (genero_id) REFERENCES genero(id)
);

CREATE TABLE `actor`(
  `id` INT NOT NULL,
  `nombre` VARCHAR(50) NOT NULL,

  PRIMARY KEY(id)
);

CREATE TABLE `actor_pelicula`(
  `id` INT NOT NULL,
  `actor_id` INT NOT NULL,
  `pelicula_id` INT NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY(actor_id) REFERENCES actor(id),
  FOREIGN KEY(pelicula_id) REFERENCES pelicula(id)
);
