
function computerPlay () {
    let string = Math.floor(Math.random()*3);
    if (string == 0) return "rock";
    else if (string == 1) return "paper";
    else if (string == 2) return "scissors";
}
console.log(computerPlay());