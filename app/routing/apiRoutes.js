// Require Dependencies
var friendArray = require('../data/friends');

// Routing is processed here
module.exports = function(app) {
	// API GET requests
	// Returns total list of friends score arrays 
	app.get("/api/friends", function(req, res) {
		res.json(friendArray);
	});
	// API POST requests
	// User survery processed once submitted
	app.post('/api/friends', function(req, res) {
		let minVal = 41;
		let friendIndex = 0;
		for (var j=0; j < friendArray.length; j++) {
			let result = 0;
			// Calculates submitted scores and compares to friend data scores
			for (var k=0; k < friendArray.length; k++) {
				result += Math.abs(req.body.scores[k] - friendArray[j].scores[k]);
			}
			if (minVal > result) {
				minVal = result;
				console.log(".............\n", friendIndex);
				friendIndex = j;
			}
		}
		// Returns a matching friend with closest score results
		friendArray[friendIndex]
		friendArray.push(req.body);
		res.json(friendArray[friendIndex]);
	});
}