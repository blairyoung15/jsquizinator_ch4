let button = document.querySelector("#highscore-btn");

// Click the button

if (button) {
  button.click();
}
else {
  console.log("Error");
}

// when the page loads, the landing page will appear. (page should not refresh)
// when user clicks start game:
    // quiz will begin
    // timer will start

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