var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_par = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");
const smallUserWord = "User".fontsize(3).sup();
const smallCompWord = "Comp".fontsize(3).sub();

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result_par.innerHTML = userChoice + " beats " + computerChoice + ". You win!";
  result_par.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord}. You win!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(function(){
    userChoice_div.classList.remove('green-glow');
  }, 500);
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_par.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} loses to ${convertToWord(
    computerChoice
  )}${smallCompWord}. You lost...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(function(){
    userChoice_div.classList.remove('red-glow');
  }, 500);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_par.innerHTML = `${convertToWord(
    userChoice
  )}${smallUserWord} beats ${convertToWord(
    computerChoice
  )}${smallCompWord}. You are now wasting your time.`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(function(){
    userChoice_div.classList.remove('gray-glow');
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    // Times when user will win
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    // Times when computer will win
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    // Times when user and computer make the same choice: DRAW
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("r");
  });
  paper_div.addEventListener("click", function() {
    game("p");
  });
  scissor_div.addEventListener("click", function() {
    game("s");
  });
}

main();
