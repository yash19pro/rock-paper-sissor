let user = 0;
let computer = 0;
const userS = document.getElementById("user-score");
const computerS = document.getElementById("computer-score");
const scoreBoard = document.querySelector(".score-board");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");

function getComputerChoice() {
    const cho = ["r", "p", "s"];
    const foo = Math.floor(Math.random() * 3);
    return cho[foo];
}

function converter(foo) {
    switch (foo) {
        case "r":
            return "Rock";
        case "p":
            return "Paper";
        case "s":
            return "Scissor";
    }
}

function win(userC, computerC) {
    user++;
    userS.innerHTML = user;
    computerS.innerHTML = computer;
    result.innerHTML = `${converter(userC)} beats ${converter(
        computerC
    )}. You Win!🔥`;
    document.getElementById(userC).classList.add("green-glow");
    setTimeout(
        () => document.getElementById(userC).classList.remove("green-glow"),
        300
    );
    navigator.vibrate(500);
    console.log(`win vib`);
}

function lose(userC, computerC) {
    computer++;
    userS.innerHTML = user;
    computerS.innerHTML = computer;
    result.innerHTML = `${converter(userC)} loses ${converter(
        computerC
    )}. You Lose!😞`;
    document.getElementById(userC).classList.add("red-glow");
    setTimeout(
        () => document.getElementById(userC).classList.remove("red-glow"),
        300
    );
    navigator.vibrate(500);
    console.log(`lose vib`);
}

function draw(userC) {
    result.innerHTML = "Its a Draw!😩";
    document.getElementById(userC).classList.add("gray-glow");
    setTimeout(
        () => document.getElementById(userC).classList.remove("gray-glow"),
        300
    );
    navigator.vibrate(500);
    console.log(`draw vib`);
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "sp":
        case "pr":
            win(userChoice, compChoice);
            break;
        case "rr":
        case "ss":
        case "pp":
            draw(userChoice);
            break;
        case "sr":
        case "ps":
        case "rp":
            lose(userChoice, compChoice);
            break;
    }
}

function main() {
    rock.addEventListener("click", () => game("r"));

    paper.addEventListener("click", () => game("p"));

    scissor.addEventListener("click", () => game("s"));
}

main();
