
// when the page loads, the landing page will appear. (page should not refresh)
var highscoreBtn = document.getElementById('high-scoreBtn');
var startQuizBtn = document.getElementById('startQuiz');
var questionText = document.getElementById('questionTxt')
var choiceOneBtn = document.getElementById('choice1');
var choiceTwoBtn = document.getElementById('choice2');
var choiceThreeBtn = document.getElementById('choice3');
var choiceFourBtn = document.getElementById('choice4');
var submitBtn = document.getElementById('submit');
var goBackBtn = document.getElementById('goBack');
var clearBtn = document.getElementById('clear');

var currentQuestion = 0;
var score = 0;

// timer variables
var totalTime = 90;
var wrongChoiceDeduct = 10;


var questions = [
    {
        question: "Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: "Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
];

highscoreBtn.addEventListener('click',highscore);
startQuizBtn.addEventListener('click',start);
choiceOneBtn.addEventListener('click',choice1);
choiceTwoBtn.addEventListener('click',choice2);
choiceThreeBtn.addEventListener('click',choice3);
choiceFourBtn.addEventListener('click',choice4);
submitBtn.addEventListener('click',submit);
goBackBtn.addEventListener('click',goback);
clearBtn.addEventListener('click',clear);




// when user clicks start game:

var formsArray = [
    Intro = document.querySelector("#home"),
    highScoreForm = document.querySelector("#highScoresList"),
    questionForm = document.querySelector("#question-form")
];
// Funtion that reveals selected element while hiding all other elements in an array
function revealElement(element, elementArr){
    for(i=0; i < elementArr.length; i++){
        if(element !== elementArr[i]){
            elementArr[i].classList.add("hidden");
        }
        else{
            element.classList.remove("hidden");
        }
    }
}
revealElement()


    // quiz will begin
function beginQuiz() {
    currentQuestion = 0;
    questionText.innerHTML = questions[currentQuestion].question;

}
beginQuiz()

    // timer will start
    var timerEl = document.getElementById('timer');

    function countdown() {
        var timeLeft = 60;
      
        // `setInterval()` method to call a function to be executed every 1000 milliseconds
        var timeInterval = setInterval(function() {
          // if time left > 0, print time left and decrese time left
          if(timeLeft > 0) {
            timerEl.textContent = 'Time: ' +  timeLeft;
            timeLeft = timeLeft - 1;
          } else {  // if time left = 0, call display message & call clear interval
            clearInterval(timeInterval);
            timerEl.textContent = 'Time is Up!';
            displayMessage();
          }
        }, 1000);
      }
      countdown()

// quiz
    // will cycle through a series of 10 questions
    // each answer is given a variable value for time

    // when user clicks correct answer, a point is given and "correct" appears under questions
    

    // when user click wrong answer, a point is not given, 10 seconds is deducted from running timer, "wrong" appears under question
    !correctAnswer === true 

        //if timer = 0, end game. if timer >  0 continue game


    // end of questions, give total correct and store as value 
        // allow user to enter initals to record score
             // scores are stored in JSON.stringify
var initialsInputEl = document.querySelector("#initials");
var highScoreRecEl = document.querySelector("#highScoresList");

var taskFormHandler = function(event) {
    event.preventDefault();
    var NameInput = document.querySelector("input[name='initials']").value;
    var scoreTotal = 0

    // check if input values are empty strings
if (!NameInput) {
    alert("Please enter your initials!");
    return false;
  }
  
  formEl.reset();
    // package up data as an object
    var hsDataObj = {
      name: NameInput,
      score: scoreTotal,
    
    };
  
    // send it as an argument to createTaskEl
    createHSEl(hsDataObj);
  };

var createHSEl = function(hsDataObj) {
      // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "high-score";

// create div to hold task info and add to list item
var hSInfoEl = document.createElement("div");
hSInfoEl.className = "high-score";
hSInfoEl.innerHTML = "<h3 class='high-score'>" + hsDataObj.name + "</h3><span class='score-total'>" + hsDataObj.score + "</span>";

listItemEl.appendChild(hSInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);

};

  formEl.addEventListener("submit", taskFormHandler);

        // go back button (restart game?)
        // clear high scores button 

    // view high scores button
        // when clicked, will display high scores that are stored from JSON.stringify in window 
var container = document.querySelector(".high-score");

container.addEventListener("click", function(event) {
  var element = event.target;
// when content box is clicked, the hidden data number will be shown
 var id = element.getAttribute("data-number");
 element.textContent = id;
});
        // give option to close window 