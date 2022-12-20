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
        display_result("It's a tie!");

        update_cpuScore();
        update_playerScore();

        return "It's a tie!";
    }
    //rock
    if (player == "rock") {
        if (cpu == "paper") {
            console.log("You lose! Paper beats Rock");
            display_result("You lose! Paper beats Rock");
            update_cpuScore();
            return "You lose! Paper beats Rock";
        } else {
            console.log("You won! Rock beats Scissors");
            display_result("You won! Rock beats Scissors");
            update_playerScore();
            return "You won! Rock beats Scissors"
        }
    }
    //paper
    if (player == "paper") {
        if (cpu == "rock") {
            console.log("You won!  Paper beats Rock");
            display_result("You won! Paper beats Rock");
            update_playerScore();
            return "You won! Paper beats Rock";
        } else {
            console.log("You lose! Scissors beats Paper");
            display_result("You lose! Scissors beats Paper");
            update_cpuScore();
            return "You lose! Scissors beats Paper";
        }


    }
    //scissors
    if (player
        == "scissors") {
        if (cpu == "rock") {
            console.log("You lose! Rock beats Scissors");
            display_result("You lose! Rock beats Scissors");
            update_cpuScore();
            return "You lose! Rock beats Scissors";
        } else {
            console.log("You won! Scissors beats Paper");
            display_result("You won! Scissors beats Paper");
            update_playerScore();
            return "You won! Scissors beats Paper";
        }
    }
}

function display_result(result) {
    document.getElementById("results").innerHTML = result;
}

function update_playerScore(){
    scorePlayer ++;
    document.getElementById("playerScore").innerHTML = scorePlayer;

}

function update_cpuScore(){
    scoreCPU ++;
    document.getElementById("cpuScore").innerHTML = scoreCPU;

}



// get user input for rounds to play and convert to int
//let rounds = prompt("How many rounds you wanna play?");
//rounds = parseInt(rounds);
//let rounds = 5;

let scorePlayer = 0;
let scoreCPU = 0;


const btnRock = document.getElementById("btnRock");
const btnPaper = document.getElementById("btnPaper");
const btnScissors = document.getElementById("btnScissors");

btnRock.addEventListener('click', (e) => {
    play_round("rock", getCpuChoice());
});
btnPaper.addEventListener("click", (e) => {
    play_round("paper", getCpuChoice());
});
btnScissors.addEventListener("click", (e) => {
    play_round("scissors", getCpuChoice());
});