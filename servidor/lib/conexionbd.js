var mysql      = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user:"root",
  password:"josedb",
  database:"peliculasdb"
});

module.exports = connection;
