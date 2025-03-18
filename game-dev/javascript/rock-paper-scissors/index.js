
/*Rock Paper Scissors --> Game*/
const choices = ["rock", "paper", "scissor"];
let playerDisplay = document.getElementById("playerDisplay");
let compDisplay = document.getElementById("compDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScoreDisplay = document.getElementById("playerScore");
let compScoreDisplay = document.getElementById("compScore");
let compChoice;
let result = "";
let playerScore = 0;
let compScore = 0;
resultDisplay.classList.add("greenText");
function start(playerChoice){
    compChoice = choices[Math.floor(Math.random() * 3)];

    if(compChoice == playerChoice){
        result = "It is a tie!";
        resultDisplay.style.color = "black";
    }
    else{
        switch(playerChoice){
            case "rock":
                result = (compChoice == "paper"? "You lost the game!": "You won the game!");
                break;
            case "paper":
                result = (compChoice == "scissor"? "You lost the game!": "You won the game!");
                break;
            case "scissor":
                result = (compChoice == "rock"? "You lost the game!": "You won the game!");
                break;
        }
    }

    playerDisplay.textContent = "Player: " + playerChoice;
    compDisplay.textContent = "Computer: " + compChoice;
    resultDisplay.textContent = result;

    if(result == "You lost the game!"){
        resultDisplay.style.color = "red";
        compScore+=1;
    }
    else if(result == "You won the game!"){
        resultDisplay.style.color = "green";
        playerScore+=1;
    }
    
    if(playerScore < compScore){
        playerScoreDisplay.style.color = "red";
        compScoreDisplay.style.color = "green";
    }
    else if(playerScore > compScore){
        playerScoreDisplay.style.color = "green";
        compScoreDisplay.style.color = "red";
    }
    else{
        playerScoreDisplay.style.color = "black";
        compScoreDisplay.style.color = "black";
    }
    
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;
}






    




