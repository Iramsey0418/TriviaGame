var questions = [{
	ques: "When was the first Air Max made?",
	ans: ["2000", "1987", "1995", "1988"],
	name: "firstAirmax",
	correct: "1987",
	divClass: ".firstAirmax"
},
{
	ques: "Nike paid design student, Carolyn Davison, how much for their Swoosh Logo?",
	ans: ["$1000", "$13", "$100", "$35"],
	name: "swoosh",
	correct: "$35",
	divClass: ".swoosh"
},
{
	ques: "What was the first clothing brand to partner with Nike?",
	ans: ["Patta", "Undefeated", "Stussy", "Diamond Supply Co."],
	name: "colab",
	correct: "Stussy",
	divClass: ".colab"
},
{
	ques: "Who was Nike's first professional athlete endorser?",
	ans: ["John McEnroe", "Michael Jordan", "Ilie Nastase", "Steve Prefontaine"],
	name: "endorser",
	correct: "Ilie Nastase",
	divClass: ".endorser"
},
{
	ques: "When was the first Air Force 1 made?",
	ans: ["1982", "1983", "1984", "1985"],
	name: "firstForce",
	correct: "1982",
	divClass: ".firstForce"
},
{
	ques: "Who designed the Air Max technology?",
	ans: ["Phil Knight", "Bill Bowerman", "Tinker Hatfield", "Hidefumi Hommyo"],
	name: "airMaxDesigner",
	correct: "Tinker Hatfield",
	divClass: ".airMaxDesigner"
},
{
	ques: "When was the first Air Jordan 1's released to the public?",
	ans: ["2000", "1987", "1995", "1985"],
	name: "jordan",
	correct: "1985",
	divClass: ".jordan"
},
{
	ques: "Nike's first sneaker design goes under what name today?",
	ans: ["Air Max 1", " Cortez", "Structure Triax", "Air Force 1"],
	name: "firstDesign",
	correct: "Cortez",
	divClass: ".firstDesign"
},
{
	ques: "Which state was Nike's first retail space was opened in?",
	ans: ["Oregon", "New York", "California", "Florida"],
	name: "retailStore",
	correct: "California",
	divClass: ".retailStore"
},
{
	ques: "Nike was originally a distribution company for which brand?",
	ans: ["Adidas", "New Balance", "Saucony", "Onitsuka Tiger"],
	name: "distribution",
	correct: "Onitsuka Tiger",
	divClass: ".distribution"
}
] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
	$(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
	$('.container').fadeOut(500);
	var correctAnswers = 0;
	var wrongAnswers = 0;
	var unAnswered = 0;

	// loop through correctArray & radioName to match html elements & answers
	for (var i = 0; i < 10; i++) {

		if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

			correctAnswers++;
			console.log("this is correct! number:" + i)
		} else {
			wrongAnswers++;
			console.log("this is wrong! number:" + i)
		};
	}
	$('#correctTimesUp').append(correctAnswers);
	// display wrongAnswers
	$('#wrongTimesUp').append(wrongAnswers);
	$('#timesUp').fadeIn(1000).show();

	// alert("Times Up!");
	clearInterval(timer);
	return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

	correctAnswers++;
} else {
	wrongAnswers++;
};
};

countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

});