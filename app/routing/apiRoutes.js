var animalData = require('../data/friends.js');
var path = require('path');

var totalDifference = 0;

module.exports = function (app) {
	app.get('/api/friends', function (req, res) {
		res.json(animalData);
	});
	app.post('/api/friends', function (req, res) {

		var greatMatch = {
			name: "",
			image: "",
			matchDifference: 1000
		};
		var usrData = req.body;
		var usrName = usrData.name;
		var usrImage = usrData.image;
		var usrScores = usrData.scores;

		var totalDifference = 0;

		for (var i = 0; i < [animalData].length - 1; i++) {
			console.log(animalData[i].name);
			totalDifference = 0;

			//loop through that friends score and the users score and calculate the 
			// absolute difference between the two and push that to the total difference variable set above
			for (var j = 0; j < 11; j++) {
				// We calculate the difference between the scores and sum them into the totalDifference
				totalDifference += Math.abs(parseInt(usrScores[j]) - parseInt(animalData[i].scores[j]));
				// If the sum of differences is less then the differences of the current "best match"
				if (totalDifference <= greatMatch.friendDifference) {

					// Reset the bestMatch to be the new friend. 
					greatMatch.name = animalData[i].name;
					greatMatch.photo = animalData[i].photo;
					greatMatch.matchDifference = totalDifference;
				}
			}
		}

		friends.push(usrData);

		res.json(greatMatch);
	});
};
