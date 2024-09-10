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


const answer3 = ("What does PIN stands?");
const correctAnswer3 = ("Personal Identification Number") ;

if(answer3.toUpperCase() === correctAnswer3){
    console.log("Hurray!, Your answer is correct!");
    correctAnswers++;
}

else{
    console.log("Your guessed it Wrong!");
}


const answer4 = ("What does YOLO stands?");
const correctAnswer4= ("You Only Live Once") ;

if(answer4.toUpperCase() === correctAnswer4){
    console.log("Hurray!, Your answer is correct!");
    correctAnswers++;
}

else{
    console.log("Your guessed it Wrong!");
}

console.log("You got " , correctAnswers , " questions correct!");
console.log("You score " , correctAnswers / totalQuestions * 100 , " percent!");