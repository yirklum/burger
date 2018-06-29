// Require mysql connection
var connection = require("./connection.js");


// Helper function for SQL syntax
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
}
  
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];
      
        for (var key in ob) {
            arr.push(key + "=" + ob[key]);    
        }

        return arr.toString();
}
  
// Create object for SQL statement functions
var orm = {
    
  // Create a function that returns all burgers
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
  },

  // Create a function to edit and move entries
  updateOne: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;
  
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
  
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
  
      cb(result);
    });
  },

  // Create a function to add new entries
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;
  
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
  
    console.log(queryString);
  
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
  
      cb(result);
    });
  }
};
  
// Export orm object for burger.js
module.exports = orm;
  