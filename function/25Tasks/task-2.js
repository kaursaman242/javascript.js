// Create a function displayMessage(message, callback) that prints the message and then calls the callback function.
function displayMessage(message, callback) {
    console.log(message);
    callback();
}
function afterDisplay() {
    console.log("Message displayed successfully.");
}
displayMessage("Javascript is very interesting language to learn.", afterDisplay);