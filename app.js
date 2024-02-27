let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //random genrate rock,paper,scissors
};

const drawGame = () => {
  console.log("Game was draw!");
  msg.innerText = "Game Was Draw :|";
  msg.style.backgroundColor="black"
};

const showWinner = (userWin,userChoice,compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText=userScore;
    // console.log("you win");
    msg.innerText = `You win :) Your ${userChoice} Beasts Comp ${compChoice}`;
    msg.style.backgroundColor="green";
    
  } else {
    compScore++;
    compScorePara.innerText=compScore;
    // console.log("you Lose :(");
    msg.innerText = `You lost :) Comp ${compChoice} Beasts Your ${userChoice}`;
    msg.style.backgroundColor='red';
  }
};

const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //genrate comp choice
  const compChoice = genComputerChoice();
  console.log("compChoice=", compChoice);

  if (userChoice === compChoice) {
    //draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
      
    } else {
        userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin,userChoice,compChoice);
  }
};

choices.forEach((choice) => {
  // console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
