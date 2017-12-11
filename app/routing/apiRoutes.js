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
	// Calculates submitted scores and compares to friend data scores
	// Returns a matching friend with closest score results
	app.post('/api/friends', function(req, res) {
		// Calculate average score of submitted survey	
		function getAvg(scores) {
			let sum = 0;
			for (var i=0; i < scores.length; i++) {
				sum += scores[i]
			}
			let avg = sum / scores.length;
			return avg;
		}

		// Get average of user and set to variable
		let difference = 5;
		let bestMatch = {};
		
		for (var j=0; j < friendArray.length; j++) {
			// Set variables for retrieved data
			let scoresArray = friendArray[j].scores;
			let average = getAvg(scoresArray);
			// Calculate difference between user and friend averages
			for (var k=0; k < friendArray.length; k++) {
				result = Math.abs(average[j] - difference);
				console.log('result');
				console.log(result);
				// result = Math.abs(friendArray[j].scores[k] - friendArray[-1].scores[k]);
                // difference = difference + result;
			}
			if (average < difference) {
				// If friend average less than min difference set as bestMatch
				bestMatch = friendArray[j];
			}
		}

		friendArray.push(req.body);
		res.json(bestMatch);
	});
}