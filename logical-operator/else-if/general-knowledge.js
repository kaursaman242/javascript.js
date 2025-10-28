// Make a quiz game using nested if–else:


// First ask a general knowledge question (like capital of a country).


// If the answer is correct, move to a second question (like a math problem).


// If any answer is wrong, end the game with “Game Over”.


// If both answers are correct, declare the player as the winner.
let prompt=require("prompt-sync")()
let question1=prompt("What is the capital of India?")
if (question1==="New Delhi") {
    console.log("Right answer!")
    let question2=prompt("simplify: 5*4+20?")
    if (question2==="40") {
        console.log("Right answer!")
    }
} else {
    console.log("Wrong answer!,You lose the game!")
}
