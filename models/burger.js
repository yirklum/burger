// Import orm
var orm = require("../config/orm.js");

// Create burger object
var burger = {

    // Select all burgers
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    // UpdateOne function
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },

    // InsertOne function
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    }
};

// Export database functions for burgers_controller.js
module.exports = burger;
