// var questions = [{
// 	question:"How large is your family",
// 	choices:["We have young children","Just me."," A couple lives here.","We have young and older children","We have older children that can help"],
// 	values:[1,2,3,4,5]
// },{
// 	question:"How much time does your family spend at home",
// 	choices:["Just enough time to sleep.","A couple hours a few times a week","My schedule varies but we have some time.","We have a schedule that allows plenty of home time","Someone is always home to hang."],
// 	values:[1,2,3,4,5]
// },{
// 	question:"How much room do you have for a pet?",
// 	choices:["cramped inside and out","Extra space inside with no outside space","cramped inside, some fenced space outside.","Some space inside with a large fenced yard","Sprawling space both inside and out."],
// 	values:[1,2,3,4,5]
// },{
// 	question:"What would your level of activity with your new pet would be.",
// 	choices:["No time for activities","Couch potato- will clean a couple times a week.","I have time for some activities","We are willing to take time for training and activities.","Lots of time to keep pet engaged and occupied"],
// 	values:[1,2,3,4,5]
// },{
// 	question:"Which do you prefer?",
// 	choices:["Scales","Feathers","Small and Furry","Big and fuzzy","Smooth"],
// 	values:[1,2,3,4,5]
// },{
// 	question:"Do you have pet allergies?",
// 	choices:["Yes","No"],
// 	values:[1,2]
// },{
// 	question:"How much are you planning to budget to the care of your new pet?",
// 	choices:["Under $25","$25-$50","$50-$100","$100-$200","$200+"],
// 	values:[1,2,3,4,5]
// },{
// 	question:"How much affection do you want your pet to display?",
// 	choices:["I want a pet that is completely oblivious to me.","I want an independant pet who does acknoledge my existance."," I want interaction but not necessarily cuddling.","I want some cuddle time.","I want total adoration and constant affection."],
// 	values:[1,2,3,4,5]
// },{
// 	question:"Do you have a need for a guard animal?",
// 	choices:["I want to scare unwanted visitors away.","I want to be alerted when something is approaching.","I don't care what people think of my pet.","I don't want anyone to be scared","I don't want anyone to notice there are pets here."],
// 	values:[1,2,3,4,5]
// },{
// 	question:"What size of pet are you looking for?",
// 	choices:["Tiny - fits in palm of hand","Small (5lbs-15lbs)","Medium (20lbs-50lbs)","Large (50lbs-150lbs)","Extra Large (min. 150 lbs.)"],
// 	values:[1,2,3,4,5]
// },{
// 	question:"What is your budget for initial cost?",
// 	choices:["under $50","$50-$100","$100-$250","$250-$500","$500+"],
// 	values:[1,2,3,4,5]
// }
// ];


// function validateForm() {
// 	var data = {
// 		valid: true,
// 		userData: {
// 			name: $("#name").val(),
// 			photo: $("#photo").val(),
// 			scores: []
// 		}
// 	};
// };

// function displayQuestions () {
// 	var question = questions[currentQuestion].question;
// 	var questionClass = $(document).find(".quizContainer > .question");
// 	var choiceList = $(document).find(".quizContainer > .choiceList");
// 	var numChoices = questions[currentQuestion].choices.length;
// 	$(questionClass).text(question);
	
// 	var choice;
// 	for (i = 0; i < numChoices; i++) {
// 		choice = questions[currentQuestion].choices[i];
// 		$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
// 	}
// }
// console.log(questions);
// console.log("current:" + question);

// // $('.form-group').each(function () {
// // 	if ($(this).val() === '')
// // 		data.valid = false;
// // 		return data;
// // });

// // $.each(questions, function(qIndex, value) {
// // var radioValue = $("input[name='Q" + qIndex + "']:checked").val();
// // if (radioValue) { //any choice been selected 
// // 		data.userData.scores.push(parseInt(radioValue));
// // 		console.log(data.userData.scores.push(parseInt(radioValue)));
// // 		console.log(data.userData.scores)
// // } else { //no choice been selected 
// // 		data.valid = false;
// // 		return data;
// // }
// // });

// // return data;
// // }
// // // If all required fields are filled
// // if (validateForm() == true) {
// // // Create an object for the user's data
// // var userData = {
// // 	name: $("#name").val(),
// // 	photo: $("#photo").val(),
// // 	scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(),]
// // }
// // // Grab the URL of the website
// // var currentURL = window.location.origin;
// // // AJAX post the data to the friends API. 
// // $.post(currentURL + "/api/friends", userData, function (data) {
// // 	// Grab the result from the AJAX post so that the best match's name and photo are displayed.
// // 	$("#matchName").text(data.name);
// // 	$("#matchType").text(data.type);
// // 	$('#matchImg').attr(data.photo);
// // 	// Show the modal with the best match 
// // 	$("#resultsModal").modal('toggle');
// // });
// // }
// // else {
// // alert("Please fill out all fields before submitting!");
// // }

// // $("#submit").on("click", function() {
// // var surveyResult = validateSurvey();

// // // If all required fields are filled
// // //display the best match
// // if (surveyResult.valid === true) {
// // 		// console.log(surveyResult.userData);
// // 		getTheBestMatch(surveyResult.userData);

// // } else {
// // 		alert("Please fill out all fields before submitting!");
// // }
// // return false;

// // });
// </li>
// <li>
// 					<h4>How motivated are you by revenge?</h4>
// 					<input type="radio" name="question9" value="1">1
// 					<input type="radio" name="question9" value="2">2
// 					<input type="radio" name="question9" value="3">3
// 					<input type="radio" name="question9" value="4">4
// 					<input type="radio" name="question9" value="5">5
				