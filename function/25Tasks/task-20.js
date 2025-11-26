// Write a function stepByStep(str, callback) that prints one letter at a time with setTimeout, and then calls the callback after finishing.
function stepByStep(str,callback) {
    for (let i = 0; i < str.length; i++) {
            console.log(str[i]);
            }
     callback()
        
}
function finished() {
    console.log("Finish...")
}   
stepByStep("Hello to all!", finished)