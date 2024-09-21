const prompt = required("prompt-sync")();

const answer = prompt("Would you like to play (y/n)");

if(answer.toLowerCase() === "y"){
    const answer2 = prompt("Would you like to go left or right (left/right)?")
    
    if (answer2 === "left"){
        console.log("Oops, you go wrong way! You lost!")
    }

    else{
        console.log("Nice! you go right way! You pass!")
        const answer3 = prompt("Would you like to pass the level or stop (go/stop)");
        if (answer3 === "go"){
            console.log("You pass the level and won the game!")
        }
        else{
            console.log("You stop paying! so you lost the game!")
        }
        
    }
}

else{
console.log("That's too bad");
}