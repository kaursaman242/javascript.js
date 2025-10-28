// 🕹️ Question 1: The Two Doors Game
// You are standing in front of two mysterious doors — one on the left and one on the right.


// If the player chooses the left door, inside they will face a dangerous animal. Ask them whether they want to fight or run.


// If the player chooses the right door, inside they will find a locked chest. Ask them whether they want to open it or ignore it.


// Display different outcomes based on their decisions (win/lose).

let prompt=require('prompt-sync')()
let p=prompt("choose one of the door:leftDoor or rightDoor?")

if (p=="left") {
    
    let left=prompt("dangerous animals choose the way: fight or run?")
    if (left==="fight") {
        console.log("win")
    }else if (left==="run") {
        console.log("lose")
    }else{
        console.log("invalid choice")
    }
}else if (p==="right") {
    console.log("locked chest")
    let right=prompt("choose the way: open it! or ignore it!?")
    if (right=="open") {
        console.log("win")
    }else if (right==="ignore") {
        
    }else{
        console.log("invslid choice")
    }
}else{
    console.log("invalid choice")
}
