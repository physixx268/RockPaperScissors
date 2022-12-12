
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
    if (player == cpu) {
        return "It's a tie!";
    }

    if (player == "rock") {
        if (cpu == "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You won! Rock beats Scissors"
        }
    }

    if (player == "paper") {
        if (cpu == "rock") {
            return "You won! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }


    }

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
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();

        console.log(play_round(playerSelection, getCpuChoice()));
    }
}


let rounds = prompt("How many rounds you wanna play?");
rounds = parseInt(rounds);

game(rounds);