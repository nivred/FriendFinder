// Require Dependencies
var path = require('path');

// Routing
module.exports = function(app){

    // HTML GET Requests
    // Users routed to correspoding HTML page
	app.get('/home', function(req, res) {
		console.log(__dirname);
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
    });

    // Non matching routes are redirected to home page
	app.get('*', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/home.html'));
	});
}