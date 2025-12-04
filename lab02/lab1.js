// LAB02 - Rock, Paper, Scissors Console Game
// Make sure to install the prompt package before running: npm install prompt

const prompt = require("prompt");

prompt.start();

prompt.get(["userSelection"], function (err, result) {
    if (err) {
        console.log("Error reading input.");
        return;
    }

    let userSelection = result.userSelection.toUpperCase();

    // Generate computer selection
    let randomNumber = Math.random();
    let computerSelection = "";

    if (randomNumber <= 0.34) {
        computerSelection = "PAPER";
    } else if (randomNumber <= 0.67) {
        computerSelection = "SCISSORS";
    } else {
        computerSelection = "ROCK";
    }

    console.log("\nUser selected:", userSelection);
    console.log("Computer selected:", computerSelection);

    // Determine the winner
    let outcome = "";

    if (userSelection === computerSelection) {
        outcome = "It's a tie";
    } else if (
        (userSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (userSelection === "PAPER" && computerSelection === "ROCK") ||
        (userSelection === "SCISSORS" && computerSelection === "PAPER")
    ) {
        outcome = "User Wins";
    } else {
        outcome = "Computer Wins";
    }

    console.log("\nOutcome:", outcome);
});

