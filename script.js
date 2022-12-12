function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// generate random cpu selection
function getCpuChoice() {
    let random = getRandomInt(3)

    if (random == 0) {
        return "rock";
    } else if (random == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function play_round(player, cpu) {
    //tie
    if (player == cpu) {
        return "It's a tie!";
    }
    //rock
    if (player == "rock") {
        if (cpu == "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You won! Rock beats Scissors"
        }
    }
    //paper
    if (player == "paper") {
        if (cpu == "rock") {
            return "You won! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }


    }
    //scissors
    if (player
        == "scissors") {
        if (cpu == "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You won! Scissors beats Paper";
        }
    }
}

function game(rounds) {

    for (i = 1; i <= rounds; i++) {
        // get input for selection and convert to lower case for check
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();

        // play round and debug output to console
        console.log(play_round(playerSelection, getCpuChoice()));
        //play_round(playerSelection, getCpuChoice())
    }
}

// get user input for rounds to play and convert to int
let rounds = prompt("How many rounds you wanna play?");
rounds = parseInt(rounds);

game(rounds);