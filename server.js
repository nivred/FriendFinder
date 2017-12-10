// Require Dependencies
var express = require('express');
var bodyParser = require('body-parser');

// Set up Express App
var app = express();

// Set up PORT
var PORT = process.env.PORT || 3000;

// Set up Express App for data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
require('./app/routing/apiRoutes')(app);
require('./app/routing/htmlRoutes')(app);

// Listen
app.listen(PORT, function(){
	console.log('App restarted and running on port:' + PORT);
});