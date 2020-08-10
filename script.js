function computerPlay() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {}
    if (computerChoice == 1) {
        return "rock";
    } else if (computerChoice == 2) {
        return "paper";
    } else return "scissors";
}

function playerSelection() {
    let playerChoice = prompt("Please choose rock, paper, or scissors", "choice");
    return playerChoice.toLowerCase();
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerSelection();
    computerChoice = computerPlay();
    if (playerChoice === computerChoice) {
        alert("Draw this round! You both chose " + playerChoice);
        return 'draw';
    } else if (playerChoice === 'rock' && computerChoice === 'paper') {
        alert("You loose this round, paper covers rock!");
        return 'lose';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors') {
        alert("You win this round, rock crushes scissors!");
        return 'win';
    } else if (playerChoice === 'paper' && computerChoice === 'rock') {
        alert("You win this round, paper covers rock!");
        return 'win';
    } else if (playerChoice === 'paper' && computerChoice === 'scissors') {
        alert("You loose this round, scissors cuts paper!");
        return 'lose';
    } else if (playerChoice === 'scissors' && computerChoice === 'rock') {
        alert("You loose this round, rock crushes scissors!")
        return 'lose';
    } else if (playerChoice === 'scissors' && computerChoice === 'paper') {
        alert("You win this round, scissors cuts paper!")
        return 'win';
    }
}
document.getElementById("play").onclick = function() {game()};

function game() {
    let win = 0;
    let lose = 0;
    let draw = 0;
    for (let i = 0; i < 5; i++) {
        let result = playRound();
        if (result === 'win') win += 1;
        if (result === 'lose') lose += 1;
        if (result === 'draw') draw += 1;
    }
    alert("Results: you have won " + win + " rounds, lost " + lose + " rounds, and tied " + draw + " rounds.")
    let para = document.createElement("p");
    let node = document.createTextNode(win > lose ? ("You win the game!") :
                (win == lose ? ("You tied!") : ("You lose! Sorry!")));
    para.appendChild(node);
    let element = document.getElementById("game");
    let child = document.getElementById("p1");
    element.insertBefore(para, child);
}

