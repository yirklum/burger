// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");

var methodOverride = require("method-override");

// Set up port
var PORT = process.env.PORT || 8080;

var app = express();

// Make static content visible
app.use(express.static(__dirname + "/public"));

// Set up parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use override
app.use(methodOverride("_method"));

// Set up handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");
app.use("/", routes);

// Start server listening
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

