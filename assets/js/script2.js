
// when the page loads, the landing page will appear. (page should not refresh)
var startQuizBtn = document.getElementById('startQuiz');
var questionText = document.getElementById('questionTxt')
var choiceOneBtn = document.getElementById('choice1');
var choiceTwoBtn = document.getElementById('choice2');
var choiceThreeBtn = document.getElementById('choice3');
var choiceFourBtn = document.getElementById('choice4');
var submitBtn = document.getElementById('submit');
var goBackBtn = document.getElementById('goBack');
var clearBtn = document.getElementById('clear');
var quizContainer = document.getElementById('quiz-container');
var codingContainer = document.getElementById('home');
var rightAnsContainer = document.getElementById('rightAnswer');
var wrongAnsContainer = document.getElementById('wrongAnswer');
var submitScoreContainer = document.getElementById('submitScore');
var timerEl = document.getElementById('timer');
var score = 0;
var currentQIndex = 0;
var timeLeft = 60;

var questions = [
    {
        question: "Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: "****Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: "!!!Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        question: "&&&Arrays in JavaScript can be used to store ___",
        choice: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
];


function countdown() {

    // `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
        // if time left > 0, print time left and decrese time left
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft = timeLeft - 1;
            // timeLeft--
        } else {  // if time left = 0, call display message & call clear interval
            clearInterval(timeInterval);
            timerEl.textContent = 'Time is Up!';
        }
    }, 1000);
}

function start() {
    quizContainer.style.display = 'flex';
    codingContainer.style.display = 'none';
    countdown();
    displayQuestions()

}
function displayQuestions() {
    questionText.textContent = questions[currentQIndex].question;
    choiceOneBtn.textContent = "1. " + questions[currentQIndex].choice[0];
    choiceTwoBtn.textContent = "2. " + questions[currentQIndex].choice[1];
    choiceThreeBtn.textContent = "3. " + questions[currentQIndex].choice[2];
    choiceFourBtn.textContent = "4. " + questions[currentQIndex].choice[3];
    answers()
    choiceOneBtn.addEventListener('click', nextQuestion)
    choiceTwoBtn.addEventListener('click', nextQuestion)
    choiceThreeBtn.addEventListener('click', nextQuestion)
    choiceFourBtn.addEventListener('click', nextQuestion)
}

function nextQuestion() {

    // timeLeft = timeLeft - 10;

    console.log(currentQIndex + " vs. " + questions.length)
    if (currentQIndex < questions.length - 1) {
        currentQIndex++
        displayQuestions()
        rightAnsContainer.style.display = 'none';
        wrongAnsContainer.style.display = 'none';
    }
    else {
        endQuiz()
    }

}

function endQuiz() {
    quizContainer.style.display = 'none';
    submitScoreContainer.style.display = 'flex';
    clearInterval()
}

function clearInterval() {
    timeLeft = 0;
}

function answers() {
    console.log(questions[currentQIndex].answer)
    if (questions[currentQIndex].answer == questions[currentQIndex].choice) {
    rightAnsContainer.style.display = 'flex';
    score++;
    }
    else {
        wrongAnsContainer.style.display = 'flex';
        timeLeft = timeLeft - 10
    }
}
startQuizBtn.addEventListener('click', start)


