var timerS = document.getElementById("timerb")
var startTime = document.getElementById("submit");
var allresults = document.getElementById("results")


//questions for the test
//present questions with INPUT
//allow the user to make choice and check answer

//MVP-minimum viable product

//timer will be set for 75 seconds
function timerb() {
    var timeLeft = 75;


    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerS.textContent = timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 1) {
            timerS.textContent = timeLeft;
            timeLeft--;
        }
        else {
            timerS.textContent === "";
            clearInterval(timeInterval);
            alert("Time is up");
        }
    }, 1000);

}


//this will start timer once start quiz button is pressed
startTime.onclick = timerb;

document.getElementById("submit").button("click",showNextQuestion())

//function to run my questions
var userquest = [
	{
		question: "Arrays in javascript can be used to store?",
		choices: [
			"shoes",
			"fonts",
			"The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type.",
		],
		answer: "The Array object lets you store multiple values in a single variable. It stores a fixed-size sequential collection of elements of the same type. An array is used to store a collection of data, but it is often more useful to think of an array as a collection of variables of the same type."
	},
	{
		question: "Which Choice below is an integer in javascript?",
		choices: [
			"1",
			"dd",
		],
		answer: "1"
	},
    {
		question: "Does .toUpperCase convert a string to lowercase letters?",
		choices: [
			"yes",
			"no",
		],
		answer: "no"
	}
]

var indexOfQuestionToShow = 3
function showNextQuestion()

{
	document.querySelector('users').innertext= userquest[indexOfQuestionToShow]
	
    for (let i = 0; i < userquest[indexOfQuestionToShow].choices.length; i++) {
		
        var choice = document.createElement('button')
		choice.innertext = userquest[indexOfQuestionToShow].choices[i]
		choice.classList.add('choice')
		document.querySelector('button').append(choice)
        
	}
}
showNextQuestion()
