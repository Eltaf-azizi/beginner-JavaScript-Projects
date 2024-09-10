const prompt = require(prompt.sync)();


console.log("Welcome to the real World quiz!");


let correctAnswers = 0;
let totalQuestions = 5;

const answer0 = ("What does WHO stands?");
const correctAnswer0 = ("World Health Organization") ;

if(answer0.toUpperCase() === correctAnswer0){
    console.log("Hurray!, Your answer is correct!");
    correctAnswers++;
}

else{
    console.log("Your guessed it Wrong!");
}


const answer1 = ("What does USB stands?");
const correctAnswer1 = ("Universal Serial Bus") ;

if(answer1.toUpperCase() === correctAnswer1){
    console.log("Hurray!, Your answer is correct!");
    correctAnswers++;
}

else{
    console.log("Your guessed it Wrong!");
}


const answer2 = ("What does PIA stands?");
const correctAnswer2 = ("Pakistan International Airline");

if(answer2.toUpperCase() === correctAnswer2){
    console.log("Hurray!, Your answer is correct!");
    correctAnswers++;
}

else{
    console.log("Your guessed it Wrong!");
}




console.log("You got " , correctAnswers , " questions correct!");
console.log("You score " , correctAnswers / totalQuestions * 100 , " percent!");