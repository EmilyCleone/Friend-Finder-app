//require dependencies
var express = require("express");
var path = require("path");

//sets up express
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());





app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
