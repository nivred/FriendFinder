// Require Dependencies
var friendArray = require('../data/friends');

// Routing
module.exports = function(app){

// Get Routes
	app.get("/api/friends", function(req, res){
		res.json(friendArray);
	});

// Post Routes
	app.post('/api/friends', function(req, res){
		friendArray.push(req.body);
		res.json(true);
	});
}