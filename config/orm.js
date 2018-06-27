var connection = require("../config/connection.js");

var orm = {

    selectAll: function() {
        var queryString = "";
        
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            return result;
            console.log(results);
        });
    },

    insertOne: function() {
        var queryString = "";
        
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            return result;
            console.log(results);
        });
    },

    updateOne: function() {
        var queryString = "";
        
        connection.query(queryString, [], function(err, result) {
            if (err) throw err;
            return result;
            console.log(results);
        });
    }
    
//   selectWhere: function(tableInput, colToSearch, valOfCol) {
//     var queryString = "SELECT * FROM ?? WHERE ?? = ?";

//     connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
//       if (err) throw err;
//       return result;
//       console.log(results);
//     });
//   }
};

module.exports = orm;
