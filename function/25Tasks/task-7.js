// Write a function modifyString(str, callback) that trims whitespace from the string and passes it to the callback.

function modifyString(str, callback) {
   console.log(str.trim())
    callback();
}
function printString() {
}
modifyString("   Hello, World!   ", printString);