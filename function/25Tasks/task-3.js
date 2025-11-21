// Write a function askUser(callback) that takes a callback and executes it after printing "What's your name?".
function askUser(callback) {
    callback() 
}
function executesQuestion() {
    console.log("What's your name?")
}
askUser(executesQuestion)