var startScreen;
var gameHTML;
var counter = 30;
var questions = ["Who is this Band?", "?", "Who is this Artists?", "Who is this Musician??"];
var answers = [["Five Finger Death Punch", "Eminem", "Juicy J", "Project Pat"], ["Big Sean","Queen","Led Zepplin","Papa Roach"], ["Yin Yang Twins", "Franchise Boyz", "Ludacris", "Rick Ross"],["Shinedown","Godsmack","Mudvayne"]];
var images =[""]
var correctAnswers = ["A. Five Finger Death Punch", "B. Juicy J", "C. Eminem", "C. Mudvayne", "D. Godsmack", "A. Papa Roach", "B. Shinedown", "D. Rick Ross"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;

$(document).ready(function() {
   
    
    function initialScreen() {
        startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(startScreen);
    }
    
    initialScreen();
    
   
    
    $("body").on("click", ".start-button", function(event){
        event.preventDefault();  
       
        
    
        });
     
    $("body").on("click", ".answer", function(event){
        
       
        selectedAnswer = $(this).text();
        if(selectedAnswer === correctAnswers[questionCounter]) {
            
            clearInterval(theClock);
            generateWin();
        }
        else {
            
            clearInterval(theClock);
            generateLoss();
        }
    });
    $("body").on("click", ".reset-button", function(event){
        resetGame();
    });
}); 

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>You ran out of time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Correct! The answer is: " + correctAnswers[questionCounter] + "</p>" + imageArray[questionCounter];
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);  
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='img/x.png'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000); 
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + question[questionCounter] + "</p><p class='first-answer answer'>A. " + answer[questionCounter][0] + "</p><p class='answer'>B. "+answer[questionCounter][1]+"</p><p class='answer'>C. "+answer[questionCounter][2]+"</p><p class='answer'>D. "+answer[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>How'd you do?" + "</p>" + "<p class='summary-correct'>Correct: " + correctTally + "</p>" + "<p>Wrong: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Try Again?!</a></p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}
}