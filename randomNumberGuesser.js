const prompt = require("prompt-sync")();

const target = Math.rpund(Math.random() * 100);

let guesses = 0;

const guess = Number(prompt("Guess the number (0-100): "));

if (guess > target){
    console.log("Your guess is too high.");
}
else if(guess < target){
    console.log("Your guess is too low.");
}
else{
    console.log("You guessed it!")
}