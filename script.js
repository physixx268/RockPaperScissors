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
        console.log("It's a tie!");
        return "It's a tie!";
    }
    //rock
    if (player == "rock") {
        if (cpu == "paper") {
            console.log("You lose! Paper beats Rock");
            return "You lose! Paper beats Rock";
        } else {
            console.log("You won! Rock beats Scissors");
            return "You won! Rock beats Scissors"
        }
    }
    //paper
    if (player == "paper") {
        if (cpu == "rock") {
            console.log("You won!  Paper beats Rock");
            return "You won! Paper beats Rock";
        } else {
            console.log("You lose! Scissors beats Paper");
            return "You lose! Scissors beats Paper";
        }


    }
    //scissors
    if (player
        == "scissors") {
        if (cpu == "rock") {
            console.log("You lose! Rock beats Scissors");
            return "You lose! Rock beats Scissors";
        } else {
            console.log("You won! Scissors beats Paper");
            return "You won! Scissors beats Paper";
        }
    }
}

function display_result(result){
    document.getElementById("roundResult").innerHTML = result;
}

function game(rounds) {

    for (i = 1; i <= rounds; i++) {
    
        // get input for selection and convert to lower case for check
        let playerSelection = prompt("Rock, Paper or Scissors?");
        playerSelection = playerSelection.toLowerCase();

        // play round and debug output to console
        console.log(play_round(playerSelection, getCpuChoice()));
        const result = play_round(playerSelection, getCpuChoice);
        console.log(result);
        //play_round(playerSelection, getCpuChoice())
        display_result(result);
    }
}

// get user input for rounds to play and convert to int
//let rounds = prompt("How many rounds you wanna play?");
//rounds = parseInt(rounds);

const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

rounds = 1;

btnRock.addEventListener('click', (e) => {
    play_round("rock", getCpuChoice());
} );
btnPaper.addEventListener("click", (e) => {
    play_round("paper", getCpuChoice());
} );
btnScissors.addEventListener("click", (e) => {
    play_round("scissors", getCpuChoice());
} );

//game(rounds);