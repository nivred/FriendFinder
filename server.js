// Require Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Set up Express App
var app = express();

// Set up PORT
var PORT = process.env.PORT || 3000;
// C:\Users\bestbuy\Desktop\FriendFinder\app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Serve static files
// app.use(express.static(path.join(__dirname, './app/assets')))
app.use(express.static('./app/assets'));

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