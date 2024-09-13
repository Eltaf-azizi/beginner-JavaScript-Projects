const prompt = require("prompt-sync")();

let wins = 0
let losses = 0
let ties = 0 

const playerChoice = prompt("Enter rock, paper of scissors: ");

if(
    playerChoice !== "rock" &&
    playerChoice !== "paper" &&
    playerChoice !== "scissors"
){
    console.log("Please enter a valid playerChoice.");
}

const choices = ["rock", "paper", "scissors"];
const randomIndex = Math.round(Math.random() * 2);
const computerChoice = choices[ransomIndex]; 