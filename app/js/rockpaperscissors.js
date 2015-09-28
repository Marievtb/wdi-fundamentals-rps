function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getPlayerMove(move) {
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
} 

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    if (playerMove === computerMove) {
        winner = 'tie';
    } 
    else if (playerMove ==='rock' && computerMove === 'scissors') {
    winner= 'player'; 
}
else if (playerMove === 'paper' && computerMove === 'rock') {
winner = 'player';
} 
else if (playerMove=== 'scissors' && computerMove === 'paper') {
winner = 'player';
} 
else {winner = 'computer'}
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var playerMove1;
    var compuerMove1;
    var winner;

    while (playerWins < 5 && computerWins < 5) {
        playerMove1 = getPlayerMove();
        console.log("Player has played.");
        computerMove1 = getComputerMove();
        console.log("Computer has played.");
        console.log('Player drew ' + playerMove1 + ',' + 'Computer drew ' + ''+ computerMove1);
        winner = getWinner(playerMove1,computerMove1);
        if(winner == 'player'){
            playerWins = playerWins + 1;
            console.log('Player wins!');
        }
            else if (winner == 'computer'){
            computerWins = computerWins + 1;
            console.log('Computer wins!');
        }
        else{
            console.log('No winners here.');
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    }
    return [playerWins, computerWins];
}
playToFive();

