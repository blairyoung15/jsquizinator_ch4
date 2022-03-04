
// when the page loads, the landing page will appear. (page should not refresh)
// when user clicks start game:
    // quiz will begin


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
    // will cycle through a series of 12 questions
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
        // give option to close window 