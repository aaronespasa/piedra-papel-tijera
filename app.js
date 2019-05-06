let userScore = 0,
    pcScore = 0;

const userScore_span = document.getElementById("user-score"),
      pcScore_span = document.getElementById("pc-score"),
      scoreBoard_div = document.querySelector(".score-board"),
      result_p = document.querySelector(".result > p"),
      rock_div = document.getElementById("rock"),
      paper_div = document.getElementById("paper"),
      scissors_div = document.getElementById("scissors");

// It generates the choice of the computer randomly
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Translate from english to spanish
function translate(choice) {
    if (choice === "rock") return "Piedra";
    if (choice === "paper") return "Papel";
    if (choice === "scissors") return "Tijeras";
}

/**
 * These three functions tells what to do if the user
 * win, lose or if there's a draw
 */
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `${translate(userChoice).fontcolor("yellow")} gana a ${translate(computerChoice).fontcolor("gray")}. ¡Tu ganas! 😁`
    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    result_p.innerHTML = `${translate(userChoice).fontcolor("gray")} pierde contra ${translate(computerChoice).fontcolor("yellow")}. ¡Perdiste! 😔`
    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);
}

function draw(userChoice) {
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `Es un empate`
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

// It makes the logic of when the user win, lose or when there's a draw
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + " " + computerChoice) {
        case "rock scissors":
        case "paper rock":
        case "scissors paper":
            win(userChoice, computerChoice);
            break;
        case "scissors rock":
        case "rock paper":
        case "paper scissors":
            lose(userChoice, computerChoice);
            break;
        default:
            draw(userChoice);
            break;
    }
}

// It listens for what div the user clicks
function main() {
    rock_div.addEventListener('click', () => game("rock")); 
    paper_div.addEventListener('click', () => game("paper"));
    scissors_div.addEventListener('click', () => game("scissors"));
}

main();