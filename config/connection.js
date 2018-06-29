// Require mysql
var mysql = require("mysql");

var connection;

if (process.env.JAWSDB_URL) {
  connection = sql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hacktheplanet",
  database: "burgers_db"
  });
};

// Set up connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export ORM
module.exports = connection;
