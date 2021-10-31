function computerPlay() {
    let key = Math.round(Math.random()*10);
    if (key <= 4) {
        return choice = 'rock';
    } else if (key <= 7) {
        return choice = 'paper';
    } else {
        return choice = 'scissors'
    }
    
}
function printChoices(p,c) {
    console.log('Player choice: ' + p);
    console.log('Computer choice: ' + c);
}
function gameRound(playerSelection,computerSelection) {
       if (playerSelection === computerSelection) {
        printChoices(playerSelection, computerSelection);


    } else if (playerSelection === 'rock' && (computerSelection === 'paper' || computerSelection === 'scissors')) {
        printChoices(playerSelection, computerSelection);
        ++scorePlyaer;
        document.getElementById("playerScore").innerHTML = scorePlyaer;
        document.getElementById("computerScore").innerHTML = scoreComputer;

    } else if (playerSelection === 'paper' && (computerSelection === 'rock')) {
        printChoices(playerSelection, computerSelection);
        ++scorePlyaer;
        document.getElementById("playerScore").innerHTML = scorePlyaer;
        document.getElementById("computerScore").innerHTML = scoreComputer;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        printChoices(playerSelection, computerSelection);
        ++scorePlyaer;
        document.getElementById("playerScore").innerHTML = scorePlyaer;
        document.getElementById("computerScore").innerHTML = scoreComputer;

    } else {
        printChoices(playerSelection, computerSelection);
        ++scoreComputer;
        document.getElementById("playerScore").innerHTML = scorePlyaer;
        document.getElementById("computerScore").innerHTML = scoreComputer;

    }
}
function playRound() {
    if (scoreComputer <= 4 && scorePlyaer <= 4) {
        roundCount++;
        gameRound(this.id, computerPlay());
        document.getElementById("roundCount").innerHTML = roundCount;
    } 
    else if (scoreComputer === scorePlyaer) {
        return alert('TIE');
    }
    else if (scoreComputer === 5) {
        return alert('Game won by Computer');
    }
    else {
        return alert('Game won by Player');
    }
}

let scorePlyaer = 0, scoreComputer = 0, roundCount = 1;

document.getElementById("roundCount").innerHTML = roundCount;

playerScore = document.getElementById('playerScore');
computerScore = document.getElementById('computerScore');

let rock = document.getElementById('rock');
rock.addEventListener('click', playRound);

let paper = document.getElementById('paper');
paper.addEventListener('click', playRound);

let scissors = document.getElementById('scissors');
scissors.addEventListener('click', playRound);


