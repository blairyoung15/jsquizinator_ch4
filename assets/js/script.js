
// when the page loads, the landing page will appear. (page should not refresh)
var highscoreBtn = document.getElementById('high-scoreBtn');
var startQuiz = document.getElementById('startQuiz');
var answerOne = document.getElementById('answerOne');
var answerTwo = document.getElementById('answerTwo');
var answerThree = document.getElementById('answerThree');
var answerFour = document.getElementById('answerFour');
var submit = document.getElementById('submit');
var goBack = document.getElementById('goBack');
var clear = document.getElementById('clear');


var questions 
// when user clicks start game:
    // quiz will begin
function startQuiz() {

}
startQuiz()

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