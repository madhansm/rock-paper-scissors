function computerPlay() {
    let key = Math.round(Math.random()*10);
    console.log(key);
    if (key <= 3) {
        return choice = 'rock';
    } else if (key <= 6) {
        return choice = 'paper';
    } else {
        return choice = 'scissors'
    }
    
}
function printChoices(p,c) {
    console.log('Player choice: ' + p);
    console.log('Computer choice: ' + c);
}
function gameRound() {
    let playerSelection = window.prompt('Enter choice: ');
    playerSelection = playerSelection.toLowerCase();
    
    let computerSelection = computerPlay();
    
    if (playerSelection === '' 
    || (playerSelection !== 'rock' 
    && playerSelection !== 'paper' 
    && playerSelection !== 'scissors')) {
        return alert ('Enter rock/paper/scissors');

    } else if (playerSelection === computerSelection) {
        printChoices(playerSelection, computerSelection);
        console.log('It\'s a tie!!');
        return alert('It\'s a tie!!');

    } else if (playerSelection === 'rock' && (computerSelection === 'paper' || computerSelection === 'scissors')) {
        printChoices(playerSelection, computerSelection);
        console.log('Player WON!!');
        ++scorePlyaer;
        return alert ('Player WON!!');

    } else if (playerSelection === 'paper' && (computerSelection === 'rock')) {
        printChoices(playerSelection, computerSelection);
        console.log('Player WON!!');
        ++scorePlyaer;
        return alert ('Player WON!!');

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        printChoices(playerSelection, computerSelection);
        console.log('Player WON!!');
        ++scorePlyaer;
        return alert ('Player WON!!');

    } else {
        printChoices(playerSelection, computerSelection);
        console.log('Computer WON!!');
        ++scoreComputer;
        return alert ('Computer WON!!');

    }
}
let scorePlyaer = 0, scoreComputer = 0;
for (let i = 0; i < 5; i++) {
    if (scoreComputer !== 3 && scorePlyaer !== 3) {
    gameRound();
    console.log('Player: ' + scorePlyaer);
    console.log('Computer: ' + scoreComputer);
   }
}
if (scoreComputer === scorePlyaer) {
    console.log('It\'s a tie!!');
    alert('It\'s a tie!!');
} else if (scorePlyaer > scoreComputer) {
    console.log('Player WON the game!!');
    alert ('Player WON the game!!');
} else {
    console.log('Computer WON the game!!');
    alert ('Computer WON the game!!');
}