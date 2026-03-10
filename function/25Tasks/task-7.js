// Write a function modifyString(str, callback) that trims whitespace from the string and passes it to the callback.

function modifyString(str, callback) {
 let newStr=str.trim()
    callback(newStr);
}
function printString(string) {
    console.log(string);
}
modifyString("   Hello, World!   ", printString);