var mysql      = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user:"root",
  database:"peliculasdb"
});


connection.connect()

connection.end()
