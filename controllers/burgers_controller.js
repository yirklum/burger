
// Add dependencies
var express = require("express");

var router = express.Router();

// Import model (burger.js)
var burger = require("../models/burger.js");

// Create routes

// Render existing burgers
router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

// Move burger to devoured column
router.put("/api/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
    
    console.log("condition", condition);
    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Add new burger
router.post("/burgers", function(req, res) {
    burger.insertOne([
        "burger_name"
    ], [
        req.body.burger_name
    ],  function(data) {
        res.redirect("/");
    });
});

// Export routes for server.js
module.exports = router;
  