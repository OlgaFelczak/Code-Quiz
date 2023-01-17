// A start button function
const buttonStart = document.getElementById("start");

buttonStart.addEventListener("click", onButtonStartClick);

function onButtonStartClick(e) {
  let questions = document.getElementById("questions");
  questions.classList.remove("hide");

  let startScreen = document.getElementById("start-screen");
  startScreen.classList.add("hide");

  renderQuestion(myQuestions[0].question, myQuestions[0].answers);

  countdown();
}

function renderQuestion(title, choices) {
  renderQuestionTitle(title);
  renderQuestionChoices(choices);
}

function renderQuestionTitle(question) {
  let questionTitle = document.getElementById("question-title");
  questionTitle.textContent = question;
}

function renderQuestionChoices(choices) {
  let questionChoices = document.getElementById("choices");
  questionChoices.innerHTML = "";

  for (const choice of choices) {
    let button = document.createElement("BUTTON");
    button.textContent = choice;

    button.addEventListener("click", onAnswerClick);

    questionChoices.appendChild(button);
  }
}

function onAnswerClick(e) {
  renderQuestion(myQuestions[1].question, myQuestions[1].answers);

  timeLeft -= 10;
  timer.textContent = timeLeft;
}

// starts timer
let timer = document.querySelector(".timer");
let timeLeft = 75;

function countdown() {
  setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

// timer starts
// Timer function
// countdown
// display
// get game stop
// stop at zero

//

// Timer connected to:
// Game start f
// Game stop f
// timer display
// Incorrect answer - time deduction

// gamestart function
// trigger from button
// start timer
// call show questions and choices function
// hide submit button
// hide instructions

// toggle class attribute hide
// start-screen
// questions container

// Gamestop function
// trigger from
// last question
// timer zero
// announces score
// gets initials
// post to local storage
// show submit button
// show instructions

// highscore function
// on load, update from local storage
// rank by score
// activate clear highscores button

// clear highscore function
// clears LS
// Q&A function
// get q&A
// display
// interactive
// on click
// show choice
// show correct answer
// clear
// get new questions

// choice display

// evaluate choice function
