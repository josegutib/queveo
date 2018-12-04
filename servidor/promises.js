// Ej1
// setTimeout(function() {
//     console.log('setTimeout terminado despues de 3 segundos!');
// }, 3000);

// Ej2
// setTimeout(function() {
//     console.log('ejercicio 2 completado despues de pasados 4 segundos y medio!');
// }, 4500);

// Ej3
// setTimeout(function() {
//     console.log('este es el primer mensaje!');
//     setTimeout(function() {
//         console.log('este es el segundo mensaje');
//     }, 3000)
// }, 2000)

// Ej4
   setTimeout(function() {
     console.log('este es el primer mensaje!');
     setTimeout(function() {
       console.log('este es el segundo mensaje!');
       setTimeout(function(){
         console.log('este es el tercer mesaje!');
         setTimeout(function(){
           console.log('este es el cuarto mensaje!');
         }, 4000)
       }, 3000)
     }, 2000)
   }, 1000)
