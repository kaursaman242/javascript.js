// Write a function callAfterMessage(message, callback) that prints the message and then calls the callback.
function callAfterMessage(message, callback) {
    console.log(message);
    callback();
}   
function afterMessage() {
    console.log("This is called after the message.");
}
callAfterMessage("Hello to all!", afterMessage);