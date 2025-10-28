// You are lost in the wild. You must choose your path:


// If the player chooses the forest, they will find food. Ask if they want to eat it or ignore it.


// If the player chooses the mountains, they will face a bear. Ask if they want to fight or hide.


// Each choice should lead to survival (win) or danger (lose).

let prompt=require('prompt-sync')()
let p=prompt("choose your path:forest or mountains?")
if (p==="forest") {
    let forest=prompt("you find food,choose that: eat it or ignore it?")
if(forest==="eat"){
    console.log("win")
}else if (forest==="ignore") {
    console.log("lose")
}else{
    console.log("invalid choice")
}
}else if (p==="mountains") {
    let mountains=prompt("face a bear, choose that:fight or run?")
    if (mountains==="fight") {
        console.log("lose")
    }else if(mountains==="run"){
        console.log("run")
    }else{
        console.log("invalid choice")
    }
}else{
    console.log("invalid choice")
}