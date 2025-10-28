// The player is on a treasure hunt and must choose a direction: North, South, East, or West.


// If they choose North, they will reach a river. Ask whether they want to swim or build a raft.


// If they choose South, they will find a cave. Ask whether they want to explore or leave.


// If they choose East, they fall into a trap (game over).


// If they choose West, they fall into quicksand (game over).


// Different choices should result in winning treasure or losing the game.

let prompt=require('prompt-sync')()
let direction=prompt("choose a direction: North, South, East, or West.")
if (direction==="North") {
    console.log("river")
    let river=prompt("swim or build a raft?")
 if (river==="swim") {
        console.log("you lose!")
         } else if (river==="build a raft") {
            console.log("you win!")
    } else {
        console.log("invalid answer")
    } if (direction==="South") {
        console.log("cave")
        let cave=prompt("explore or leave?")
    }if (cave==="explore") {
        console.log("you win!")
    }else if (cave==="leave") {
            console.log("you lose!")
    } else {
        console.log("invalid answer")
    }if (direction==="East") {
        console.log("game over!")
    } else {
        console.log("invalid answer")
    }if (direction==="West") {
        console.log("game over!")
    } else {
        console.log("invalid answer")
    }
} else {
    console.log(" invalid answer!")
}