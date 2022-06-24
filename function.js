
function computerPlay () {
    let string = Math.floor(Math.random()*3);
    if (string == 0) return "Rock";
    else if (string == 1) return "Paper";
    else if (string == 2) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    let playerNumber;
    let computerNumber; 

    //takes players input and makes just the first letter captilised
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);


    console.log(computerSelection); //remove
    console.log(playerSelection);

    //converts the input into a number
    if (playerSelection == "Rock") playerNumber = 0;
    else if (playerSelection == "Paper") playerNumber = 1;
    else if (playerSelection == "Scissors") playerNumber = 2;

    if (computerSelection == "Rock") computerNumber = 0;
    else if (computerSelection == "Paper") computerNumber = 1;
    else if (computerSelection == "Scissors") computerNumber = 2;

    //algorithm that shows who won
    if (playerNumber == computerNumber) {
        return ("You Tie! " + playerSelection + " ties " + computerSelection)
    }
    
    if (playerNumber == 0) {
        if (computerNumber == 1) return ("You Lose! Paper beats Rock");
        else return ("You Win! Rock beats Scissors");
    }

    if (playerNumber == 1) {
        if (computerNumber == 2) return ("You Lose! Scissors beats Paper");
        else return ("You Win! Paper beats Rock");
    }

    if (playerNumber == 2) {
        if (computerNumber == 0) return ("You Lose! Rock beats Scissors");
        else return ("You Win! Scissors beats Paper");
    }
}

console.log(playRound(computerPlay(), computerPlay()));


