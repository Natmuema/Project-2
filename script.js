const options = ["rock", "paper", "scissors"];
let yingScore = 0;
let yangScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
}

function playRound(yingSelection, yangSelection) {
    if (yingSelection === yangSelection) {
        return "It's a tie!";
    } else if (
        (yingSelection === "rock" && yangSelection === "scissors") ||
        (yingSelection === "paper" && yangSelection === "rock") ||
        (yingSelection === "scissors" && yangSelection === "paper")
    ) {
        yingScore++;
        return "You win!";
    } else {
        yangScore++;
        return "You lose!";
    }
}

function updateScoreboard() {
    document.getElementById("ying-score").textContent = yingScore;
    document.getElementById("yang-score").textContent = yangScore;
}

function resetGame() {
    yingScore = 0;
    yangScore = 0;
    updateScoreboard();
}

document.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", () => {
        const yingSelection = button.id;
        const yangSelection = computerPlay();
        const result = playRound(yingSelection, yangSelection);
        alert(`${result} Ying chose ${yingSelection}. Yang chose ${yangSelection}.`);
        updateScoreboard();
    });
});

document.getElementById("reset").addEventListener("click", resetGame);
