// set up packages required
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// set up server
var app = express();
var PORT = process.env.PORT || 3000;

// mike json files easy to read
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// set up routes
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

// start server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});